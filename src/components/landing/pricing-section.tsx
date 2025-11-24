import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    frequency: '/month',
    description: 'For individuals and hobbyists starting out.',
    features: [
      '1 User',
      '1 Project',
      'Basic AI optimization',
      '100 experiments/month',
      'Community support',
    ],
    cta: 'Get Started',
    href: '#contact',
    popular: false,
    isCalendly: false,
  },
  {
    name: 'Pro',
    price: '$49',
    frequency: '/month',
    description: 'For professionals and small teams.',
    features: [
      'Up to 5 users',
      'Unlimited projects',
      'Advanced AI optimization',
      '1,000 experiments/month',
      'Email support',
    ],
    cta: 'Upgrade to Pro',
    href: '#contact',
    popular: true,
    isCalendly: false,
  },
  {
    name: 'Team',
    price: '$199',
    frequency: '/month',
    description: 'For growing teams that need to collaborate.',
    features: [
      'Up to 20 users',
      'Collaboration features',
      'API Access',
      '10,000 experiments/month',
      'Priority email & chat support',
    ],
    cta: 'Choose Team',
    href: '#contact',
    popular: false,
    isCalendly: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited users',
      'On-premise deployment option',
      'Custom model training',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    cta: 'Contact Sales',
    href: 'https://calendly.com/ouarsef',
    popular: false,
    isCalendly: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Flexible Pricing for Every Team
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you. All plans include access to our core AI
              optimization engine.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${tier.popular ? 'border-primary shadow-lg' : ''}`}
            >
              <CardHeader className="relative">
                {tier.popular && (
                  <div className="absolute top-0 right-4 -mt-3">
                    <div className="inline-flex items-center rounded-full border border-primary bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardTitle>{tier.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.frequency && (
                    <span className="ml-1 text-sm text-foreground/70">{tier.frequency}</span>
                  )}
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                  <Link href={tier.href} target={tier.isCalendly ? '_blank' : undefined}>{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
