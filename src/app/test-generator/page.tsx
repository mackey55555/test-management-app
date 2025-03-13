import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function TestGeneratorPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">テスト項目生成</h1>
            <p className="text-muted-foreground">
              テスト項目を網羅的に洗い出すための機能
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>要件からテスト項目を生成</CardTitle>
                <CardDescription>
                  要件定義書やユーザーストーリーからテスト項目を自動生成します
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium">
                      プロジェクト
                    </label>
                    <select
                      id="project"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">プロジェクトを選択</option>
                      <option value="1">プロジェクトA</option>
                      <option value="2">プロジェクトB</option>
                      <option value="3">プロジェクトC</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="requirements" className="text-sm font-medium">
                      要件定義
                    </label>
                    <Textarea
                      id="requirements"
                      placeholder="要件定義書やユーザーストーリーをここに入力してください"
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      生成オプション
                    </label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" id="option-positive" className="mr-2" defaultChecked />
                        <label htmlFor="option-positive">正常系テスト</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="option-negative" className="mr-2" defaultChecked />
                        <label htmlFor="option-negative">異常系テスト</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="option-boundary" className="mr-2" defaultChecked />
                        <label htmlFor="option-boundary">境界値テスト</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="option-performance" className="mr-2" />
                        <label htmlFor="option-performance">性能テスト</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="option-security" className="mr-2" />
                        <label htmlFor="option-security">セキュリティテスト</label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">テスト項目を生成</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>テンプレートからテスト項目を生成</CardTitle>
                <CardDescription>
                  定義済みのテンプレートを使用してテスト項目を生成します
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="project-template" className="text-sm font-medium">
                      プロジェクト
                    </label>
                    <select
                      id="project-template"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">プロジェクトを選択</option>
                      <option value="1">プロジェクトA</option>
                      <option value="2">プロジェクトB</option>
                      <option value="3">プロジェクトC</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="template" className="text-sm font-medium">
                      テンプレート
                    </label>
                    <select
                      id="template"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">テンプレートを選択</option>
                      <option value="1">Webアプリケーション基本テスト</option>
                      <option value="2">ECサイトテスト</option>
                      <option value="3">ログイン・認証テスト</option>
                      <option value="4">決済機能テスト</option>
                      <option value="5">レスポンシブデザインテスト</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="module" className="text-sm font-medium">
                      対象モジュール/機能
                    </label>
                    <Input
                      id="module"
                      placeholder="テスト対象のモジュールや機能名を入力"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      カスタマイズオプション
                    </label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" id="custom-detailed" className="mr-2" defaultChecked />
                        <label htmlFor="custom-detailed">詳細なテスト項目を生成</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="custom-priority" className="mr-2" defaultChecked />
                        <label htmlFor="custom-priority">優先度を設定</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="custom-expected" className="mr-2" defaultChecked />
                        <label htmlFor="custom-expected">期待結果を含める</label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">テンプレートを適用</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>テスト網羅表</CardTitle>
            <CardDescription>
              機能と条件の組み合わせによるテスト項目の網羅性を確認
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/3">
                  <div className="space-y-2">
                    <label htmlFor="matrix-project" className="text-sm font-medium">
                      プロジェクト
                    </label>
                    <select
                      id="matrix-project"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">プロジェクトを選択</option>
                      <option value="1">プロジェクトA</option>
                      <option value="2">プロジェクトB</option>
                      <option value="3">プロジェクトC</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="space-y-2">
                    <label htmlFor="matrix-feature" className="text-sm font-medium">
                      機能
                    </label>
                    <select
                      id="matrix-feature"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">機能を選択</option>
                      <option value="1">ログイン機能</option>
                      <option value="2">検索機能</option>
                      <option value="3">決済機能</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      アクション
                    </label>
                    <div>
                      <Button>網羅表を生成</Button>
                    </div>
                  </div>
                </div>
              </div>

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
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">パスワード</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">認証方式</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">セッション</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                      <TableCell className="text-center">✓</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  網羅率: 16/24 (66.7%)
                </div>
                <div>
                  <Button variant="outline">テスト項目に変換</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>テスト項目テンプレート</CardTitle>
              <CardDescription>
                よく使われるテスト項目テンプレート
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">Webアプリケーション基本テスト</h3>
                  <p className="text-sm text-muted-foreground">Webアプリケーションの基本的なテスト項目セット</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">項目数: 45</span>
                    <Button variant="ghost" size="sm">
                      適用
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">ECサイトテスト</h3>
                  <p className="text-sm text-muted-foreground">ECサイト特有の機能に関するテスト項目セット</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">項目数: 78</span>
                    <Button variant="ghost" size="sm">
                      適用
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">ログイン・認証テスト</h3>
                  <p className="text-sm text-muted-foreground">ログインと認証に関する詳細なテスト項目セット</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">項目数: 32</span>
                    <Button variant="ghost" size="sm">
                      適用
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">決済機能テスト</h3>
                  <p className="text-sm text-muted-foreground">決済処理に関する詳細なテスト項目セット</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">項目数: 56</span>
                    <Button variant="ghost" size="sm">
                      適用
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>最近生成したテスト項目</CardTitle>
              <CardDescription>
                最近自動生成されたテスト項目セット
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">プロジェクトA - ログイン機能テスト</h3>
                  <p className="text-sm text-muted-foreground">要件から生成されたログイン機能のテスト項目</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">生成日: 2025/03/12</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        編集
                      </Button>
                      <Button variant="ghost" size="sm">
                        適用
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">プロジェクトB - 検索機能テスト</h3>
                  <p className="text-sm text-muted-foreground">テンプレートから生成された検索機能のテスト項目</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">生成日: 2025/03/10</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        編集
                      </Button>
                      <Button variant="ghost" size="sm">
                        適用
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">プロジェクトC - 決済機能テスト</h3>
                  <p className="text-sm text-muted-foreground">網羅表から生成された決済機能のテスト項目</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">生成日: 2025/03/08</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        編集
                      </Button>
                      <Button variant="ghost" size="sm">
                        適用
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">プロジェクトA - ユーザー登録テスト</h3>
                  <p className="text-sm text-muted-foreground">要件から生成されたユーザー登録機能のテスト項目</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">生成日: 2025/03/05</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        編集
                      </Button>
                      <Button variant="ghost" size="sm">
                        適用
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
