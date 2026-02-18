import { Button } from "@/components/ui/button";
import { Map, Layers, Satellite, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapPlaceholderProps {
  height?: string;
}

const MapPlaceholder = ({ height = "h-96" }: MapPlaceholderProps) => {
  return (
    <div className={cn(
      "relative rounded-lg border border-border/30 bg-gradient-to-br from-muted/20 to-muted/5 overflow-hidden",
      height
    )}>
      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <Button variant="outline" size="sm">
          <Layers className="w-4 h-4" />
          Layers
        </Button>
        <Button variant="outline" size="sm">
          <Satellite className="w-4 h-4" />
          LiDAR
        </Button>
        <Button variant="outline" size="sm">
          <Zap className="w-4 h-4" />
          Live Data
        </Button>
      </div>

      {/* Risk Zones Overlay */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-success"></div>
            <span className="text-xs text-card-foreground">Safe Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-warning"></div>
            <span className="text-xs text-card-foreground">Watch Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-danger"></div>
            <span className="text-xs text-card-foreground">Danger Zone</span>
          </div>
        </div>
      </div>

      {/* Map Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Map className="w-16 h-16 text-primary mx-auto opacity-50" />
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Interactive Map View</h3>
            <p className="text-sm text-muted-foreground mt-1">
              GIS layers, LiDAR data, and real-time flood simulation
            </p>
          </div>
          <Button variant="default">
            Initialize Map System
          </Button>
        </div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(hsl(198 70% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(198 70% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
    </div>
  );
};

export default MapPlaceholder;