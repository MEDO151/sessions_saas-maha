// src/App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthForms from "./pages/AuthForms";

import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Bookings from "./pages/admin/Bookings";
// import AdminCalendar from "./pages/admin/AdminCalendar";
import Settings from "./pages/admin/Settings";
import Logs from "./pages/admin/Logs";
import Services from "./pages/admin/Services";
import AdminLayout from "@/components/layouts/AdminLayout";
import ProtectedRoute from "@/components/routes/ProtectedRoute";
import MainLayout from "@/components/layouts/MainLayout";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="booking" element={<Booking />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogDetails />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<AuthForms />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="services" element={<Services />} />
              {/* <Route path="calendar" element={<AdminCalendar />} /> */}
              <Route path="settings" element={<Settings />} />
              <Route path="logs" element={<Logs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
