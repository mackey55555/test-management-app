import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function TestCasesPage() {
  // ダミーデータ
  const testCases = [
    {
      id: '1',
      title: 'ログイン機能のテスト',
      description: '正常系・異常系のログイン機能テスト',
      status: 'active',
      priority: 'high',
      project: 'プロジェクトA',
      category: '認証',
      updatedAt: '2025/03/10',
    },
    {
      id: '2',
      title: '商品検索機能のテスト',
      description: '検索条件による商品検索機能のテスト',
      status: 'active',
      priority: 'medium',
      project: 'プロジェクトB',
      category: '検索',
      updatedAt: '2025/03/08',
    },
    {
      id: '3',
      title: 'ユーザー登録機能のテスト',
      description: 'ユーザー登録フローのテスト',
      status: 'active',
      priority: 'high',
      project: 'プロジェクトA',
      category: '認証',
      updatedAt: '2025/03/12',
    },
    {
      id: '4',
      title: '決済処理のテスト',
      description: 'クレジットカード決済処理のテスト',
      status: 'active',
      priority: 'critical',
      project: 'プロジェクトC',
      category: '決済',
      updatedAt: '2025/03/11',
    },
    {
      id: '5',
      title: '商品一覧表示のテスト',
      description: '商品一覧の表示と並び替え機能のテスト',
      status: 'archived',
      priority: 'low',
      project: 'プロジェクトB',
      category: '表示',
      updatedAt: '2025/03/05',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">テスト項目</h1>
            <p className="text-muted-foreground">
              テスト項目の管理
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              インポート
            </Button>
            <Button>
              新規テスト項目作成
            </Button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>フィルター</CardTitle>
                <CardDescription>
                  テスト項目の絞り込み
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">プロジェクト</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="project-a" className="mr-2" />
                      <label htmlFor="project-a">プロジェクトA</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="project-b" className="mr-2" />
                      <label htmlFor="project-b">プロジェクトB</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="project-c" className="mr-2" />
                      <label htmlFor="project-c">プロジェクトC</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">ステータス</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="status-active" className="mr-2" />
                      <label htmlFor="status-active">有効</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="status-archived" className="mr-2" />
                      <label htmlFor="status-archived">アーカイブ</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">優先度</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="priority-critical" className="mr-2" />
                      <label htmlFor="priority-critical">最重要</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="priority-high" className="mr-2" />
                      <label htmlFor="priority-high">高</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="priority-medium" className="mr-2" />
                      <label htmlFor="priority-medium">中</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="priority-low" className="mr-2" />
                      <label htmlFor="priority-low">低</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">カテゴリ</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="category-auth" className="mr-2" />
                      <label htmlFor="category-auth">認証</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="category-search" className="mr-2" />
                      <label htmlFor="category-search">検索</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="category-payment" className="mr-2" />
                      <label htmlFor="category-payment">決済</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="category-display" className="mr-2" />
                      <label htmlFor="category-display">表示</label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">フィルター適用</Button>
              </CardContent>
            </Card>
          </div>

          <div className="w-3/4">
            <Card>
              <CardHeader>
                <CardTitle>テスト項目一覧</CardTitle>
                <CardDescription>
                  テスト管理システムに登録されているテスト項目一覧です
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>タイトル</TableHead>
                      <TableHead>プロジェクト</TableHead>
                      <TableHead>カテゴリ</TableHead>
                      <TableHead>優先度</TableHead>
                      <TableHead>ステータス</TableHead>
                      <TableHead>最終更新日</TableHead>
                      <TableHead className="text-right">アクション</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testCases.map((testCase) => (
                      <TableRow key={testCase.id}>
                        <TableCell className="font-medium">{testCase.title}</TableCell>
                        <TableCell>{testCase.project}</TableCell>
                        <TableCell>{testCase.category}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            testCase.priority === 'critical' 
                              ? 'bg-red-100 text-red-800' 
                              : testCase.priority === 'high'
                              ? 'bg-orange-100 text-orange-800'
                              : testCase.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {testCase.priority === 'critical' ? '最重要' : 
                             testCase.priority === 'high' ? '高' : 
                             testCase.priority === 'medium' ? '中' : '低'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            testCase.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {testCase.status === 'active' ? '有効' : 'アーカイブ'}
                          </span>
                        </TableCell>
                        <TableCell>{testCase.updatedAt}</TableCell>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
