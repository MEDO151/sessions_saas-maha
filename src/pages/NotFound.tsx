import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import mainImg from "../assets/hero.jpg";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "خطأ 404: حاول المستخدم الوصول إلى مسار غير موجود:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >
      <div className="text-center space-y-5">
        <h1 className="mb-4 text-4xl text-accent font-bold">404</h1>
        <p className="text-xl text-white">عذراً! الصفحة غير موجودة</p>
        <Link to="/">
          <Button variant="gold" size="lg" className="gap-2 mt-5">
            العودة إلى الصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
