import netflixThumnail from "../assets/images/pro_Ass/netflixThumnail.png";
import bankThumnail from "../assets/images/pro_Ass/bankThumnail.png";
import nikeThumnail from "../assets/images/pro_Ass/nikeThumnail.png";
import IPAddressThumnail from "../assets/images/desktop-design.jpg";


//https://netflixybum.netlify.app
//https://99bank.netlify.app
//https://nike5landing.netlify.app


export const projects = [
  {
    thumbnail: netflixThumnail,
    title: "Netflix clone Website",
    content: `Frontend mentor challenge I took to help test and improve my proficiency
    in frontend technologies used today.`,
    liveUrl: "https://netflixybum.netlify.app",
    tools: ["React", "Tailwind", "API", "Figma"],
  },

  {
    thumbnail: bankThumnail,
    title: "99bank Website",
    content: `Frontend mentor challenge I took to help test and improve my proficiency
    in frontend technologies used today.`,
    liveUrl: "https://99bank.netlify.app",
    tools: ["React", "Tailwind", "Figma"],
  },

  {
    thumbnail: IPAddressThumnail,
    title: "IP Address Tracker",
    content: `Built a web application that consumes a third
    party API that helps get IP address requested by the client, returns it's details, and shows it on a map.`,
    liveUrl: "https://my-ip-address-tracker-react.vercel.app/",
    tools: ["React", "Tailwind", "Vercel", "API", "Leeflet"],
  },

  {
    thumbnail: nikeThumnail,
    title: "Nike landing website",
    content: `Built a web application that consumes a third
    party API that helps get the details of different countries in the world with their flags.`,
    liveUrl: "https://nike5landing.netlify.app",
    tools: ["React", "Tailwind", "Vercel", "API"],
  },
];
