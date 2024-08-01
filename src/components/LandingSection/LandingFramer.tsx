import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingSection1 from "./LandingSection1";
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";
import LandingSection4 from "./LandingSection4";
import LandingSection5 from "./LandingSection5";
import LandingSection6 from "./LandingSection6";

const LandingFramer = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 100], [50, 0]); 
  const opacity1 = useTransform(scrollY, [0, 0], [0, 1]);

  const y2 = useTransform(scrollY, [500, 1500], [50, 0]); 
  const opacity2 = useTransform(scrollY, [500, 1500], [0, 1]);

  const y3 = useTransform(scrollY, [1500, 2000], [50, 0]); 
  const opacity3 = useTransform(scrollY, [1500, 2000], [0, 1]);

  const y4 = useTransform(scrollY, [2000, 2500], [50, 0]);
  const opacity4 = useTransform(scrollY, [2000, 2500], [0, 1]);

  const y5 = useTransform(scrollY, [2500, 3000], [50, 0]); 
  const opacity5 = useTransform(scrollY, [2500, 3000], [0, 1]);

  const y6 = useTransform(scrollY, [3000, 3500], [50, 0]); 
  const opacity6 = useTransform(scrollY, [3000, 3500], [0, 1]);

  return (
    <>
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection1 />
      </motion.div>
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection2 />
      </motion.div>
      <motion.div
        style={{ y: y3, opacity: opacity3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection3 />
      </motion.div>
      <motion.div
        style={{ y: y4, opacity: opacity4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection4 />
      </motion.div>
      <motion.div
        style={{ y: y5, opacity: opacity5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection5 />
      </motion.div>
      <motion.div
        style={{ y: y6, opacity: opacity6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LandingSection6 />
      </motion.div>
    </>
  );
};

export default LandingFramer;
