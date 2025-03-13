import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">設定</h1>
          <p className="text-muted-foreground">
            アプリケーションの設定を管理します
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-1">
            <nav className="space-y-1">
              <a href="#general" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground">
                一般設定
              </a>
              <a href="#user" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
                ユーザー設定
              </a>
              <a href="#notification" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
                通知設定
              </a>
              <a href="#integration" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
                外部連携
              </a>
              <a href="#template" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
                テンプレート設定
              </a>
              <a href="#backup" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted">
                バックアップ
              </a>
            </nav>
          </div>

          <div className="md:col-span-4 space-y-6">
            <Card id="general">
              <CardHeader>
                <CardTitle>一般設定</CardTitle>
                <CardDescription>
                  アプリケーションの基本設定
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="app-name" className="text-sm font-medium">
                    アプリケーション名
                  </label>
                  <Input
                    id="app-name"
                    defaultValue="テスト管理システム"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company-name" className="text-sm font-medium">
                    会社名
                  </label>
                  <Input
                    id="company-name"
                    defaultValue="株式会社サンプル"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date-format" className="text-sm font-medium">
                    日付形式
                  </label>
                  <select
                    id="date-format"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="yyyy/MM/dd">YYYY/MM/DD</option>
                    <option value="dd/MM/yyyy">DD/MM/YYYY</option>
                    <option value="MM/dd/yyyy">MM/DD/YYYY</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">
                    言語
                  </label>
                  <select
                    id="language"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="ja">日本語</option>
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timezone" className="text-sm font-medium">
                    タイムゾーン
                  </label>
                  <select
                    id="timezone"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="Asia/Tokyo">Asia/Tokyo (GMT+9:00)</option>
                    <option value="America/New_York">America/New_York (GMT-5:00)</option>
                    <option value="Europe/London">Europe/London (GMT+0:00)</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存</Button>
              </CardFooter>
            </Card>

            <Card id="user">
              <CardHeader>
                <CardTitle>ユーザー設定</CardTitle>
                <CardDescription>
                  ユーザーアカウントと権限の設定
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">ユーザー一覧</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 gap-4 p-4 border-b font-medium">
                      <div>ユーザー名</div>
                      <div>メールアドレス</div>
                      <div>権限</div>
                      <div className="text-right">アクション</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>山田太郎</div>
                      <div>yamada@example.com</div>
                      <div>管理者</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>佐藤次郎</div>
                      <div>sato@example.com</div>
                      <div>テスト担当者</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>鈴木花子</div>
                      <div>suzuki@example.com</div>
                      <div>テスト担当者</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>田中一郎</div>
                      <div>tanaka@example.com</div>
                      <div>閲覧者</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>新規ユーザー追加</Button>
                </div>
              </CardContent>
            </Card>

            <Card id="notification">
              <CardHeader>
                <CardTitle>通知設定</CardTitle>
                <CardDescription>
                  通知の設定
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">メール通知</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="notify-test-execution" className="mr-2" checked />
                      <label htmlFor="notify-test-execution">テスト実行時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notify-test-failure" className="mr-2" checked />
                      <label htmlFor="notify-test-failure">テスト失敗時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notify-test-assignment" className="mr-2" checked />
                      <label htmlFor="notify-test-assignment">テスト担当者アサイン時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="notify-report" className="mr-2" />
                      <label htmlFor="notify-report">レポート作成時に通知する</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">アプリ内通知</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="in-app-test-execution" className="mr-2" checked />
                      <label htmlFor="in-app-test-execution">テスト実行時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="in-app-test-failure" className="mr-2" checked />
                      <label htmlFor="in-app-test-failure">テスト失敗時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="in-app-test-assignment" className="mr-2" checked />
                      <label htmlFor="in-app-test-assignment">テスト担当者アサイン時に通知する</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="in-app-report" className="mr-2" checked />
                      <label htmlFor="in-app-report">レポート作成時に通知する</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">通知頻度</h3>
                  <select
                    id="notification-frequency"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="immediately">即時</option>
                    <option value="hourly">1時間ごと</option>
                    <option value="daily">1日1回</option>
                    <option value="weekly">週1回</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存</Button>
              </CardFooter>
            </Card>

            <Card id="integration">
              <CardHeader>
                <CardTitle>外部連携</CardTitle>
                <CardDescription>
                  外部サービスとの連携設定
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">課題管理ツール連携</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">Jira</h4>
                        <p className="text-sm text-muted-foreground">Jiraと連携してテスト項目と課題を同期</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">Redmine</h4>
                        <p className="text-sm text-muted-foreground">Redmineと連携してテスト項目と課題を同期</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">CI/CD連携</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">Jenkins</h4>
                        <p className="text-sm text-muted-foreground">Jenkinsと連携して自動テスト結果を取得</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">GitHub Actions</h4>
                        <p className="text-sm text-muted-foreground">GitHub Actionsと連携して自動テスト結果を取得</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">コミュニケーションツール連携</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">Slack</h4>
                        <p className="text-sm text-muted-foreground">Slackと連携して通知を送信</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border rounded-md p-4">
                      <div>
                        <h4 className="font-medium">Microsoft Teams</h4>
                        <p className="text-sm text-muted-foreground">Microsoft Teamsと連携して通知を送信</p>
                      </div>
                      <div>
                        <Button variant="outline">連携設定</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="template">
              <CardHeader>
                <CardTitle>テンプレート設定</CardTitle>
                <CardDescription>
                  テスト項目テンプレートの設定
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">テンプレート一覧</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b font-medium">
                      <div>テンプレート名</div>
                      <div>説明</div>
                      <div className="text-right">アクション</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>Webアプリケーション基本テスト</div>
                      <div>Webアプリケーションの基本的なテスト項目セット</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>ECサイトテスト</div>
                      <div>ECサイト特有の機能に関するテスト項目セット</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>ログイン・認証テスト</div>
                      <div>ログインと認証に関する詳細なテスト項目セット</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>決済機能テスト</div>
                      <div>決済処理に関する詳細なテスト項目セット</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">編集</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>新規テンプレート作成</Button>
                </div>
              </CardContent>
            </Card>

            <Card id="backup">
              <CardHeader>
                <CardTitle>バックアップ</CardTitle>
                <CardDescription>
                  データのバックアップと復元
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">自動バックアップ</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="auto-backup" className="mr-2" checked />
                      <label htmlFor="auto-backup">自動バックアップを有効にする</label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="backup-frequency" className="text-sm font-medium">
                      バックアップ頻度
                    </label>
                    <select
                      id="backup-frequency"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="daily">毎日</option>
                      <option value="weekly">毎週</option>
                      <option value="monthly">毎月</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="backup-retention" className="text-sm font-medium">
                      バックアップ保持期間
                    </label>
                    <select
                      id="backup-retention"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="7">7日間</option>
                      <option value="30">30日間</option>
                      <option value="90">90日間</option>
                      <option value="365">1年間</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">手動バックアップ</h3>
                  <div className="flex gap-2">
                    <Button>バックアップを作成</Button>
                    <Button variant="outline">バックアップを復元</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">バックアップ履歴</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-4 gap-4 p-4 border-b font-medium">
                      <div>日時</div>
                      <div>サイズ</div>
                      <div>種類</div>
                      <div className="text-right">アクション</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>2025/03/13 00:00</div>
                      <div>25.4 MB</div>
                      <div>自動</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">ダウンロード</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>2025/03/12 00:00</div>
                      <div>25.1 MB</div>
                      <div>自動</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">ダウンロード</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 border-b">
                      <div>2025/03/11 00:00</div>
                      <div>24.8 MB</div>
                      <div>自動</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">ダウンロード</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>2025/03/10 15:30</div>
                      <div>24.5 MB</div>
                      <div>手動</div>
                      <div className="text-right">
                        <Button variant="ghost" size="sm">ダウンロード</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
