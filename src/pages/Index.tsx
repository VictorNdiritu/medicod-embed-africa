import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Shield, 
  Zap, 
  Code, 
  Users, 
  Truck, 
  CreditCard, 
  Heart, 
  ArrowRight,
  Lock,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-16 w-16 rounded-xl shadow-md"
              />
              <div>
                <span className="text-2xl font-bold text-black">MediCod</span>
                <p className="text-sm text-muted-foreground">Insurance APIs</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">How It Works</a>
              <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Products</a>
              <Button onClick={() => setShowWaitlist(true)} className="px-6 py-2 font-medium">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Backed by Britam & Microsoft for Startups
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Embedded Insurance
            <span className="block text-primary">for Digital Platforms</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Simple plug-and-play APIs that let you embed insurance seamlessly into your platform. 
            No complex integrations, just pure plug and play.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 h-auto" onClick={() => setShowWaitlist(true)}>
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Three Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with embedded insurance in minutes, not months
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-lg bg-card">
              <CardContent className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">1. Integrate API</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add our lightweight plug-and-play SDK to your platform with just a few lines of code
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-lg bg-card">
              <CardContent className="p-0">
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">2. Configure Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose from our library of insurance products that fit your users
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-lg bg-card">
              <CardContent className="p-0">
                <div className="mx-auto bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">3. Go Live</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch with real-time policy issuance and automated claims processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Insurance Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage designed for the digital economy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Health & Wellness", description: "Medical coverage for gig workers and employees" },
              { icon: Truck, title: "Cargo & Transit", description: "Goods protection for logistics and delivery platforms" },
              { icon: Shield, title: "Micro Life Insurance", description: "Affordable life coverage for underserved markets" },
              { icon: Lock, title: "Device Protection", description: "Equipment and device insurance for tech platforms" },
              { icon: Users, title: "Liability Coverage", description: "Professional and general liability protection" },
              { icon: CreditCard, title: "Payment Protection", description: "Transaction and payment security insurance" }
            ].map((product, index) => (
              <Card key={index} className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-0">
                  <product.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose MediCod?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Integration", description: "Live in 24 hours" },
              { icon: Code, title: "Developer First", description: "Built for developers" },
              { icon: Shield, title: "Fully Compliant", description: "Regulated & secure" },
              { icon: Heart, title: "African Focus", description: "Built for Africa" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist for early access to our insurance APIs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto" onClick={() => setShowWaitlist(true)}>
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Trusted Partners & Supporters
            </h2>
            <p className="text-lg text-muted-foreground">
              Backed by industry leaders supporting our plug-and-play insurance revolution
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 border border-border">
                <img 
                  src="/lovable-uploads/cc45edb4-7278-4134-a9a3-3736b42d6238.png" 
                  alt="Britam Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Britam Insurance</h3>
              <p className="text-sm text-muted-foreground">Strategic Insurance Partner</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 border border-border">
                <img 
                  src="/lovable-uploads/d3113bda-b0fb-4a03-be20-9c6f990e12ea.png" 
                  alt="Microsoft Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Microsoft for Startups</h3>
              <p className="text-sm text-muted-foreground">Technology & Cloud Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-foreground">MediCod</span>
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
                <span className="text-sm">+254706906363</span>
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
            <DialogTitle className="text-xl font-bold">Get Early Access</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
              <Input placeholder="Your company name" className="h-11" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" className="h-11" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
              <Input placeholder="E.g. Fintech, Logistics, etc." className="h-11" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Use Case</label>
              <Textarea placeholder="How would you use embedded insurance?" rows={3} />
            </div>
            <Button type="submit" className="w-full h-11 font-medium">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;