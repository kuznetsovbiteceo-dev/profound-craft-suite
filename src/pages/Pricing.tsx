import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "From £2,000",
      period: "per project",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Contact form integration",
        "Basic SEO optimization",
        "3 months of support",
        "SSL certificate setup"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional Package",
      price: "From £8,000",
      period: "per project",
      description: "Comprehensive solution for growing businesses with advanced requirements",
      features: [
        "Custom web application",
        "User authentication system",
        "Database integration",
        "API development",
        "Advanced SEO & analytics",
        "6 months of support",
        "Training and documentation",
        "Performance optimization"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise Package",
      price: "From £20,000",
      period: "per project",
      description: "Full-scale enterprise solutions with advanced features and integrations",
      features: [
        "Complex web/mobile application",
        "Cloud infrastructure setup",
        "Third-party integrations",
        "Advanced security implementation",
        "Scalable architecture design",
        "12 months of support",
        "Dedicated project manager",
        "Priority support & updates",
        "Staff training program"
      ],
      popular: false,
      cta: "Contact Us"
    },
    {
      name: "Custom Solution",
      price: "Quote on Request",
      period: "tailored pricing",
      description: "Bespoke solutions designed specifically for your unique business requirements",
      features: [
        "Tailored to your exact needs",
        "Comprehensive requirement analysis",
        "Custom architecture design",
        "Advanced integrations",
        "Ongoing development support",
        "Flexible support terms",
        "Dedicated development team",
        "Regular progress updates"
      ],
      popular: false,
      cta: "Get Quote"
    }
  ];

  const additionalServices = [
    {
      service: "Mobile App Development",
      price: "From £5,000 - £25,000",
      description: "Native or cross-platform mobile applications"
    },
    {
      service: "Cloud Migration Services",
      price: "From £3,000 - £15,000",
      description: "Complete cloud infrastructure setup and migration"
    },
    {
      service: "UX/UI Design Services",
      price: "From £1,500 - £8,000",
      description: "Professional design and user experience optimization"
    },
    {
      service: "IT Consulting (Hourly)",
      price: "£150 - £250 per hour",
      description: "Expert technology consulting and strategic advice"
    },
    {
      service: "Ongoing Support & Maintenance",
      price: "From £200 per month",
      description: "Regular updates, security patches, and technical support"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transparent Pricing for Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the package that best fits your business needs. All prices are transparent with no hidden fees.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">Fixed pricing • No surprises • Professional quality guaranteed</span>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative shadow-medium hover-lift transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary shadow-strong' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground"> {pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      variant={pkg.popular ? "hero" : "default"} 
                      className="w-full"
                    >
                      {pkg.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized services available as add-ons or standalone solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="shadow-soft hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.service}
                  </h3>
                  <p className="text-xl font-bold text-primary mb-2">
                    {service.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Pricing Model?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                No hidden fees or surprise costs. What you see is what you pay, with detailed project breakdowns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Professional quality work backed by our satisfaction guarantee and comprehensive testing process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Payment</h3>
              <p className="text-muted-foreground">
                Milestone-based payments with flexible terms to accommodate your budget and cash flow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every project is unique. Contact us for a detailed quote tailored to your specific requirements.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Get Custom Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">
            Response within 24 hours • Free initial consultation • No obligation quote
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;