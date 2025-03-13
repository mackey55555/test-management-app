import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-background p-4">
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="text-lg font-semibold">メニュー</h2>
        </div>
        <div className="space-y-1">
          <Link href="/dashboard" className="block">
            <Button variant="ghost" className="w-full justify-start">
              ダッシュボード
            </Button>
          </Link>
          <Link href="/projects" className="block">
            <Button variant="ghost" className="w-full justify-start">
              プロジェクト
            </Button>
          </Link>
          <Link href="/test-cases" className="block">
            <Button variant="ghost" className="w-full justify-start">
              テスト項目
            </Button>
          </Link>
          <Link href="/test-execution" className="block">
            <Button variant="ghost" className="w-full justify-start">
              テスト実行
            </Button>
          </Link>
          <Link href="/evidence" className="block">
            <Button variant="ghost" className="w-full justify-start">
              エビデンス
            </Button>
          </Link>
          <Link href="/reports" className="block">
            <Button variant="ghost" className="w-full justify-start">
              レポート
            </Button>
          </Link>
        </div>
        <div className="py-2">
          <h2 className="text-lg font-semibold">ツール</h2>
        </div>
        <div className="space-y-1">
          <Link href="/test-generator" className="block">
            <Button variant="ghost" className="w-full justify-start">
              テスト項目生成
            </Button>
          </Link>
          <Link href="/test-matrix" className="block">
            <Button variant="ghost" className="w-full justify-start">
              テスト網羅表
            </Button>
          </Link>
          <Link href="/templates" className="block">
            <Button variant="ghost" className="w-full justify-start">
              テンプレート
            </Button>
          </Link>
        </div>
        <div className="py-2">
          <h2 className="text-lg font-semibold">設定</h2>
        </div>
        <div className="space-y-1">
          <Link href="/settings" className="block">
            <Button variant="ghost" className="w-full justify-start">
              アプリ設定
            </Button>
          </Link>
          <Link href="/profile" className="block">
            <Button variant="ghost" className="w-full justify-start">
              プロフィール
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
