"use client";

import React from "react";

export default function PurchaseBox({ price }: { price: number }) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
      <div className="text-sm text-slate-400">السعر</div>
      <div className="mt-1 text-3xl font-bold text-blue-400">
        {price.toFixed(2)} ر.ع
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
  );
}
