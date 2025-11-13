import { HeroSection } from '@/components/landing/hero-section';
import { ProductSection } from '@/components/landing/product-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { ContactSection } from '@/components/landing/contact-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ProductSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
