// Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Settings, BookOpen, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ user: initialUser = null, onLogout = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [user, setUser] = useState(initialUser); // if null => not logged in
  const location = useLocation();
  const accountRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close account dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAccountOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAccountOpen(false);
  }, [location.pathname]);

  // demo login (if you want to test without auth)
  useEffect(() => {
    if (!initialUser) {
      // comment out if you don't want demo user
      setUser({
        name: 'مها ال - ضافر',
        email: 'maha@example.com',
        avatar: null, // you can replace with image url
      });
    }
  }, [initialUser]);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن مهـا', path: '/about' },
    { name: 'المدونة', path: '/blog' },
    { name: 'تواصـل', path: '/contact' },
  ];

  const accountItems = [
    { label: 'الملف الشخصي', icon: <User size={16} />, to: '/profile' },
    { label: 'لوحة التحكم', icon: <Grid size={16} />, to: '/admin' },
    { label: 'الحجوزات', icon: <BookOpen size={16} />, to: 'admin/bookings' },
    { label: 'الإعدادات', icon: <Settings size={16} />, to: 'admin/settings' },
  ];

  const handleLogout = () => {
    setUser(null);
    setIsAccountOpen(false);
    onLogout(); // caller can handle logout logic
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* الشعار */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              مهـا ال - ضـافر
            </div>
          </Link>

          {/* قائمة سطح المكتب */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-colors ${isScrolled ? 'hover:text-primary/50' : 'hover:text-white/50'}  ${
                    location.pathname === link.path ?  isScrolled ? 'text-primary' : 'text-white' : isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* زر تسجيل الدخول أو قائمة الحساب */}
            {user ? (
              <div className="relative" ref={accountRef}>
                <button
                  onClick={() => setIsAccountOpen((s) => !s)}
                  aria-haspopup="menu"
                  aria-expanded={isAccountOpen}
                  className="flex items-center gap-3 px-3 py-1 rounded-lg border border-transparent hover:shadow-sm transition"
                >
                  {/* avatar simple */}
                  <div className={`w-9 h-9 rounded-full ${isScrolled ? 'bg-primary/10' : "bg-white text-primary" }  flex items-center justify-center text-primary font-semibold`}>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover text-primary rounded-full" />
                    ) : (
                      user.name?.split(' ').map(n => n[0]).slice(0,2).join('')
                    )}
                  </div>
                  <div className={`text-sm font-bold  ${isScrolled ? ' text-foreground/90' : ' text-white'} text-foreground/90`}>{user.name}</div>
                </button>

                <AnimatePresence>
                  {isAccountOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute -right-[65px] mt-3 w-56 rounded-lg bg-card shadow-lg border border-border z-50 overflow-hidden"
                      role="menu"
                    >
                      <div className="py-2">
                        {/* user header */}
                        <div className="px-4 py-2 border-b border-border">
                          <div className="text-sm font-semibold text-primary">{user.name}</div>
                          <div className="text-xs text-foreground/60">{user.email}</div>
                        </div>

                        {accountItems.map((it) => (
                          <Link
                            key={it.to}
                            to={it.to}
                            className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background/50 transition"
                            onClick={() => setIsAccountOpen(false)}
                          >
                            <span className="opacity-80">{it.icon}</span>
                            <span>{it.label}</span>
                          </Link>
                        ))}

                        <div className="px-4 py-2">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm border border-transparent hover:bg-danger/10 transition"
                          >
                            <LogOut size={16} />
                            تسجيل الخروج
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition"
                >
                  تسجيل الدخول
                </Button>
              </Link>
            )}
          </div>

          {/* زر القائمة للجوال */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="فتح القائمة"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* mobile account area */}
              {user ? (
                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        user.name?.split(' ').map(n => n[0]).slice(0,2).join('')
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold">{user.name}</div>
                      <div className="text-xs text-foreground/60">{user.email}</div>
                    </div>
                  </div>

                  {accountItems.map((it) => (
                    <Link
                      key={it.to}
                      to={it.to}
                      className="block text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="opacity-80">{it.icon}</span>
                        <span>{it.label}</span>
                      </div>
                    </Link>
                  ))}

                  <button
                    onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm border border-transparent hover:bg-danger/10 transition"
                  >
                    <LogOut size={16} />
                    تسجيل الخروج
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="gold" size="lg" className="w-full">
                      احجز جلسة
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
