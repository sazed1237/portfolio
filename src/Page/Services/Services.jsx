"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { services } from "../../helpers/servicesData";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="group h-full bg-[#111115] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 min-h-[72px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                    {service.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {service.title}
                  </h3>
                </div>
                <Link
                  href={service.href || "/contact"}
                  className="text-accent opacity-80 hover:opacity-100 mt-1"
                >
                  <BsArrowDownRight className="text-2xl" />
                </Link>
              </div>

              <p className="text-white/70 mt-4 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-5 border-t border-white/6 pt-4">
                <Link
                  href={service.href || "/contact"}
                  className="inline-block text-sm bg-accent text-primary px-4 py-2 rounded"
                >
                  Talk about this
                </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
