import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/Hero";
import About from "./pages/About";
//import Experience from "./pages/experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <main className="h-screen font-poppins text-gray-300">
        <section className="max-w-[67rem] xl:w-full lg:w-[85%] w-[90%] mx-auto">
          <AnimatedCursor
            showSystemCursor={true}
            innerSize={0}
            outerSize={50}
            color="30, 167, 255"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={"initial"}
            outerStyle={{
              filter: "blur(15px)",
              transform: "scale(10)",
              zIndex: 1,
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <Hero />

          <div className="xl:ml-[50%] lg:ml-[53%] lg:py-24 py-16 h-full">
            <About />
            {/* <Experience /> */}
            <Projects />
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
