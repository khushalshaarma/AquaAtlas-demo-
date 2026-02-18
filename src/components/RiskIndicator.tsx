import { cn } from "@/lib/utils";
import StatusBadge from "./StatusBadge";

interface RiskIndicatorProps {
  title: string;
  value: number;
  unit: string;
  status: 'safe' | 'watch' | 'danger';
  description: string;
  icon: React.ReactNode;
}

const RiskIndicator = ({ title, value, unit, status, description, icon }: RiskIndicatorProps) => {
  const getProgressColor = () => {
    switch (status) {
      case 'safe': return 'bg-gradient-success';
      case 'watch': return 'bg-gradient-warning';
      case 'danger': return 'bg-gradient-danger';
    }
  };

  const getProgressWidth = () => {
    if (status === 'safe') return '25%';
    if (status === 'watch') return '65%';
    return '90%';
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/70 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>
          <div>
            <h3 className="font-semibold text-card-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <StatusBadge status={status} label={status.toUpperCase()} pulse={status === 'danger'} />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-card-foreground">{value}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className={cn("h-full transition-all duration-1000 ease-out", getProgressColor())}
            style={{ width: getProgressWidth() }}
          />
        </div>
      </div>
    </div>
  );
};

export default RiskIndicator;