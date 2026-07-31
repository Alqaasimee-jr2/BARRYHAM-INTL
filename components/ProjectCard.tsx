import React from "react";
import { Project, ProjectSector } from "@/data/projects";
import { Building2, Activity, Home, Briefcase } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const getSectorIcon = (sector: ProjectSector) => {
    switch (sector) {
      case "Government":
        return <Building2 size={16} className="text-gold" />;
      case "Hospital":
        return <Activity size={16} className="text-gold" />;
      case "Residential":
        return <Home size={16} className="text-gold" />;
      case "Corporate":
        return <Briefcase size={16} className="text-gold" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-navy/5 transition-shadow p-6 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-heading font-semibold text-lg text-navy group-hover:text-gold transition-colors line-clamp-2">
          {project.name}
        </h3>
        <div className="bg-navy/5 p-2 rounded-full shrink-0 ml-3">
          {getSectorIcon(project.sector)}
        </div>
      </div>
      
      <div className="mt-auto space-y-2">
        <div className="flex flex-col">
          <span className="font-ui text-xs text-charcoal/50 uppercase tracking-wider">Location</span>
          <span className="font-ui text-sm text-charcoal">{project.location}</span>
        </div>
        
        <div className="flex flex-col pt-2 border-t border-navy/5">
          <span className="font-ui text-xs text-charcoal/50 uppercase tracking-wider">Client</span>
          <span className="font-ui text-sm text-charcoal">{project.client}</span>
        </div>
      </div>
    </div>
  );
}
