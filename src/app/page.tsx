import { HeroSection } from '@/components/landing/hero-section';
import { ProductSection } from '@/components/landing/product-section';
import { ContactSection } from '@/components/landing/contact-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}
