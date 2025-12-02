import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Instagram, Linkedin, MessageSquare, Video } from 'lucide-react';
import { toast } from 'sonner';
import mainImg from '../assets/hero.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم إرسال الرسالة! سيتم التواصل معك خلال 24 ساعة القادمة.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@mahaaldafer.com',
      link: 'mailto:info@mahaaldafer.com',
    },
    {
      icon: Phone,
      title: 'الهاتف / واتساب',
      value: '+966 XXX XXX XXX',
      link: 'tel:+966XXXXXXXXX',
    },
    {
      icon: Instagram,
      title: 'إنستغرام',
      value: '@mahaaldafer',
      link: 'https://instagram.com/mahaaldafer',
    },
    {
      icon: Linkedin,
      title: 'لينكدإن',
      value: 'Maha Aldafer',
      link: 'https://linkedin.com/in/mahaaldafer',
    },
  ];

  return (
    <div className="min-h-screen ">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />

      {/* قسم البداية */}
      <section className="pt-52 pb-20 px-4 from-secondary/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
              تواصل <span className="text-accent">معي</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              هل لديك أسئلة أو ترغب بمعرفة المزيد؟ أنا هنا لمساعدتك في رحلتك نحو النمو والرفاهية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ملاحظة الجلسات */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start space-x-3">
              <Video className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">كل الجلسات عبر الإنترنت</h3>
                <p className="text-sm text-muted-foreground">
                  جميع الجلسات التدريبية تُعقد عبر منصة زووم، مما يتيح لك التواصل من أي مكان في العالم بسهولة ومرونة.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* نموذج التواصل */}
      <section className="py-12 px-4 pb-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* نموذج المراسلة */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">أرسل رسالة</h2>
                  <p className="text-muted-foreground">
                    يرجى تعبئة النموذج أدناه، وسأقوم بالرد عليك خلال 24 ساعة.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم *</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة *</Label>
                    <Textarea
                      id="message"
                      placeholder="أخبرني كيف يمكنني مساعدتك..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <MessageSquare className="mr-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* معلومات التواصل */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="p-6 hover:shadow-elegant transition-shadow duration-300">
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 gradient-primary text-white">
                <h3 className="text-2xl font-bold mb-4">هل أنت جاهز للبدء؟</h3>
                <p className="mb-6 text-white/90">
                  احجز جلستك الأولى اليوم وابدأ رحلتك نحو الشفاء والنمو واكتشاف الذات.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/booking">احجز جلسة</a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
