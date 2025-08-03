import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Smartphone,
  ArrowRight,
  Users,
  CheckCircle,
  Clock,
  Monitor,
  Database,
} from "lucide-react";
import servicesImage from "@/assets/empty.png";
import Image from "next/image";

const services = [
  {
    icon: Monitor,
    title: "Aplikasi Web",
    description:
      "Pengembangan aplikasi web modern dengan teknologi terkini dan performa tinggi.",
    features: [
      "React/Vue.js",
      "Backend API",
      "Database Design",
      "Cloud Hosting",
    ],
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description:
      "Aplikasi mobile native dan cross-platform untuk Android dan iOS.",
    features: [
      "React Native",
      "Flutter",
      "Native Development",
      "App Store Publishing",
    ],
    color: "text-accent",
  },
  {
    icon: Database,
    title: "Sistem Enterprise",
    description:
      "Solusi sistem informasi terintegrasi untuk meningkatkan efisiensi bisnis.",
    features: [
      "ERP System",
      "CRM Integration",
      "Business Intelligence",
      "Data Analytics",
    ],
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Platform E-Learning",
    description:
      "Platform pembelajaran digital interaktif dengan fitur lengkap dan engaging.",
    features: [
      "LMS Development",
      "Interactive Content",
      "Progress Tracking",
      "Gamifikasi",
    ],
    color: "text-accent",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Pengembangan Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi teknologi lengkap dari aplikasi web hingga sistem enterprise.
            Kami membantu bisnis bertransformasi digital dengan teknologi
            terdepan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto bg-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Mengapa Memilih DevStudio?
            </h3>
            <p className="text-muted-foreground">
              Kami menggabungkan inovasi teknologi dengan pengalaman industri
              untuk menghasilkan solusi software berkualitas tinggi. Tim
              developer berpengalaman kami memastikan setiap proyek diselesaikan
              sesuai standar dan deadline yang telah disepakati.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Developer Berpengalaman
                  </div>
                  <div className="text-sm text-muted-foreground">
                    5+ tahun pengalaman industri
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Deployment Cepat
                  </div>
                  <div className="text-sm text-muted-foreground">
                    CI/CD pipeline otomatis
                  </div>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg" className="group">
              Konsultasi Proyek Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <Image
              src={servicesImage}
              alt="Professional Services"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
