import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mahasiswa PhD, Universitas Harvard",
    content:
      "zwi-studio membantu saya menyelesaikan disertasi dengan kualitas luar biasa. Bimbingan ahli dan pengiriman tepat waktu mereka melampaui ekspektasi saya. Saya tidak bisa melakukannya tanpa mereka!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Pemilik Bisnis",
    content:
      "Aplikasi web yang mereka kembangkan untuk bisnis saya telah menyederhanakan operasi kami secara signifikan. Tim profesional, komunikasi yang sangat baik, dan hasil yang luar biasa.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Profesor, MIT",
    content:
      "Saya merekomendasikan zwi-studio kepada semua mahasiswa saya. Layanan pengembangan media pembelajaran mereka menciptakan konten interaktif yang secara signifikan meningkatkan tingkat keterlibatan kursus kami.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Thompson",
    role: "Lulusan MBA",
    content:
      "Dari riset hingga format akhir, mereka menangani setiap aspek tesis saya secara profesional. Kualitas kerja dan perhatian terhadap detail sangat luar biasa.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Lisa Park",
    role: "Pendiri Startup",
    content:
      "Layanan pengembangan aplikasi bisnis mereka membantu kami meluncurkan produk lebih cepat. Tim memahami visi kami dan memberikan persis apa yang kami butuhkan.",
    rating: 5,
    avatar: "LP",
  },
  {
    name: "Professor James Wilson",
    role: "Peneliti Universitas",
    content:
      "Layanan bantuan riset dan penulisan zwi-studio sangat baik. Mereka menjaga integritas akademik sambil memberikan konten berkualitas tinggi dan original.",
    rating: 5,
    avatar: "JW",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-200/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami. Dengar dari mahasiswa,
            profesional, dan bisnis yang telah meraih kesuksesan dengan layanan
            kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Siap Bergabung dengan Kisah Sukses Kami?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ambil langkah pertama menuju keunggulan akademik dan bisnis.
              Biarkan kami membantu Anda mencapai tujuan dengan keahlian
              terbukti kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer px-8 py-3 bg-indigo-400 text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
                Mulai Proyek Anda
              </button>
              <button className="cursor-pointer px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
