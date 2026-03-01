"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createCourse } from "@/actions/create-course"; // سننشئ هذا الملف الآن

const formSchema = z.object({
  title: z.string().min(1, { message: "العنوان مطلوب" }),
});

export default function CreateCoursePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const course = await createCourse(values);
      router.push(`/teacher/courses/${course.id}`);
      alert("تم إنشاء الدورة بنجاح!");
    } catch {
      alert("حدث خطأ ما، حاول مرة أخرى.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6 mt-20">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          سمّي دورتك الجديدة
        </h1>
        <p className="text-sm text-slate-400">
          ما هو عنوان الدورة؟ يمكنك تغييره لاحقاً.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">عنوان الدورة</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="مثلاً: تعلم تطوير المواقع"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button type="button" variant="ghost" className="text-white">
                إلغاء
              </Button>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                استمرار
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
