import React, { useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

/** أنواع */
type LogType = "create" | "update" | "delete" | string;

interface LogEntry {
  id: number;
  timestamp: string;
  admin: string;
  action: string;
  resource: string;
  details: string;
  type: LogType;
}

/** سجلات وهمية */
const mockLogs: LogEntry[] = [
  {
    id: 1,
    timestamp: "2025-11-25 14:32:15",
    admin: "المشرف",
    action: "تم الإنشاء",
    resource: "خدمة",
    details: "جلسة تدريب حياتي",
    type: "create",
  },
  {
    id: 2,
    timestamp: "2025-11-25 13:15:42",
    admin: "المشرف",
    action: "تم التحديث",
    resource: "حجز",
    details: "تم تغيير حالة BK-001 إلى مؤكد",
    type: "update",
  },
  {
    id: 3,
    timestamp: "2025-11-25 11:20:30",
    admin: "المشرف",
    action: "تم الحذف",
    resource: "مستخدم",
    details: "حساب المستخدم: test@example.com",
    type: "delete",
  },
  {
    id: 4,
    timestamp: "2025-11-25 10:05:18",
    admin: "المشرف",
    action: "تم التحديث",
    resource: "الإعدادات",
    details: "تم تفعيل تكامل Zoom",
    type: "update",
  },
  {
    id: 5,
    timestamp: "2025-11-24 16:45:22",
    admin: "المشرف",
    action: "تم الإنشاء",
    resource: "حجز",
    details: "حجز جديد BK-010 لـ سارة أحمد",
    type: "create",
  },
  {
    id: 6,
    timestamp: "2025-11-24 15:30:11",
    admin: "المشرف",
    action: "تم التحديث",
    resource: "خدمة",
    details: "تحديث سعر جلسة استشارة علاجية",
    type: "update",
  },
  {
    id: 7,
    timestamp: "2025-11-24 14:10:55",
    admin: "المشرف",
    action: "تم التعطيل",
    resource: "مستخدم",
    details: "المستخدم: inactive@example.com",
    type: "update",
  },
  {
    id: 8,
    timestamp: "2025-11-24 12:22:33",
    admin: "المشرف",
    action: "تم الإنشاء",
    resource: "خدمة",
    details: "جلسة تطوير شخصي",
    type: "create",
  },
];

const Logs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLogs = mockLogs.filter((log) => {
    const q = searchQuery.trim().toLowerCase();
    if (q === "") return true;
    return (
      log.admin.toLowerCase().includes(q) ||
      log.action.toLowerCase().includes(q) ||
      log.resource.toLowerCase().includes(q) ||
      log.details.toLowerCase().includes(q) ||
      log.timestamp.toLowerCase().includes(q)
    );
  });

  const getTypeBadge = (type: LogType): "default" | "secondary" | "destructive" => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      create: "default",
      update: "secondary",
      delete: "destructive",
    };
    return variants[type] ?? "secondary";
  };

  return (
    <>
      <div className="space-y-6">
        {/* العنوان */}
        <div className="text-right">
          <h1 className="text-3xl font-semibold text-foreground mb-2">سجل النشاطات</h1>
          <p className="text-muted-foreground">
            تتبع جميع إجراءات المشرفين وتغييرات النظام
          </p>
        </div>

        {/* بحث */}
        <Card className="p-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ابحث في السجلات باسم المشرف، الإجراء، أو المورد..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </Card>

        {/* جدول السجلات */}
        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">الوقت</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">المشرف</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">الإجراء</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">المورد</th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/50"
                  >
                    <td className="py-4 px-4 text-sm text-muted-foreground">{log.timestamp}</td>
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{log.admin}</td>
                    <td className="py-4 px-4">
                      <Badge variant={getTypeBadge(log.type)}>{log.action}</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-foreground">{log.resource}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{log.details}</td>
                  </tr>
                ))}
                {filteredLogs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-6 px-4 text-center text-sm text-muted-foreground">
                      لا توجد نتائج مطابقة
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Logs;
