import React from "react";
import Image from "next/image";
import { BsWhatsapp, BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
  onBookNow: (message: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onBookNow }) => {
  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 hover:scale-[1.02] animate-fadeInUp"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

      <div className="relative">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 z-20 w-10 h-10 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-full flex items-center justify-center font-bold text-white text-sm shadow-xl">
            {String(service.id).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFBBE1] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-1.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <BsCheckCircleFill className="w-3.5 h-3.5 text-[#FFBBE1]" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => onBookNow(service.whatsappMessage)}
            className="group/btn relative w-full px-5 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-white font-semibold text-sm">
              <BsWhatsapp className="w-4 h-4" />
              Book Now
              <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;