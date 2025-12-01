// import React, { useState } from "react";
// import AdminLayout from "@/components/layouts/AdminLayout";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Calendar } from "@/components/ui/calendar";

// type EventStatus = "confirmed" | "pending" | "cancelled";

// interface EventItem {
//   id: number;
//   time: string;
//   title: string;
//   client: string;
//   status: EventStatus;
// }

// const AdminCalendar: React.FC = () => {
//   const [date, setDate] = useState<Date>(new Date());

//   // أحداث وهمية لليوم
//   const todayEvents: EventItem[] = [
//     {
//       id: 1,
//       time: "10:00 AM",
//       title: "جلسة تدريب حياتي",
//       client: "سارة أحمد",
//       status: "confirmed",
//     },
//     {
//       id: 2,
//       time: "2:00 PM",
//       title: "استشارة علاجية",
//       client: "فاطمة حسن",
//       status: "pending",
//     },
//     {
//       id: 3,
//       time: "4:00 PM",
//       title: "جلسة عافية",
//       client: "ليلى محمد",
//       status: "confirmed",
//     },
//   ];

//   const getBadgeVariant = (status: EventStatus): "default" | "secondary" | "destructive" => {
//     switch (status) {
//       case "confirmed":
//         return "default";
//       case "pending":
//         return "secondary";
//       case "cancelled":
//         return "destructive";
//       default:
//         return "secondary";
//     }
//   };

//   return (
//     <>
//       <div className="space-y-6 text-right">
//         {/* العنوان */}
//         <div>
//           <h1 className="text-3xl font-semibold text-foreground mb-2">التقويم</h1>
//           <p className="text-muted-foreground">عرض وإدارة جدول جلسات التدريب</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* التقويم */}
//           <Card className="p-6 lg:col-span-2">
//             <h2 className="text-xl font-semibold text-foreground mb-4 text-right">تقويم الجلسات</h2>
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={(d: Date | null) => d && setDate(d)}
//               className="rounded-xl border w-full pointer-events-auto"
//             />
//           </Card>

//           {/* جدول اليوم */}
//           <Card className="p-6">
//             <h2 className="text-xl font-semibold text-foreground mb-4 text-right">جدول اليوم</h2>
//             <div className="space-y-4">
//               {todayEvents.map((event) => (
//                 <div
//                   key={event.id}
//                   className="p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <span className="text-sm font-semibold text-primary">{event.time}</span>
//                     <Badge variant={getBadgeVariant(event.status)}>{event.status === "confirmed" ? "مؤكد" : event.status === "pending" ? "قيد الانتظار" : "ملغي"}</Badge>
//                   </div>
//                   <h3 className="text-sm font-medium text-foreground mb-1">{event.title}</h3>
//                   <p className="text-xs text-muted-foreground">مع {event.client}</p>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>

//         {/* نظرة أسبوعية */}
//         <Card className="p-6">
//           <h2 className="text-xl font-semibold text-foreground mb-4 text-right">نظرة أسبوعية</h2>
//           <div className="grid grid-cols-7 gap-2">
//             {["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"].map((day) => (
//               <div
//                 key={day}
//                 className="text-center p-4 rounded-xl border border-border"
//               >
//                 <p className="text-xs font-medium text-muted-foreground mb-2">{day}</p>
//                 <p className="text-lg font-semibold text-foreground">{Math.floor(Math.random() * 6) + 1}</p>
//                 <p className="text-xs text-muted-foreground">جلسة</p>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default AdminCalendar;
