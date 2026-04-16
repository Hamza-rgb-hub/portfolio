import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Intern</h4>
                <h5>Pixxel House</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Assisted in designing and implementing responsive web interfaces
              using HTML, CSS, JavaScript, React, and TailwindCSS. Collaborated
              with senior developers to optimize website performance and improve
              user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Developer</h4>
                <h5>Pixxel House</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on building interactive and responsive web applications
              using <strong>React, Next</strong>, styled with{" "}
              <strong>Tailwind CSS</strong>, animations powered by{" "}
              <strong>GSAP</strong>, and 3D experiences with{" "}
              <strong>Three.js</strong>. Focused on clean code, user experience,
              and modern web practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Pixxel House</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building modern and responsive web applications using{" "}
              <strong>React</strong> for front-end,{" "}
              <strong>Node.js & Express</strong> for backend, styled with{" "}
              <strong>Tailwind CSS</strong>, creating smooth animations with{" "}
              <strong>GSAP</strong>, and implementing interactive 3D experiences
              with <strong>Three.js</strong>. Focused on performance, user
              experience, and clean code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
