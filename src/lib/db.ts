import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from './prisma';
import {
  Project,
  TestCase,
  TestExecution,
  Evidence,
  Category,
  User,
  ProjectMember,
  TestCaseStatus,
  TestPriority,
  TestExecutionStatus,
  ProjectStatus,
  UserRole
} from '@prisma/client';

// 型をエクスポート
export type {
  Project,
  TestCase,
  TestExecution,
  Evidence,
  Category,
  User,
  ProjectMember,
  TestCaseStatus,
  TestPriority,
  TestExecutionStatus,
  ProjectStatus,
  UserRole
};

/**
 * プロジェクト一覧を取得する
 */
export async function fetchProjects() {
  noStore();
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return projects;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects');
  }
}

/**
 * プロジェクトの詳細を取得する
 */
export async function fetchProjectById(id: string) {
  noStore();
  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });
    return project;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch project');
  }
}

/**
 * テスト項目一覧を取得する
 */
export async function fetchTestCases(projectId: string) {
  noStore();
  try {
    const testCases = await prisma.testCase.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        category: true,
      },
    });
    return testCases;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch test cases');
  }
}

/**
 * テスト項目の詳細を取得する
 */
export async function fetchTestCaseById(id: string) {
  noStore();
  try {
    const testCase = await prisma.testCase.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        project: true,
      },
    });
    return testCase;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch test case');
  }
}

/**
 * テスト実行結果一覧を取得する
 */
export async function fetchTestExecutions(testCaseId: string) {
  noStore();
  try {
    const testExecutions = await prisma.testExecution.findMany({
      where: {
        testCaseId,
      },
      orderBy: {
        executedAt: 'desc',
      },
      include: {
        user: true,
      },
    });
    return testExecutions;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch test executions');
  }
}

/**
 * エビデンス一覧を取得する
 */
export async function fetchEvidences(testExecutionId: string) {
  noStore();
  try {
    const evidences = await prisma.evidence.findMany({
      where: {
        testExecutionId,
      },
      orderBy: {
        uploadedAt: 'desc',
      },
      include: {
        user: true,
      },
    });
    return evidences;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch evidences');
  }
}

/**
 * カテゴリ一覧を取得する
 */
export async function fetchCategories(projectId: string) {
  noStore();
  try {
    const categories = await prisma.category.findMany({
      where: {
        projectId,
      },
      orderBy: {
        name: 'asc',
      },
      include: {
        parent: true,
        children: true,
      },
    });
    return categories;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories');
  }
}

/**
 * ユーザー一覧を取得する
 */
export async function fetchUsers() {
  noStore();
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users');
  }
}

/**
 * プロジェクトメンバー一覧を取得する
 */
export async function fetchProjectMembers(projectId: string) {
  noStore();
  try {
    const projectMembers = await prisma.projectMember.findMany({
      where: {
        projectId,
      },
      include: {
        user: true,
      },
    });
    return projectMembers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch project members');
  }
}

/**
 * ダッシュボード用のサマリーデータを取得する
 */
export async function fetchDashboardData() {
  noStore();
  try {
    const [
      projectCount,
      activeProjectCount,
      testCaseCount,
      testExecutionCount,
      passedTestCount,
      failedTestCount,
    ] = await Promise.all([
      prisma.project.count(),
      prisma.project.count({
        where: {
          status: ProjectStatus.ACTIVE,
        },
      }),
      prisma.testCase.count(),
      prisma.testExecution.count(),
      prisma.testExecution.count({
        where: {
          status: TestExecutionStatus.PASSED,
        },
      }),
      prisma.testExecution.count({
        where: {
          status: TestExecutionStatus.FAILED,
        },
      }),
    ]);

    return {
      projectCount,
      activeProjectCount,
      testCaseCount,
      testExecutionCount,
      passedTestCount,
      failedTestCount,
      passRate: testExecutionCount > 0 ? (passedTestCount / testExecutionCount) * 100 : 0,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch dashboard data');
  }
}
