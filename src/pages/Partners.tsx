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
  Plane
} from "lucide-react";

const Partners = () => {
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
              <Link to="/" className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium">Home</Link>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Partner with Us
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the future of embedded insurance distribution in Kenya and East Africa
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Who We Are</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Medicod Insurance Technologies is a forward-thinking insurance technology company committed to transforming how insurance is distributed and consumed. We provide modern, embeddable solutions that allow businesses to integrate insurance offerings directly into their platforms, ensuring accessibility, transparency, and efficiency for both insurers and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Partnership Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Our Call to Partnership</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              We are actively seeking collaborations with progressive insurance brokers in Kenya who are ready to embrace technology and the future of embedded insurance. Whether you already have a strong digital presence or a clear business plan to adopt technology in your brokerage operations, we would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Broker Profile Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Ideal Broker Profile</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="h-16 w-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Licensed insurance brokers in Kenya (priority consideration)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Brokers with additional licenses in other East African countries (added advantage)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="h-16 w-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Tech-oriented or open to integrating digital solutions into their operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Innovative firms eager to expand into embedded insurance distribution</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors of Focus Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Sectors of Focus</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We are looking to work with brokers who specialize in or have interest in the following industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Truck className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transport and Logistics</h3>
              <p className="text-slate-600">Comprehensive insurance solutions for transportation and logistics companies</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <UserCheck className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">HR and Recruitment</h3>
              <p className="text-slate-600">Tailored insurance products for human resources and recruitment agencies</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <ShoppingCart className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ecommerce and Retail</h3>
              <p className="text-slate-600">Modern insurance solutions for online and traditional retail businesses</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Plane className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Travel and Hospitality</h3>
              <p className="text-slate-600">Specialized coverage for travel agencies and hospitality businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">Join Us</h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              If you are a broker who fits this profile and is ready to explore embedded insurance opportunities, Medicod Insurance Technologies is your partner in shaping the future of insurance. Together, we can simplify access to insurance products and create value for businesses and individuals across Kenya and East Africa.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
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
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/a34ed8e2-8a17-4e05-a3bb-c6c7b0b821f5.png" 
                alt="MediCod Logo" 
                className="h-12 w-12 rounded-xl shadow-lg ring-2 ring-blue-400"
              />
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MediCod</span>
              <p className="text-sm text-slate-400 font-medium">Insurance Technologies</p>
            </div>
          </div>
          
          <p className="text-slate-400 text-center">
            © 2024 Medicod Insurance Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Partners;