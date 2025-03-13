import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">テスト管理システム</h1>
          <p className="text-muted-foreground">
            テスト結果、エビデンス、テスト項目を一元管理するWebシステムへようこそ
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>プロジェクト管理</CardTitle>
              <CardDescription>
                テストプロジェクトの作成・管理を行います
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>プロジェクト単位でテスト項目やテスト結果を管理できます。</p>
            </CardContent>
            <CardFooter>
              <Link href="/projects" className="w-full">
                <Button className="w-full">プロジェクト一覧へ</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>テスト項目管理</CardTitle>
              <CardDescription>
                テスト項目の作成・編集を行います
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>テスト項目を階層的に管理し、効率的にテスト計画を立てられます。</p>
            </CardContent>
            <CardFooter>
              <Link href="/test-cases" className="w-full">
                <Button className="w-full">テスト項目一覧へ</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>テスト実行管理</CardTitle>
              <CardDescription>
                テスト実行結果の記録・管理を行います
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>テスト実行結果を記録し、進捗状況を可視化します。</p>
            </CardContent>
            <CardFooter>
              <Link href="/test-execution" className="w-full">
                <Button className="w-full">テスト実行へ</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>エビデンス管理</CardTitle>
              <CardDescription>
                テスト実行時のエビデンスを管理します
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>スクリーンショットや動画などのエビデンスを一元管理できます。</p>
            </CardContent>
            <CardFooter>
              <Link href="/evidence" className="w-full">
                <Button className="w-full">エビデンス一覧へ</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>テスト項目生成</CardTitle>
              <CardDescription>
                テスト項目を網羅的に洗い出します
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>要件からテスト項目を自動生成したり、テンプレートを活用できます。</p>
            </CardContent>
            <CardFooter>
              <Link href="/test-generator" className="w-full">
                <Button className="w-full">テスト項目生成へ</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>レポート・分析</CardTitle>
              <CardDescription>
                テスト結果の分析・レポート作成を行います
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>テスト結果を分析し、品質状況を可視化するレポートを作成できます。</p>
            </CardContent>
            <CardFooter>
              <Link href="/reports" className="w-full">
                <Button className="w-full">レポート一覧へ</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
