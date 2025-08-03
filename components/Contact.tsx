import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  Calendar,
} from "lucide-react";
import CalendlyWidget from "./CalendlyWidget";
import CalendlyPopupButton from "./CalendlyWidget";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mulai Sekarang
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap memulai perjalanan menuju kesuksesan? Hubungi kami untuk
            konsultasi gratis dan temukan bagaimana kami dapat membantu Anda
            mencapai tujuan akademik dan bisnis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                Kirim Pesan kepada Kami
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Isi formulir di bawah ini dan kami akan merespons dalam 24 jam.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nama Depan
                  </label>
                  <Input
                    placeholder="Nama depan Anda"
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nama Belakang
                  </label>
                  <Input
                    placeholder="Nama belakang Anda"
                    className="border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Alamat Email
                </label>
                <Input
                  type="email"
                  placeholder="email.anda@contoh.com"
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Layanan yang Dibutuhkan
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-primary focus:outline-none">
                  <option>Pilih layanan</option>
                  <option>Penulisan Tesis</option>
                  <option>Pengembangan Media Pembelajaran</option>
                  <option>Pengembangan Website</option>
                  <option>Aplikasi Bisnis</option>
                  <option>Beberapa Layanan</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Detail Proyek
                </label>
                <Textarea
                  placeholder="Ceritakan kepada kami tentang kebutuhan proyek, timeline, dan kebutuhan spesifik lainnya..."
                  className="min-h-[120px] border-border focus:border-primary"
                />
              </div>

              <Button variant="default" className="w-full group">
                Kirim Pesan
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6 ">
              <Card className="bg-blue-50 border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-xl">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Email Kami
                      </h3>
                      <p className="text-muted-foreground">
                        contact@zwi-studio.com
                      </p>
                      <p className="text-muted-foreground">
                        support@zwi-studio.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-xl">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Telepon Kami
                      </h3>
                      <p className="text-muted-foreground">+62 (21) 123-4567</p>
                      <p className="text-muted-foreground">+62 (21) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-xl">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Jam Kantor
                      </h3>
                      <p className="text-muted-foreground">
                        Sen - Jum: 09:00 - 18:00 WIB
                      </p>
                      <p className="text-muted-foreground">
                        Dukungan Online 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="bg-indigo-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Butuh Bantuan Segera?
              </h3>
              <p className="text-muted-foreground mb-6">
                Pilih opsi yang paling cocok untuk Anda
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jadwalkan Konsultasi Gratis
                </Button>
                <CalendlyPopupButton />
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mulai Live Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Minta Panggilan Balik
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
