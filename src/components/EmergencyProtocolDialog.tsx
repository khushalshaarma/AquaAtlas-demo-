import { useState } from "react";
import { AlertTriangle, Phone, Radio, Users, Shield, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface EmergencyProtocolDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmergencyProtocolDialog = ({ open, onOpenChange }: EmergencyProtocolDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-6 h-6" />
            Emergency Protocol Activated
          </DialogTitle>
          <DialogDescription>
            Immediate response procedures for flood emergency situations
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Contacts
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="destructive" className="justify-start">
                <Phone className="w-4 h-4" />
                Emergency Services: 911
              </Button>
              <Button variant="outline" className="justify-start">
                <Radio className="w-4 h-4" />
                Flood Control: (555) 123-4567
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="w-4 h-4" />
                Evacuation Center: (555) 987-6543
              </Button>
              <Button variant="outline" className="justify-start">
                <Shield className="w-4 h-4" />
                Emergency Mgmt: (555) 456-7890
              </Button>
            </div>
          </div>

          <Separator />

          {/* Immediate Actions */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Immediate Actions Required</h3>
            <div className="space-y-3">
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <h4 className="font-medium text-destructive mb-2">1. Alert All Personnel</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Send Mass SMS</Button>
                  <Button size="sm" variant="outline">Radio Broadcast</Button>
                  <Button size="sm" variant="outline">Sound Sirens</Button>
                </div>
              </div>
              
              <div className="p-3 bg-warning/10 border border-warning/30 rounded-lg">
                <h4 className="font-medium text-warning mb-2">2. Evacuation Procedures</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <MapPin className="w-4 h-4" />
                    Open Evacuation Routes
                  </Button>
                  <Button size="sm" variant="outline">Deploy Emergency Vehicles</Button>
                </div>
              </div>

              <div className="p-3 bg-muted/20 rounded-lg">
                <h4 className="font-medium mb-2">3. Resource Mobilization</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Activate Shelters</Button>
                  <Button size="sm" variant="outline">Deploy Rescue Teams</Button>
                  <Button size="sm" variant="outline">Emergency Supplies</Button>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Protocol Confirmation */}
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel Protocol
            </Button>
            <Button variant="destructive" size="lg">
              <AlertTriangle className="w-4 h-4" />
              Confirm Emergency Activation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyProtocolDialog;