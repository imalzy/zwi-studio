import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
