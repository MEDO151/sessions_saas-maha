import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, CheckCircle, XCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/** أنواع */
interface Stat {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  change: string;
  color: string;
}

interface ChartPoint {
  date: string;
  bookings: number;
}

interface RecentBooking {
  id: string;
  user: string;
  service: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
}

/** بيانات وهمية */
const stats: Stat[] = [
  {
    title: "إجمالي المستخدمين",
    value: "1,234",
    icon: Users,
    change: "زيادة 12% عن الشهر الماضي",
    color: "text-primary",
  },
  {
    title: "حجوزات اليوم",
    value: "8",
    icon: Calendar,
    change: "3 مؤكد، 5 قيد الانتظار",
    color: "text-accent",
  },
  {
    title: "حجوزات الشهر",
    value: "156",
    icon: CheckCircle,
    change: "زيادة 8% عن الشهر الماضي",
    color: "text-green-600",
  },
  {
    title: "نسبة الإلغاء",
    value: "4.2%",
    icon: XCircle,
    change: "نقص 1.2% عن الشهر الماضي",
    color: "text-red-600",
  },
];

const chartData: ChartPoint[] = [
  { date: "1 نوفمبر", bookings: 4 },
  { date: "5 نوفمبر", bookings: 7 },
  { date: "10 نوفمبر", bookings: 5 },
  { date: "15 نوفمبر", bookings: 9 },
  { date: "20 نوفمبر", bookings: 12 },
  { date: "25 نوفمبر", bookings: 8 },
  { date: "30 نوفمبر", bookings: 10 },
];

const recentBookings: RecentBooking[] = [
  {
    id: "BK-001",
    user: "سارة أحمد",
    service: "جلسة تدريب حياتي",
    date: "2025-11-26",
    time: "10:00 صباحاً",
    status: "confirmed",
  },
  {
    id: "BK-002",
    user: "فاطمة حسن",
    service: "استشارة علاجية",
    date: "2025-11-26",
    time: "2:00 مساءً",
    status: "pending",
  },
  {
    id: "BK-003",
    user: "ليلى محمد",
    service: "جلسة عافية",
    date: "2025-11-27",
    time: "11:00 صباحاً",
    status: "confirmed",
  },
  {
    id: "BK-004",
    user: "نور علي",
    service: "تطوير شخصي",
    date: "2025-11-27",
    time: "3:00 مساءً",
    status: "pending",
  },
  {
    id: "BK-005",
    user: "أميرة خليل",
    service: "جلسة تدريب حياتي",
    date: "2025-11-28",
    time: "9:00 صباحاً",
    status: "confirmed",
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="space-y-8">
        {/* رأس الصفحة */}
        <div className="text-right">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            نظرة عامة على لوحة التحكم
          </h1>
          <p className="text-muted-foreground">
            مرحباً بعودتك — هذه أبرز الأحداث اليوم.
          </p>
        </div>

        {/* بطاقات الإحصاءات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                className="p-6 hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2 text-right">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>

                  <div className={`p-3 rounded-xl bg-secondary ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* رسم بياني لاتجاه الحجوزات */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-right">
            اتجاه الحجوزات (آخر 30 يوم)
          </h2>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* الحجوزات الأخيرة */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground text-right">
              الحجوزات الأخيرة
            </h2>
            <Button variant="outline" size="sm">
              عرض الكل
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    رقم
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    المستخدم
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الخدمة
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    التاريخ والوقت
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الحالة
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    إجراء
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">
                      {booking.id}
                    </td>

                    <td className="py-4 px-4 text-sm text-foreground">
                      {booking.user}
                    </td>

                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {booking.service}
                    </td>

                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {booking.date} — {booking.time}
                    </td>

                    <td className="py-4 px-4">
                      <Badge
                        variant={booking.status === "confirmed" ? "default" : "secondary"}
                      >
                        {booking.status === "confirmed"
                          ? "مؤكد"
                          : booking.status === "pending"
                          ? "قيد الانتظار"
                          : "ملغي"}
                      </Badge>
                    </td>

                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm">
                        عرض
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
