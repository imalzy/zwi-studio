import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                zwi-studio
              </span>
            </div>
            <p className="text-muted-foreground">
              Mitra terpercaya Anda untuk keunggulan akademik dan kesuksesan
              bisnis. Kami menyediakan solusi komprehensif dari penulisan tesis
              hingga pengembangan digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Layanan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Penulisan Tesis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Media Pembelajaran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pengembangan Website
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Aplikasi Bisnis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dukungan Riset
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tim Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Info Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@zwi-studio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+62 (21) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">
                  Jl. Akademi No. 123, Jakarta Pusat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 zwi-studio. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Syarat Layanan
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Kebijakan Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
