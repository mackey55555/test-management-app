import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";

// プロジェクト詳細取得
export async function GET(
  request: Request,
  ctx: { params: { id: string } }
) {
  const { params } = ctx;
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "プロジェクトが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "プロジェクトの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// プロジェクト更新
export async function PUT(
  request: Request,
  ctx: { params: { id: string } }
) {
  const { params } = ctx;
  try {
    const body = await request.json();

    // バリデーション
    if (!body.name) {
      return NextResponse.json(
        { error: "プロジェクト名は必須です" },
        { status: 400 }
      );
    }

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

    // プロジェクトの更新
    const updatedProject = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: {
        name: body.name,
        description: body.description || null,
        status: body.status as ProjectStatus || existingProject.status,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "プロジェクトの更新に失敗しました" },
      { status: 500 }
    );
  }
}

// プロジェクト削除
export async function DELETE(
  request: Request,
  ctx: { params: { id: string } }
) {
  const { params } = ctx;
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "プロジェクトの削除に失敗しました" },
      { status: 500 }
    );
  }
}
