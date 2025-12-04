import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* العلامة التجارية */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              مهـا ال - ضـافر
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              مدربة حياة متخصصة في مجالات الشفاء، والنمو، والتوازن، واكتشاف الذات.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  عن مهـا
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>جلسات التطوير الذاتي</li>
              <li>الاستشارات العلاجية</li>
              <li>جلسات عبر الإنترنت (Zoom)</li>
            </ul>
          </div>

          {/* تواصل */}
          <div>
            <h4 className="font-semibold mb-4">تواصـل</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@mahaaldafer.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+966 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} مهـا الضـافر. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
