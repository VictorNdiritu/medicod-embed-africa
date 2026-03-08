import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const waitlistSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  userType: z.string().min(1, "Please select your type"),
  insuranceProducts: z.string().min(10, "Please describe your insurance product interests"),
  wantsDemo: z.enum(["yes", "no"], {
    required_error: "Please select if you'd like a demo",
  }),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Join the Waitlist | Medicod Insurance Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Join the Medicod waitlist to get early access to our embedded insurance platform. For ecommerce, logistics, HRTech, brokers, and underwriters in Kenya and East Africa.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://medicod.ai/waitlist");
  }, []);

  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      userType: "",
      insuranceProducts: "",
      wantsDemo: undefined,
    },
  });

  const onSubmit = async (values: WaitlistForm) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('fullName', values.fullName);
    formData.append('companyName', values.companyName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('userType', values.userType);
    formData.append('insuranceProducts', values.insuranceProducts);
    formData.append('wantsDemo', values.wantsDemo);

    try {
      const response = await fetch('https://formspree.io/f/xdkdlqkn', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/favicon.ico" 
                alt="MediCod Logo" 
                className="h-12 w-12 rounded-xl shadow-lg"
              />
              <div className="ml-4">
                <span className="text-2xl font-bold text-foreground">MediCod</span>
                <p className="text-sm text-muted-foreground font-medium">Insurance Technologies</p>
              </div>
            </Link>
            <Link 
              to="/"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join the Waitlist
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Be among the first to access Medicod's embedded insurance platform for digital businesses in Kenya and East Africa.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you are an ecommerce platform, logistics company, HR tech firm, insurance broker, or underwriter, our platform is designed to help you embed insurance products directly into your digital experience. Fill out the form below to secure your early access.
          </p>
        </div>

        {/* What Medicod Does */}
        <Card className="mb-12 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">What is Medicod Insurance Technologies?</CardTitle>
            <CardDescription className="text-lg">
              We make it easy for platforms to offer insurance directly within their product. Our APIs handle the heavy lifting with digital onboarding, policy management, claims automation, and secure infrastructure. For underwriters and brokers, it's plug and play distribution without the tech headache.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Perfect for:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Ecommerce platforms</strong> that want to embed delivery or product cover at checkout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Logistics companies</strong> looking to offer cargo, fleet, or goods-in-transit insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>HRTech platforms</strong> bundling group life, health, or workers compensation cover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Brokers and underwriters</strong> who want to go digital fast without building from scratch</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What you get:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Early access to our PoliPort API before public launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Dedicated onboarding support from our technical team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Priority access to new features and integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Opportunity to shape the product roadmap with your feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Waitlist Form */}
        <Card className="mb-12 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Join Our Early Partner Program</CardTitle>
            <CardDescription>
              Get early access to our embedded insurance platform and help shape the future of digital insurance distribution in Africa.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="Enter your full name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl><Input placeholder="Enter your company name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="Enter your email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl><Input type="tel" placeholder="Enter your phone number" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="userType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>You are a: *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select your type" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ecommerce">Ecommerce</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="hrtech">HRTech</SelectItem>
                        <SelectItem value="underwriter">Underwriter</SelectItem>
                        <SelectItem value="broker">Broker</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="insuranceProducts" render={({ field }) => (
                  <FormItem>
                    <FormLabel>What insurance products are you interested in? *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the insurance products you're interested in offering or using..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="wantsDemo" render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Would you like a demo? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-3 space-y-0">
                          <RadioGroupItem value="yes" />
                          <Label className="font-normal">Yes, I'd like to see a demo</Label>
                        </div>
                        <div className="flex items-center space-x-3 space-y-0">
                          <RadioGroupItem value="no" />
                          <Label className="font-normal">No, just keep me updated</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting} size="lg">
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Internal Links */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Looking to partner with us as a broker? Visit our <Link to="/partners" className="text-primary hover:underline font-medium">Partners page</Link> to learn more about collaboration opportunities.
          </p>
          <p className="text-muted-foreground">
            Want to learn more about our technology? <Link to="/" className="text-primary hover:underline font-medium">Explore our platform</Link> and discover how PoliPort can transform your insurance distribution.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/favicon.ico" alt="MediCod Logo" className="h-10 w-10 rounded-xl mr-3" />
                <div>
                  <span className="text-xl font-bold text-background">MediCod</span>
                  <p className="text-background/60 text-sm">Insurance Technologies</p>
                </div>
              </div>
              <p className="text-background/60 max-w-md text-sm">Building the future of insurance technology in Africa.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-background">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-background/60 hover:text-background transition-colors text-sm">Home</Link>
                <Link to="/partners" className="block text-background/60 hover:text-background transition-colors text-sm">Partners</Link>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-background/60 text-sm"><Mail className="h-4 w-4 mr-2" />hi@medicodinsurance.tech</div>
                <div className="flex items-center text-background/60 text-sm"><Phone className="h-4 w-4 mr-2" />+254 706 906 363</div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-background/20 text-center text-background/60">
            <p className="text-sm">&copy; 2025 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
