import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Collaborate with brand <br /> and agencies to create <br /> imapctful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
            {/* <ServiceCard icon="/images/s1.png" name="UI and UX" description="Designing interfaces that are ini" /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
