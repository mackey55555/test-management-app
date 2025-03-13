import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function TestExecutionPage() {
  // ダミーデータ
  const testExecutions = [
    {
      id: '1',
      testCase: 'ログイン機能のテスト',
      project: 'プロジェクトA',
      status: 'passed',
      executedBy: '山田太郎',
      executedAt: '2025/03/13 14:30',
      notes: '正常にログインできることを確認',
    },
    {
      id: '2',
      testCase: '商品検索機能のテスト',
      project: 'プロジェクトB',
      status: 'failed',
      executedBy: '佐藤次郎',
      executedAt: '2025/03/12 11:15',
      notes: '検索結果が表示されない不具合を確認',
    },
    {
      id: '3',
      testCase: 'ユーザー登録機能のテスト',
      project: 'プロジェクトA',
      status: 'passed',
      executedBy: '鈴木花子',
      executedAt: '2025/03/12 09:45',
      notes: 'ユーザー登録が正常に完了することを確認',
    },
    {
      id: '4',
      testCase: '決済処理のテスト',
      project: 'プロジェクトC',
      status: 'passed',
      executedBy: '田中一郎',
      executedAt: '2025/03/11 16:20',
      notes: 'クレジットカード決済が正常に処理されることを確認',
    },
    {
      id: '5',
      testCase: '商品一覧表示のテスト',
      project: 'プロジェクトB',
      status: 'passed',
      executedBy: '佐藤次郎',
      executedAt: '2025/03/11 10:30',
      notes: '商品一覧が正しく表示されることを確認',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">テスト実行</h1>
            <p className="text-muted-foreground">
              テスト実行の管理と記録
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              新規テスト実行
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                実行済みテスト
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85</div>
              <p className="text-xs text-muted-foreground">
                今月の実行数
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                成功率
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <p className="text-xs text-muted-foreground">
                今月の成功率
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                未実行テスト
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35</div>
              <p className="text-xs text-muted-foreground">
                残りのテスト項目数
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                テスト担当者
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                アクティブなテスト担当者
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>テスト実行履歴</CardTitle>
            <CardDescription>
              最近実行されたテストの履歴
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>テスト項目</TableHead>
                  <TableHead>プロジェクト</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>実行者</TableHead>
                  <TableHead>実行日時</TableHead>
                  <TableHead>備考</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testExecutions.map((execution) => (
                  <TableRow key={execution.id}>
                    <TableCell className="font-medium">{execution.testCase}</TableCell>
                    <TableCell>{execution.project}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        execution.status === 'passed' 
                          ? 'bg-green-100 text-green-800' 
                          : execution.status === 'failed'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {execution.status === 'passed' ? '成功' : 
                         execution.status === 'failed' ? '失敗' : '保留'}
                      </span>
                    </TableCell>
                    <TableCell>{execution.executedBy}</TableCell>
                    <TableCell>{execution.executedAt}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{execution.notes}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/test-execution/${execution.id}`}>
                          <Button variant="outline" size="sm">
                            詳細
                          </Button>
                        </Link>
                        <Link href={`/evidence/create?execution=${execution.id}`}>
                          <Button variant="outline" size="sm">
                            エビデンス追加
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>テスト実行計画</CardTitle>
              <CardDescription>
                今後実行予定のテスト
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトA - 認証機能テスト</div>
                    <div className="text-sm text-muted-foreground">予定日: 2025/03/15</div>
                  </div>
                  <div className="text-sm">担当者: 山田太郎</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトB - 検索機能改善テスト</div>
                    <div className="text-sm text-muted-foreground">予定日: 2025/03/16</div>
                  </div>
                  <div className="text-sm">担当者: 佐藤次郎</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトC - 決済機能追加テスト</div>
                    <div className="text-sm text-muted-foreground">予定日: 2025/03/18</div>
                  </div>
                  <div className="text-sm">担当者: 田中一郎</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>テスト実行状況</CardTitle>
              <CardDescription>
                プロジェクト別テスト実行状況
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトA</div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">32</span>
                      <span className="text-red-500 text-sm">5</span>
                      <span className="text-yellow-500 text-sm">8</span>
                    </div>
                  </div>
                  <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-green-500" style={{ width: '71%' }}></div>
                    <div className="h-full bg-red-500" style={{ width: '11%' }}></div>
                    <div className="h-full bg-yellow-500" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトB</div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">18</span>
                      <span className="text-red-500 text-sm">10</span>
                      <span className="text-yellow-500 text-sm">4</span>
                    </div>
                  </div>
                  <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-green-500" style={{ width: '56%' }}></div>
                    <div className="h-full bg-red-500" style={{ width: '31%' }}></div>
                    <div className="h-full bg-yellow-500" style={{ width: '13%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">プロジェクトC</div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">24</span>
                      <span className="text-red-500 text-sm">2</span>
                      <span className="text-yellow-500 text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-green-500" style={{ width: '86%' }}></div>
                    <div className="h-full bg-red-500" style={{ width: '7%' }}></div>
                    <div className="h-full bg-yellow-500" style={{ width: '7%' }}></div>
                  </div>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                    <span>成功</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500 ml-4"></span>
                    <span>失敗</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-yellow-500 ml-4"></span>
                    <span>保留</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
