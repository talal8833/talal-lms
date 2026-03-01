// src/actions/create-course.ts
"use server";

import { db } from "@/lib/db";

export const createCourse = async (values: { title: string }) => {
  try {
    const course = await db.course.create({
      data: {
        title: values.title,
        userId: "test_user_123", // مؤقتاً حتى نركب نظام Clerk
      },
    });

    return course;
  } catch (error) {
    console.log("[CREATE_COURSE_ERROR]", error);
    throw new Error("Internal Error");
  }
};
