import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POSTメソッドでプロジェクト削除を処理
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // プロジェクトの存在確認
    const existingProject = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!existingProject) {
      return NextResponse.json(
        { error: "プロジェクトが見つかりません" },
        { status: 404 }
      );
    }

    // プロジェクトの削除
    await prisma.project.delete({
      where: {
        id: params.id,
      },
    });

    // プロジェクト一覧ページにリダイレクト
    return NextResponse.json({ success: true, redirect: "/projects" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "プロジェクトの削除に失敗しました" },
      { status: 500 }
    );
  }
}
