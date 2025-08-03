import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Users,
  Award,
  Clock,
  HeadphonesIcon,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Bebas Plagiarisme",
    description:
      "Konten original dijamin dengan laporan plagiarisme yang komprehensif.",
    gradient: "from-indigo-700 from-indigo-400",
  },
  {
    icon: Clock,
    title: "Pengiriman Tepat Waktu",
    description:
      "Memenuhi setiap deadline dengan sistem manajemen proyek yang efisien.",
    gradient: "from-indigo-700 from-indigo-400",
  },
  {
    icon: Users,
    title: "Penulis Ahli",
    description:
      "Pemegang PhD dan profesional industri dengan rekam jejak terbukti.",
    gradient: "from-indigo-700 from-indigo-400",
  },
  {
    icon: HeadphonesIcon,
    title: "Dukungan 24/7",
    description:
      "Bantuan sepanjang waktu kapanpun Anda membutuhkan bantuan atau update.",
    gradient: "from-indigo-700 from-indigo-400",
  },
  {
    icon: Award,
    title: "Jaminan Kualitas",
    description:
      "Pemeriksaan kualitas berlapis memastikan keunggulan di setiap hasil kerja.",
    gradient: "from-indigo-700 from-indigo-400",
  },
  {
    icon: TrendingUp,
    title: "Jaminan Sukses",
    description: "Metode dan strategi terbukti yang memberikan hasil terukur.",
    gradient: "from-indigo-700 from-indigo-400",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa yang Membuat Kami Berbeda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rasakan perbedaannya dengan pendekatan komprehensif kami terhadap
            solusi akademik dan bisnis, didukung oleh pengalaman dan kesuksesan
            bertahun-tahun.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dipercaya oleh Ribuan Orang
            </h3>
            <p className="text-muted-foreground">
              Angka-angka yang menunjukkan komitmen kami terhadap keunggulan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Proyek Selesai", icon: CheckCircle },
              { number: "98%", label: "Kepuasan Klien", icon: Award },
              {
                number: "24/7",
                label: "Dukungan Tersedia",
                icon: HeadphonesIcon,
              },
              { number: "100%", label: "Konten Original", icon: Shield },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-background/80 rounded-2xl shadow-card mb-4 group-hover:shadow-elegant transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
