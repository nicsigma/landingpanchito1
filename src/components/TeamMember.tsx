
interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
  delay: "fade-in" | "fade-in-delay-1" | "fade-in-delay-2" | "fade-in-delay-3";
}

export default function TeamMember({ name, role, photo, delay }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={photo} 
          alt={name} 
          className="w-full object-cover h-72 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <p className="text-white font-medium">Ver más</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-secondary">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
