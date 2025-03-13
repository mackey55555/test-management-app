import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { fetchProjects } from '@/lib/db';
import { CreateProjectDialog } from '@/components/projects/create-project-dialog';
import Link from 'next/link';

export default async function ProjectsPage() {
  // データベースからプロジェクト一覧を取得
  const dbProjects = await fetchProjects();
  
  // テスト項目数を取得するための関数（仮実装）
  const getTestCaseCount = (projectId: string) => {
    // シードデータに基づいて、プロジェクトIDごとにテスト項目数を返す
    const testCaseCounts: Record<string, number> = {
      '1': 8, // ECサイトリニューアル
      '2': 0, // モバイルアプリ開発
      '3': 0, // 社内システム更新
    };
    return testCaseCounts[projectId] || 0;
  };
  
  // 進捗率を計算するための関数（仮実装）
  const calculateProgress = (projectId: string) => {
    // シードデータに基づいて、プロジェクトIDごとに進捗率を返す
    const progressRates: Record<string, number> = {
      '1': 75, // ECサイトリニューアル
      '2': 30, // モバイルアプリ開発
      '3': 100, // 社内システム更新
    };
    return progressRates[projectId] || 0;
  };
  
  // プロジェクトデータを整形
  const projects = dbProjects.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description || '',
    status: project.status.toLowerCase(),
    testCases: getTestCaseCount(project.id),
    progress: calculateProgress(project.id),
    updatedAt: project.updatedAt.toISOString().split('T')[0].replace(/-/g, '/'),
  }));
  
  // プロジェクト概要の計算
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const totalTestCases = projects.reduce((sum, p) => sum + p.testCases, 0);
  const avgProgress = projects.length > 0 
    ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length) 
    : 0;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">プロジェクト</h1>
            <p className="text-muted-foreground">
              テストプロジェクト一覧
            </p>
          </div>
          <CreateProjectDialog />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>プロジェクト一覧</CardTitle>
            <CardDescription>
              テスト管理システムに登録されているプロジェクト一覧です
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>プロジェクト名</TableHead>
                  <TableHead>説明</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>テスト項目数</TableHead>
                  <TableHead>進捗</TableHead>
                  <TableHead>最終更新日</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status === 'active' ? '進行中' : '完了'}
                      </span>
                    </TableCell>
                    <TableCell>{project.testCases}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 rounded-full bg-secondary">
                          <div 
                            className="h-2 rounded-full bg-primary" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{project.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{project.updatedAt}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/projects/${project.id}`}>
                        <Button variant="outline" size="sm">
                          詳細
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>プロジェクト概要</CardTitle>
              <CardDescription>
                プロジェクト状況の概要
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>進行中プロジェクト</span>
                <span className="font-medium">{activeProjects}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>完了プロジェクト</span>
                <span className="font-medium">{completedProjects}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>総テスト項目数</span>
                <span className="font-medium">{totalTestCases}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>平均進捗率</span>
                <span className="font-medium">{avgProgress}%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>最近の活動</CardTitle>
              <CardDescription>
                プロジェクトに関する最近の活動
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-blue-600"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">プロジェクトCが更新されました</p>
                    <p className="text-xs text-muted-foreground">2025/03/12</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-green-600"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">プロジェクトAのテスト実行が完了しました</p>
                    <p className="text-xs text-muted-foreground">2025/03/10</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-orange-100 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-orange-600"
                    >
                      <path d="M12 9v4M12 17h.01" />
                      <path d="M3.6 3.6A9 9 0 1 0 20.4 20.4 9 9 0 0 0 3.6 3.6Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">プロジェクトBでテスト失敗が報告されました</p>
                    <p className="text-xs text-muted-foreground">2025/03/08</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>クイックアクション</CardTitle>
              <CardDescription>
                よく使う機能へのショートカット
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="w-full">
                <CreateProjectDialog className="w-full" />
              </div>
              <Link href="/templates" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  </svg>
                  プロジェクトテンプレート
                </Button>
              </Link>
              <Link href="/settings" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  プロジェクト設定
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
