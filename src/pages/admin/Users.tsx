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
  DialogDescription,
} from "@/components/ui/dialog";
import { Search, Eye, Mail, Ban, Trash2 } from "lucide-react";

/** Types */
type UserStatus = "active" | "inactive";

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: UserStatus;
  joinDate: string;
  bookings: number;
}

/** Mock Data */
const mockUsers: User[] = [
  {
    id: 1,
    name: "سارة أحمد",
    email: "sarah.ahmed@email.com",
    phone: "+966 50 123 4567",
    status: "active",
    joinDate: "2025-10-15",
    bookings: 5,
  },
  {
    id: 2,
    name: "فاطمة حسن",
    email: "fatima.hassan@email.com",
    phone: "+966 55 234 5678",
    status: "active",
    joinDate: "2025-09-20",
    bookings: 3,
  },
  {
    id: 3,
    name: "ليلى محمد",
    email: "layla.m@email.com",
    phone: "+966 54 345 6789",
    status: "inactive",
    joinDate: "2025-08-10",
    bookings: 8,
  },
  {
    id: 4,
    name: "نور علي",
    email: "noor.ali@email.com",
    phone: "+966 56 456 7890",
    status: "active",
    joinDate: "2025-11-01",
    bookings: 2,
  },
];

const Users: React.FC = () => {
  const [users] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);

  const filteredUsers = users.filter((user) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  return (
    <>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            إدارة المستخدمين
          </h1>
          <p className="text-muted-foreground">
            التحكم في جميع المستخدمين المسجلين وإدارة حساباتهم
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="ابحث بالاسم أو البريد الإلكتروني..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="تصفية حسب الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="inactive">غير نشط</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الاسم
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    البريد الإلكتروني
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الهاتف
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الحالة
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الحجوزات
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-muted-foreground">
                    الإجراءات
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/50"
                  >
                    <td className="py-4 px-4 text-sm font-medium">
                      {user.name}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {user.email}
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {user.phone}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status === "active" ? "نشط" : "غير نشط"}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {user.bookings}
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="icon" onClick={() => handleViewDetails(user)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Ban className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </Card>

        {/* User Details Modal */}
        <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>تفاصيل المستخدم</DialogTitle>
              <DialogDescription>
                عرض جميع معلومات هذا المستخدم بالتفصيل
              </DialogDescription>
            </DialogHeader>

            {selectedUser && (
              <div className="space-y-6 text-right">

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">الاسم</p>
                    <p className="text-sm font-medium">{selectedUser.name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">البريد الإلكتروني</p>
                    <p className="text-sm font-medium">{selectedUser.email}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">الهاتف</p>
                    <p className="text-sm font-medium">{selectedUser.phone}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">الحالة</p>
                    <Badge variant={selectedUser.status === "active" ? "default" : "secondary"}>
                      {selectedUser.status === "active" ? "نشط" : "غير نشط"}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">تاريخ الانضمام</p>
                    <p className="text-sm font-medium">{selectedUser.joinDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي الحجوزات</p>
                    <p className="text-sm font-medium">{selectedUser.bookings}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3">سجل الحجوزات</h3>
                  <p className="text-sm text-muted-foreground">لا توجد حجوزات حديثة</p>
                </div>

              </div>
            )}

          </DialogContent>
        </Dialog>

      </div>
    </>
  );
};

export default Users;
