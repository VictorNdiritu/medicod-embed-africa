
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
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Services</a>
              <a href="#products" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Products</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">About</a>
              <Link to="/partners" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Partners</Link>
              <Link to="/waitlist" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Waitlist</Link>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 px-6">
                <Link to="/waitlist">Join the Waitlist</Link>
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
              Insurance Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              for Modern Africa
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            MediCod Insurance Technologies builds AI-powered infrastructure and embeddable APIs to help African insurers and underwriters digitize, launch, and scale products faster than ever before.
          </p>
          
          <p className="text-lg text-slate-700 mb-12 max-w-3xl mx-auto font-medium bg-white/70 p-6 rounded-2xl border border-blue-100">
            Introducing <span className="font-bold text-blue-600">PoliPort</span> — our flagship API that lets insurers distribute policies across any digital platform without rebuilding their systems.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-slate-600">API Uptime</div>
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

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We provide comprehensive insurance technology solutions that help African insurers modernize, scale, and reach new markets through intelligent digital infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">API Development</h3>
                <p className="text-slate-600">Custom APIs and integration solutions that connect your existing systems to modern digital platforms</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Automation</h3>
                <p className="text-slate-600">Intelligent systems for automated underwriting, claims processing, and customer insights</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Infrastructure</h3>
                <p className="text-slate-600">Secure, scalable technology foundation for modern insurance operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Product: PoliPort */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FLAGSHIP PRODUCT
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-6">Introducing PoliPort</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Your policies. One API. Unlimited reach.
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              PoliPort helps insurers launch their products across digital platforms — fast. Expand your distribution, simplify integration, and unlock new customer touchpoints without rebuilding your systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Built for Underwriters</h3>
              <p className="text-lg text-slate-600 mb-6">
                With PoliPort, you don't need to rebuild your systems to go digital. Keep control of your products, gain access to real-time distribution data, and open new channels — from apps to partner portals — all through one modern interface.
              </p>
              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                You stay in control. We handle the tech.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Full control over products and pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Real-time distribution analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">No system rebuild required</span>
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

          {/* Distribution Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Embedded Anywhere</h4>
              <p className="text-slate-600">Digital marketplaces, partner apps, broker portals — PoliPort lets your policies live where customers already are</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Smarter by Design</h4>
              <p className="text-slate-600">Intelligent infrastructure automates quoting, supports compliance, and provides deep customer insights</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">One Connection</h4>
              <p className="text-slate-600">Single API connection opens endless distribution opportunities without growing your tech stack</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">About MediCod</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We're building the future of insurance technology in Africa, empowering insurers with intelligent solutions that drive growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Layers className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation First</h3>
              <p className="text-slate-600">Cutting-edge technology solutions designed for the African insurance market</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership Focused</h3>
              <p className="text-slate-600">Building long-term relationships with insurers across the continent</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Shield className="h-8 w-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Compliance</h3>
              <p className="text-slate-600">Enterprise-grade security with built-in regulatory compliance</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">Track record of helping insurers scale and modernize operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Trusted by Industry Leaders</h2>
            <p className="text-lg text-slate-600">
              Backed by Kenya's largest insurer and Microsoft's startup program
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/65d018f9-7d2b-4fc9-8f1a-a86ac3e9b9a4.png" 
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

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/ef07cba1-a75d-41d1-a8b1-832cb8580774.png" 
                  alt="Nvidia Inception Program Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nvidia Inception</h3>
              <p className="text-slate-600 font-medium">AI Development Partner</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">Innovation Partner</span>
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
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Insurance Business?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join forward-thinking insurers who trust MediCod Insurance Technologies to power their digital transformation. Let's build the future of insurance together.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto bg-white text-slate-900 hover:bg-slate-100 shadow-xl transform hover:scale-105 transition-all duration-200"
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
                Building the future of insurance technology in Africa with AI-powered solutions and modern APIs that help insurers scale and innovate.
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

    </div>
  );
};

export default Index;
