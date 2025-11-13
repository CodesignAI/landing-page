import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Flexible Pricing for Every Team
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that's right for you. All plans include access to our core AI optimization engine.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Card className="border-primary/20 bg-secondary/30">
            <CardHeader>
              <CardTitle>Pricing Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                This area will display various pricing tiers. Access may be controlled by user roles. This is currently a placeholder.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
