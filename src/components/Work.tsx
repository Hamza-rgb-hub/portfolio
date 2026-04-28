import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Fragy E-commerce + AI recommendations",
      category: "Full Stack MERN Project",
      tools: "MongoDB, React.js, Express.js, Node.js",
      image: "/projects/fragy.png",
      link: "https://fragy.vercel.app",
    },
    {
      id: 2,
      number: "02",
      title: "K72 Agency Clone",
      category: "React.js & Tailwind CSS Project",
      tools: "React.js, Tailwind CSS, GSAP",
      image: "/images/k72.jpeg",
      link: "https://kk72.netlify.app/"
    },
    {
      id: 3,
      number: "03",
      title: "Foodify - Food Delivery Website (SaaS)",
      category: "SaaS Project",
      tools: "MongoDB, Express.js, React.js, Node.js",
      image: "/projects/foodify.webp",
      link: "https://foodify-flame.vercel.app/",
    },
    {
      id: 4,
      number: "04",
      title: "AutoCare - Car Detailing Website",
      category: "React.js & Tailwind CSS Project",
      tools: "React.js, Tailwind CSS, GSAP",
      image: "/images/auto.jpeg",
      link: "https://autocare0.netlify.app/"
    },
    {
      id: 5,
      number: "05",
      title: "Portfolio Website",
      category: "Personal Portfolio",
      tools: "React, GSAP, Three.js TypeScript",
      image: "/images/pro1.png",
      link: "https://portfolio-seven-sigma-odqzi3ezlh.vercel.app/"
    },
    {
      id: 6,
      number: "06",
      title: "SoleStore - E-commerce Website",
      category: "Full Stack Project",
      tools: "Next.js, TypeScript, Tailwind CSS",
      image: "/images/sole.png",
      link: "https://solestore0.netlify.app/"
    },
    {
      id:7,
      number: "07",
      title: "Doctor Appointment Booking System",
      category: "Full Stack Project",
      tools: "React.js, Node.js, MongoDB, Express.js",
      image: "/projects/docnow.png",
      link: "https://docnow0.netlify.app/"
    }
  ];

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`, // ✅ Function — har refresh pe recalculate hoga
        scrub: true,
        pin: true,
        id: "work",
        // markers: true,
        invalidateOnRefresh: true,
        onRefresh: () => {
          setTranslateX();
          console.log("translateX:", translateX); // Yeh value batao
        },
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX, // ✅ Yeh bhi function bana do
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
