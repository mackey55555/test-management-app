"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TestCaseStatus, TestPriority } from "@prisma/client";

export default function NewTestCasePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const templateId = searchParams.get("templateId");

  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<{ id: string; name: string }[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: TestCaseStatus.DRAFT,
    priority: TestPriority.MEDIUM,
    projectId: projectId || "",
    categoryId: "",
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("プロジェクトの取得に失敗しました");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (formData.projectId) {
      const fetchCategories = async () => {
        try {
          const response = await fetch(`/api/projects/${formData.projectId}/categories`);
          if (!response.ok) {
            throw new Error("カテゴリの取得に失敗しました");
          }
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }
  }, [formData.projectId]);

  useEffect(() => {
    if (templateId) {
      const fetchTemplate = async () => {
        try {
          const response = await fetch(`/api/templates/${templateId}`);
          if (!response.ok) {
            throw new Error("テンプレートの取得に失敗しました");
          }
          const data = await response.json();
          setFormData(prev => ({
            ...prev,
            title: data.title || "",
            description: data.description || "",
          }));
        } catch (error) {
          console.error("Error fetching template:", error);
        }
      };

      fetchTemplate();
    }
  }, [templateId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/test-cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("テスト項目の作成に失敗しました");
      }

      const data = await response.json();
      router.push(`/test-cases/${data.id}`);
    } catch (error) {
      console.error("Error creating test case:", error);
      alert("テスト項目の作成に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Link href={projectId ? `/projects/${projectId}` : "/test-cases"}>
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
              <h1 className="text-3xl font-bold tracking-tight">新規テスト項目作成</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              新しいテスト項目を作成します
            </p>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>テスト項目情報</CardTitle>
              <CardDescription>
                テスト項目の基本情報を入力してください
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectId">プロジェクト</Label>
                <Select
                  value={formData.projectId}
                  onValueChange={(value) => handleSelectChange("projectId", value)}
                  disabled={!!projectId}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="プロジェクトを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="テスト項目のタイトルを入力"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">説明</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="テスト項目の説明を入力"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">ステータス</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="ステータスを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={TestCaseStatus.DRAFT}>下書き</SelectItem>
                      <SelectItem value={TestCaseStatus.ACTIVE}>有効</SelectItem>
                      <SelectItem value={TestCaseStatus.ARCHIVED}>アーカイブ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">優先度</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => handleSelectChange("priority", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="優先度を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={TestPriority.LOW}>低</SelectItem>
                      <SelectItem value={TestPriority.MEDIUM}>中</SelectItem>
                      <SelectItem value={TestPriority.HIGH}>高</SelectItem>
                      <SelectItem value={TestPriority.CRITICAL}>最重要</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {categories.length > 0 && (
                <div className="space-y-2">
                  <Label htmlFor="categoryId">カテゴリ</Label>
                  <Select
                    value={formData.categoryId}
                    onValueChange={(value) => handleSelectChange("categoryId", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">カテゴリなし</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={projectId ? `/projects/${projectId}` : "/test-cases"}>
                <Button variant="outline" type="button">
                  キャンセル
                </Button>
              </Link>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "作成中..." : "作成"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
}
