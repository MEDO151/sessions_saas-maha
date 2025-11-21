import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Video, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    privacyAccepted: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast.error('يرجى قبول سياسة الخصوصية للمتابعة');
      return;
    }
    toast.success('تم إرسال طلب الحجز! ستصلك رسالة تأكيد عبر البريد الإلكتروني تحتوي على رابط الجلسة على زووم قريبًا.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      sessionType: '',
      preferredDate: '',
      preferredTime: '',
      notes: '',
      privacyAccepted: false,
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen pt-20">

      {/* قسم البداية */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              احجز <span className="text-primary">جلستك</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اتخذ الخطوة الأولى نحو التحول. احجز جلستك التدريبية الشخصية اليوم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Video className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">عبر الإنترنت على زووم</h3>
              <p className="text-sm text-muted-foreground">يمكنك الانضمام من أي مكان</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">جلسات لمدة 50 دقيقة</h3>
              <p className="text-sm text-muted-foreground">تدريب مركز وفعّال</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">أسلوب مخصص لك</h3>
              <p className="text-sm text-muted-foreground">مصمم حسب احتياجاتك الفردية</p>
            </Card>
          </div>
        </div>
      </section>

      {/* نموذج الحجز */}
      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input
                      id="name"
                      placeholder="اكتب اسمك"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الجوال</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+966 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionType">نوع الجلسة *</Label>
                  <Select
                    value={formData.sessionType}
                    onValueChange={(value) => handleChange('sessionType', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الجلسة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developmental">استشارة تطويرية</SelectItem>
                      <SelectItem value="therapeutic">استشارة علاجية</SelectItem>
                      <SelectItem value="discovery">جلسة تعريفية (15 دقيقة - مجانًا)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">التاريخ المفضل *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">الوقت المفضل *</Label>
                    <Input
                      id="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">ملاحظات إضافية</Label>
                  <Textarea
                    id="notes"
                    placeholder="أخبرني بما ترغب بالتركيز عليه أو أي أسئلة لديك..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => handleChange('privacyAccepted', checked as boolean)}
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    أوافق على سياسة الخصوصية وأسمح باستلام تفاصيل الجلسة عبر البريد الإلكتروني *
                  </label>
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <Calendar className="mr-2" />
                  احجز الآن
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  ستتلقى رسالة تأكيد على بريدك الإلكتروني تحتوي على رابط الجلسة خلال 24 ساعة.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
