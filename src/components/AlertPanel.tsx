import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";
import DashboardCard from "./DashboardCard";
import { AlertTriangle, Bell, MessageSquare, Phone } from "lucide-react";

interface Alert {
  id: string;
  type: 'flood' | 'infrastructure' | 'panic';
  title: string;
  message: string;
  severity: 'safe' | 'watch' | 'danger';
  timestamp: string;
  location: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "flood",
    title: "Rising Water Levels",
    message: "River Ganges water level increased by 2.3m in the last 6 hours",
    severity: "watch",
    timestamp: "2 minutes ago",
    location: "Sector 7, Varanasi"
  },
  {
    id: "2",
    type: "panic",
    title: "High Panic Sentiment",
    message: "Social media analysis shows increased evacuation discussions",
    severity: "danger",
    timestamp: "5 minutes ago",
    location: "Gomti Nagar, Lucknow"
  },
  {
    id: "3",
    type: "infrastructure",
    title: "Bridge Monitoring",
    message: "Structural stress detected on Yamuna Bridge supports",
    severity: "watch",
    timestamp: "12 minutes ago",
    location: "Delhi-NCR"
  }
];

const AlertPanel = () => {
  return (
    <DashboardCard
      title="Active Alerts"
      subtitle="Real-time monitoring and notifications"
      action={
        <Button variant="outline" size="sm">
          <Bell className="w-4 h-4" />
          Configure
        </Button>
      }
    >
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-border/30 bg-muted/20 hover:bg-muted/30 transition-all duration-300"
          >
            <div className="text-primary mt-1">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-card-foreground">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                </div>
                <StatusBadge status={alert.severity} label={alert.severity.toUpperCase()} pulse={alert.severity === 'danger'} />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{alert.location}</span>
                <span>{alert.timestamp}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-3 h-3" />
                  SMS
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-3 h-3" />
                  Call
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="w-3 h-3" />
                  Push
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default AlertPanel;