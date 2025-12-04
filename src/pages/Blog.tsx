import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import mainImg from "../assets/hero.jpg";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = ["الكل", "الشفاء", "النمو", "الرفاهية", "اكتشاف الذات"];

  return (
    <div className="min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
              رؤى و<span className="text-accent">إلهام</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              استكشف مقالات حول الشفاء والنمو والرفاهية واكتشاف الذات لدعم رحلتك
              نحو التحول الإيجابي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* الفئات */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "الكل" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="py-12 px-4 pb-20 bg-white">
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
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
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
                      {post.title.split(" ").slice(0, 4).join(" ") + "..."}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="gap-2"
                      >
                        <Link to={`/blog/${post.id}`}>
                          اقرأ المزيد
                          <ArrowRight className="w-4 h-4" />
                        </Link>
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
      <section className="py-20 px-4 from-secondary/20 to-background">
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
                اشترك لتصلك أحدث المقالات والنصائح والإلهامات مباشرة إلى بريدك
                الإلكتروني.
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
