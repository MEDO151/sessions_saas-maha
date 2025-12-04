// src/components/AuthForms.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import mainImg from "../assets/hero.jpg";

type Mode = "login" | "register";

interface AuthFormsProps {
  initial?: Mode;
}

export default function AuthForms({ initial = "login" }: AuthFormsProps) {
  const [mode, setMode] = useState<Mode>(initial);

  return (
    // use CSS vars defined in your CSS: background/text use hsl(var(--...))
    <div
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* LEFT: welcome + gradient (uses your --gradient-primary) */}
        <div
          className="hidden md:flex flex-col md:gap-5 justify-center px-8 rounded-2xl bg-white text-primary shadow-elegant"
        >
          <h2 className="text-3xl font-semibold">مرحبا بك</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            منصة تعريف بالمدرب وتقديم خدمات استشارية: جلسات تطويرية، علاجية، ومتابعة عبر زووم.
            اختر الدخول أو إنشاء حساب للبدء.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("login")}
              className="px-4 py-2  rounded-lg backdrop-blur-sm hover:scale-[1.01] transition"
              style={{
                border: "1px solid hsl(46, 65%, 52%)",
                color: "hsl(46, 65%, 52%)",
              }}
            >
              تسجيل الدخول
            </button>

            <button
              onClick={() => setMode("register")}
              className="px-4 py-2 rounded-lg hover:scale-[1.01] transition"
              style={{
                border: "1px solid hsl(46, 65%, 52%)",
                color: "hsl(46, 65%, 52%)",
              }}
            >
              إنشاء حساب
            </button>
          </div>
        </div>

        {/* RIGHT: card uses --card and text uses --text / --muted */}
        <motion.div
          key={mode}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          className="p-6 rounded-2xl shadow-md flex flex-col gap-4"
          style={{
            backgroundColor: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
            boxShadow: "var(--shadow-elegant)",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold" style={{ color: "hsl(var(--text))" }}>
                {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب"}
              </h3>
              <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                {mode === "login"
                  ? "أدخل بياناتك للمتابعة إلى لوحة العميل وحجز الجلسات"
                  : "إنشئ حسابًا للوصول إلى الاستشارات وحجوزات زووم"}
              </p>
            </div>
              <button
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="text-sm  w-fit  rounded-lg border hover:shadow-sm transition  whitespace-nowrap py-2 px-3"
                style={{
                  borderColor: "hsl(var(--border))",
                }}
              >
                {mode === "login" ? "إنشاء حساب" : "تسجيل دخول"}
              </button>
            </div>

          {mode === "login" ? <LoginCard /> : <RegisterCard />}

          <p className="text-xs mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            باستخدامك لهذا التطبيق أنت توافق على الشروط وسياسة الخصوصية.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* -------------------------
   Field component (typed)
   ------------------------- */
/**
 * Use LucideIcon type for the icon prop so ForwardRefExoticComponent from lucide-react matches correctly.
 */
interface FieldProps {
  icon: LucideIcon;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ icon: Icon, type = "text", placeholder, value, onChange }: FieldProps) {
  return (
    <label className="relative block">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Icon size={16} className="opacity-60" />
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 rounded-lg border focus:outline-none"
        style={{
          borderColor: "hsl(var(--input))",
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          boxShadow: "none",
        }}
      />
    </label>
  );
}

/* -------------------------
   LoginCard
   ------------------------- */
function LoginCard() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("login", { email, password });
      alert("محاكاة تسجيل الدخول: تحقق من الكونسول (console).");
    }, 800);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <Field icon={Mail} type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Field icon={Lock} type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />

      <div className="flex items-center justify-between">
        <label className="text-sm flex items-center gap-2" style={{ color: "hsl(var(--muted-foreground))" }}>
          <input type="checkbox" className="mr-2" />
          تذكرني
        </label>
        <a className="text-sm hover:underline" style={{ color: "hsl(var(--primary))" }}>
          نسيت كلمة المرور؟
        </a>
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.99 }}
        className="mt-2 py-2 rounded-lg font-medium shadow-sm disabled:opacity-60"
        style={{
          backgroundColor: "hsl(var(--accent))",
          color: "hsl(var(--accent-foreground))",
        }}
        disabled={loading}
      >
        {loading ? "جاري الدخول..." : "دخول"}
      </motion.button>

      <div className="mt-2 text-center text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
        أو سجل الدخول عبر
      </div>

      <div className="flex gap-3 justify-center mt-2">
        <button className="px-4 py-2 rounded-lg border" style={{ borderColor: "hsl(var(--border))" }}>Google</button>
        <button className="px-4 py-2 rounded-lg border" style={{ borderColor: "hsl(var(--border))" }}>Apple</button>
      </div>
    </form>
  );
}

/* -------------------------
   RegisterCard
   ------------------------- */
function RegisterCard() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("register", { name, email, password });
      alert("محاكاة إنشاء الحساب: تحقق من الكونسول (console).");
    }, 900);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <Field icon={User} placeholder="الاسم الكامل" value={name} onChange={(e) => setName(e.target.value)} />
      <Field icon={Mail} type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Field icon={Lock} type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />

      <motion.button
        type="submit"
        whileTap={{ scale: 0.99 }}
        className="mt-2 py-2 rounded-lg font-medium shadow-sm disabled:opacity-60"
        style={{
          backgroundColor: "hsl(var(--accent))",
          color: "hsl(var(--accent-foreground))",
        }}
        disabled={loading}
      >
        {loading ? "جاري الإنشاء..." : "إنشاء حساب"}
      </motion.button>

      <div className="mt-2 text-center text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
        بعد التسجيل ستتمكن من حجز جلسات زووم ومتابعة سجلات الاستشارات.
      </div>
    </form>
  );
}
