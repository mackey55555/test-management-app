import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl">
            テスト管理システム
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost">ダッシュボード</Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost">プロジェクト</Button>
          </Link>
          <Link href="/test-cases">
            <Button variant="ghost">テスト項目</Button>
          </Link>
          <Link href="/test-execution">
            <Button variant="ghost">テスト実行</Button>
          </Link>
          <Link href="/evidence">
            <Button variant="ghost">エビデンス</Button>
          </Link>
          <Link href="/reports">
            <Button variant="ghost">レポート</Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost">設定</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
