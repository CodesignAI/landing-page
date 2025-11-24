import { ContactForm } from './contact-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Get Started with CoDesignAI
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to see the future of analog design? Book a demo or get in touch with our team.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="https://calendly.com/ouarsef" target="_blank">Book a Demo</Link>
            </Button>
            <p className="text-xs text-foreground/60">or</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
