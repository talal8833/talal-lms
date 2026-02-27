import Link from "next/link";

const courses = [
  {
    id: "vscode",
    title: "احتراف VS Code للمبتدئين",
    desc: "اختصارات، إضافات، Terminal و Git، وطريقة شغل عملية.",
    price: 9.9,
    lessons: 18,
    level: "مبتدئ",
  },
  {
    id: "html-css",
    title: "HTML + CSS من الصفر للاحتراف",
    desc: "تأسيس قوي + تطبيقات عملية وتصميم واجهات حديثة.",
    price: 14.9,
    lessons: 32,
    level: "مبتدئ–متوسط",
  },
  {
    id: "nextjs",
    title: "بناء منصة كاملة بـ Next.js",
    desc: "واجهة + API + نشر، مع مشروع تطبيقي كامل.",
    price: 24.9,
    lessons: 40,
    level: "متوسط",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-[92%] max-w-6xl py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">الدورات</h1>
            <p className="mt-2 text-slate-400">
              اختر الدورة المناسبة، وبتفتح لك داخل حسابك بعد الشراء.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            رجوع للرئيسية
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Link
              key={c.id}
              href={`/courses/${c.id}`}
              className="group rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/3 p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold leading-snug">
                  {c.title}
                </h2>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {c.level}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-slate-400">{c.lessons} درس</div>

                <div className="text-left">
                  <div className="text-xs text-slate-400">السعر</div>
                  <div className="text-xl font-bold text-blue-400">
                    {c.price.toFixed(2)} ر.ع
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm font-medium text-blue-400">
                <span>عرض التفاصيل</span>
                <span className="transition group-hover:-translate-x-1">←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
