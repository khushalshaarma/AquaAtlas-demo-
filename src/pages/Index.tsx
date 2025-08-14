import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Users, Smartphone, ArrowRight, AlertTriangle, Radio, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import StatusBadge from "@/components/StatusBadge";
import RiskIndicator from "@/components/RiskIndicator";
import NavigationTabs from "@/components/NavigationTabs";

const Index = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("overview");

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 River Monitoring", 
      description: "Our team manually checks sensor data every 4 hours. We use old-school GIS maps plus some newer LiDAR stuff when the weather cooperates."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Smart Flood Predictions",
      description: "We've been tracking flood patterns since 2019. Our models aren't perfect but they're getting better at guessing when things might go wrong."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Warnings",
      description: "SMS alerts, some WhatsApp groups, and we still use the old sirens. Works most of the time, unless the cell towers are down."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Offline Emergency App",
      description: "Download maps and safety info before disasters hit. Not fancy, but it runs on any phone and doesn't need internet to work."
    }
  ];

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-6">
              <StatusBadge status="safe" label="SYSTEM OPERATIONAL" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">AquaAtlas</span>
              <br />
              Community Flood Watch
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We help riverside communities stay safe with early flood warnings, 
              infrastructure monitoring, and emergency planning tools that actually work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleGetStarted}
                className="group"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Radio className="w-5 h-5" />
                Emergency Protocol
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What We Do (and How We Do It)
              </h2>
              <p className="text-xl text-muted-foreground">
                Real tools for real emergencies - built with and for the communities that need them most
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 transition-all duration-300 group ${
                    index === 0 ? 'p-7' : index === 1 ? 'p-8' : index === 2 ? 'p-6 pt-8' : 'p-8 pb-7'
                  }`}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Data Preview */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Current Situation
              </h2>
              <p className="text-xl text-muted-foreground">
                Live data from the Riverside Valley monitoring station (updated every 15 minutes)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
              <RiskIndicator
                title="River Height"
                value={18.7}
                unit="meters"
                status="watch"
                description="Measured at Station #3"
                icon={<Activity className="w-6 h-6" />}
              />
              <RiskIndicator
                title="Bridge Status"
                value={74}
                unit="% ok"
                status="safe"
                description="Last inspected Tuesday"
                icon={<Shield className="w-6 h-6" />}
              />
              <RiskIndicator
                title="Residents"
                value={12500}
                unit="potentially affected"
                status="danger"
                description="If levee fails"
                icon={<Users className="w-6 h-6" />}
              />
              <RiskIndicator
                title="Active Alerts"
                value={3}
                unit="warnings"
                status="watch"
                description="Check your phone"
                icon={<AlertTriangle className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Want to Help Keep Your Community Safe?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 47 communities across the region that use AquaAtlas to stay ahead of floods. 
              It's free for residents, and we train local volunteers to help their neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={handleGetStarted}>
                <Zap className="w-5 h-5" />
                Start Monitoring
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
