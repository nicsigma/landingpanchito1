import { LucideIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits?: string[];
  cta: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  benefits = [],
  icon: Icon,
  index,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="h-full w-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div 
        className={`bg-gradient-to-br from-[#165B46] to-[#0D2027] p-6 rounded-lg border border-[#33CD9E]/20 transition-all duration-300 cursor-pointer h-full ${
          isExpanded ? 'shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <div className="flex items-start gap-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, #C45DFF 0%, #0D2027 100%)`,
            }}
          >
            <Icon className="w-6 h-6 text-[#FAFAFA]" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-[#FAFAFA] mb-2">{title}</h3>
              <ChevronDown 
                size={20} 
                className={`text-[#33CD9E] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-96 mt-4' : 'max-h-0'
              }`}
            >
              <div className="bg-[#0D2027] rounded-lg p-4">
                <p className="text-[#FAFAFA] font-light mb-4">{description}</p>
                {benefits.length > 0 && (
                  <ul className="space-y-2">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-[#FAFAFA] font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#33CD9E] mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
