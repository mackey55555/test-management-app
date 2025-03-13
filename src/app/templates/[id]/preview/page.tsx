import { notFound } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// テンプレートのダミーデータ
const templates = [
  {
    id: '1',
    name: 'Webアプリケーション基本テスト',
    description: 'Webアプリケーションの基本的なテスト項目テンプレート',
    category: 'Web',
    items: [
      { id: '1', title: 'ログイン機能', description: 'ユーザーがログインできることを確認', priority: 'HIGH' },
      { id: '2', title: 'ログアウト機能', description: 'ユーザーがログアウトできることを確認', priority: 'MEDIUM' },
      { id: '3', title: 'パスワードリセット', description: 'パスワードリセット機能が正常に動作することを確認', priority: 'HIGH' },
      { id: '4', title: 'ユーザー登録', description: '新規ユーザーが登録できることを確認', priority: 'HIGH' },
      { id: '5', title: 'フォーム入力バリデーション', description: 'フォーム入力のバリデーションが正しく機能することを確認', priority: 'MEDIUM' },
    ],
  },
  {
    id: '2',
    name: 'モバイルアプリ基本テスト',
    description: 'iOSとAndroidアプリの基本的なテスト項目テンプレート',
    category: 'モバイル',
    items: [
      { id: '1', title: 'インストール', description: 'アプリが正常にインストールできることを確認', priority: 'CRITICAL' },
      { id: '2', title: '起動時間', description: 'アプリの起動時間が許容範囲内であることを確認', priority: 'MEDIUM' },
      { id: '3', title: 'プッシュ通知', description: 'プッシュ通知が正常に受信できることを確認', priority: 'HIGH' },
      { id: '4', title: 'オフライン動作', description: 'オフライン状態での動作を確認', priority: 'MEDIUM' },
      { id: '5', title: 'バッテリー消費', description: 'バッテリー消費が許容範囲内であることを確認', priority: 'LOW' },
    ],
  },
  {
    id: '3',
    name: 'APIテスト',
    description: 'RESTful APIのテスト項目テンプレート',
    category: 'API',
    items: [
      { id: '1', title: 'エンドポイント到達性', description: '各エンドポイントにアクセスできることを確認', priority: 'CRITICAL' },
      { id: '2', title: 'レスポンスコード', description: '適切なレスポンスコードが返されることを確認', priority: 'HIGH' },
      { id: '3', title: 'レスポンス時間', description: 'レスポンス時間が許容範囲内であることを確認', priority: 'MEDIUM' },
      { id: '4', title: 'エラーハンドリング', description: 'エラー時の挙動が適切であることを確認', priority: 'HIGH' },
      { id: '5', title: 'データ整合性', description: 'レスポンスデータの整合性を確認', priority: 'HIGH' },
    ],
  },
  {
    id: '4',
    name: 'セキュリティテスト',
    description: 'アプリケーションのセキュリティテスト項目テンプレート',
    category: 'セキュリティ',
    items: [
      { id: '1', title: 'SQLインジェクション', description: 'SQLインジェクション攻撃に対する脆弱性を確認', priority: 'CRITICAL' },
      { id: '2', title: 'XSS攻撃', description: 'クロスサイトスクリプティング攻撃に対する脆弱性を確認', priority: 'CRITICAL' },
      { id: '3', title: 'CSRF攻撃', description: 'クロスサイトリクエストフォージェリ攻撃に対する脆弱性を確認', priority: 'HIGH' },
      { id: '4', title: 'セッション管理', description: 'セッション管理の安全性を確認', priority: 'HIGH' },
      { id: '5', title: 'データ暗号化', description: '機密データが適切に暗号化されていることを確認', priority: 'CRITICAL' },
    ],
  },
  {
    id: '5',
    name: 'パフォーマンステスト',
    description: 'アプリケーションのパフォーマンステスト項目テンプレート',
    category: 'パフォーマンス',
    items: [
      { id: '1', title: '負荷テスト', description: '高負荷時のシステムの挙動を確認', priority: 'HIGH' },
      { id: '2', title: 'ストレステスト', description: '極限状態でのシステムの挙動を確認', priority: 'MEDIUM' },
      { id: '3', title: 'スケーラビリティテスト', description: 'システムのスケーラビリティを確認', priority: 'MEDIUM' },
      { id: '4', title: 'エンドユーザー体感速度', description: 'エンドユーザーの体感速度を確認', priority: 'HIGH' },
      { id: '5', title: 'リソース使用率', description: 'CPUやメモリなどのリソース使用率を確認', priority: 'MEDIUM' },
    ],
  },
  {
    id: '6',
    name: 'ユーザビリティテスト',
    description: 'ユーザビリティに関するテスト項目テンプレート',
    category: 'UX',
    items: [
      { id: '1', title: 'ナビゲーション', description: 'ナビゲーションの使いやすさを確認', priority: 'HIGH' },
      { id: '2', title: 'フォーム入力', description: 'フォーム入力の使いやすさを確認', priority: 'MEDIUM' },
      { id: '3', title: 'エラーメッセージ', description: 'エラーメッセージの分かりやすさを確認', priority: 'MEDIUM' },
      { id: '4', title: 'レスポンシブデザイン', description: '様々な画面サイズでの表示を確認', priority: 'HIGH' },
      { id: '5', title: 'アクセシビリティ', description: 'アクセシビリティ基準への準拠を確認', priority: 'MEDIUM' },
    ],
  },
];

export default function TemplatePreviewPage({ params }: any) {
  const template = templates.find(t => t.id === params.id);

  if (!template) {
    notFound();
  }

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
              <h1 className="text-3xl font-bold tracking-tight">{template.name}</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              {template.description}
            </p>
          </div>
          <Link href={`/test-cases/new?templateId=${template.id}`}>
            <Button>
              このテンプレートを使用
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>テスト項目一覧</CardTitle>
            <CardDescription>
              このテンプレートに含まれるテスト項目一覧です
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>タイトル</TableHead>
                  <TableHead>説明</TableHead>
                  <TableHead>優先度</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {template.items.map((item) => (
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href={`/test-cases/new?templateId=${template.id}`}>
              <Button>
                このテンプレートを使用
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
}
