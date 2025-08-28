import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Server, 
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Responsive website design",
        "React/Next.js applications",
        "E-commerce platforms",
        "Content management systems",
        "API development and integration",
        "Performance optimization"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
      features: [
        "iOS and Android native apps",
        "Cross-platform development",
        "Mobile UI/UX design",
        "App store optimization",
        "Push notification integration",
        "Offline functionality"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Integration & Migration",
      description: "Seamless cloud adoption and migration services to enhance scalability, security, and cost-effectiveness.",
      features: [
        "Cloud migration strategy",
        "AWS/Azure/GCP implementation",
        "Microservices architecture",
        "Container orchestration",
        "CI/CD pipeline setup",
        "Cloud security implementation"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "UX/UI Design",
      description: "User-centered design solutions that combine aesthetic appeal with functional usability.",
      features: [
        "User experience research",
        "Interface design",
        "Prototype development",
        "Usability testing",
        "Brand identity design",
        "Design system creation"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"]
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "SaaS Solutions",
      description: "End-to-end Software as a Service development from concept to deployment and ongoing maintenance.",
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "User authentication systems",
        "API development",
        "Data analytics dashboard",
        "Third-party integrations"
      ],
      technologies: ["Node.js", "Python", "Redis", "PostgreSQL", "Stripe API"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize IT infrastructure and accelerate digital transformation.",
      features: [
        "Technology assessment",
        "Digital transformation strategy",
        "Architecture design",
        "Security auditing",
        "Performance optimization",
        "Team training and support"
      ],
      technologies: ["TOGAF", "ITIL", "DevOps", "Agile", "Security Frameworks"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business and drive digital success
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="shadow-medium hover-lift transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, define project scope, and create a detailed development roadmap."
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "Our team creates wireframes, designs, and technical architecture for your solution."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous integration and comprehensive testing throughout."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Seamless deployment, training, and ongoing support to ensure long-term success."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and create a custom solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;