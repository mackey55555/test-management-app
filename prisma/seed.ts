import { PrismaClient, UserRole, ProjectStatus, TestCaseStatus, TestPriority, TestExecutionStatus } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // パスワードのハッシュ化
  const passwordHash = await hash('password123', 10);

  // ユーザーの作成
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: '管理者',
      password: passwordHash,
      role: UserRole.ADMIN,
    },
  });

  const manager = await prisma.user.upsert({
    where: { email: 'manager@example.com' },
    update: {},
    create: {
      email: 'manager@example.com',
      name: 'プロジェクトマネージャー',
      password: passwordHash,
      role: UserRole.MANAGER,
    },
  });

  const tester1 = await prisma.user.upsert({
    where: { email: 'tester1@example.com' },
    update: {},
    create: {
      email: 'tester1@example.com',
      name: 'テスター1',
      password: passwordHash,
      role: UserRole.TESTER,
    },
  });

  const tester2 = await prisma.user.upsert({
    where: { email: 'tester2@example.com' },
    update: {},
    create: {
      email: 'tester2@example.com',
      name: 'テスター2',
      password: passwordHash,
      role: UserRole.TESTER,
    },
  });

  const viewer = await prisma.user.upsert({
    where: { email: 'viewer@example.com' },
    update: {},
    create: {
      email: 'viewer@example.com',
      name: '閲覧者',
      password: passwordHash,
      role: UserRole.VIEWER,
    },
  });

  console.log('Created users');

  // プロジェクトの作成
  const project1 = await prisma.project.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'ECサイトリニューアル',
      description: 'ECサイトのリニューアルプロジェクト',
      status: ProjectStatus.ACTIVE,
    },
  });

  const project2 = await prisma.project.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'モバイルアプリ開発',
      description: 'iOSとAndroid向けのモバイルアプリ開発',
      status: ProjectStatus.ACTIVE,
    },
  });

  const project3 = await prisma.project.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      name: '社内システム更新',
      description: '社内システムのバージョンアップと機能追加',
      status: ProjectStatus.COMPLETED,
    },
  });

  console.log('Created projects');

  // プロジェクトメンバーの作成
  await prisma.projectMember.createMany({
    data: [
      {
        userId: admin.id,
        projectId: project1.id,
        role: UserRole.ADMIN,
      },
      {
        userId: manager.id,
        projectId: project1.id,
        role: UserRole.MANAGER,
      },
      {
        userId: tester1.id,
        projectId: project1.id,
        role: UserRole.TESTER,
      },
      {
        userId: tester2.id,
        projectId: project1.id,
        role: UserRole.TESTER,
      },
      {
        userId: viewer.id,
        projectId: project1.id,
        role: UserRole.VIEWER,
      },
      {
        userId: admin.id,
        projectId: project2.id,
        role: UserRole.ADMIN,
      },
      {
        userId: manager.id,
        projectId: project2.id,
        role: UserRole.MANAGER,
      },
      {
        userId: tester1.id,
        projectId: project2.id,
        role: UserRole.TESTER,
      },
      {
        userId: admin.id,
        projectId: project3.id,
        role: UserRole.ADMIN,
      },
      {
        userId: manager.id,
        projectId: project3.id,
        role: UserRole.MANAGER,
      },
    ],
  });

  console.log('Created project members');

  // カテゴリの作成
  const category1 = await prisma.category.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: '機能テスト',
      description: '機能の動作確認',
      projectId: project1.id,
    },
  });

  const category2 = await prisma.category.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'UI/UXテスト',
      description: 'ユーザーインターフェースとユーザー体験のテスト',
      projectId: project1.id,
    },
  });

  const category3 = await prisma.category.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      name: 'パフォーマンステスト',
      description: 'システムのパフォーマンス評価',
      projectId: project1.id,
    },
  });

  const category4 = await prisma.category.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      name: 'セキュリティテスト',
      description: 'セキュリティ脆弱性のテスト',
      projectId: project1.id,
    },
  });

  const category5 = await prisma.category.upsert({
    where: { id: '5' },
    update: {},
    create: {
      id: '5',
      name: '会員登録・ログイン',
      description: '会員登録とログイン機能のテスト',
      projectId: project1.id,
      parentId: category1.id,
    },
  });

  const category6 = await prisma.category.upsert({
    where: { id: '6' },
    update: {},
    create: {
      id: '6',
      name: '商品検索・表示',
      description: '商品検索と表示機能のテスト',
      projectId: project1.id,
      parentId: category1.id,
    },
  });

  const category7 = await prisma.category.upsert({
    where: { id: '7' },
    update: {},
    create: {
      id: '7',
      name: '注文・決済',
      description: '注文と決済機能のテスト',
      projectId: project1.id,
      parentId: category1.id,
    },
  });

  console.log('Created categories');

  // テスト項目の作成
  const testCase1 = await prisma.testCase.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      title: '新規会員登録',
      description: '新規ユーザーが会員登録できることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.HIGH,
      projectId: project1.id,
      categoryId: category5.id,
    },
  });

  const testCase2 = await prisma.testCase.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      title: 'ログイン',
      description: '登録済みユーザーがログインできることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.HIGH,
      projectId: project1.id,
      categoryId: category5.id,
    },
  });

  const testCase3 = await prisma.testCase.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      title: 'パスワードリセット',
      description: 'パスワードを忘れた場合のリセット機能を確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.MEDIUM,
      projectId: project1.id,
      categoryId: category5.id,
    },
  });

  const testCase4 = await prisma.testCase.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      title: '商品検索',
      description: 'キーワードで商品を検索できることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.HIGH,
      projectId: project1.id,
      categoryId: category6.id,
    },
  });

  const testCase5 = await prisma.testCase.upsert({
    where: { id: '5' },
    update: {},
    create: {
      id: '5',
      title: '商品詳細表示',
      description: '商品詳細ページが正しく表示されることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.MEDIUM,
      projectId: project1.id,
      categoryId: category6.id,
    },
  });

  const testCase6 = await prisma.testCase.upsert({
    where: { id: '6' },
    update: {},
    create: {
      id: '6',
      title: 'カートに商品追加',
      description: '商品をカートに追加できることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.HIGH,
      projectId: project1.id,
      categoryId: category7.id,
    },
  });

  const testCase7 = await prisma.testCase.upsert({
    where: { id: '7' },
    update: {},
    create: {
      id: '7',
      title: '注文手続き',
      description: 'カートから注文手続きができることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.CRITICAL,
      projectId: project1.id,
      categoryId: category7.id,
    },
  });

  const testCase8 = await prisma.testCase.upsert({
    where: { id: '8' },
    update: {},
    create: {
      id: '8',
      title: '決済処理',
      description: 'クレジットカードでの決済処理が正常に完了することを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.CRITICAL,
      projectId: project1.id,
      categoryId: category7.id,
    },
  });

  const testCase9 = await prisma.testCase.upsert({
    where: { id: '9' },
    update: {},
    create: {
      id: '9',
      title: 'レスポンシブデザイン',
      description: '様々な画面サイズでレイアウトが崩れないことを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.HIGH,
      projectId: project1.id,
      categoryId: category2.id,
    },
  });

  const testCase10 = await prisma.testCase.upsert({
    where: { id: '10' },
    update: {},
    create: {
      id: '10',
      title: 'ページ読み込み速度',
      description: '各ページの読み込み速度が基準値以内であることを確認',
      status: TestCaseStatus.ACTIVE,
      priority: TestPriority.MEDIUM,
      projectId: project1.id,
      categoryId: category3.id,
    },
  });

  console.log('Created test cases');

  // テスト実行結果の作成
  const testExecution1 = await prisma.testExecution.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      testCaseId: testCase1.id,
      status: TestExecutionStatus.PASSED,
      notes: '正常に会員登録ができることを確認',
      executedBy: tester1.id,
      executedAt: new Date('2025-03-10T10:00:00Z'),
    },
  });

  const testExecution2 = await prisma.testExecution.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      testCaseId: testCase2.id,
      status: TestExecutionStatus.PASSED,
      notes: '正常にログインができることを確認',
      executedBy: tester1.id,
      executedAt: new Date('2025-03-10T11:00:00Z'),
    },
  });

  const testExecution3 = await prisma.testExecution.upsert({
    where: { id: '3' },
    update: {},
    create: {
      id: '3',
      testCaseId: testCase3.id,
      status: TestExecutionStatus.FAILED,
      notes: 'パスワードリセットメールが届かない場合がある',
      executedBy: tester1.id,
      executedAt: new Date('2025-03-10T13:00:00Z'),
    },
  });

  const testExecution4 = await prisma.testExecution.upsert({
    where: { id: '4' },
    update: {},
    create: {
      id: '4',
      testCaseId: testCase4.id,
      status: TestExecutionStatus.PASSED,
      notes: '検索結果が正しく表示されることを確認',
      executedBy: tester2.id,
      executedAt: new Date('2025-03-11T09:00:00Z'),
    },
  });

  const testExecution5 = await prisma.testExecution.upsert({
    where: { id: '5' },
    update: {},
    create: {
      id: '5',
      testCaseId: testCase5.id,
      status: TestExecutionStatus.PASSED,
      notes: '商品詳細が正しく表示されることを確認',
      executedBy: tester2.id,
      executedAt: new Date('2025-03-11T10:00:00Z'),
    },
  });

  const testExecution6 = await prisma.testExecution.upsert({
    where: { id: '6' },
    update: {},
    create: {
      id: '6',
      testCaseId: testCase6.id,
      status: TestExecutionStatus.PASSED,
      notes: '商品がカートに正常に追加されることを確認',
      executedBy: tester2.id,
      executedAt: new Date('2025-03-11T11:00:00Z'),
    },
  });

  const testExecution7 = await prisma.testExecution.upsert({
    where: { id: '7' },
    update: {},
    create: {
      id: '7',
      testCaseId: testCase7.id,
      status: TestExecutionStatus.BLOCKED,
      notes: '決済システムの接続エラーにより確認できず',
      executedBy: tester2.id,
      executedAt: new Date('2025-03-11T13:00:00Z'),
    },
  });

  console.log('Created test executions');

  // エビデンスの作成
  await prisma.evidence.createMany({
    data: [
      {
        id: '1',
        testExecutionId: testExecution1.id,
        filePath: '/uploads/evidence/signup_success.png',
        fileType: 'image/png',
        description: '会員登録成功画面のスクリーンショット',
        uploadedBy: tester1.id,
        uploadedAt: new Date('2025-03-10T10:05:00Z'),
      },
      {
        id: '2',
        testExecutionId: testExecution2.id,
        filePath: '/uploads/evidence/login_success.png',
        fileType: 'image/png',
        description: 'ログイン成功画面のスクリーンショット',
        uploadedBy: tester1.id,
        uploadedAt: new Date('2025-03-10T11:05:00Z'),
      },
      {
        id: '3',
        testExecutionId: testExecution3.id,
        filePath: '/uploads/evidence/password_reset_error.png',
        fileType: 'image/png',
        description: 'パスワードリセットエラー画面のスクリーンショット',
        uploadedBy: tester1.id,
        uploadedAt: new Date('2025-03-10T13:05:00Z'),
      },
      {
        id: '4',
        testExecutionId: testExecution3.id,
        filePath: '/uploads/evidence/password_reset_error.mp4',
        fileType: 'video/mp4',
        description: 'パスワードリセットエラーの再現動画',
        uploadedBy: tester1.id,
        uploadedAt: new Date('2025-03-10T13:10:00Z'),
      },
      {
        id: '5',
        testExecutionId: testExecution4.id,
        filePath: '/uploads/evidence/search_results.png',
        fileType: 'image/png',
        description: '検索結果画面のスクリーンショット',
        uploadedBy: tester2.id,
        uploadedAt: new Date('2025-03-11T09:05:00Z'),
      },
      {
        id: '6',
        testExecutionId: testExecution5.id,
        filePath: '/uploads/evidence/product_detail.png',
        fileType: 'image/png',
        description: '商品詳細画面のスクリーンショット',
        uploadedBy: tester2.id,
        uploadedAt: new Date('2025-03-11T10:05:00Z'),
      },
      {
        id: '7',
        testExecutionId: testExecution6.id,
        filePath: '/uploads/evidence/cart_add.png',
        fileType: 'image/png',
        description: 'カート追加成功画面のスクリーンショット',
        uploadedBy: tester2.id,
        uploadedAt: new Date('2025-03-11T11:05:00Z'),
      },
      {
        id: '8',
        testExecutionId: testExecution7.id,
        filePath: '/uploads/evidence/checkout_error.png',
        fileType: 'image/png',
        description: '決済エラー画面のスクリーンショット',
        uploadedBy: tester2.id,
        uploadedAt: new Date('2025-03-11T13:05:00Z'),
      },
    ],
  });

  console.log('Created evidences');

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
