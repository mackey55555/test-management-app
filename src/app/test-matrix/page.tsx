import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

export default function TestMatrixPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">テスト網羅表</h1>
            <p className="text-muted-foreground">
              テスト項目の網羅性を確認するためのマトリクス
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              新規マトリクス作成
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>マトリクス設定</CardTitle>
                <CardDescription>
                  テスト網羅表の設定
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="matrix-name" className="text-sm font-medium">
                      マトリクス名
                    </label>
                    <Input
                      id="matrix-name"
                      placeholder="マトリクス名を入力"
                      defaultValue="ログイン機能テスト網羅表"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="matrix-project" className="text-sm font-medium">
                      プロジェクト
                    </label>
                    <select
                      id="matrix-project"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">プロジェクトを選択</option>
                      <option value="1" selected>プロジェクトA</option>
                      <option value="2">プロジェクトB</option>
                      <option value="3">プロジェクトC</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="matrix-feature" className="text-sm font-medium">
                      機能
                    </label>
                    <select
                      id="matrix-feature"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">機能を選択</option>
                      <option value="1" selected>ログイン機能</option>
                      <option value="2">検索機能</option>
                      <option value="3">決済機能</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-2">行項目（テスト条件）</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input defaultValue="ユーザーID" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="パスワード" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="認証方式" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="セッション" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full">
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
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        行を追加
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-2">列項目（テストパターン）</h3>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input defaultValue="正常入力" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="空入力" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="最大文字数" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="特殊文字" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="タイムアウト" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input defaultValue="権限なし" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full">
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
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        列を追加
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">マトリクスを更新</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>テスト網羅表</CardTitle>
                <CardDescription>
                  機能と条件の組み合わせによるテスト項目の網羅性を確認
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">条件/機能</TableHead>
                          <TableHead>正常入力</TableHead>
                          <TableHead>空入力</TableHead>
                          <TableHead>最大文字数</TableHead>
                          <TableHead>特殊文字</TableHead>
                          <TableHead>タイムアウト</TableHead>
                          <TableHead>権限なし</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">ユーザーID</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">パスワード</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">認証方式</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">セッション</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <input type="checkbox" checked className="h-4 w-4" />
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      網羅率: 16/24 (66.7%)
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
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
                          <path d="M12 3v12" />
                          <path d="m8 11 4 4 4-4" />
                          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                        </svg>
                        エクスポート
                      </Button>
                      <Button>テスト項目に変換</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>保存済みマトリクス</CardTitle>
                  <CardDescription>
                    以前に作成したテスト網羅表
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">ログイン機能テスト網羅表</h3>
                        <span className="text-xs text-muted-foreground">プロジェクトA</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">ログイン機能のテスト網羅性を確認するマトリクス</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">作成日: 2025/03/12</span>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            編集
                          </Button>
                          <Button variant="ghost" size="sm">
                            複製
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">検索機能テスト網羅表</h3>
                        <span className="text-xs text-muted-foreground">プロジェクトB</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">検索機能のテスト網羅性を確認するマトリクス</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">作成日: 2025/03/10</span>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            編集
                          </Button>
                          <Button variant="ghost" size="sm">
                            複製
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">決済機能テスト網羅表</h3>
                        <span className="text-xs text-muted-foreground">プロジェクトC</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">決済機能のテスト網羅性を確認するマトリクス</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">作成日: 2025/03/08</span>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            編集
                          </Button>
                          <Button variant="ghost" size="sm">
                            複製
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
