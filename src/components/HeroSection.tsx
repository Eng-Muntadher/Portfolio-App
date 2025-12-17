import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Button from "./Button";

// @ts-ignore
import myImage from "../assets/myImage.JPG";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="my-name"
      className="flex items-center justify-between mb-40 max-lg:flex-col"
    >
      {/* Hero section text */}
      <div className="max-lg:mb-12 max-lg:self-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-lg text-(--gray-text) max-lg:mb-4">
              Hello, I'm
            </span>

            <h1
              id="my-name"
              className="text-[5rem] max-lg:text-7xl max-md:text-5xl text-(--text-color) mb-8"
            >
              <span>Muntadher </span>
              <span className="text-(--orange-text)">Ahmed</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-(--orange-text) text-4xl mb-6 max-sm:text-2xl">
              Front-End Developer
            </p>

            <p className="text-xl text-(--text-color-secondary) mb-8 max-w-154">
              Fourth Year Computer Engineering Student passionate about creating
              beautiful, responsive web applications with modern technologies.
            </p>
          </motion.div>

          {/* Actions buttons for Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              variation="orange"
              onClick={() => navigate("/projects")}
              addedClasses="px-6 py-3 max-[390px]:grow max-[390px]:justify-center"
            >
              <ArrowRight aria-hidden="true" />
              View My Work
            </Button>

            <Button
              variation="light"
              onClick={() => navigate("/contact")}
              addedClasses="px-6 py-3 max-[390px]:grow max-[390px]:justify-center"
            >
              Contact Me
            </Button>

            <a
              href="/cv.pdf"
              download="Muntadher-Ahmed-CV.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-[0.625rem] cursor-pointer transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text) text-white bg-(--dark-btn-bg) hover:bg-gray-700 hover:scale-102 max-[390px]:grow max-[390px]:justify-center"
            >
              <Download aria-hidden="true" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero section image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-110 h-110 rounded-full overflow-hidden border-4 border-(--orange-text) max-[525px]:w-94 max-[525px]:h-94 max-[435px]:w-70 max-[435px]:h-70">
          <img
            src={myImage}
            alt="An Image of Muntadher Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
