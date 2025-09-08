import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import FeaturedWorkSection from "@/components/featured-work-section";
import ClientPortfolioSection from "@/components/client-portfolio-section";
import PhotoGallerySection from "@/components/photo-gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-black text-light">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ClientPortfolioSection />
      <PhotoGallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
