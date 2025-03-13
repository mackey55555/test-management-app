"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PageProps = {
  params: { id: string };
};

export default function EditProjectPage({ params }: PageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState<{
    id: string;
    name: string;
    description: string;
    status: string;
  } | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        if (!response.ok) {
          throw new Error("プロジェクトの取得に失敗しました");
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        alert("プロジェクトの取得に失敗しました");
      }
    };

    fetchProject();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        throw new Error("プロジェクトの更新に失敗しました");
      }

      router.push(`/projects/${params.id}`);
      router.refresh();
    } catch (error) {
      console.error("Error updating project:", error);
      alert("プロジェクトの更新に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleStatusChange = (value: string) => {
    setProject((prev) => (prev ? { ...prev, status: value } : null));
  };

  if (!project) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <p>読み込み中...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/projects/${params.id}`}>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-1"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  戻る
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">プロジェクト編集</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              プロジェクト情報を編集します
            </p>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>プロジェクト情報</CardTitle>
              <CardDescription>
                プロジェクトの基本情報を編集できます
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">プロジェクト名</Label>
                <Input
                  id="name"
                  name="name"
                  value={project.name}
                  onChange={handleChange}
                  placeholder="プロジェクト名を入力"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">説明</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={project.description || ""}
                  onChange={handleChange}
                  placeholder="プロジェクトの説明を入力"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">ステータス</Label>
                <Select
                  value={project.status}
                  onValueChange={handleStatusChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="ステータスを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">進行中</SelectItem>
                    <SelectItem value="COMPLETED">完了</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/projects/${params.id}`}>
                <Button variant="outline" type="button">
                  キャンセル
                </Button>
              </Link>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "保存中..." : "保存"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
}
