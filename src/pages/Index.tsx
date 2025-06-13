import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Code, 
  Users, 
  Truck, 
  CreditCard, 
  Heart, 
  Plane, 
  GraduationCap,
  Building,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Lock,
  Layers
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-8 w-8 rounded"
              />
              <span className="text-xl font-bold text-foreground">MediCod</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#industries" className="text-muted-foreground hover:text-foreground">Industries</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a>
              <a href="#products" className="text-muted-foreground hover:text-foreground">Products</a>
              <a href="#partners" className="text-muted-foreground hover:text-foreground">Partners</a>
              <Button>Get API Access</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Backed by Britam • Microsoft for Startups
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Embedded Insurance for Africa's Digital Future
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Developer-friendly APIs that let digital platforms embed insurance products into their user journeys — 
            turning insurance into a seamless feature rather than a separate process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get API Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with platforms and digital businesses across key sectors in Africa
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: Users, label: "Jobtech & Gig Platforms" },
              { icon: Truck, label: "Logistics & Transport" },
              { icon: CreditCard, label: "Fintech & Lending" },
              { icon: Heart, label: "Healthtech & Telemedicine" },
              { icon: Globe, label: "E-commerce & Marketplaces" },
              { icon: Plane, label: "Travel & Mobility" },
              { icon: GraduationCap, label: "Edtech Platforms" },
              { icon: Building, label: "SaaS Tools" },
              { icon: Code, label: "SMEs & BPOs" }
            ].map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <industry.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{industry.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple API integration in three easy steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <CardTitle>1. Integrate Our API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quick and easy integration with comprehensive documentation and developer support
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Layers className="h-8 w-8" />
                </div>
                <CardTitle>2. Configure Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customize insurance products to match your platform's needs and user journey
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle>3. Go Live</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Launch embedded insurance with real-time policy issuance and claims processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insurance Products We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage options designed for the digital economy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Health and wellness insurance",
              "Goods-in-transit and cargo insurance",
              "Micro-life insurance",
              "Device and equipment cover",
              "Travel protection",
              "Occupational injury insurance",
              "Usage-based insurance",
              "On-demand insurance"
            ].map((product, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{product}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Value Propositions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MediCod?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast Integration", description: "Quick and easy API integration with minimal technical overhead" },
              { icon: Code, title: "Developer-First", description: "Comprehensive documentation and dedicated developer support" },
              { icon: Clock, title: "Real-Time Processing", description: "Instant policy issuance and claims processing" },
              { icon: Lock, title: "Secure & Compliant", description: "Built with security and regulatory compliance in mind" },
              { icon: Layers, title: "White-Label Ready", description: "Customizable branding options for seamless integration" },
              { icon: Shield, title: "Trusted Partners", description: "Backed by leading insurance providers and tech accelerators" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Backed By Industry Leaders
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/d3113bda-b0fb-4a03-be20-9c6f990e12ea.png" 
                alt="Britam" 
                className="h-12"
              />
              <div className="text-left">
                <p className="font-semibold text-foreground">Primary Backer</p>
                <p className="text-sm text-muted-foreground">Kenya's largest insurance provider</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/cc45edb4-7278-4134-a9a3-3736b42d6238.png" 
                alt="Microsoft" 
                className="h-12"
              />
              <div className="text-left">
                <p className="font-semibold text-foreground">Accelerator Program</p>
                <p className="text-sm text-muted-foreground">Microsoft for Startups</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Badge variant="outline" className="text-muted-foreground">
              Early interest from Old Mutual Insurance
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Embed Insurance Into Your Platform?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join forward-thinking platforms already using our APIs to offer seamless insurance experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get API Access
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to discuss your embedded insurance needs? Let's talk.
            </p>
          </div>
          <Card className="p-8">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <Input placeholder="E.g. Fintech, Logistics, etc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <Input placeholder="+254 7XX XXX XXX" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Tell us about your use case</label>
                <Textarea placeholder="Describe how you'd like to integrate insurance into your platform..." rows={4} />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full">
                  Talk to Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-8 w-8 rounded"
              />
              <span className="text-xl font-bold text-foreground">MediCod Insurance Technologies</span>
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@medicod.tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 7XX XXX XXX</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;