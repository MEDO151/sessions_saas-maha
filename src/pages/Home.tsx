import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, TrendingUp, Compass, Video, Calendar, MessageSquare } from 'lucide-react';
import heroBg from '../assets/hero.jpg';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const coreValues = [
    {
      icon: Heart,
      title: 'الاستشفاء',
      description: 'احتضن السلام الداخلي والراحة النفسية من خلال دعم موجه بعناية.',
    },
    {
      icon: TrendingUp,
      title: 'التطوير',
      description: 'اكتشف قدراتك الكاملة وحقق نمواً شخصياً عميقاً وذا معنى.',
    },
    {
      icon: Sparkles,
      title: 'الرفاهية',
      description: 'ازرع التوازن والوعي الذاتي وحقق أسلوب حياة متناغم وصحي.',
    },
    {
      icon: Compass,
      title: 'استكشاف الكينونة',
      description: 'ارتحل في أعماق ذاتك لتتعرف على حقيقتك ورسالتك في الحياة.',
    },
  ];

  const processSteps = [
    {
      icon: Calendar,
      title: 'احجز جلستك',
      description: 'اختر الوقت المناسب لك من خلال نظام الحجز السهل لدينا.',
    },
    {
      icon: Video,
      title: 'اللقاء عبر زووم',
      description: 'تواصل من أي مكان لجلسة تدريبية مصممة خصيصاً لك.',
    },
    {
      icon: MessageSquare,
      title: 'خطة المتابعة',
      description: 'احصل على توجيهات وخطوات عملية مخصصة لمسارك التطويري.',
    },
  ];

  const testimonials = [
    {
      name: 'سارة أ.',
      text: 'ساعدتني مها على اكتشاف قوى داخلية لم أكن أعلم بوجودها. إرشادها غيّر حياتي بالكامل.',
      role: 'عميلة',
    },
    {
      name: 'ليلى م.',
      text: 'الاستشارات العلاجية وفرت لي مساحة آمنة للشفاء. تجربة غيّرت مسار حياتي بحق.',
      role: 'عميلة',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />

      {/* القسم الرئيسي */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            اكتشف أفضل نسخة من{' '}
            <span className="text-primary">نفسك</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            استشفاء، تطوير، رفاهية، واستكشاف للكينونة من خلال جلسات تدريبية مخصصة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button variant="gold" size="xl" className="gap-2">
                <Video size={20} />
                احجز جلسة
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl">
                اعرف المزيد
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* القيم الأساسية */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              القيم الأساسية الأربع
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              يستند أسلوبي في التدريب على هذه المبادئ الجوهرية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-shadow duration-300">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* نبذة تعريفية */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                تعرّف على <span className="text-primary">مدربتك</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                أنا مها الضافر، مدربة حياة معتمدة، أساعد الأفراد على خوض رحلات تحويلية
                نحو اكتشاف الذات والنمو المستمر. أقدّم استشارات تطويرية وعلاجية
                في بيئة آمنة وداعمة للشفاء والتمكين.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                أسلوبي يجمع بين التقنيات العلمية الحديثة والاستماع المتفهم،
                لمساعدتك على اكتشاف قدراتك وتحقيق التغيير الإيجابي المستدام.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg">
                  اقرأ قصتي
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-primary shadow-elegant" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              خدمات التدريب
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              جلسات مخصصة لدعم رحلتك الفريدة نحو التطور والاتزان
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full hover:shadow-elegant transition-shadow duration-300">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">استشارات تطويرية</h3>
                <p className="text-muted-foreground mb-6">
                  تركّز على النمو الشخصي، الوعي الذاتي، تطوير القيادة،
                  وبناء الثقة بالنفس. مثالية لمن يسعون إلى تحقيق أهدافهم
                  واكتشاف إمكاناتهم.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• جلسات عبر زووم لمدة 50 دقيقة</li>
                  <li>• تحديد الأهداف ووضع خطط العمل</li>
                  <li>• تعزيز القيادة والثقة بالنفس</li>
                  <li>• استراتيجيات النمو الشخصي</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-elegant transition-shadow duration-300">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">استشارات علاجية</h3>
                <p className="text-muted-foreground mb-6">
                  جلسات مخصصة للشفاء العاطفي، واستعادة التوازن الداخلي،
                  والتعامل مع الضغوط والتحديات الحياتية بمرونة وسلام.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• بيئة آمنة وداعمة</li>
                  <li>• تقنيات للشفاء العاطفي</li>
                  <li>• إدارة التوتر والقلق</li>
                  <li>• تعزيز السلام الداخلي</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* خطوات العمل */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              خطوات العمل
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ابدأ رحلتك نحو التغيير بثلاث خطوات بسيطة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center "
              >
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-elegant">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[-40%] -z-10 w-[70%] h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/booking">
              <Button variant="gold" size="xl">
                ابدأ رحلتك اليوم
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* آراء العملاء */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              آراء العملاء
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              قصص حقيقية لأشخاص غيروا حياتهم من خلال التدريب
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-lg mb-6 italic">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
