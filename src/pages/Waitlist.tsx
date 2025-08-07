import { useState } from "react";
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
import { ArrowLeft } from "lucide-react";

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
        headers: {
          'Accept': 'application/json'
        }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
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
            </Link>
            <Link 
              to="/"
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join the Waitlist
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Be among the first to access Medicod's embedded insurance platform
          </p>
        </div>

        {/* What Medicod Does */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">What is Medicod Insurance Technologies?</CardTitle>
            <CardDescription className="text-lg">
              We make it easy for platforms to offer insurance directly within their product. Our APIs handle the heavy lifting with digital onboarding, policy management, claims automation, and secure infrastructure. For underwriters and brokers, it’s plug and play distribution without the tech headache.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Perfect for:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Ecommerce platforms</strong> that want to embed delivery or product cover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Logistics companies</strong> looking to offer cargo or fleet insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>HRTech platforms</strong> bundling group life or health cover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Brokers and underwriters</strong> who want to go digital fast</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Waitlist Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Join Our Early Partner Program</CardTitle>
            <CardDescription>
              Get early access to our embedded insurance platform and help shape the future of digital insurance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>You are a: *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your type" />
                          </SelectTrigger>
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
                  )}
                />

                <FormField
                  control={form.control}
                  name="insuranceProducts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What insurance products are you interested in? *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the insurance products you're interested in offering or using..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wantsDemo"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Would you like a demo? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="yes" />
                            <Label className="font-normal">
                              Yes, I'd like to see a demo
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="no" />
                            <Label className="font-normal">
                              No, just keep me updated
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Waitlist;
