import React from "react";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import resume from '../assets/pdf/Resume.pdf'
import { MdArrowOutward } from "react-icons/md";


const Hero = () => {
  const linksToSections = [
    { name: "About", path: "#about", active: false },
    // { name: "Experience", path: "#experience", active: false },
    { name: "Projects", path: "#projects", active: false }
  ]

  const socialLinks = [
     { icon: <IoLogoGithub />, path: "https://github.com/maharajafz03" },
    // { icon: <IoLogoInstagram />, path: "https://www.instagram.com/maga_mg/" },
    { icon: <IoLogoTwitter />, path: "https://twitter.com/Magaraja_" },
    { icon: <IoLogoLinkedin />, path: "https://www.linkedin.com/in/magaraja1999/" },
  ]

  return (
    <>
      <section className="h-full lg:fixed relative top-0 bottom-0 md:py-24 md:pb-16 pt-16 lg:w-[40%]">
        <div data-aos="fade-up"
          data-aos-duration="1000"
          ata-aos-easing="ease-in">
          <h1 className="font-bold xl:text-5xl lg:text-[45px] md:text-5xl text-4xl">
            MagaRaja
          </h1>
          <h3 className="md:text-2xl text-[25px] font-semibold lg:mt-2">Frontend Developer</h3>
          <p className="mt-3 xl:max-w-[60%] xl:w-full lg:w-[80%] md:w-[50%] w-full text-gray-400 font-light text-base">
            I build pixel-perfect, accessible products for the web.
          </p>
          <div data-aos="fade-up"
          data-aos-duration="1000"
          ata-aos-easing="ease-in" className="mt-8">
          <a href={resume} target="_blank" rel="noreferrer" className="no-underline w-fit group outline-none font-[500] text-base text-white duration-300 ease-in hover:text-blue-300 flex gap-2 items-center">
            <div>
              View Full Résumé
            </div>
            <MdArrowOutward className="duration-300 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
 

          <div className="mt-20 lg:block hidden">
            <div className="flex flex-col">
              {linksToSections.map((data, index) => {
                const { name, path, active } = data;

                return (
                  <a key={index} href={path} className="no-underline outline-none w-fit">
                    <div className="flex items-center gap-3 uppercase text-sm group py-2">
                      <div className={`border-b border-b-gray-600 group-hover:w-[60px] duration-300 ease-in group-hover:border-b-white ${active ? "w-[60px] border-b-white" : "w-[35px]"}`}></div>
                      <div className={`group-hover:text-white duration-300 ease-in ${active ? "text-white" : "text-gray-500"}`}>
                        {name}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="lg:mt-20 mt-10">
            <div className="flex gap-4 items-center">
              {socialLinks.map((data, index) => {
                const { icon, path } = data;

                return (
                  <a className="text-gray-600 text-3xl duration-300 ease-in hover:text-white" key={index} href={path} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
