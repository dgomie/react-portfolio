function Resume() {
  return (
    <div >
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 px-4">
          <div className="col-span-9 lg:col-span-3">
            <div className="bg-white shadow rounded-lg p-6 mb-3">
              <div className="flex flex-col">
                <button className="hover:opacity-70 duration-500">
                  <a
                    href="/pdfs/Daniel-Gomez-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-file-arrow-down mr-2"></i>
                    Download
                  </a>
                </button>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-9 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Full Stack Bootcamp, <span className="text-gray-700 font-normal italic">
                      University of Connecticut
                    </span>
                  </span>
                 
                  <p>
                  
                    <span className="text-gray-700">Jan 2024-Jul 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                  Covering an intensive full-stack development bootcamp,
                  covering front-end and back-end technologies, including
                  JavaScript, React, Node.js, and MongoDB. Conceptualized and
                  deployed multiple web applications using MERN stack
                  development. Incorporated responsive, mobile-first design
                  principles and user authentication features.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Studio Operator I, <span className="text-gray-700 font-normal italic">
                      ESPN
                    </span>
                  </span>
                  <p>
                    <span className="text-gray-700">Feb 2020 - Present</span>
                  </p>
                </div>
                <p className="mt-2">
                  Proficiently operate hard cameras, jib camera, and Jitacam for
                  flagship shows including SportsCenter, NFL Live, and College
                  Football productions. Manage communications between the
                  control room, studio, and remote sites using Reidel Director
                  and AZedit, while ensuring seamless micing of talent and swift
                  troubleshooting of technical equipment issues. Actively
                  participate in the A2 training committee, mentoring and
                  training new hires.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Communications Assistant, <span className="text-gray-700 font-normal italic">
                      Jesuit High School
                    </span>
                  </span>
                  <p>
                    <span className="text-gray-700">Sep 2019 - Feb 2020</span>
                  </p>
                </div>
                <p className="mt-2">
                  Elevated Jesuit High School{"'"}s mission via comprehensive
                  social media management, website updates, and contributions to
                  the school magazine. Captured and edited compelling photos and
                  videos for publication, documenting school events and
                  activities. Established relationships with media outlets and
                  external stakeholders to bolster Jesuit{"'"}s visibility and
                  monitored media and social media landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <section className="my-5">
    //   <section className="px-20 mt-10">
    //     <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
    //       Experience
    //     </h4>
    //     <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    //       <div className="flex flex-col col-span-2 mb-4 md:mb-0">
    //         <h5 className="text-xl md:text-2xl font-bold">
    //           Full Stack Bootcamp
    //         </h5>
    //         <h6 className="text-lg font-bold">University of Connecticut</h6>
    //         <p>Jan 2024 - July 2024</p>
    //       </div>
    //       <div className="flex flex-col col-span-4">
    //         <p>
    //           Covering an intensive full-stack development bootcamp, covering
    //           front-end and back-end technologies, including JavaScript, React,
    //           Node.js, and MongoDB. Conceptualized and deployed multiple web
    //           applications using MERN stack development. Incorporated
    //           responsive, mobile-first design principles and user authentication
    //           features.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    //       <div className="flex flex-col col-span-2 mb-4 md:mb-0">
    //         <h5 className="text-xl md:text-2xl  font-bold">Studio Operator</h5>
    //         <h6 className="text-lg font-bold">ESPN</h6>
    //         <p>Feb 2020 - Present</p>
    //       </div>
    //       <div className="flex flex-col col-span-4">
    //         <p>
    //           Proficiently operate hard cameras, jib camera, and Jitacam for
    //           flagship shows including SportsCenter, NFL Live, and College
    //           Football productions. Manage communications between the control
    //           room, studio, and remote sites using Reidel Director and AZedit,
    //           while ensuring seamless micing of talent and swift troubleshooting
    //           of technical equipment issues. Actively participate in the A2
    //           training committee, mentoring and training new hires.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    //       <div className="flex flex-col col-span-2 mb-4 md:mb-0">
    //         <h5 className="text-xl md:text-2xl  font-bold">
    //           Communications Assitant
    //         </h5>
    //         <h6 className="text-lg font-bold">Jesuit High School</h6>
    //         <p>Sep 2019 - Feb 2020</p>
    //       </div>
    //       <div className="flex flex-col col-span-4">
    //         <p>
    //           Elevated Jesuit High School{"'"}s mission via comprehensive social
    //           media management, website updates, and contributions to the school
    //           magazine. Captured and edited compelling photos and videos for
    //           publication, documenting school events and activities. Established
    //           relationships with media outlets and external stakeholders to
    //           bolster Jesuit{"'"}s visibility and monitored media and social
    //           media landscapes.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <hr className="border-gray-400 mx-44" />

    //   <section className="px-20 mt-10">
    //     <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
    //       Education
    //     </h4>
    //     <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    //       <div className="flex flex-col col-span-2 mb-4 md:mb-0">
    //         <h5 className="text-xl md:text-2xl  font-bold">
    //           B.A. Mass Communications
    //         </h5>
    //         <h6 className="text-lg font-bold">University of South Florida</h6>
    //         <p>Aug 2013 - May 2015</p>
    //       </div>
    //       <div className="flex flex-col col-span-4 "></div>
    //     </div>
    //   </section>
    //   <div className="flex justify-center">
    //     <button>
    //       <a
    //         href="/pdfs/Daniel-Gomez-Resume.pdf"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <i className="fa-solid fa-file-arrow-down mr-2"></i>
    //         Download my resume
    //       </a>
    //     </button>
    //   </div>
    // </section>
  );
}

export default Resume;
