import { useState } from "react";
import { Activity, Shield, Users, Smartphone, Radio, AlertTriangle } from "lucide-react";
import NavigationTabs from "@/components/NavigationTabs";
import RiskIndicator from "@/components/RiskIndicator";
import AlertPanel from "@/components/AlertPanel";
import MapPlaceholder from "@/components/MapPlaceholder";
import DashboardCard from "@/components/DashboardCard";
import EmergencyProtocolDialog from "@/components/EmergencyProtocolDialog";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("authorities");
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);

  const tabs = [
    {
      id: "authorities",
      label: "Authorities",
      icon: <Shield className="w-5 h-5" />,
      description: "Control Center"
    },
    {
      id: "villagers",
      label: "Villagers",
      icon: <Users className="w-5 h-5" />,
      description: "Community View"
    },
    {
      id: "field",
      label: "Field Teams",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Mobile Units"
    }
  ];

  const riskData = [
    {
      title: "LiDAR Structural Health",
      value: 87,
      unit: "% structural integrity",
      status: "safe" as const,
      description: "Bridge decay analysis complete",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Real-time Sensors", 
      value: 18.7,
      unit: "meters water level",
      status: "watch" as const,
      description: "IoT network: 12/14 sensors active",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "AI Behavior Prediction",
      value: 2300,
      unit: "people at risk",
      status: "danger" as const,
      description: "If infrastructure fails cascade",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Sentiment Analysis",
      value: 73,
      unit: "% panic level",
      status: "watch" as const,
      description: "WhatsApp/Social media monitoring",
      icon: <Radio className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">AquaAtlas AI Control Center</h1>
            <p className="text-muted-foreground mt-2">Behavior-Aware Flood Monitoring • LiDAR + Sentiment Analysis • Last AI update: 2 minutes ago</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="alert" onClick={() => setEmergencyDialogOpen(true)}>
              <AlertTriangle className="w-4 h-4" />
              Emergency Protocol
            </Button>
            <Button variant="hero">
              Initialize Systems
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Risk Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {riskData.map((risk, index) => (
            <RiskIndicator key={index} {...risk} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="xl:col-span-2 space-y-6">
            <DashboardCard
              title="Live AI Simulation & LiDAR Analysis"
              subtitle="Real-time infrastructure health + behavior modeling"
            >
              <MapPlaceholder height="h-[500px]" />
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-2 bg-success/10 rounded">
                  <div className="font-semibold text-success">LiDAR Scan</div>
                  <div className="text-muted-foreground">Bridge integrity: 87%</div>
                </div>
                <div className="text-center p-2 bg-warning/10 rounded">
                  <div className="font-semibold text-warning">AI Prediction</div>
                  <div className="text-muted-foreground">Failure cascade risk</div>
                </div>
                <div className="text-center p-2 bg-info/10 rounded">
                  <div className="font-semibold text-info">GIS Integration</div>
                  <div className="text-muted-foreground">Historical data overlay</div>
                </div>
              </div>
            </DashboardCard>
            
            {activeTab === "authorities" && (
              <>
                <DashboardCard
                  title="AI-Powered Command Center"
                  subtitle="Predictive analytics and infrastructure monitoring"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">LiDAR Structural Analysis</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Bridge echo decay: Hidden cracks detected</li>
                        <li>• Embankment integrity: 3 weak spots flagged</li>
                        <li>• Floodgate mechanism: Needs maintenance</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Behavior-Aware Predictions</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Power grid failure simulation complete</li>
                        <li>• Traffic flow disruption model updated</li>
                        <li>• Evacuation bottleneck analysis ready</li>
                      </ul>
                    </div>
                  </div>
                </DashboardCard>
                
                <DashboardCard
                  title="Sentiment & Human Intelligence"
                  subtitle="Real-time panic detection and social monitoring"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                      <h4 className="font-semibold text-warning mb-2">Panic Zones Detected</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• WhatsApp groups: 73% worry sentiment</li>
                        <li>• Social media: Evacuation discussion spike</li>
                        <li>• Emergency calls: +40% from riverside area</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Targeted Alert System</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Smart alerts sent to 2,300 at-risk residents</li>
                        <li>• Plan-B suggestions: Alternative routes ready</li>
                        <li>• Multi-channel delivery: SMS, Voice, Push</li>
                      </ul>
                    </div>
                  </div>
                </DashboardCard>
              </>
            )}

            {activeTab === "villagers" && (
              <>
                <DashboardCard
                  title="Offline-Ready Survival App"
                  subtitle="Works without internet - AI guidance when you need it most"
                >
                  <div className="text-center py-8 space-y-4">
                    <Smartphone className="w-16 h-16 text-primary mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold">AquaAtlas Mobile AI</h3>
                      <p className="text-muted-foreground mt-2">
                        Lightweight Android app with offline ML models. Pre-downloads survival guidance, 
                        evacuation routes, and emergency contacts. Works even when cell towers fail.
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <Button variant="default" size="lg">
                        Download Android App
                      </Button>
                      <Button variant="outline" size="lg">
                        QR Code
                      </Button>
                    </div>
                  </div>
                </DashboardCard>
                
                <DashboardCard
                  title="AI-Powered Community Intelligence"
                  subtitle="Smart alerts with Plan-B suggestions"
                >
                  <div className="space-y-4">
                    <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                      <h4 className="font-semibold text-warning mb-2">⚠️ AI Predicts: Infrastructure Stress</h4>
                      <p className="text-sm">Bridge vibration sensors + LiDAR analysis show hidden cracks. If river rises 1.5m more, consider alternate routes.</p>
                      <Button variant="outline" size="sm" className="mt-2">View Plan-B Routes</Button>
                    </div>
                    <div className="p-4 bg-info/10 border border-info/30 rounded-lg">
                      <h4 className="font-semibold text-info mb-2">🤖 Community Sentiment: Elevated Concern</h4>
                      <p className="text-sm">AI detected increased worry in local WhatsApp groups. You're not alone - here's what authorities are doing.</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Smart Evacuation Guidance</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Primary: Highway 15 north (AI-optimized for traffic)</li>
                        <li>• AI Alternative: Old Mill Road (if primary blocked)</li>
                        <li>• Emergency: Community Center (supplies pre-positioned)</li>
                      </ul>
                    </div>
                  </div>
                </DashboardCard>
              </>
            )}

            {activeTab === "field" && (
              <>
                <DashboardCard
                  title="AI-Enhanced Field Operations"
                  subtitle="Smart coordination with predictive maintenance"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-3">LiDAR-Guided Teams</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Team Alpha (Bridge LiDAR scan)</span>
                          <span className="text-success">Echo analysis complete</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Team Bravo (AI-predicted weak spots)</span>
                          <span className="text-warning">Investigating decay</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Team Charlie (Sensor network)</span>
                          <span className="text-info">IoT maintenance mode</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-3">Smart Equipment Status</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>AI-enabled tablets</span>
                          <span className="text-success">6/6 ML models loaded</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>LiDAR portable units</span>
                          <span className="text-success">3/3 calibrated</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Sentiment monitoring tools</span>
                          <span className="text-warning">API rate limit reached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>

                <DashboardCard
                  title="Intelligent Field Communication"
                  subtitle="AI-assisted reporting and continuous learning"
                >
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Button variant="default" size="sm">
                        <Radio className="w-4 h-4" />
                        AI Report Assistant
                      </Button>
                      <Button variant="outline" size="sm">
                        LiDAR Data Upload
                      </Button>
                      <Button variant="alert" size="sm">
                        Emergency Learning Mode
                      </Button>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Latest AI-Enhanced Report</h5>
                      <p className="text-sm text-muted-foreground">
                        "LiDAR scan reveals 3 hairline cracks on east bridge support (confidence: 87%). 
                        AI recommends monitoring frequency increase. Structural integrity: 72% → AI learning updated. - Team Alpha, 2:14 PM"
                      </p>
                    </div>
                    <div className="p-3 bg-info/10 border border-info/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2 text-info">🤖 Continuous Learning Active</h5>
                      <p className="text-sm text-muted-foreground">
                        AI model updated with today's field data. Prediction accuracy improved by 4.2% based on your reports.
                      </p>
                    </div>
                  </div>
                </DashboardCard>
              </>
            )}
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <AlertPanel />
            
            <DashboardCard
              title="AI Learning & Infrastructure Health"
              subtitle="Continuous improvement with LiDAR analysis"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">LiDAR Scanners (4/4)</span>
                  <span className="text-success font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">AI Behavior Models</span>
                  <span className="text-success font-semibold">Learning</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Sentiment Analysis API</span>
                  <span className="text-warning font-semibold">Rate Limited</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Predictive Engine</span>
                  <span className="text-success font-semibold">87% Accuracy</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-info/10 rounded text-sm">
                  <span className="text-info">🧠 Model retrained: 3 hrs ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/10 rounded text-sm">
                  <span className="text-muted-foreground">Next LiDAR sweep: Tonight</span>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
      
      <EmergencyProtocolDialog 
        open={emergencyDialogOpen}
        onOpenChange={setEmergencyDialogOpen}
      />
    </div>
  );
};

export default Dashboard;