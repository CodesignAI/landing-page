import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
    {
        title: 'Automated Analog Optimization',
        description: 'Let our GenAI handle the heavy lifting, automating complex analog optimization processes and freeing up your engineers for innovation.',
    },
    {
        title: 'Smart Experimentation',
        description: 'Run thousands of intelligent experiments in the cloud to explore the design space and identify the most robust parameters.',
    },
    {
        title: 'Silicon-Ready Results',
        description: 'Go from concept to silicon-ready designs in a fraction of the time, drastically reducing development cycles from months to hours.',
    },
];

export function ProductSection() {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Accelerate Your Design Cycle
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how CoDesignAI's features can revolutionize your workflow and bring your
              products to market faster.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col border-primary/20 bg-secondary/30">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
