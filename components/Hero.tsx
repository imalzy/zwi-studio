"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-bl from-fuchsia-50-50 to-indigo-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Layanan Pengembangan Software
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Bangun{" "}
                <span className="bg-indigo-900 bg-clip-text text-transparent">
                  Aplikasi
                </span>{" "}
                Impian Anda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Layanan pengembangan aplikasi web, mobile, dan sistem bisnis
                profesional. Kami juga menyediakan media pembelajaran interaktif
                dan bantuan penulisan tesis. Solusi teknologi lengkap untuk
                kebutuhan digital Anda.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Aplikasi Terbangun
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground">
                    Uptime Aplikasi
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Lihat Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center text-xs font-semibold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Bergabung dengan ratusan klien yang puas
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <Image
                src={heroImage}
                alt="Academic Writing Services"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-primary opacity-10 rounded-2xl"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-background rounded-lg shadow-card p-4 animate-glow">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary fill-current" />
                <span className="font-semibold text-foreground">4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">Rating Klien</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-card p-4">
              <div className="text-lg font-semibold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Dukungan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
