import React, { useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Search,
  CheckCircle,
  XCircle,
  Calendar as CalendarIcon,
  Video,
  Download,
} from "lucide-react";
import { toast } from "sonner";

/** أنواع */
type BookingStatus = "confirmed" | "pending" | "cancelled";

interface Booking {
  id: string;
  user: string;
  email: string;
  service: string;
  date: string; // ISO or yyyy-mm-dd string
  time: string; // e.g. "10:00 AM"
  duration: string;
  status: BookingStatus;
  price: string;
}

/** بيانات وهمية */
const mockBookings: Booking[] = [
  {
    id: "BK-001",
    user: "سارة أحمد",
    email: "sarah.ahmed@email.com",
    service: "جلسة تدريب حياتي",
    date: "2025-11-26",
    time: "10:00 AM",
    duration: "60 دقيقة",
    status: "confirmed",
    price: "$120",
  },
  {
    id: "BK-002",
    user: "فاطمة حسن",
    email: "fatima.hassan@email.com",
    service: "استشارة علاجية",
    date: "2025-11-26",
    time: "2:00 PM",
    duration: "90 دقيقة",
    status: "pending",
    price: "$150",
  },
  {
    id: "BK-003",
    user: "ليلى محمد",
    email: "layla.m@email.com",
    service: "جلسة عافية",
    date: "2025-11-27",
    time: "11:00 AM",
    duration: "60 دقيقة",
    status: "confirmed",
    price: "$120",
  },
  {
    id: "BK-004",
    user: "نور علي",
    email: "noor.ali@email.com",
    service: "تطوير شخصي",
    date: "2025-11-27",
    time: "3:00 PM",
    duration: "45 دقيقة",
    status: "cancelled",
    price: "$100",
  },
];

const Bookings: React.FC = () => {
  const [bookings] = useState<Booking[]>(mockBookings);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showRescheduleModal, setShowRescheduleModal] = useState<boolean>(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState<Date | null>(null);
  const [rescheduleTime, setRescheduleTime] = useState<string | null>(null);

  const filteredBookings = bookings.filter((booking) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      booking.user.toLowerCase().includes(q) ||
      booking.id.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleConfirm = (id: string) => {
    toast.success(`تم تأكيد الحجز ${id} بنجاح`);
    // هنا يمكنك تنفيذ منطق الشبكة لتحديث الحالة في الـ backend
  };

  const handleCancel = (id: string) => {
    toast.error(`تم إلغاء الحجز ${id}`);
    // هنا يمكنك تنفيذ منطق الشبكة لتحديث الحالة في الـ backend
  };

  const handleReschedule = (booking: Booking) => {
    setSelectedBooking(booking);
    setRescheduleDate(null);
    setRescheduleTime(null);
    setShowRescheduleModal(true);
  };

  const handleCreateZoom = (id: string) => {
    toast.success(`تم إنشاء رابط Zoom للحجز ${id}`);
    // استدعاء API لإنشاء رابط Zoom فعلياً لو متوفر
  };

  const handleExportCSV = () => {
    toast.success("جاري تصدير الحجوزات إلى CSV...");
    // يمكنك هنا توليد ملف CSV فعلي وتنزيله
  };

  const confirmReschedule = () => {
    if (!selectedBooking) return;
    // يمكنك هنا إرسال التاريخ/الوقت الجديد للـ backend
    toast.success("تم إعادة جدولت الحجز بنجاح");
    setShowRescheduleModal(false);
  };

  return (
    <>
      <div className="space-y-6">
        {/* رأس الصفحة */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              إدارة الحجوزات
            </h1>
            <p className="text-muted-foreground">التحكم في جميع حجوزات الجلسات</p>
          </div>
          <Button onClick={handleExportCSV} className="gap-2">
            <Download className="w-4 h-4" />
            تصدير CSV
          </Button>
        </div>

        {/* فلاتر البحث */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="ابحث برقم الحجز أو اسم المستخدم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={(v: string) => setStatusFilter(v)}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="تصفية حسب الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الحالات</SelectItem>
                <SelectItem value="confirmed">مؤكد</SelectItem>
                <SelectItem value="pending">قيد الانتظار</SelectItem>
                <SelectItem value="cancelled">ملغي</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* جدول الحجوزات */}
        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">رقم</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">المستخدم</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">الخدمة</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">التاريخ & الوقت</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">الحالة</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">السعر</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/50"
                  >
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{booking.id}</td>

                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{booking.user}</p>
                        <p className="text-xs text-muted-foreground">{booking.email}</p>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-sm text-muted-foreground">{booking.service}</td>

                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-foreground">{booking.date}</p>
                        <p className="text-xs text-muted-foreground">{booking.time} ({booking.duration})</p>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          booking.status === "confirmed"
                            ? "default"
                            : booking.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {booking.status === "confirmed"
                          ? "مؤكد"
                          : booking.status === "pending"
                          ? "قيد الانتظار"
                          : "ملغي"}
                      </Badge>
                    </td>

                    <td className="py-4 px-4 text-sm font-medium text-foreground">{booking.price}</td>

                    <td className="py-4 px-4">
                      <div className="flex gap-2 justify-end">
                        {booking.status === "pending" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleConfirm(booking.id)}
                            title="تأكيد"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </Button>
                        )}

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleReschedule(booking)}
                          title="إعادة جدول"
                        >
                          <CalendarIcon className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCreateZoom(booking.id)}
                          title="إنشاء Zoom"
                        >
                          <Video className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCancel(booking.id)}
                          title="إلغاء"
                        >
                          <XCircle className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* مودال إعادة الجدولة */}
        <Dialog open={showRescheduleModal} onOpenChange={(open: boolean) => setShowRescheduleModal(open)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إعادة جدولة الحجز</DialogTitle>
            </DialogHeader>

            {selectedBooking ? (
              <div className="space-y-4 text-right">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">التاريخ والوقت الحالي</p>
                  <p className="text-sm font-medium">{selectedBooking.date} عند {selectedBooking.time}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">اختر تاريخ جديد</p>
                  <Calendar
                    mode="single"
                    selected={rescheduleDate}
                    onSelect={setRescheduleDate}
                    className="rounded-xl border pointer-events-auto"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">اختر الوقت الجديد</p>
                  <Select value={rescheduleTime ?? ""} onValueChange={(v: string) => setRescheduleTime(v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر فترة زمنية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">لم يتم اختيار حجز</p>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowRescheduleModal(false)}>إلغاء</Button>
              <Button
                onClick={() => {
                  confirmReschedule();
                }}
              >
                تأكيد إعادة الجدولة
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Bookings;
