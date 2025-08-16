import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight } from "lucide-react";

const partnershipSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type PartnershipForm = z.infer<typeof partnershipSchema>;

const Landing = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnershipForm>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: PartnershipForm) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('companyName', values.companyName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);

    try {
      const response = await fetch('https://formspree.io/f/xdkdlqkn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your interest! We\'ll be in touch soon to discuss partnership opportunities.');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
              alt="Medicod Logo" 
              className="h-16 w-16 rounded-xl shadow-lg ring-2 ring-white/30"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-4 text-left">
            <h1 className="text-4xl font-bold text-white">Medicod</h1>
            <p className="text-xl text-white/90 font-medium">Insurance Technologies</p>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center text-white space-y-8">
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed text-white/90">
                Medicod Insurance Technologies is a forward-thinking insurance technology company committed to transforming how insurance is distributed and consumed. We provide modern, embeddable solutions that allow businesses to integrate insurance offerings directly into their platforms, ensuring accessibility, transparency, and efficiency for both insurers and clients.
              </p>
            </div>

            {/* Our Call to Partnership */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Call to Partnership</h2>
              <p className="text-lg leading-relaxed text-white/90">
                We are actively seeking collaborations with progressive insurance brokers in Kenya who are ready to embrace technology and the future of embedded insurance. Whether you already have a strong digital presence or a clear business plan to adopt technology in your brokerage operations, we would like to hear from you.
              </p>
            </div>

            {/* Ideal Broker Profile */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Ideal Broker Profile</h2>
              <ul className="text-lg text-white/90 space-y-2 text-left max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Licensed insurance brokers in Kenya (priority consideration)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Brokers with additional licenses in other East African countries (added advantage)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Tech-oriented or open to integrating digital solutions into their operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Innovative firms eager to expand into embedded insurance distribution</span>
                </li>
              </ul>
            </div>

            {/* Sectors of Focus */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Sectors of Focus</h2>
              <p className="text-lg text-white/90 mb-4">
                We are looking to work with brokers who specialize in or have interest in the following industries:
              </p>
              <ul className="text-lg text-white/90 space-y-2 text-left max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Transport and Logistics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>HR and Recruitment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Ecommerce and Retail</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Travel and Hospitality</span>
                </li>
              </ul>
            </div>

            {/* Join Us */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Join Us</h2>
              <p className="text-lg leading-relaxed text-white/90">
                If you are a broker who fits this profile and is ready to explore embedded insurance opportunities, Medicod Insurance Technologies is your partner in shaping the future of insurance. Together, we can simplify access to insurance products and create value for businesses and individuals across Kenya and East Africa.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Signup Form */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Join Our Partnership Network</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-pink-200" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your brokerage company name" 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-pink-200" />
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
                        <FormLabel className="text-white">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-pink-200" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+254 700 000 000" 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-pink-200" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Start Partnership Discussion"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Landing;
