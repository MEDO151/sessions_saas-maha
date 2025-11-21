import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const blogPosts = [
    {
      id: 1,
      title: 'قوة التعاطف مع الذات في التطور الشخصي',
      excerpt: 'اكتشف كيف يمكن للّطف مع نفسك أن يسرّع رحلتك نحو الشفاء والتحول الإيجابي.',
      category: 'النمو',
      date: '15 أبريل 2025',
      readTime: 'قراءة لمدة 5 دقائق',
      image: 'gradient-primary',
    },
    {
      id: 2,
      title: 'فهم صوتك الداخلي',
      excerpt: 'تعلم التمييز بين ذاتك الحقيقية وصوت الشك الذي يعيق تقدمك.',
      category: 'اكتشاف الذات',
      date: '10 أبريل 2025',
      readTime: 'قراءة لمدة 7 دقائق',
      image: 'gradient-primary',
    },
    {
      id: 3,
      title: 'بناء المرونة العاطفية',
      excerpt: 'استراتيجيات عملية لتطوير القوة الداخلية لمواجهة تحديات الحياة برقي وثبات.',
      category: 'الرفاهية',
      date: '5 أبريل 2025',
      readTime: 'قراءة لمدة 6 دقائق',
      image: 'gradient-primary',
    },
    {
      id: 4,
      title: 'الرحلة من الألم إلى الهدف',
      excerpt: 'كيف نحوّل التجارب الصعبة إلى مصدر للحكمة والقوة الشخصية.',
      category: 'الشفاء',
      date: '28 مارس 2025',
      readTime: 'قراءة لمدة 8 دقائق',
      image: 'gradient-primary',
    },
    {
      id: 5,
      title: 'وضع الحدود بحب',
      excerpt: 'إن إنشاء حدود صحية لا يعني القسوة، بل هو فن احترام الذات.',
      category: 'النمو',
      date: '20 مارس 2025',
      readTime: 'قراءة لمدة 5 دقائق',
      image: 'gradient-primary',
    },
    {
      id: 6,
      title: 'ممارسات اليقظة في الحياة اليومية',
      excerpt: 'تقنيات بسيطة وفعالة لجلب مزيد من الوعي والسلام إلى روتينك اليومي.',
      category: 'الرفاهية',
      date: '15 مارس 2025',
      readTime: 'قراءة لمدة 6 دقائق',
      image: 'gradient-primary',
    },
  ];

  const categories = ['الكل', 'الشفاء', 'النمو', 'الرفاهية', 'اكتشاف الذات'];

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
              رؤى و<span className="text-primary">إلهام</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              استكشف مقالات حول الشفاء والنمو والرفاهية واكتشاف الذات لدعم رحلتك نحو التحول الإيجابي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* الفئات */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'الكل' ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden flex flex-col justify-between h-full hover:shadow-elegant transition-shadow duration-300">
                  <div className={`h-48 ${post.image}`} />
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold leading-tight line-clamp-2">
                      {post.title.split(' ').slice(0, 4).join(' ')+'...'}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2">
                        اقرأ المزيد
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم النشرة البريدية */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ابقَ مُلهمًا
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                اشترك لتصلك أحدث المقالات والنصائح والإلهامات مباشرة إلى بريدك الإلكتروني.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="gold" size="lg">
                  اشتراك
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
