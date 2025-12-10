import { useNavigate } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Button from "./Button";

// @ts-ignore
import myImage from "../assets/myImage.JPG";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="my-name"
      className="flex items-center justify-between px-20 max-xl:px-8 mb-40 max-lg:flex-col"
    >
      <div className="max-lg:mb-12 max-lg:self-start">
        <span>Hello, I'm</span>

        <h1
          id="my-name"
          className="text-[5rem] max-lg:text-7xl max-md:text-5xl text-(--text-color) mt-4 mb-8"
        >
          <span>Muntadher </span>
          <span className="text-(--orange-text)">Ahmed</span>
        </h1>

        <p className="text-(--orange-text) text-4xl mb-6 max-sm:text-2xl">
          Front-End Developer
        </p>

        <p className="text-xl text-(--text-color-secondary) mb-8 max-w-154">
          Fourth Year Computer Engineering Student passionate about creating
          beautiful, responsive web applications with modern technologies.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button
            variation="orange"
            onClick={() => navigate("/projects")}
            addedClasses="px-6 py-3"
          >
            <ArrowRight aria-hidden="true" />
            View My Work
          </Button>

          <Button
            variation="light"
            onClick={() => navigate("/projects")}
            addedClasses="px-6 py-3"
          >
            Contact Me
          </Button>

          <Button
            variation="dark"
            onClick={() => console.log("Do later...")}
            addedClasses="px-6 py-3"
          >
            <Download aria-hidden="true" />
            Download CV
          </Button>
        </div>
      </div>

      <div>
        <div className="w-110 h-110 rounded-full overflow-hidden border-4 border-(--orange-text) max-[525px]:w-94 max-[525px]:h-94 max-[435px]:w-70 max-[435px]:h-70">
          <img
            src={myImage}
            alt="An Image of Muntadher Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
