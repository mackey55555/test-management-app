import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function EvidencePage() {
  // ダミーデータ
  const evidences = [
    {
      id: '1',
      testCase: 'ログイン機能のテスト',
      project: 'プロジェクトA',
      fileType: 'image/png',
      fileName: 'login_success.png',
      uploadedBy: '山田太郎',
      uploadedAt: '2025/03/13 14:35',
      description: 'ログイン成功時の画面',
    },
    {
      id: '2',
      testCase: '商品検索機能のテスト',
      project: 'プロジェクトB',
      fileType: 'image/png',
      fileName: 'search_error.png',
      uploadedBy: '佐藤次郎',
      uploadedAt: '2025/03/12 11:20',
      description: '検索エラー時の画面',
    },
    {
      id: '3',
      testCase: 'ユーザー登録機能のテスト',
      project: 'プロジェクトA',
      fileType: 'video/mp4',
      fileName: 'user_registration.mp4',
      uploadedBy: '鈴木花子',
      uploadedAt: '2025/03/12 09:50',
      description: 'ユーザー登録フローの動画',
    },
    {
      id: '4',
      testCase: '決済処理のテスト',
      project: 'プロジェクトC',
      fileType: 'application/pdf',
      fileName: 'payment_log.pdf',
      uploadedBy: '田中一郎',
      uploadedAt: '2025/03/11 16:25',
      description: '決済処理のログ',
    },
    {
      id: '5',
      testCase: '商品一覧表示のテスト',
      project: 'プロジェクトB',
      fileType: 'image/png',
      fileName: 'product_list.png',
      uploadedBy: '佐藤次郎',
      uploadedAt: '2025/03/11 10:35',
      description: '商品一覧表示画面',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">エビデンス管理</h1>
            <p className="text-muted-foreground">
              テスト実行時のエビデンスを管理します
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              新規エビデンス登録
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                総エビデンス数
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
                <path d="M2 16V4a2 2 0 0 1 2-2h11" />
                <path d="M5 14H4a2 2 0 1 0 0 4h1" />
                <path d="M6 18h2a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2v-2" />
                <path d="M10 18h1a2 2 0 1 1 0 4h-1" />
                <path d="M18 18h1a2 2 0 1 1 0 4h-1" />
                <path d="M14 18h1a2 2 0 1 1 0 4h-1" />
                <path d="M17 12V9" />
                <path d="M14 7h6" />
                <path d="M17 2v3" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">
                登録済みエビデンス
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                画像ファイル
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
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95</div>
              <p className="text-xs text-muted-foreground">
                画像形式のエビデンス
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                動画ファイル
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
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m10 8 6 4-6 4Z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <p className="text-xs text-muted-foreground">
                動画形式のエビデンス
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                その他ファイル
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11</div>
              <p className="text-xs text-muted-foreground">
                その他形式のエビデンス
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <div className="w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>フィルター</CardTitle>
                <CardDescription>
                  エビデンスの絞り込み
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
                  <h3 className="text-sm font-medium">ファイル種別</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="type-image" className="mr-2" />
                      <label htmlFor="type-image">画像</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-video" className="mr-2" />
                      <label htmlFor="type-video">動画</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-pdf" className="mr-2" />
                      <label htmlFor="type-pdf">PDF</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-other" className="mr-2" />
                      <label htmlFor="type-other">その他</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">アップロード日</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="date-today" className="mr-2" />
                      <label htmlFor="date-today">今日</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="date-week" className="mr-2" />
                      <label htmlFor="date-week">過去7日</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="date-month" className="mr-2" />
                      <label htmlFor="date-month">過去30日</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="date-older" className="mr-2" />
                      <label htmlFor="date-older">それ以前</label>
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
                <CardTitle>エビデンス一覧</CardTitle>
                <CardDescription>
                  テスト実行時に記録されたエビデンス一覧
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ファイル名</TableHead>
                      <TableHead>テスト項目</TableHead>
                      <TableHead>プロジェクト</TableHead>
                      <TableHead>種類</TableHead>
                      <TableHead>アップロード者</TableHead>
                      <TableHead>アップロード日時</TableHead>
                      <TableHead className="text-right">アクション</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evidences.map((evidence) => (
                      <TableRow key={evidence.id}>
                        <TableCell className="font-medium">{evidence.fileName}</TableCell>
                        <TableCell>{evidence.testCase}</TableCell>
                        <TableCell>{evidence.project}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            evidence.fileType.startsWith('image/') 
                              ? 'bg-blue-100 text-blue-800' 
                              : evidence.fileType.startsWith('video/')
                              ? 'bg-purple-100 text-purple-800'
                              : evidence.fileType === 'application/pdf'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {evidence.fileType.startsWith('image/') ? '画像' : 
                             evidence.fileType.startsWith('video/') ? '動画' : 
                             evidence.fileType === 'application/pdf' ? 'PDF' : 'その他'}
                          </span>
                        </TableCell>
                        <TableCell>{evidence.uploadedBy}</TableCell>
                        <TableCell>{evidence.uploadedAt}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Link href={`/evidence/${evidence.id}`}>
                              <Button variant="outline" size="sm">
                                詳細
                              </Button>
                            </Link>
                            <Button variant="outline" size="sm">
                              ダウンロード
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>最近のエビデンス</CardTitle>
            <CardDescription>
              最近アップロードされたエビデンスのプレビュー
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {evidences.slice(0, 4).map((evidence) => (
                <div key={evidence.id} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    {evidence.fileType.startsWith('image/') ? (
                      <div className="text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-12 w-12"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                    ) : evidence.fileType.startsWith('video/') ? (
                      <div className="text-purple-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-12 w-12"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="m10 8 6 4-6 4Z" />
                        </svg>
                      </div>
                    ) : evidence.fileType === 'application/pdf' ? (
                      <div className="text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-12 w-12"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-12 w-12"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate">{evidence.fileName}</h3>
                    <p className="text-xs text-muted-foreground truncate">{evidence.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">{evidence.uploadedAt}</span>
                      <Link href={`/evidence/${evidence.id}`}>
                        <Button variant="ghost" size="sm">
                          詳細
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
