
import Hero_person from "./assets/Hero/Hero.png";

import reactjs from "./assets/Skills/react.png";
import nodejs from "./assets/Skills/node.png";
import python from "./assets/Skills/python.png";
import wireshark from "./assets/Skills/wireshark.png";
import pactra from "./assets/Skills/packetracer.png";

import services_logo1 from "./assets/Services/logo1.png";
import services_logo3 from "./assets/Services/logo3.png";
import services_logo4 from "./assets/Services/logo4.png";

import baj1 from "./assets/Projects/project1.png";
import baj2 from "./assets/Projects/project2.png";
import baj3 from "./assets/Projects/project3.png";
import baj4 from "./assets/Projects/endpoint-security1.png";
import baj5 from "./assets/Projects/introduction-to-modern-ai.png";
import baj6 from "./assets/Projects/network-technician-career-path1.png";


import Hireme_person from "./assets/Hireme/person2.png";
import Hireme_person2 from "./assets/Hireme/person1.png";


import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Networking",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
       {
        count: "5+",
        text: "Cisco Certifications",
      }
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      
      {
        name: "Node js",
        para: "A JavaScript runtime used to build fast, scalable backend applications and APIs.",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "A front-end JavaScript library for building interactive user interfaces efficiently.",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "A powerful, beginner-friendly programming language widely used in automation, data science, and cybersecurity.",
        logo: python,
      },
      {
        name: "Wireshark",
        para: "A network protocol analyzer used to capture and inspect network traffic for troubleshooting and security analysis.",
        logo: wireshark,
      },{
        name: "Cisco Packet Tracer",
        para: "A Cisco simulation tool that helps learners practice networking concepts like routing, switching, and device configuration.",
        logo: pactra,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Scripting",
        para: "Bash, Python (for automation and exploit development).",
        logo: services_logo1,
      },
      {
        title: "Networking",
        para: "TCP/IP, DNS, DHCP, VPN, VLAN, routing protocols.",
        logo: services_logo3,
      },
      {
        title: "Security",
        para: "Firewalls, IDS/IPS, SIEM, endpoint protection.",
        logo: services_logo4,
      },
    ],
  },
  Projects: {
    title: "Badges and Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Wireshark Traffic Analysis",
        image: baj1,
      },
      {
        title: "Firewall Configuration Lab",
        image: baj2,
      },
      {
        title: "Network Technician Career Path",
        image: baj3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY Certificates",
    testimonials_content: [

      {
        review: "This badge enhanced my understanding of endpoint protection as a part of layered network security and strengthened my readiness to support enterprise environments against evolving cyber threats.",
        img: baj4,
        name: "Endpoint Security",
        link: "https://www.credly.com/badges/8527a7c1-154a-4715-b963-9d0b83c6fce6/public_url",
      },
      {
        review:"This course sparked my curiosity to dive deeper into the intersection of AI and cybersecurity, especially in areas like threat detection automation and behavioral analysis.",
        img: baj5,
        name: "Introduction to Modern AI",
        link: "https://www.credly.com/badges/2eb95bc5-7b87-462d-be5c-c702667020f4/public_url",

      },
      {
        review: "The path also introduced me to key technologies like firewalls, VLANs, VPNs, and basic network security practices. It strengthened my understanding of how networks operate, and how to keep them stable, efficient, and secure.",
        img: baj6,
        name: "Network Technician Career Path",
        link: "https://www.credly.com/badges/76d01b74-8291-442f-b0b9-b59e6cb2ef07/public_url",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ravindumalshan1111@gmail.com",
        icon: GrMail,
        link: "mailto:ravindumalshan1111@gmail.com",
      },
      {
        text: "+94 786616040",
        icon: MdCall,
        link: "https://wa.me/+94-786616040",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/ravindu-malshan-015597280/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
