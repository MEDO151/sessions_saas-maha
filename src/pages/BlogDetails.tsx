import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import mainImg from "../assets/hero.jpg";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 mx-3">
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
      <article className="container mx-auto max-w-4xl bg-background p-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground drop-shadow-lg">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="overflow-hidden mb-12 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <div
              className="text-lg leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Button variant="ghost" asChild className="gap-2">
                <Link to="/blog">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  العودة للمدونة
                </Link>
              </Button>

              <Button variant="gold" asChild className="gap-2">
                <Link to="/booking" state={{ topic: post.title }}>
                  <Calendar className="w-4 h-4" />
                  احجز استشارة حول هذا الموضوع
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>كتب بواسطة مها</span>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetails;
