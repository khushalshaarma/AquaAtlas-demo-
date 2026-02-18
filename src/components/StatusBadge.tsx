import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: 'safe' | 'watch' | 'danger';
  label: string;
  pulse?: boolean;
}

const statusStyles = {
  safe: "bg-gradient-success text-success-foreground border-success/30",
  watch: "bg-gradient-warning text-warning-foreground border-warning/30", 
  danger: "bg-gradient-danger text-destructive-foreground border-destructive/30"
};

const StatusBadge = ({ status, label, pulse = false }: StatusBadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border backdrop-blur-sm transition-all duration-300",
        statusStyles[status],
        pulse && status === 'danger' && "animate-pulse-danger",
        pulse && status === 'watch' && "animate-pulse-warning"
      )}
    >
      <div className={cn(
        "w-2 h-2 rounded-full mr-2",
        status === 'safe' && "bg-success-foreground",
        status === 'watch' && "bg-warning-foreground", 
        status === 'danger' && "bg-destructive-foreground"
      )} />
      {label}
    </div>
  );
};

export default StatusBadge;