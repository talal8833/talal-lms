export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-[92%] max-w-5xl py-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <h1 className="text-2xl font-semibold">منصتي التعليمية</h1>
          <p className="mt-2 text-slate-400">
            منصة شخصية لعرض الدورات وبيعها، وبعد الشراء ينفتح المحتوى داخل حساب
            الطالب.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
              href="/courses"
            >
              استعرض الدورات
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              href="/dashboard"
            >
              لوحة الطالب
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              href="/admin"
            >
              لوحة الأدمن
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
