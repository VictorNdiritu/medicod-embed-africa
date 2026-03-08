
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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

const Index = () => {
  useEffect(() => {
    document.title = "Medicod Insurance Technologies | Embedded Insurance for Africa";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Medicod Insurance Technologies builds AI-powered APIs and embeddable infrastructure to help African insurers digitize, distribute, and scale insurance products across digital platforms.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://medicod.ai/");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/favicon.ico" 
                alt="MediCod Logo" 
                className="h-12 w-12 rounded-xl shadow-lg"
              />
              <div className="ml-4">
                <span className="text-2xl font-bold text-foreground">MediCod</span>
                <p className="text-sm text-muted-foreground font-medium">Insurance Technologies</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <Link to="/partners" className="text-foreground hover:text-primary transition-colors font-medium">Partners</Link>
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
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-foreground">
            Insurance Technology
            <br />
            for Modern Africa
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            MediCod Insurance Technologies builds AI-powered infrastructure and embeddable APIs to help African insurers and underwriters digitize, launch, and scale products faster than ever before. Our platform connects insurers with digital distribution channels through a single, modern API.
          </p>
          
          <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto font-medium bg-card p-6 rounded-2xl border border-border">
            Introducing <span className="font-bold text-primary">PoliPort</span> — our flagship API that lets insurers distribute policies across any digital platform without rebuilding their systems. PoliPort handles quoting, binding, policy issuance, and claims — all through one integration.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-2xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">API Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We provide comprehensive insurance technology solutions that help African insurers modernize, scale, and reach new markets through intelligent digital infrastructure. From API development to AI-powered automation, our services cover the full spectrum of insurtech needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-card hover:bg-card transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">API Development</h3>
                <p className="text-muted-foreground">Custom APIs and integration solutions that connect your existing insurance management systems to modern digital platforms. We build RESTful APIs with comprehensive documentation, sandbox environments, and dedicated technical support to ensure seamless integration.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-card hover:bg-card transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Automation</h3>
                <p className="text-muted-foreground">Intelligent systems for automated underwriting, claims processing, fraud detection, and customer insights. Our AI models are trained on African market data to deliver accurate risk assessments and faster claim settlements.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-card hover:bg-card transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Digital Infrastructure</h3>
                <p className="text-muted-foreground">Secure, scalable technology foundation for modern insurance operations. Our cloud-native infrastructure ensures 99.9% uptime, end-to-end encryption, and compliance with Kenya's data protection regulations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Product: PoliPort */}
      <section id="products" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FLAGSHIP PRODUCT
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6">Introducing PoliPort</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
              Your policies. One API. Unlimited reach.
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              PoliPort helps insurers launch their products across digital platforms — fast. Expand your distribution, simplify integration, and unlock new customer touchpoints without rebuilding your systems. PoliPort is designed for underwriters, brokers, and digital platforms who want to embed insurance at the point of need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Built for Underwriters</h3>
              <p className="text-lg text-muted-foreground mb-6">
                With PoliPort, you don't need to rebuild your systems to go digital. Keep control of your products, gain access to real-time distribution data, and open new channels — from apps to partner portals — all through one modern interface. Our API handles quoting, policy issuance, endorsements, renewals, and claims processing.
              </p>
              <p className="text-lg font-semibold text-primary">
                You stay in control. We handle the tech.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Full control over products and pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Real-time distribution analytics and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">No system rebuild required — integrate with existing workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Sandbox environment for testing before going live</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-muted rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg mb-2"></div>
                    <div className="h-2 bg-border rounded mb-2"></div>
                    <div className="h-2 bg-border rounded w-3/4"></div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-secondary rounded-lg mb-2"></div>
                    <div className="h-2 bg-border rounded mb-2"></div>
                    <div className="h-2 bg-border rounded w-2/3"></div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-accent rounded-lg mb-2"></div>
                    <div className="h-2 bg-border rounded mb-2"></div>
                    <div className="h-2 bg-border rounded w-4/5"></div>
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-primary rounded-lg mb-2"></div>
                    <div className="h-2 bg-border rounded mb-2"></div>
                    <div className="h-2 bg-border rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Embedded Anywhere</h4>
              <p className="text-muted-foreground">Digital marketplaces, partner apps, broker portals — PoliPort lets your policies live where customers already are. Integrate insurance into ecommerce checkouts, HR platforms, and logistics dashboards.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                <Zap className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Smarter by Design</h4>
              <p className="text-muted-foreground">Intelligent infrastructure automates quoting, supports regulatory compliance, and provides deep customer insights through real-time analytics dashboards.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">One Connection</h4>
              <p className="text-muted-foreground">Single API connection opens endless distribution opportunities without growing your tech stack. Manage multiple distribution partners from one dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">About MediCod</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We are building the future of insurance technology in Africa. Founded with the mission of making insurance accessible, affordable, and efficient, MediCod empowers insurers with intelligent solutions that drive growth and innovation across the continent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-card rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Layers className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation First</h3>
              <p className="text-muted-foreground">Cutting-edge technology solutions designed specifically for the unique needs of the African insurance market</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-card rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Partnership Focused</h3>
              <p className="text-muted-foreground">Building long-term relationships with insurers, brokers, and digital platforms across the continent</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-card rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground">Enterprise-grade security with built-in regulatory compliance for Kenya's Data Protection Act and IRA guidelines</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-card rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground">Track record of helping insurers scale and modernize operations with measurable improvements in efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Backed by Kenya's largest insurer and global technology leaders
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-card rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-border group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/65d018f9-7d2b-4fc9-8f1a-a86ac3e9b9a4.png" 
                  alt="Britam Logo - Strategic Insurance Partner of Medicod" 
                  className="h-20 w-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Britam Insurance</h3>
              <p className="text-muted-foreground font-medium">Strategic Insurance Partner</p>
              <div className="flex items-center mt-2">
                <Award className="h-4 w-4 text-accent mr-1" />
                <span className="text-sm text-accent font-medium">Verified Partner</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-card rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-border group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/e047ff08-c67f-413c-aeb1-1050bc55624d.png" 
                  alt="Microsoft for Startups Logo - Technology Partner of Medicod" 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Microsoft for Startups</h3>
              <p className="text-muted-foreground font-medium">Technology & Cloud Partner</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-primary mr-1" />
                <span className="text-sm text-primary font-medium">Growth Partner</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-card rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-border group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/ef07cba1-a75d-41d1-a8b1-832cb8580774.png" 
                  alt="Nvidia Inception Program Logo - AI Development Partner of Medicod" 
                  className="h-16 w-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Nvidia Inception</h3>
              <p className="text-muted-foreground font-medium">AI Development Partner</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-accent mr-1" />
                <span className="text-sm text-accent font-medium">Innovation Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">What is embedded insurance?</h3>
              <p className="text-muted-foreground">Embedded insurance is the integration of insurance products directly into non-insurance digital platforms and customer journeys. Instead of buying insurance separately, customers can purchase coverage at the point of need — for example, when booking a trip, purchasing goods online, or hiring employees through an HR platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">How does PoliPort work?</h3>
              <p className="text-muted-foreground">PoliPort is a RESTful API that connects insurers' existing products to digital distribution channels. Platforms integrate PoliPort to offer insurance quotes, bind policies, manage endorsements, and process claims — all through a single API connection. Insurers maintain full control of their products and pricing.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Who can use Medicod's platform?</h3>
              <p className="text-muted-foreground">Our platform serves insurance underwriters, licensed brokers, ecommerce platforms, logistics companies, HR tech firms, and any digital platform that wants to embed insurance into their product offering. We are currently focused on the Kenyan and East African markets.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Is Medicod licensed by the Insurance Regulatory Authority (IRA)?</h3>
              <p className="text-muted-foreground">Medicod operates as a technology provider partnering with licensed insurance entities. We work with IRA-licensed underwriters and brokers to ensure all insurance products distributed through our platform comply with Kenyan insurance regulations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">How do I get started?</h3>
              <p className="text-muted-foreground">You can <Link to="/waitlist" className="text-primary hover:underline font-medium">join our waitlist</Link> to get early access to the platform. If you are a broker interested in partnership, visit our <Link to="/partners" className="text-primary hover:underline font-medium">partners page</Link> to learn more about collaboration opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Insurance Business?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join forward-thinking insurers who trust MediCod Insurance Technologies to power their digital transformation. Let's build the future of insurance together across Kenya and East Africa.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto bg-card text-foreground hover:bg-muted shadow-xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/partners">
                Become a Partner
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
                Building the future of insurance technology in Africa with AI-powered solutions and modern APIs that help insurers scale and innovate across Kenya and East Africa.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:hi@medicodinsurance.tech" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </a>
                <a href="tel:+254706906363" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </a>
              </div>
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

export default Index;
