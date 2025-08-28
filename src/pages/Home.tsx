import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Server, 
  MessageSquare,
  Star,
  Shield,
  Clock,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies including React, Node.js, and cloud-native solutions."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android, designed for optimal performance and user experience."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Integration",
      description: "Seamless cloud migration and integration services using AWS, Azure, and Google Cloud platforms for scalable solutions."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UX/UI Design",
      description: "User-centered design solutions that combine aesthetic appeal with functional usability for optimal user engagement."
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "SaaS Solutions",
      description: "End-to-end Software as a Service development, from concept to deployment and ongoing maintenance."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help businesses optimize their IT infrastructure and digital transformation."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "On-Time Delivery",
      description: "Proven track record of delivering projects on schedule"
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Expert Team",
      description: "Certified professionals with 10+ years experience"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CTO, InnovateUK Ltd",
      quote: "DigitalTech Solutions transformed our legacy system into a modern, scalable platform. Their expertise and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "James Richardson",
      position: "Managing Director, TechStart Solutions",
      quote: "Outstanding web development and ongoing support. The team delivers quality work on time and within budget. Highly recommended.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      position: "Operations Manager, RetailTech UK",
      quote: "Their mobile app development service was exceptional. The app launched successfully and has received excellent user feedback.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional software development team working in modern office environment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Professional Software Development
            <span className="block text-primary-light">& IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Delivering innovative digital solutions for UK businesses. From web development to cloud integration, 
            we transform your ideas into powerful, scalable technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About DigitalTech Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                DigitalTech Solutions Ltd is a UK-registered software development company with over a decade of experience 
                delivering cutting-edge technology solutions. Our team of certified professionals specializes in creating 
                custom software that drives business growth and operational efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2014, we have successfully completed over 200 projects for clients ranging from startups to 
                enterprise organizations across various industries including finance, healthcare, retail, and manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {benefit.icon}
                    <span className="font-medium text-foreground">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-medium hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in the digital marketplace.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-medium hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <p className="text-muted-foreground">
                    Excellence, transparency, and collaboration form the foundation of our approach. 
                    We believe in building long-term partnerships with our clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across the UK
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover-lift">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our expert team for a free consultation and project quote
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">UK Business Address</h3>
              <p className="text-muted-foreground">
                DigitalTech Solutions Ltd<br />
                Innovation Centre, 123 Tech Street<br />
                Manchester, M1 2AB, United Kingdom
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Email: info@digitaltechsolutions.co.uk<br />
                Phone: +44 161 123 4567<br />
                Support: support@digitaltechsolutions.co.uk
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;