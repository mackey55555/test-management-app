import { notFound } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fetchProjectById, fetchTestCases } from "@/lib/db";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // paramsを使用する前にawaitする
  const id = params.id;
  
  const project = await fetchProjectById(id);

  if (!project) {
    notFound();
  }

  const testCases = await fetchTestCases(id);

  // テスト項目の進捗状況を計算
  const totalTestCases = testCases.length;
  const passedTestCases = testCases.filter(tc => tc.status === 'ACTIVE').length;
  const progressPercentage = totalTestCases > 0 
    ? Math.round((passedTestCases / totalTestCases) * 100) 
    : 0;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/projects">
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
              <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              {project.description || "説明なし"}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={`/projects/${id}/edit`}>
              <Button variant="outline">編集</Button>
            </Link>
            <form action={`/api/projects/${id}/delete`} method="POST">
              <Button variant="destructive" type="submit">削除</Button>
            </form>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">ステータス</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  project.status === 'ACTIVE' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {project.status === 'ACTIVE' ? '進行中' : '完了'}
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">テスト項目数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTestCases}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">進捗率</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressPercentage}%</div>
              <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                <div 
                  className="h-2 rounded-full bg-primary" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">最終更新日</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {project.updatedAt.toISOString().split('T')[0].replace(/-/g, '/')}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>テスト項目一覧</CardTitle>
                <CardDescription>
                  このプロジェクトに登録されているテスト項目一覧です
                </CardDescription>
              </div>
              <Link href={`/test-cases/new?projectId=${id}`}>
                <Button>新規テスト項目作成</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {testCases.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>説明</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead>優先度</TableHead>
                    <TableHead className="text-right">アクション</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testCases.map((testCase) => (
                    <TableRow key={testCase.id}>
                      <TableCell className="font-medium">{testCase.title}</TableCell>
                      <TableCell>{testCase.description || "説明なし"}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          testCase.status === 'ACTIVE' 
                            ? 'bg-green-100 text-green-800' 
                            : testCase.status === 'DRAFT'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {testCase.status === 'ACTIVE' 
                            ? '有効' 
                            : testCase.status === 'DRAFT'
                              ? '下書き'
                              : 'アーカイブ'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          testCase.priority === 'CRITICAL' 
                            ? 'bg-red-100 text-red-800' 
                            : testCase.priority === 'HIGH'
                              ? 'bg-orange-100 text-orange-800'
                              : testCase.priority === 'MEDIUM'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                        }`}>
                          {testCase.priority === 'CRITICAL' 
                            ? '最重要' 
                            : testCase.priority === 'HIGH'
                              ? '高'
                              : testCase.priority === 'MEDIUM'
                                ? '中'
                                : '低'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/test-cases/${testCase.id}`}>
                          <Button variant="outline" size="sm">
                            詳細
                          </Button>
                        </Link>
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
                  このプロジェクトにはまだテスト項目が登録されていません。新規テスト項目を作成してください。
                </p>
                <Link href={`/test-cases/new?projectId=${id}`}>
                  <Button className="mt-4">新規テスト項目作成</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
