import React, { useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

/** أنواع */
interface Service {
  id: number;
  title: string;
  description: string;
  duration: number;
  price: number;
  outcomes: string[];
  active: boolean;
}

interface FormData {
  title: string;
  description: string;
  duration: string;
  price: string;
  outcomes: string; // one per line
  active: boolean;
}

/** بيانات وهمية */
const mockServices: Service[] = [
  {
    id: 1,
    title: "جلسة تدريب حياتي",
    description: "تدريب فردي لمساعدتك على تحقيق أهداف حياتك",
    duration: 60,
    price: 120,
    outcomes: ["وضوح في الأهداف", "خطة عمل", "دعم مستمر"],
    active: true,
  },
  {
    id: 2,
    title: "استشارة علاجية",
    description: "دعم علاجي مهني للصحة النفسية",
    duration: 90,
    price: 150,
    outcomes: ["شفاء عاطفي", "استراتيجيات مواكبة", "وضوح ذهني"],
    active: true,
  },
  {
    id: 3,
    title: "جلسة عافية",
    description: "تدريب توازني للجسم والعقل",
    duration: 60,
    price: 120,
    outcomes: ["إدارة التوتر", "توازن بين العمل والحياة", "ممارسات العناية الذاتية"],
    active: true,
  },
  {
    id: 4,
    title: "تطوير شخصي",
    description: "فتح الإمكانات الشخصية من خلال تدريب مركز",
    duration: 45,
    price: 100,
    outcomes: ["تطوير مهارات", "بناء ثقة", "ترقية مهنية"],
    active: false,
  },
];

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [deletingServiceId, setDeletingServiceId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    duration: "",
    price: "",
    outcomes: "",
    active: true,
  });

  const handleCreate = () => {
    setEditingService(null);
    setFormData({
      title: "",
      description: "",
      duration: "",
      price: "",
      outcomes: "",
      active: true,
    });
    setShowModal(true);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      duration: service.duration.toString(),
      price: service.price.toString(),
      outcomes: service.outcomes.join("\n"),
      active: service.active,
    });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setDeletingServiceId(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deletingServiceId == null) return;
    setServices((prev) => prev.filter((s) => s.id !== deletingServiceId));
    toast.success("تم حذف الخدمة بنجاح");
    setShowDeleteDialog(false);
    setDeletingServiceId(null);
  };

  const handleSubmit = () => {
    // Validate بسيط
    if (!formData.title.trim()) {
      toast.error("الرجاء إدخال اسم الخدمة");
      return;
    }
    const parsedDuration = parseInt(formData.duration || "0", 10);
    const parsedPrice = parseInt(formData.price || "0", 10);
    const parsedOutcomes = formData.outcomes
      .split("\n")
      .map((o) => o.trim())
      .filter((o) => o.length > 0);

    if (editingService) {
      setServices((prev) =>
        prev.map((s) =>
          s.id === editingService.id
            ? {
                ...s,
                title: formData.title,
                description: formData.description,
                duration: Number.isNaN(parsedDuration) ? s.duration : parsedDuration,
                price: Number.isNaN(parsedPrice) ? s.price : parsedPrice,
                outcomes: parsedOutcomes,
                active: formData.active,
              }
            : s
        )
      );
      toast.success("تم تحديث الخدمة بنجاح");
    } else {
      const newId = services.length ? Math.max(...services.map((s) => s.id)) + 1 : 1;
      const newService: Service = {
        id: newId,
        title: formData.title,
        description: formData.description,
        duration: Number.isNaN(parsedDuration) ? 60 : parsedDuration,
        price: Number.isNaN(parsedPrice) ? 0 : parsedPrice,
        outcomes: parsedOutcomes,
        active: formData.active,
      };
      setServices((prev) => [...prev, newService]);
      toast.success("تم إنشاء الخدمة بنجاح");
    }

    setShowModal(false);
    setEditingService(null);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-right">
            <h1 className="text-3xl font-semibold text-foreground mb-2">إدارة الخدمات</h1>
            <p className="text-muted-foreground">إنشاء وإدارة خدمات التدريب</p>
          </div>

          <Button onClick={handleCreate} className="gap-2">
            <Plus className="w-4 h-4" />
            إضافة خدمة
          </Button>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="p-6 hover:shadow-elegant transition-shadow">
              <div className="space-y-4 text-right">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <Badge variant={service.active ? "default" : "secondary"}>
                      {service.active ? "نشطة" : "غير نشطة"}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{service.description}</p>

                <div className="flex items-center gap-4 text-sm justify-end">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration} دقيقة</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">نتائج متوقعة:</p>
                  <ul className="space-y-1">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(service)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    تعديل
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* مودال الإنشاء / التعديل */}
        <Dialog open={showModal} onOpenChange={(open: boolean) => setShowModal(open)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingService ? "تعديل الخدمة" : "إنشاء خدمة جديدة"}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 text-right">
              <div>
                <Label htmlFor="title">اسم الخدمة</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="مثال: جلسة تدريب حياتي"
                />
              </div>

              <div>
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="وصف مختصر عن الخدمة"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">المدة (بالدقائق)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="60"
                  />
                </div>
                <div>
                  <Label htmlFor="price">السعر ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="120"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="outcomes">النتائج المتوقعة (سطر لكل نتيجة)</Label>
                <Textarea
                  id="outcomes"
                  value={formData.outcomes}
                  onChange={(e) => setFormData({ ...formData, outcomes: e.target.value })}
                  placeholder={"وضوح في الأهداف\nخطة عمل\nدعم مستمر"}
                  rows={4}
                />
              </div>

              <div className="flex items-center justify-end gap-2">
                <Label htmlFor="active">نشطة</Label>
                <Switch
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked: boolean) => setFormData({ ...formData, active: checked })}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowModal(false)}>
                إلغاء
              </Button>
              <Button onClick={handleSubmit}>
                {editingService ? "تحديث" : "إنشاء"} الخدمة
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* تأكيد الحذف */}
        <AlertDialog open={showDeleteDialog} onOpenChange={(open: boolean) => setShowDeleteDialog(open)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>حذف الخدمة</AlertDialogTitle>
              <AlertDialogDescription>
                هل أنت متأكد أنك تريد حذف هذه الخدمة؟ لا يمكن التراجع عن هذا الإجراء.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>إلغاء</AlertDialogCancel>
              <AlertDialogAction onClick={confirmDelete}>حذف</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Services;
