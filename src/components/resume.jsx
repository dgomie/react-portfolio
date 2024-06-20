function Resume() {
  return (
    <section className="my-5">
      <div>
        <a
          href="/pdfs/Daniel-Gomez-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my resume
        </a>
      </div>
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Experience
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">
              Full Stack Bootcamp
            </h5>
            <h6 className="text-lg font-bold">University of Connecticut</h6>
            <p>Jan 2024 - July 2024</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Covering an intensive full-stack development bootcamp, covering
              front-end and back-end technologies, including JavaScript, React,
              Node.js, and MongoDB. Conceptualized and deployed multiple web
              applications using MERN stack development. Incorporated
              responsive, mobile-first design principles and user authentication
              features.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Studio Operator</h5>
            <h6 className="text-lg font-bold">ESPN</h6>
            <p>Feb 2020 - Present</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Proficiently operate hard cameras, jib camera, and Jitacam for
              flagship shows including SportsCenter, NFL Live, and College
              Football productions. Manage communications between the control
              room, studio, and remote sites using Reidel Director and AZedit,
              while ensuring seamless micing of talent and swift troubleshooting
              of technical equipment issues. Actively participate in the A2
              training committee, mentoring and training new hires.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Communications Assitant
            </h5>
            <h6 className="text-lg font-bold">Jesuit High School</h6>
            <p>Sep 2019 - Feb 2020</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Elevated Jesuit High School{"'"}s mission via comprehensive social
              media management, website updates, and contributions to the school
              magazine. Captured and edited compelling photos and videos for
              publication, documenting school events and activities. Established
              relationships with media outlets and external stakeholders to
              bolster Jesuit{"'"}s visibility and monitored media and social
              media landscapes.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />

      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Education
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              B.A. Mass Communications
            </h5>
            <h6 className="text-lg font-bold">University of South Florida</h6>
            <p>Aug 2013 - May 2015</p>
          </div>
          <div className="flex flex-col col-span-4 "></div>
        </div>
      </section>
    </section>
  );
}

export default Resume;
