import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'font-bold text-xl md:text-2xl text-foreground font-headline tracking-tighter',
        className
      )}
    >
      CoDesign<span className="text-primary">AI</span>
    </Link>
  );
}
