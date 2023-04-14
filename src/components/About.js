import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* test */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              As a JavaScript developer, I specialize in creating web
              applications and dynamic user interfaces using JavaScript, HTML,
              and CSS. With 9 years of experience, I have worked extensively
              with popular frameworks and libraries such as React, Angular, and
              Vue, and have a strong understanding of front-end development
              principles.
            </h3>
            <p className="mb-6">
              In addition to front-end development, I also have experience
              working with Node.js on the backend, building RESTful APIs, and
              working with databases such as MongoDB and MySQL. I am passionate
              about writing clean, maintainable code and keeping up-to-date with
              the latest developments in the JavaScript ecosystem. I enjoy
              collaborating with cross-functional teams to deliver high-quality
              software that meets business needs and provides a great user
              experience.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={150} duration={5} /> : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={80} duration={5} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
