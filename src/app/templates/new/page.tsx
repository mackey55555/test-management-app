"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TestPriority } from "@prisma/client";

export default function NewTemplatePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Web",
  });

  const [items, setItems] = useState<{
    id: string;
    title: string;
    description: string;
    priority: string;
  }[]>([]);

  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    priority: TestPriority.MEDIUM,
  });

  const categories = [
    "Web",
    "モバイル",
    "API",
    "セキュリティ",
    "パフォーマンス",
    "UX",
    "その他",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewItemChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewItemSelectChange = (name: string, value: string) => {
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = () => {
    if (!newItem.title) return;

    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        ...newItem,
      },
    ]);

    setNewItem({
      title: "",
      description: "",
      priority: TestPriority.MEDIUM,
    });
  };

  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || items.length === 0) return;

    setIsLoading(true);

    try {
      // 実際のAPIエンドポイントが実装されるまでは、成功したと仮定
      // const response = await fetch("/api/templates", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     items,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error("テンプレートの作成に失敗しました");
      // }

      // const data = await response.json();
      router.push("/templates");
    } catch (error) {
      console.error("Error creating template:", error);
      alert("テンプレートの作成に失敗しました");
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
              <Link href="/templates">
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
              <h1 className="text-3xl font-bold tracking-tight">新規テンプレート作成</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              新しいテスト項目テンプレートを作成します
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>テンプレート情報</CardTitle>
                <CardDescription>
                  テンプレートの基本情報を入力してください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">テンプレート名</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="テンプレート名を入力"
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
                    placeholder="テンプレートの説明を入力"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">カテゴリ</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>テスト項目追加</CardTitle>
                <CardDescription>
                  テンプレートに含めるテスト項目を追加してください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">タイトル</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newItem.title}
                    onChange={handleNewItemChange}
                    placeholder="テスト項目のタイトルを入力"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="itemDescription">説明</Label>
                  <Textarea
                    id="itemDescription"
                    name="description"
                    value={newItem.description}
                    onChange={handleNewItemChange}
                    placeholder="テスト項目の説明を入力"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">優先度</Label>
                  <Select
                    value={newItem.priority}
                    onValueChange={(value) => handleNewItemSelectChange("priority", value)}
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

                <Button
                  type="button"
                  onClick={handleAddItem}
                  disabled={!newItem.title}
                  className="w-full"
                >
                  テスト項目を追加
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>テスト項目一覧</CardTitle>
              <CardDescription>
                このテンプレートに含まれるテスト項目一覧です
              </CardDescription>
            </CardHeader>
            <CardContent>
              {items.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>タイトル</TableHead>
                      <TableHead>説明</TableHead>
                      <TableHead>優先度</TableHead>
                      <TableHead className="text-right">アクション</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            item.priority === 'CRITICAL' 
                              ? 'bg-red-100 text-red-800' 
                              : item.priority === 'HIGH'
                                ? 'bg-orange-100 text-orange-800'
                                : item.priority === 'MEDIUM'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.priority === 'CRITICAL' 
                              ? '最重要' 
                              : item.priority === 'HIGH'
                                ? '高'
                                : item.priority === 'MEDIUM'
                                  ? '中'
                                  : '低'}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            削除
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
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
                    className="h-12 w-12 text-muted-foreground mb-4"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                    <path d="M9 15h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                  <h3 className="text-lg font-semibold">テスト項目がありません</h3>
                  <p className="text-muted-foreground mt-2 max-w-sm">
                    テンプレートにはまだテスト項目が追加されていません。上のフォームからテスト項目を追加してください。
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/templates">
                <Button variant="outline" type="button">
                  キャンセル
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={isLoading || !formData.name || items.length === 0}
              >
                {isLoading ? "作成中..." : "テンプレートを作成"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </MainLayout>
  );
}
