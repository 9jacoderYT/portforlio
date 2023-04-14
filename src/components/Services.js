import React from "react";

//  icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Photoshop Design",
    description:
      "Experienced Photoshop editor with expertise in color correction, image manipulation, compositing, and graphic design. ",
    link: "Learn more",
  },
  {
    name: "Full Stack JavaScript Developer",
    description:
      "Experienced full-stack JavaScript developer with expertise in React, Angular, Vue, Node.js, and various databases. ",
    link: "Learn more",
  },
  {
    name: "Ethereum developer",
    description:
      "Experienced Ethereum developer with a strong understanding of Solidity and smart contract development. ",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Experienced digital marketer with a proven track record of success in SEO, PPC, social media, and email marketing. ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelance Front-end Developer with over 9 years of
              experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructive service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[470px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flew-1 items-end">
                      <a
                        href="/"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="/" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
