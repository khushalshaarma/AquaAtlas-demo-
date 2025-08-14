import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const DashboardCard = ({ children, className, title, subtitle, action }: DashboardCardProps) => {
  return (
    <div className={cn(
      "bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:bg-card/70 transition-all duration-300",
      className
    )}>
      {(title || subtitle || action) && (
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center justify-between">
            <div>
              {title && <h2 className="text-xl font-semibold text-card-foreground">{title}</h2>}
              {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
          </div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;