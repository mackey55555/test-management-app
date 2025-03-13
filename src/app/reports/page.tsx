import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">レポート</h1>
            <p className="text-muted-foreground">
              テスト結果の分析・レポート作成
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              新規レポート作成
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                テスト実行数
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
                テスト成功率
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
                テスト項目数
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
              <div className="text-2xl font-bold">120</div>
              <p className="text-xs text-muted-foreground">
                全プロジェクト合計
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                平均テスト時間
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
              <div className="text-2xl font-bold">15分</div>
              <p className="text-xs text-muted-foreground">
                テスト項目あたり
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>テスト成功率の推移</CardTitle>
              <CardDescription>
                過去6ヶ月間のテスト成功率の推移
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end space-x-2">
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '65%' }}></div>
                  </div>
                  <span className="text-xs mt-2">10月</span>
                  <span className="text-xs text-muted-foreground">65%</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '70%' }}></div>
                  </div>
                  <span className="text-xs mt-2">11月</span>
                  <span className="text-xs text-muted-foreground">70%</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '68%' }}></div>
                  </div>
                  <span className="text-xs mt-2">12月</span>
                  <span className="text-xs text-muted-foreground">68%</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '72%' }}></div>
                  </div>
                  <span className="text-xs mt-2">1月</span>
                  <span className="text-xs text-muted-foreground">72%</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '75%' }}></div>
                  </div>
                  <span className="text-xs mt-2">2月</span>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="flex-1 w-14 bg-primary/10 rounded-t-md relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md" style={{ height: '78.5%' }}></div>
                  </div>
                  <span className="text-xs mt-2">3月</span>
                  <span className="text-xs text-muted-foreground">78.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>テスト結果の内訳</CardTitle>
              <CardDescription>
                今月のテスト結果の内訳
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="20" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#22c55e"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset="54"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#ef4444"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset="197.2"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#eab308"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset="226.1"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">85</div>
                      <div className="text-xs text-muted-foreground">テスト実行</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>成功: 67 (78.5%)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span>失敗: 12 (14.5%)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span>保留: 6 (7%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>プロジェクト別テスト状況</CardTitle>
            <CardDescription>
              各プロジェクトのテスト状況
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>プロジェクト</TableHead>
                  <TableHead>テスト項目数</TableHead>
                  <TableHead>実行数</TableHead>
                  <TableHead>成功</TableHead>
                  <TableHead>失敗</TableHead>
                  <TableHead>保留</TableHead>
                  <TableHead>成功率</TableHead>
                  <TableHead>進捗</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">プロジェクトA</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>40</TableCell>
                  <TableCell className="text-green-500">32</TableCell>
                  <TableCell className="text-red-500">5</TableCell>
                  <TableCell className="text-yellow-500">3</TableCell>
                  <TableCell>80%</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '89%' }}></div>
                      </div>
                      <span className="text-xs">89%</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">プロジェクトB</TableCell>
                  <TableCell>32</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell className="text-green-500">18</TableCell>
                  <TableCell className="text-red-500">5</TableCell>
                  <TableCell className="text-yellow-500">2</TableCell>
                  <TableCell>72%</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-xs">78%</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">プロジェクトC</TableCell>
                  <TableCell>28</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell className="text-green-500">17</TableCell>
                  <TableCell className="text-red-500">2</TableCell>
                  <TableCell className="text-yellow-500">1</TableCell>
                  <TableCell>85%</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: '71%' }}></div>
                      </div>
                      <span className="text-xs">71%</span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>よく失敗するテスト項目</CardTitle>
              <CardDescription>
                失敗率の高いテスト項目
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">検索機能のテスト - 特殊文字入力</h3>
                    <span className="text-xs text-red-500 font-medium">失敗率: 80%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">プロジェクトB</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">最終実行: 2025/03/12</span>
                    <Button variant="ghost" size="sm">
                      詳細
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">決済処理のテスト - タイムアウト</h3>
                    <span className="text-xs text-red-500 font-medium">失敗率: 65%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">プロジェクトC</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">最終実行: 2025/03/11</span>
                    <Button variant="ghost" size="sm">
                      詳細
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">ユーザー登録機能のテスト - 最大文字数</h3>
                    <span className="text-xs text-red-500 font-medium">失敗率: 50%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">プロジェクトA</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">最終実行: 2025/03/10</span>
                    <Button variant="ghost" size="sm">
                      詳細
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>保存済みレポート</CardTitle>
              <CardDescription>
                以前に作成したレポート
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">プロジェクトA - 月次テスト報告</h3>
                    <span className="text-xs text-muted-foreground">2025/03/01</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">2月のテスト実行結果と分析</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">作成者: 山田太郎</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        表示
                      </Button>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">プロジェクトB - 検索機能テスト報告</h3>
                    <span className="text-xs text-muted-foreground">2025/02/15</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">検索機能の改善後のテスト結果</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">作成者: 佐藤次郎</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        表示
                      </Button>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">プロジェクトC - 決済機能テスト報告</h3>
                    <span className="text-xs text-muted-foreground">2025/02/10</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">決済機能の実装後のテスト結果</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">作成者: 田中一郎</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        表示
                      </Button>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
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
