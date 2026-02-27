import Link from "next/link";
import { notFound } from "next/navigation";

const courses = [
  {
    id: "vscode",
    title: "احتراف VS Code للمبتدئين",
    desc: "اختصارات، إضافات، Terminal و Git، وطريقة شغل عملية.",
    price: 9.9,
    lessons: 18,
    level: "مبتدئ",
    includes: [
      "ملفات تطبيقية",
      "تمارين سريعة",
      "PDF ملخصات",
      "دعم عبر التعليقات",
    ],
  },
  {
    id: "html-css",
    title: "HTML + CSS من الصفر للاحتراف",
    desc: "تأسيس قوي + تطبيقات عملية وتصميم واجهات حديثة.",
    price: 14.9,
    lessons: 32,
    level: "مبتدئ–متوسط",
    includes: ["مشاريع كاملة", "قوالب جاهزة", "PDF ملخصات", "اختبارات قصيرة"],
  },
  {
    id: "nextjs",
    title: "بناء منصة كاملة بـ Next.js",
    desc: "نشر + مشروع تطبيقي كامل + API + واجهة.",
    price: 24.9,
    lessons: 40,
    level: "متوسط",
    includes: [
      "مشروع Full Stack",
      "أفضل الممارسات",
      "PDF ملخصات",
      "تحديثات مستمرة",
    ],
  },
];

export default function CourseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) return notFound();

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
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/[0.03] p-6">
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

          {/* Right - Purchase box */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
            <div className="text-sm text-slate-400">السعر</div>
            <div className="mt-1 text-3xl font-bold text-blue-400">
              {course.price.toFixed(2)} ر.ع
            </div>

            <button
              className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500"
              onClick={() => alert("الخطوة القادمة: ربط أمـوال باي وفتح الدفع")}
            >
              اشترِ الآن
            </button>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
              بعد الدفع، تنفتح الدورة تلقائيًا داخل حسابك.
            </div>

            <div className="mt-4 text-xs text-slate-500">
              * زر الشراء مؤقت الآن. بالخطوة الجاية بنربطه مع أمـوال باي.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
