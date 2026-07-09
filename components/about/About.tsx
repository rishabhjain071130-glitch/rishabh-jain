import * as React from "react";
import { aboutContent } from "@/content/about";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Introduction text column */}
      <div className="lg:col-span-5 space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Engineering Philosophy
        </h3>
        <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
          {aboutContent.text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {/* Values grid column */}
      <div className="lg:col-span-7 space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutContent.values.map((value, index) => (
            <Card key={index} hoverEffect={true} className="p-4 flex gap-3 items-start select-none">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  {value.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
