import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            The AI engine for analog design
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            CoDesignAI automates complex analog optimization, runs thousands of smart experiments,
            and delivers silicon-ready results —{' '}
            <span className="text-primary font-semibold text-xl md:text-2xl">
              in hours, not months.
            </span>
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="YOUR_CALENDLY_LINK" target="_blank">Book Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
