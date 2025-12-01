import React, { useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { toast } from "sonner";

type SettingsState = {
  zoomApiKey: string;
  zoomApiSecret: string;
  zoomAutoCreate: boolean;
  calendlyLink: string;
  calendlySync: boolean;
  smtpHost: string;
  smtpPort: string;
  smtpEmail: string;
  smtpPassword: string;
  emailBookingConfirm: boolean;
  emailReminder: boolean;
  emailCancellation: boolean;
};

const Settings: React.FC = () => {
  const [values, setValues] = useState<SettingsState>({
    zoomApiKey: "",
    zoomApiSecret: "",
    zoomAutoCreate: true,
    calendlyLink: "",
    calendlySync: false,
    smtpHost: "",
    smtpPort: "",
    smtpEmail: "",
    smtpPassword: "",
    emailBookingConfirm: true,
    emailReminder: true,
    emailCancellation: true,
  });

  const handleChange = (key: keyof SettingsState, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // TODO: call API to persist settings
    toast.success("تم حفظ الإعدادات بنجاح");
    console.log("Saved settings:", values);
  };

  return (
    <>
      <div className="space-y-6 text-right">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">إعدادات النظام</h1>
          <p className="text-muted-foreground">تخصيص إعدادات النظام ودمج الخدمات</p>
        </div>

        {/* Zoom Integration */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">تكامل Zoom</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="zoom-api-key">مفتاح API لـ Zoom</Label>
              <Input
                id="zoom-api-key"
                type="password"
                placeholder="أدخل مفتاح Zoom API"
                value={values.zoomApiKey}
                onChange={(e) => handleChange("zoomApiKey", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="zoom-api-secret">سر API لـ Zoom</Label>
              <Input
                id="zoom-api-secret"
                type="password"
                placeholder="أدخل سر Zoom API"
                value={values.zoomApiSecret}
                onChange={(e) => handleChange("zoomApiSecret", e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <Label htmlFor="zoom-auto" className="whitespace-nowrap">إنشاء روابط Zoom تلقائياً للحجوزات المؤكدة</Label>
              <Switch
                id="zoom-auto"
                checked={values.zoomAutoCreate}
                onCheckedChange={(checked: boolean) => handleChange("zoomAutoCreate", checked)}
              />
            </div>
          </div>
        </Card>

        {/* Calendly Integration */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">تكامل Calendly</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="calendly-link">رابط الحجز في Calendly</Label>
              <Input
                id="calendly-link"
                placeholder="https://calendly.com/your-link"
                value={values.calendlyLink}
                onChange={(e) => handleChange("calendlyLink", e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <Label htmlFor="calendly-sync">مزامنة الحجوزات مع Calendly</Label>
              <Switch
                id="calendly-sync"
                checked={values.calendlySync}
                onCheckedChange={(checked: boolean) => handleChange("calendlySync", checked)}
              />
            </div>
          </div>
        </Card>

        {/* Email Configuration */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">إعدادات البريد الإلكتروني</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="smtp-host">مضيف SMTP</Label>
              <Input
                id="smtp-host"
                placeholder="smtp.gmail.com"
                value={values.smtpHost}
                onChange={(e) => handleChange("smtpHost", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="smtp-port">منفذ SMTP</Label>
                <Input
                  id="smtp-port"
                  placeholder="587"
                  value={values.smtpPort}
                  onChange={(e) => handleChange("smtpPort", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="smtp-email">عنوان البريد</Label>
                <Input
                  id="smtp-email"
                  type="email"
                  placeholder="your@email.com"
                  value={values.smtpEmail}
                  onChange={(e) => handleChange("smtpEmail", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="smtp-password">كلمة مرور البريد</Label>
              <Input
                id="smtp-password"
                type="password"
                placeholder="••••••••"
                value={values.smtpPassword}
                onChange={(e) => handleChange("smtpPassword", e.target.value)}
              />
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">إشعارات البريد الإلكتروني</h3>

              <div className="flex items-center justify-end gap-2">
                <Label htmlFor="email-booking-confirm">إرسال تأكيد الحجز</Label>
                <Switch
                  id="email-booking-confirm"
                  checked={values.emailBookingConfirm}
                  onCheckedChange={(checked: boolean) => handleChange("emailBookingConfirm", checked)}
                />
              </div>

              <div className="flex items-center justify-end gap-2">
                <Label htmlFor="email-reminder">إرسال تذكير قبل 24 ساعة</Label>
                <Switch
                  id="email-reminder"
                  checked={values.emailReminder}
                  onCheckedChange={(checked: boolean) => handleChange("emailReminder", checked)}
                />
              </div>

              <div className="flex items-center justify-end gap-2">
                <Label htmlFor="email-cancellation">إرسال إشعار عند الإلغاء</Label>
                <Switch
                  id="email-cancellation"
                  checked={values.emailCancellation}
                  onCheckedChange={(checked: boolean) => handleChange("emailCancellation", checked)}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Admin & Staff Management */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">أدوار المشرفين والموظفين</h2>
          <div className="space-y-4 text-right">
            <p className="text-sm text-muted-foreground">إدارة صلاحيات الوصول والمهام الإدارية</p>
            <Button variant="outline">إدارة الأدوار</Button>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} size="lg" className="gap-2">
            <Save className="w-4 h-4" />
            حفظ الإعدادات
          </Button>
        </div>
      </div>
    </>
  );
};

export default Settings;
