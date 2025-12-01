import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * استبدل useAuthStub بمنطق التوثيق الحقيقي (context / hook / firebase / supabase).
 */
const useAuthStub = () => {
  // مؤقت: غير القيم حسب نظامك
  const isAuthenticated = true; // false لو مش مسجل
  const userRole: "admin" | "user" | null = "admin";
  return { isAuthenticated, userRole };
};

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "admin" | "user";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role = "admin" }) => {
  const { isAuthenticated, userRole } = useAuthStub();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (role === "admin" && userRole !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
