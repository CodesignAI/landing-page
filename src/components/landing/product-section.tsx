import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Analog Optimization</h3>
                  <p className="text-foreground/80">
                    Let our GenAI handle the heavy lifting, automating complex analog optimization processes and freeing up your engineers for innovation.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Smart Experimentation</h3>
                  <p className="text-foreground/80">
                    Run thousands of intelligent experiments in the cloud to explore the design space and identify the most robust parameters.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Silicon-Ready Results</h3>
                  <p className="text-foreground/80">
                    Go from concept to silicon-ready designs in a fraction of the time, drastically reducing development cycles from months to hours.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Card className="border-primary/20 bg-secondary/30">
            <CardHeader>
              <CardTitle>Product Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">This section will detail the product's features and benefits. For now, it's a placeholder to demonstrate the layout.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
