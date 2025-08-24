import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  fullBio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  isFounder?: boolean;
}

export function TeamMemberCard({ member, isFounder = false }: TeamMemberCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  if (isFounder) {
    return (
      <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-empowerment/5 to-solidarity/5">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="body-base text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium text-primary">
              {member.name}
            </h3>
            <p className="text-solidarity font-medium mt-1">
              {member.role}
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.description}
          </p>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mt-4">
                Voir plus
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <DialogTitle className="text-xl font-playfair">
                      {member.name}
                    </DialogTitle>
                    <p className="text-solidarity font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {member.fullBio}
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}