// import "./styles/Work.css";
// import WorkImage from "./WorkImage";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Work = () => {
// //   useGSAP(() => {
// //   let translateX: number = 0;

// //   function setTranslateX() {
// //     const box = document.getElementsByClassName("work-box");
// //     const rectLeft = document
// //       .querySelector(".work-container")!
// //       .getBoundingClientRect().left;
// //     const rect = box[0].getBoundingClientRect();
// //     const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
// //     let padding: number =
// //       parseInt(window.getComputedStyle(box[0]).padding) / 2;
// //     translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
// //   }

// //   setTranslateX();

// //   let timeline = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: ".work-section",
// //       start: "top top",
// //       end: `+=${translateX}`, // Use actual scroll width
// //       // end: () => `+=${translateX}`,
// //       // end: `+=20%`,
// //       scrub: true,
// //       pin: true,
// //       id: "work",
// //       markers: true,
// //       invalidateOnRefresh: true,
// //       onRefresh: () => setTranslateX(),
// //     },
// //   });

// //   timeline.to(".work-flex", {
// //     x: -translateX,
// //     ease: "none",
// //   });

// //   // Clean up (optional, good practice)
// //   return () => {
// //     timeline.kill();
// //     ScrollTrigger.getById("work")?.kill();
// //   };
// // }, []);

// useGSAP(() => {
//   const ctx = gsap.context(() => {
//     let translateX = 0;

//     const setTranslateX = () => {
//       const boxes = document.querySelectorAll(".work-box");
//       const rect = boxes[0].getBoundingClientRect();
//       translateX = rect.width * boxes.length - window.innerWidth;
//     };

//     setTranslateX();

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".work-section",
//         start: "top top",
//         end: () => `+=${translateX}`,
//         scrub: true,
//         pin: true,
//         invalidateOnRefresh: true,
//         onRefresh: setTranslateX,
//       },
//     }).to(".work-flex", {
//       x: -translateX,
//       ease: "none",
//     });
//   });

//   return () => ctx.revert();
// }, []);

// return (
//     <div className="work-section" id="work">
//       <div className="work-container section-container">
//         <h2>
//           My <span>Work</span>
//         </h2>
//         <div className="work-flex">
//           {[...Array(6)].map((_value, index) => (
//             <div className="work-box" key={index}>
//               <div className="work-info">
//                 <div className="work-title">
//                   <h3>0{index + 1}</h3>

//                   <div>
//                     <h4>Project Name</h4>
//                     <p>Category</p>
//                   </div>
//                 </div>
//                 <h4>Tools and features</h4>
//                 <p>Javascript, TypeScript, React, Threejs</p>
//               </div>
//               <WorkImage image="/images/pro1.jpeg" alt="" />
//               {/* <img src="/images/pro1.jpeg" alt="" /> */}

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

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
      title: "Portfolio Website",
      category: "Web Development",
      tools: "React, GSAP, TypeScript, Three.js",
      image: "/images/pro1.png",
      // link: "https://hamza-portfolio.vercel.app",
    },
    {
      id: 2,
      number: "02",
      title: "K72 Agency Clone",
      category: "React.js & Tailwind CSS Project",
      tools: "React.js, Tailwind CSS, GSAP",
      image: "/images/k72.jpeg",
      // link: "https://kk72.netlify.app/"
    },
    {
      id: 3,
      number: "03",
      title: "Creative Website",
      category: "React.js & Tailwind CSS Project",
      tools: "React.js, Tailwind CSS",
      image: "/images/auto.jpeg",
      link: "https://autocare0.netlify.app/",
    },
    {
      id: 4,
      number: "04",
      title: "E-Commerce Website",
      category: "Web Application",
      tools: "Next.js, TypeScript, Tailwind CSS",
      image: "/images/sole.png",
    },
    {
      id: 5,
      number: "05",
      title: "Fitness Website",
      category: "UI / UX Design",
      tools: "HTML, CSS, Bootstrap",
      image: "/images/fit.jpeg",
    },
    // {
    //   id: 6,
    //   number: "06",
    //   title: "DOUS Agency",
    //   category: "FULL STACK APP",
    //   tools: "HTML, CSS, JavaSript, Bootstrap",
    //   image: "/images/dous.png",
    // },
    {
      id: 7,
      number: "07",
      title: "E-Commerce Website",
      category: "MERN Project",
      tools: "MongoDB, ExpressJS, ReactJS, NodeJS",
      image: "/images/e-com.png",
    },
  ];

  // useGSAP(() => {
  //   let translateX: number = 0;

  //   function setTranslateX() {
  //     const box = document.getElementsByClassName("work-box");
  //     const rectLeft = document
  //       .querySelector(".work-container")!
  //       .getBoundingClientRect().left;
  //     const rect = box[0].getBoundingClientRect();
  //     const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
  //     let padding: number =
  //       parseInt(window.getComputedStyle(box[0]).padding) / 2;
  //     translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  //   }

  //   setTranslateX();

  //   let timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".work-section",
  //       start: "top top",
  //       end: `+=${translateX}`, // Use actual scroll width
  //       // end: () => `+=${translateX}`,
  //       // end: `+=50%`,
  //       scrub: true,
  //       pin: true,
  //       id: "work",
  //       markers: true,
  //       invalidateOnRefresh: true,
  //       onRefresh: () => setTranslateX(),
  //     },
  //   });

  //   timeline.to(".work-flex", {
  //     x: -translateX,
  //     ease: "none",
  //   });

  //   // Clean up (optional, good practice)
  //   return () => {
  //     timeline.kill();
  //     ScrollTrigger.getById("work")?.kill();
  //   };
  // }, []);

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
