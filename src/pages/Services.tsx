// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import { TrendingUp, Heart, Clock, Video, CheckCircle2 } from 'lucide-react';

// const Services = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const developmentalOutcomes = [
//     'زيادة الوعي الذاتي والذكاء العاطفي',
//     'تحديد الأهداف بوضوح ووضع خطط عملية لتحقيقها',
//     'تحسين مهارات القيادة والتواصل',
//     'تعزيز الثقة بالنفس والإيمان بالقدرات',
//     'اتخاذ قرارات أكثر وضوحاً وفعالية',
//     'تنمية المرونة والقدرة على التكيّف',
//   ];

//   const therapeuticOutcomes = [
//     'الشفاء العاطفي واستعادة التوازن الداخلي',
//     'تقنيات فعالة لإدارة التوتر والقلق',
//     'تحقيق توازن صحي بين الحياة والعمل',
//     'التعامل مع التجارب السابقة بشكل إيجابي',
//     'بناء آليات صحية للتعامل مع الضغوط',
//     'تنمية التعاطف مع الذات والقبول الداخلي',
//   ];

//   return (
//     <div className="min-h-screen pt-20">

//       {/* القسم الرئيسي */}
//       <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
//         <div className="container mx-auto max-w-4xl">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-6"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//               <span className="text-primary">الخدمات</span> الاستشارية
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               جلسات تدريبية مخصصة لدعم رحلتك الفريدة نحو النمو، والشفاء، والتوازن النفسي.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* الاستشارات التطويرية */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="overflow-hidden hover:shadow-elegant transition-shadow duration-300">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="bg-gradient-primary p-12 flex items-center justify-center">
//                   <TrendingUp className="w-32 h-32 text-white opacity-80" />
//                 </div>
//                 <div className="p-8 md:p-12">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <TrendingUp className="w-8 h-8 text-primary" />
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                       الاستشارات التطويرية
//                     </h2>
//                   </div>
                  
//                   <p className="text-lg text-muted-foreground mb-6">
//                     تركز على النمو الشخصي، والوعي الذاتي، وتطوير القيادة، وبناء الثقة بالنفس.  
//                     مناسبة لكل من يسعى إلى تحقيق أهدافه وتعزيز إمكاناته.
//                   </p>

//                   <div className="flex items-center space-x-4 mb-6 text-muted-foreground">
//                     <div className="flex items-center space-x-2">
//                       <Clock className="w-5 h-5 text-primary" />
//                       <span>50 دقيقة</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Video className="w-5 h-5 text-primary" />
//                       <span>عن بُعد عبر Zoom</span>
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <h3 className="font-semibold text-lg mb-4">ما الذي ستحققه:</h3>
//                     <ul className="space-y-2">
//                       {developmentalOutcomes.map((outcome) => (
//                         <li key={outcome} className="flex items-start space-x-2">
//                           <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                           <span className="text-muted-foreground">{outcome}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Link to="/booking">
//                     <Button variant="gold" size="lg" className="w-full md:w-auto">
//                       احجز هذه الخدمة
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* الاستشارات العلاجية */}
//       <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
//         <div className="container mx-auto max-w-5xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="overflow-hidden hover:shadow-elegant transition-shadow duration-300">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="p-8 md:p-12 order-2 md:order-1">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <Heart className="w-8 h-8 text-primary" />
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                       الاستشارات العلاجية
//                     </h2>
//                   </div>
                  
//                   <p className="text-lg text-muted-foreground mb-6">
//                     تركز على الشفاء العاطفي، واستعادة التوازن الداخلي، وإدارة التوتر.  
//                     توفر مساحة آمنة تساعدك على مواجهة التحديات الحياتية بثقة وهدوء.
//                   </p>

//                   <div className="flex items-center space-x-4 mb-6 text-muted-foreground">
//                     <div className="flex items-center space-x-2">
//                       <Clock className="w-5 h-5 text-primary" />
//                       <span>50 دقيقة</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Video className="w-5 h-5 text-primary" />
//                       <span>عن بُعد عبر Zoom</span>
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <h3 className="font-semibold text-lg mb-4">ما الذي ستحققه:</h3>
//                     <ul className="space-y-2">
//                       {therapeuticOutcomes.map((outcome) => (
//                         <li key={outcome} className="flex items-start space-x-2">
//                           <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                           <span className="text-muted-foreground">{outcome}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Link to="/booking">
//                     <Button variant="gold" size="lg" className="w-full md:w-auto">
//                       احجز هذه الخدمة
//                     </Button>
//                   </Link>
//                 </div>
//                 <div className="bg-gradient-primary p-12 flex items-center justify-center order-1 md:order-2">
//                   <Heart className="w-32 h-32 text-white opacity-80" />
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* تفاصيل الجلسة */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">تفاصيل الجلسة</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               transition={{ duration: 0.6 }}
//             >
//               <Card className="p-6 text-center h-full">
//                 <Video className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">عن بُعد بالكامل</h3>
//                 <p className="text-muted-foreground">
//                   تُقام جميع الجلسات عبر Zoom، مما يتيح لك التواصل من أي مكان في العالم بسهولة.
//                 </p>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Card className="p-6 text-center h-full">
//                 <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">مرونة في المواعيد</h3>
//                 <p className="text-muted-foreground">
//                   اختر الأوقات التي تناسبك. الجلسات متاحة على مدار الأسبوع لتناسب جدولك الخاص.
//                 </p>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <Card className="p-6 text-center h-full">
//                 <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">رعاية مخصصة</h3>
//                 <p className="text-muted-foreground">
//                   تُصمم كل جلسة بناءً على احتياجاتك وأهدافك وظروفك الخاصة لتحقيق أفضل نتيجة ممكنة.
//                 </p>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* قسم الدعوة للحجز */}
//       <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
//         <div className="container mx-auto max-w-4xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-6"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold">
//               هل أنت مستعد لبدء رحلتك؟
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               اتخذ الخطوة الأولى نحو التغيير. احجز جلستك الآن واكتشف قوة التطوير الذاتي والتوجيه الشخصي.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/booking">
//                 <Button variant="gold" size="xl">
//                   احجز جلسة الآن
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button variant="outline" size="xl">
//                   تواصل معنا
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
