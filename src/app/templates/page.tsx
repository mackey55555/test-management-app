import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function TemplatesPage() {
  // テンプレートのダミーデータ
  const templates = [
    {
      id: '1',
      name: 'Webアプリケーション基本テスト',
      description: 'Webアプリケーションの基本的なテスト項目テンプレート',
      category: 'Web',
      itemCount: 25,
    },
    {
      id: '2',
      name: 'モバイルアプリ基本テスト',
      description: 'iOSとAndroidアプリの基本的なテスト項目テンプレート',
      category: 'モバイル',
      itemCount: 30,
    },
    {
      id: '3',
      name: 'APIテスト',
      description: 'RESTful APIのテスト項目テンプレート',
      category: 'API',
      itemCount: 15,
    },
    {
      id: '4',
      name: 'セキュリティテスト',
      description: 'アプリケーションのセキュリティテスト項目テンプレート',
      category: 'セキュリティ',
      itemCount: 20,
    },
    {
      id: '5',
      name: 'パフォーマンステスト',
      description: 'アプリケーションのパフォーマンステスト項目テンプレート',
      category: 'パフォーマンス',
      itemCount: 10,
    },
    {
      id: '6',
      name: 'ユーザビリティテスト',
      description: 'ユーザビリティに関するテスト項目テンプレート',
      category: 'UX',
      itemCount: 18,
    },
  ];

  // カテゴリ別にテンプレートをグループ化
  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">テンプレート</h1>
            <p className="text-muted-foreground">
              テスト項目作成に使用できるテンプレート一覧
            </p>
          </div>
          <Link href="/templates/new">
            <Button>
              新規テンプレート作成
            </Button>
          </Link>
        </div>

        {categories.map(category => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {templates
                .filter(t => t.category === category)
                .map(template => (
                  <Card key={template.id}>
                    <CardHeader>
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span>テスト項目数</span>
                        <span className="font-medium">{template.itemCount}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={`/templates/${template.id}/preview`}>
                        <Button variant="outline" size="sm">
                          プレビュー
                        </Button>
                      </Link>
                      <Link href={`/test-cases/new?templateId=${template.id}`}>
                        <Button size="sm">
                          使用する
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
