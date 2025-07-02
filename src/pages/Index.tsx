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
  Phone,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Smartphone,
  Star,
  TrendingUp,
  Award,
  Calendar
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
    { icon: Briefcase, title: "Jobtech", subtitle: "Freelance & Gig Platforms", color: "from-blue-500 to-cyan-500" },
    { icon: Truck, title: "Logistics", subtitle: "Transport & Delivery", color: "from-green-500 to-emerald-500" },
    { icon: CreditCard, title: "Fintech", subtitle: "Lending & Payments", color: "from-yellow-500 to-orange-500" },
    { icon: Heart, title: "Healthtech", subtitle: "Telemedicine", color: "from-red-500 to-pink-500" },
    { icon: ShoppingCart, title: "E-commerce", subtitle: "Marketplaces", color: "from-purple-500 to-violet-500" },
    { icon: Plane, title: "Travel", subtitle: "Mobility Solutions", color: "from-indigo-500 to-blue-500" },
    { icon: GraduationCap, title: "Edtech", subtitle: "Learning Platforms", color: "from-teal-500 to-cyan-500" },
    { icon: Building, title: "SaaS Tools", subtitle: "HR, CRM, ERP", color: "from-gray-600 to-slate-600" },
    { icon: Users, title: "SMEs & BPOs", subtitle: "Business Operations", color: "from-rose-500 to-pink-500" }
  ];

  const products = [
    { icon: Heart, title: "Health & Wellness Insurance", color: "bg-red-50 text-red-600 border-red-200" },
    { icon: Truck, title: "Goods-in-Transit / Cargo Cover", color: "bg-green-50 text-green-600 border-green-200" },
    { icon: Shield, title: "Micro-Life Insurance", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { icon: Smartphone, title: "Device/Equipment Cover", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { icon: Plane, title: "Travel Protection", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { icon: Users, title: "Occupational Injury Cover", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { icon: Clock, title: "On-Demand Insurance", color: "bg-teal-50 text-teal-600 border-teal-200" },
    { icon: Zap, title: "Usage-Based Coverage", color: "bg-yellow-50 text-yellow-600 border-yellow-200" }
  ];

  const valueProps = [
    { icon: Zap, title: "Lightning Fast", description: "Get live in hours, not months", color: "text-yellow-500" },
    { icon: Clock, title: "Real-Time", description: "Instant issuance and claims", color: "text-blue-500" },
    { icon: Code, title: "Developer First", description: "Built for seamless integration", color: "text-green-500" },
    { icon: Globe, title: "Scalable", description: "Cloud-native and compliant", color: "text-purple-500" },
    { icon: Shield, title: "Compliant", description: "Regulatory requirements handled", color: "text-red-500" },
    { icon: CheckCircle, title: "White-Label", description: "Your brand, our technology", color: "text-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                  alt="MediCod Logo" 
                  className="h-12 w-12 rounded-xl shadow-lg ring-2 ring-blue-100"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MediCod</span>
                <p className="text-sm text-slate-600 font-medium">Insurance Technologies</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#industries" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Industries</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">How It Works</a>
              <a href="#products" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Products</a>
              <Button onClick={() => setShowWaitlist(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 px-6">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Embedded Insurance
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              for Africa's Digital Future
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Developer-friendly APIs that enable digital platforms to offer relevant insurance 
            to their users at the point of service — instantly, securely, and with minimal effort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200" 
              onClick={() => setShowWaitlist(true)}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400 transition-all duration-200"
            >
              Request Demo
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Digital Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">&lt;2s</div>
              <div className="text-slate-600">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Plug-and-play insurance solutions tailored for Africa's growing digital economy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                  <p className="text-slate-600">{industry.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple 3-step integration gets you live in hours, not months
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Integrate API", description: "Add our developer-friendly SDK with just a few lines of code", color: "from-blue-500 to-cyan-500" },
              { icon: Shield, title: "Configure Products", description: "Choose relevant insurance products for your users", color: "from-purple-500 to-pink-500" },
              { icon: Zap, title: "Go Live", description: "Launch with real-time policy issuance and automated claims", color: "from-green-500 to-teal-500" }
            ].map((step, index) => (
              <Card key={index} className="relative p-8 text-center border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <div className={`mx-auto bg-gradient-to-br ${step.color} text-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section id="products" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Insurance Products</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive coverage designed for Africa's digital platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={`p-6 text-center hover:shadow-xl transition-all duration-300 border-2 ${product.color} hover:scale-105 transform`}>
                <CardContent className="p-0">
                  <product.icon className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-sm font-bold">{product.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-6">Why Choose MediCod?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              API-first insurance platform built for modern digital businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                    <prop.icon className={`h-8 w-8 ${prop.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
                <p className="text-slate-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Platform?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join the waitlist for early access to our insurance APIs and be part of Africa's insurance revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto bg-white text-slate-900 hover:bg-slate-100 shadow-xl transform hover:scale-105 transition-all duration-200" 
              onClick={() => setShowWaitlist(true)}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              Schedule Demo
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Backed By Industry Leaders</h2>
            <p className="text-lg text-slate-600">
              Supported by Kenya's largest insurer and Microsoft's startup program
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/5c3e9f4f-b62e-47de-8cfe-9829b64272e0.png" 
                  alt="Britam Logo" 
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Britam Insurance</h3>
              <p className="text-slate-600 font-medium">Strategic Insurance Partner</p>
              <div className="flex items-center mt-2">
                <Award className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">Verified Partner</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/e047ff08-c67f-413c-aeb1-1050bc55624d.png" 
                  alt="Microsoft Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Microsoft for Startups</h3>
              <p className="text-slate-600 font-medium">Technology & Cloud Partner</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm text-blue-600 font-medium">Growth Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                  alt="MediCod Logo" 
                  className="h-12 w-12 rounded-xl mr-4 ring-2 ring-blue-400"
                />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MediCod</span>
                  <p className="text-slate-400">Insurance Technologies</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Empowering Africa's digital economy with embedded insurance solutions that work seamlessly with your platform.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-slate-400">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">hi@medicodinsurance.tech</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+254 706 906 363</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#industries" className="block text-slate-400 hover:text-white transition-colors text-sm">Industries</a>
                <a href="#how-it-works" className="block text-slate-400 hover:text-white transition-colors text-sm">How It Works</a>
                <a href="#products" className="block text-slate-400 hover:text-white transition-colors text-sm">Products</a>
                <a href="/admin" className="block text-slate-400 hover:text-white transition-colors text-sm">Admin</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p className="text-sm">&copy; 2025 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Dialog */}
      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Join the Waitlist</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900 font-semibold">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" className="h-12 border-2 focus:border-blue-500" {...field} />
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
                    <FormLabel className="text-slate-900 font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" className="h-12 border-2 focus:border-blue-500" {...field} />
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
                    <FormLabel className="text-slate-900 font-semibold">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" className="h-12 border-2 focus:border-blue-500" {...field} />
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
                    <FormLabel className="text-slate-900 font-semibold">Interest</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How would you use embedded insurance?" rows={3} className="border-2 focus:border-blue-500 resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full h-12 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" 
                disabled={isSubmitting}
              >
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
