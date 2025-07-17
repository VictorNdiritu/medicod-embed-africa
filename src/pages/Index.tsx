
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
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Phone,
  TrendingUp,
  Award,
  Layers,
  Target,
  Settings,
  BarChart3
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Index = () => {
  const [showContact, setShowContact] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactForm) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([values]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
      setShowContact(false);
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
              <a href="#underwriters" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">For Underwriters</a>
              <a href="#distribution" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Distribution</a>
              <a href="#infrastructure" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Infrastructure</a>
              <Button onClick={() => setShowContact(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 px-6">
                Partner with us
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
              Your policies. One API.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unlimited reach.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            PoliPort by Medicod Insurance Technologies helps insurers launch their products across digital platforms — fast. Expand your distribution, simplify integration, and unlock new customer touchpoints.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200" 
              onClick={() => setShowContact(true)}
            >
              Partner with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">One</div>
              <div className="text-slate-600">API Connection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">&lt;2s</div>
              <div className="text-slate-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* For Underwriters Section */}
      <section id="underwriters" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Built for Underwriters</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              With PoliPort, you don't need to rebuild your systems to go digital. Keep control of your products, gain access to real-time distribution data, and open new channels — from apps to partner portals — all through one modern interface.
            </p>
            <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You stay in control. We handle the tech.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Full Control</h3>
                <p className="text-slate-600">Maintain complete oversight of your products and pricing while expanding reach</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Data</h3>
                <p className="text-slate-600">Access comprehensive distribution analytics and customer insights instantly</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">No System Rebuild</h3>
                <p className="text-slate-600">Integrate seamlessly with your existing infrastructure and workflows</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Layer Section */}
      <section id="distribution" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-6">Embedded Anywhere</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Whether it's a partner app, a broker portal, or a digital marketplace, PoliPort lets your policies live where your customers already are. One connection — endless opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketplaces</h3>
                    <p className="text-slate-600">Reach customers through e-commerce platforms and digital marketplaces</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Partner Applications</h3>
                    <p className="text-slate-600">Embed directly into partner apps and platforms your customers use daily</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Broker Portals</h3>
                    <p className="text-slate-600">Enable brokers with seamless access to your products and pricing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-lg mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Infrastructure Section */}
      <section id="infrastructure" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Smarter by Design</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              PoliPort uses intelligent infrastructure to automate quoting, support compliance, and make policy data work for you. From instant pricing to deep customer insights, we help you move faster and smarter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Zap className="h-8 w-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Quoting</h3>
              <p className="text-slate-600">Instant, accurate quotes powered by intelligent algorithms</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Ready</h3>
              <p className="text-slate-600">Built-in regulatory compliance and audit trails</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Deep Insights</h3>
              <p className="text-slate-600">Comprehensive analytics and customer behavior data</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Clock className="h-8 w-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Processing</h3>
              <p className="text-slate-600">Instant policy issuance and claims processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-white">
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

      {/* Closing CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Distribute Better</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            PoliPort unlocks your policy's potential. Reach more customers, embed more easily, and grow without growing your tech stack.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto bg-white text-slate-900 hover:bg-slate-100 shadow-xl transform hover:scale-105 transition-all duration-200" 
              onClick={() => setShowContact(true)}
            >
              Partner with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                PoliPort unlocks your policy's potential through intelligent distribution infrastructure designed for modern insurers.
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
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p className="text-sm">&copy; 2025 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partner with us</DialogTitle>
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900 font-semibold">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your distribution needs and how we can help..." rows={4} className="border-2 focus:border-blue-500 resize-none" {...field} />
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
                {isSubmitting ? "Sending..." : "Send Message"}
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
