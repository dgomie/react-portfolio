function About() {
  return (
    <section className="my-5">
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="/images/profileimage.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About Me
              </h2>
              <p className="mt-6 text-gray-600">
                With a strong background in media production, communications,
                and education, I bring a unique blend of skills and experience
                to the software development field. Currently excelling as a
                Studio Operator at ESPN, I am adept at operating in a rapidly
                changing environment and managing communications, ensuring
                seamless technical operations. My previous roles have honed my
                ability to leverage digital platforms for maximum impact,
                whether through social media management or maintaining websites.
                I am enthusiastic about transitioning my skills to software
                development, where I can apply my creativity, attention to
                detail, and problem-solving abilities to drive innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
