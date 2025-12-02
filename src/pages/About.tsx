import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Heart, Target } from 'lucide-react';
import mainImg from '../assets/hero.jpg'
const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const roles = [
    {
      icon: Target,
      title: 'قائد تطوير الإنسان',
      description: 'أوجه الأفراد والمنظمات نحو النمو المستدام والتحول الإيجابي العميق.',
    },
    {
      icon: BookOpen,
      title: 'مستشار',
      description: 'أقدم رؤى وخططًا استراتيجية لدعم التطور الشخصي والمهني.',
    },
    {
      icon: Heart,
      title: 'مدرب حياة',
      description: 'أوفر بيئة آمنة للشفاء واكتشاف الذات وتمكين التغيير الإيجابي الدائم.',
    },
  ];

  const approach = [
    {
      title: 'الإصغاء العميق',
      description: 'فهم قصتك وتحدياتك وطموحاتك بأسلوب رحيم ومتفهم.',
    },
    {
      title: 'الاستكشاف معًا',
      description: 'نكتشف أنماطك ونقاط قوتك وفرص النمو من خلال حوار تأملي بنّاء.',
    },
    {
      title: 'إيجاد الوضوح',
      description: 'نضع رؤى واضحة واستراتيجيات عملية مصممة خصيصًا لرحلتك.',
    },
    {
      title: 'دعم النمو المستمر',
      description: 'تقديم الإرشاد والمتابعة المستمرة خلال مسارك نحو التغيير والتحول.',
    },
  ];

  const credentials = [
    'مدرب حياة معتمد (من ICF)',
    'ماجستير في علم النفس',
    'شهادة في الإرشاد العلاجي',
    'أكثر من 10 سنوات من الخبرة في التدريب',
    'متخصصة في علم النفس التنموي',
    'ممارسة معتمدة لليقظة الذهنية (Mindfulness)',
  ];

  return (
    <div className="min-h-screen relative">

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
      <section className="pt-[12rem] pb-20 px-4 from-secondary/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
              مها الضافر
            </h1>
            <p className="text-2xl md:text-3xl text-accent">
              مرشدة للنمو الإنساني والتوازن الداخلي
            </p>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              مدربة حياة معتمدة، أساعد الأفراد على اكتشاف ذواتهم الحقيقية وتحقيق التحول الإيجابي
              من خلال الشفاء والنمو والرفاهية الشاملة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* قسم القصة */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-xl text-primary"
          >
            <p>
              بدأت رحلتي في التدريب الحياتي من إدراك بسيط وعميق في الوقت نفسه:
              كل إنسان يحمل بداخله قدرة مذهلة على النمو والشفاء والتحول.
              وخلال مسيرتي المهنية، شهدت العديد من الأفراد وهم يستعيدون قوتهم
              ويتجاوزون آلام الماضي ليبنوا حياة مليئة بالمعنى والسعادة.
            </p>
            <p>
              ما يحفزني هو إيماني بأن التغيير الحقيقي يبدأ من الداخل.
              دوري ليس "إصلاح" أحد، لأن لا أحد مكسور،
              بل أعتبر نفسي شريكة ومرشدة في رحلتك نحو اكتشاف الذات والتمكين.
              أخلق مساحة آمنة خالية من الأحكام، حيث يُحتفى بالضعف وتُغذّى القوة.
            </p>
            <p>
              من خلال أكثر من عقد من الخبرة في الاستشارات التطويرية والعلاجية،
              كان لي شرف دعم الأفراد خلال التحولات الكبرى في حياتهم،
              ومساعدتهم على تجاوز التحديات وتحقيق إنجازات ملموسة.
              طريقتي تمزج بين الأساليب العلمية والحدس العميق والاهتمام الحقيقي بكل شخص.
            </p>
            <p>
              أؤمن بأن الرفاهية شاملة – تشمل العقل والجسد والروح.
              سواء كنت تسعى لتجاوز العقبات أو تعزيز ثقتك بنفسك أو تحقيق التوازن،
              فأنا هنا لأرافقك خطوة بخطوة في رحلتك نحو أفضل نسخة منك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* قسم الأدوار */}
      <section className="py-20 px-4  from-secondary/20 to-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">الأدوار التي أقدمها</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              أخدمك من خلال أدوار متعددة تجمع بين الدعم والإرشاد والتمكين
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full text-center hover:shadow-elegant transition-shadow duration-300">
                  <role.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                  <p className="text-muted-foreground">{role.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* المؤهلات والخبرة */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">المؤهلات والخبرة</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* منهجية التدريب */}
      <section className="py-20 px-4 from-secondary/20 to-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">منهجية التدريب</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              عملية من أربع مراحل مصممة لدعم رحلتك الخاصة نحو التحول
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {approach.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full  hover:shadow-elegant transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-accent font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الحجز */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 text-center gradient-primary">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                هل أنت جاهز لبدء رحلتك التحولية؟
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                احجز جلستك التعريفية اليوم، وابدأ أول خطوة نحو اكتشاف أفضل نسخة منك.
              </p>
              <Link to="/booking">
                <Button variant="secondary" size="xl">
                  احجز جلستك الآن
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
