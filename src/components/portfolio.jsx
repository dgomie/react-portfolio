function Portfolio() {
  return (
    <section className="my-5">
      <div className="cardContainer">
        <div className="card">
          <div className="cardBody">
            <img
              src="/images/music.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/dgomie/good-picks"
            ></a>
            <a href="https://hidden-depths-01820-f84c3739770d.herokuapp.com/">
              GoodPicks
            </a>
          </div>
        </div>
        <div className="card">
          <div className="cardBody">
            <img
              src="/images/blog.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/dgomie/tech-blog"
            ></a>
            <a href="https://still-wildwood-68456-d44a68e622ba.herokuapp.com/">
              Tech Blog
            </a>
          </div>
        </div>

        <div className="card">
          <div className="cardBody">
            <img
              src="/images/grocery.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/SpencerKlink/Pantry-Raid"
            ></a>
            <a href="https://spencerklink.github.io/Pantry-Raid/">
              Pantry Raid
            </a>
          </div>
        </div>

        <div className="card">
          <div className="cardBody">
            <img
              src="/images/weather.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/dgomie/weather-dashboard"
            ></a>
            <a href="https://dgomie.github.io/weather-dashboard/">
              Weather Dashboard
            </a>
          </div>
        </div>

        <div className="card">
          <div className="cardBody">
            <img
              src="/images/password.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/dgomie/password-generator"
            ></a>
            <a href="https://github.com/dgomie/password-generator">
              Password Generator
            </a>
          </div>
        </div>

        <div className="card">
          <div className="cardBody">
            <img
              src="/images/planner.jpg"
              width="450px"
              alt="profile image goes here"
            />
            <a
              className="fab fa-github"
              href="https://github.com/dgomie/work-day-calendar"
            ></a>
            <a href="https://dgomie.github.io/work-day-calendar/">
              Workday Scheduler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
