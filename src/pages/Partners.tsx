import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Truck,
  UserCheck,
  ShoppingCart,
  Plane,
  Mail,
  Phone
} from "lucide-react";

const Partners = () => {
  useEffect(() => {
    document.title = "Partner with Medicod | Insurance Broker Partnership in Kenya";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Medicod Insurance Technologies is seeking licensed insurance brokers in Kenya and East Africa for embedded insurance partnerships. Join us to digitize and scale insurance distribution.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://medicod.ai/partners");
  }, []);

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
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
              <Link to="/waitlist" className="text-foreground hover:text-primary transition-colors font-medium">Waitlist</Link>
              <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg px-6">
                <Link to="/waitlist">Join the Waitlist</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-muted">
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Partner with Medicod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Join the future of embedded insurance distribution in Kenya and East Africa. We are looking for progressive insurance brokers who are ready to embrace technology and transform how insurance reaches consumers.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Who We Are</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Medicod Insurance Technologies is a forward-thinking insurance technology company committed to transforming how insurance is distributed and consumed across Africa. We provide modern, embeddable solutions that allow businesses to integrate insurance offerings directly into their platforms, ensuring accessibility, transparency, and efficiency for both insurers and clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our technology platform enables seamless digital onboarding, automated policy management, intelligent claims processing, and secure data infrastructure. We believe that insurance should be available at the point of need — embedded directly into the digital experiences that people already use every day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With partnerships with industry leaders like Britam Insurance, Microsoft for Startups, and Nvidia Inception, we have the backing and technology to deliver world-class insurance infrastructure tailored to African markets. Learn more about our <Link to="/" className="text-primary hover:underline font-medium">technology platform and services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Partnership Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Call to Partnership</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              We are actively seeking collaborations with progressive insurance brokers in Kenya who are ready to embrace technology and the future of embedded insurance. Whether you already have a strong digital presence or a clear business plan to adopt technology in your brokerage operations, we would like to hear from you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Our partnership model is designed to be mutually beneficial. We provide the technology infrastructure, API integrations, and digital tools, while our broker partners bring their industry expertise, regulatory licenses, and market relationships. Together, we can reach customers that traditional distribution models cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Broker Profile Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ideal Broker Profile</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We are looking for brokers who meet the following criteria and are ready to adopt technology-driven insurance distribution.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border border-border bg-card">
              <CardContent className="p-0">
                <div className="h-16 w-16 mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Licensing Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Licensed insurance brokers in Kenya (priority consideration)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Brokers with additional licenses in other East African countries (added advantage)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Compliance with IRA regulatory requirements and guidelines</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border border-border bg-card">
              <CardContent className="p-0">
                <div className="h-16 w-16 mb-6 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Business Orientation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Tech-oriented or open to integrating digital solutions into their operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Innovative firms eager to expand into embedded insurance distribution</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Willingness to adopt API-based workflows and digital customer journeys</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors of Focus Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Sectors of Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are looking to work with brokers who specialize in or have interest in the following industries. These sectors represent the highest potential for embedded insurance adoption in Kenya and East Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Truck className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Transport and Logistics</h3>
              <p className="text-muted-foreground">Comprehensive insurance solutions for transportation and logistics companies including cargo, fleet, and goods-in-transit coverage embedded into logistics management platforms.</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-accent rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <UserCheck className="h-8 w-8 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">HR and Recruitment</h3>
              <p className="text-muted-foreground">Tailored group life, health, and workers compensation insurance products embedded into HR management and recruitment platforms for seamless employee coverage.</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <ShoppingCart className="h-8 w-8 text-secondary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ecommerce and Retail</h3>
              <p className="text-muted-foreground">Modern product warranty, delivery, and purchase protection insurance solutions for online and traditional retail businesses integrated at checkout.</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Plane className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Travel and Hospitality</h3>
              <p className="text-muted-foreground">Specialized travel insurance, trip cancellation, and hospitality liability coverage for travel agencies and hospitality businesses embedded into booking flows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Partner with Medicod?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Access to our PoliPort API for digital policy distribution across multiple platforms</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">AI-powered underwriting and claims automation to reduce operational costs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Real-time analytics dashboard with performance insights and reporting</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Dedicated technical and business support team for onboarding and growth</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Expand into new digital distribution channels without building your own technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Compliant infrastructure aligned with IRA regulations and Kenya's Data Protection Act</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Partnership FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">What does the partnership process look like?</h3>
              <p className="text-muted-foreground">After you express interest through our waitlist, our partnerships team will schedule an introductory call to understand your brokerage operations and goals. We then conduct a joint assessment, followed by a technical onboarding process where we integrate your products with our PoliPort API.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Do I need to have existing technology infrastructure?</h3>
              <p className="text-muted-foreground">No. Medicod provides the full technology stack. Whether you currently operate manually or have existing digital systems, we can work with you. Our platform is designed to complement and enhance your existing operations, not replace them.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Is there a cost to partner with Medicod?</h3>
              <p className="text-muted-foreground">Our partnership model is designed to be commercially viable for both parties. We operate on a revenue-sharing basis, so there is no large upfront technology investment required. Details are discussed during the partnership exploration phase.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Can brokers outside Kenya apply?</h3>
              <p className="text-muted-foreground">Yes. While our primary focus is Kenya, we welcome brokers licensed in other East African countries including Uganda, Tanzania, Rwanda, and Ethiopia. Having multi-country licenses is an added advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed opacity-90">
              If you are a broker who fits this profile and is ready to explore embedded insurance opportunities, Medicod Insurance Technologies is your partner in shaping the future of insurance. Together, we can simplify access to insurance products and create value for businesses and individuals across Kenya and East Africa.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-card text-foreground hover:bg-muted text-lg px-8 py-6 h-auto shadow-xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/waitlist">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/favicon.ico" 
                  alt="MediCod Logo" 
                  className="h-12 w-12 rounded-xl mr-4"
                />
                <div>
                  <span className="text-2xl font-bold text-background">MediCod</span>
                  <p className="text-background/60">Insurance Technologies</p>
                </div>
              </div>
              <p className="text-background/60 mb-6 max-w-md">
                Building the future of insurance technology in Africa with AI-powered solutions and modern APIs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
              <div className="space-y-3 mb-6">
                <Link to="/" className="block text-background/60 hover:text-background transition-colors">Home</Link>
                <Link to="/partners" className="block text-background/60 hover:text-background transition-colors">Partners</Link>
                <Link to="/waitlist" className="block text-background/60 hover:text-background transition-colors">Join Waitlist</Link>
              </div>
              <h4 className="text-lg font-semibold mb-4 text-background">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-background/60">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">hi@medicodinsurance.tech</span>
                </div>
                <div className="flex items-center text-background/60">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+254 706 906 363</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-background/60">
            <p className="text-sm">&copy; 2025 MediCod Insurance Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;
