import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Zap, 
  Code, 
  Users, 
  Truck, 
  CreditCard, 
  Heart, 
  ArrowRight,
  Briefcase,
  ShoppingCart,
  Plane,
  GraduationCap,
  Building,
  Car,
  Phone,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Smartphone
} from "lucide-react";

const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(0).optional(),
  interest: z.string().min(0).optional(),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
    },
  });

  const onSubmit = async (values: WaitlistForm) => {
    setIsSubmitting(true);
    try {
      // Transform data to match database requirements
      const submitData = {
        name: values.name,
        email: values.email,
        company: values.company || null,
        interest: values.interest || null,
      };

      const { error } = await supabase
        .from('waitlist')
        .insert([submitData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });
      
      form.reset();
      setShowWaitlist(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    { icon: Briefcase, title: "Jobtech", subtitle: "Freelance & Gig Platforms" },
    { icon: Truck, title: "Logistics", subtitle: "Transport & Delivery" },
    { icon: CreditCard, title: "Fintech", subtitle: "Lending & Payments" },
    { icon: Heart, title: "Healthtech", subtitle: "Telemedicine" },
    { icon: ShoppingCart, title: "E-commerce", subtitle: "Marketplaces" },
    { icon: Plane, title: "Travel", subtitle: "Mobility Solutions" },
    { icon: GraduationCap, title: "Edtech", subtitle: "Learning Platforms" },
    { icon: Building, title: "SaaS Tools", subtitle: "HR, CRM, ERP" },
    { icon: Users, title: "SMEs & BPOs", subtitle: "Business Operations" }
  ];

  const products = [
    { icon: Heart, title: "Health & Wellness Insurance" },
    { icon: Truck, title: "Goods-in-Transit / Cargo Cover" },
    { icon: Shield, title: "Micro-Life Insurance" },
    { icon: Smartphone, title: "Device/Equipment Cover" },
    { icon: Plane, title: "Travel Protection" },
    { icon: Users, title: "Occupational Injury Cover" },
    { icon: Clock, title: "On-Demand Insurance" },
    { icon: Zap, title: "Usage-Based Coverage" }
  ];

  const valueProps = [
    { icon: Zap, title: "Fast API Integration", description: "Get live in hours, not months" },
    { icon: Clock, title: "Real-Time Processing", description: "Instant issuance and claims" },
    { icon: Code, title: "Developer-First", description: "Built for seamless integration" },
    { icon: Globe, title: "Scalable Infrastructure", description: "Cloud-native and compliant" },
    { icon: Shield, title: "Built-in Compliance", description: "Regulatory requirements handled" },
    { icon: CheckCircle, title: "White-Label Ready", description: "Your brand, our technology" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-12 w-12 rounded-lg"
              />
              <div className="ml-3">
                <span className="text-xl font-bold text-black">MediCod</span>
                <p className="text-sm text-muted-foreground">Insurance Technologies</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#industries" className="text-muted-foreground hover:text-black transition-colors">Industries</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-black transition-colors">How It Works</a>
              <a href="#products" className="text-muted-foreground hover:text-black transition-colors">Products</a>
              <Button onClick={() => setShowWaitlist(true)} className="px-6">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Embedded Insurance for
            <span className="block text-primary">Africa's Digital Future</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Developer-friendly APIs that enable digital platforms to offer relevant insurance 
            to their users at the point of service — instantly, securely, and with minimal effort.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 h-auto" onClick={() => setShowWaitlist(true)}>
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plug-and-play insurance solutions tailored for Africa's growing digital economy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step plug-and-play integration gets you live in hours
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">1. Integrate API</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add our developer-friendly SDK with just a few lines of code
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">2. Configure Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose relevant insurance products for your users
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">3. Go Live</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch with real-time policy issuance and automated claims
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section id="products" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Insurance Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage designed for Africa's digital platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <product.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-black">{product.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose MediCod?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              API-first insurance platform built for modern digital businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <prop.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">{prop.title}</h3>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist for early access to our insurance APIs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto" onClick={() => setShowWaitlist(true)}>
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Backed By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Supported by Kenya's largest insurer and Microsoft's startup program
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 border border-border">
                <img 
                  src="/lovable-uploads/cc45edb4-7278-4134-a9a3-3736b42d6238.png" 
                  alt="Britam Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Britam Insurance</h3>
              <p className="text-sm text-muted-foreground">Strategic Insurance Partner</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 border border-border">
                <img 
                  src="/lovable-uploads/d3113bda-b0fb-4a03-be20-9c6f990e12ea.png" 
                  alt="Microsoft Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Microsoft for Startups</h3>
              <p className="text-sm text-muted-foreground">Technology & Cloud Partner</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 border border-border">
                <div className="text-2xl font-bold text-primary">OM</div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Old Mutual</h3>
              <p className="text-sm text-muted-foreground">Early Interest & Validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-10 w-10 rounded-lg mr-3"
              />
              <div>
                <span className="text-xl font-bold text-black">MediCod</span>
                <p className="text-sm text-muted-foreground">Insurance Technologies</p>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hi@medicodinsurance.tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+254 706 906 363</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p className="text-sm">&copy; 2025 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Dialog */}
      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-black">Join the Waitlist</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Interest</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How would you use embedded insurance?" rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-11 font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;