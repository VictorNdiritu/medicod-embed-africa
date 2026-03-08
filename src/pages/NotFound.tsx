import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found | Medicod Insurance Technologies";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
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

      <div className="flex items-center justify-center py-32 px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved. Please check the URL or navigate back to our homepage to find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/partners">
                <Search className="mr-2 h-5 w-5" />
                View Partners
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Helpful Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
              <Link to="/partners" className="text-primary hover:underline font-medium">Partners</Link>
              <Link to="/waitlist" className="text-primary hover:underline font-medium">Join Waitlist</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
