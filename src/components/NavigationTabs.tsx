import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const NavigationTabs = ({ tabs, activeTab, onTabChange }: NavigationTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "default" : "outline"}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 transition-all duration-300",
            activeTab === tab.id && "shadow-[var(--shadow-glow)]"
          )}
        >
          {tab.icon}
          <div className="flex flex-col items-start">
            <span className="font-medium">{tab.label}</span>
            <span className="text-xs opacity-80">{tab.description}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default NavigationTabs;