"use client";

import React from "react";
import Link from "next/link";
import PurchaseBox from "./PurchaseBox";

interface Course {
  id: string;
  title: string;
  desc: string;
  price: number;
  lessons: number;
  level: string;
  includes: string[];
}

export default function CourseDetails({ course }: { course: Course }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-[92%] max-w-6xl py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/courses"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            ← رجوع للدورات
          </Link>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {course.level}
          </span>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left */}
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/3 p-6">
            <h1 className="text-3xl font-semibold leading-snug">
              {course.title}
            </h1>
            <p className="mt-3 text-slate-400 leading-relaxed">{course.desc}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">عدد الدروس</div>
                <div className="mt-1 text-lg font-semibold">
                  {course.lessons}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">المستوى</div>
                <div className="mt-1 text-lg font-semibold">{course.level}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">اللغة</div>
                <div className="mt-1 text-lg font-semibold">عربي</div>
              </div>
            </div>

            <h2 className="mt-8 text-lg font-semibold">تشمل الدورة</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {course.includes.map((x) => (
                <li
                  key={x}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  ✓ {x}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Purchase box (client-side) */}
          <PurchaseBox price={course.price} />
        </div>
      </div>
    </main>
  );
}
