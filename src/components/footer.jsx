import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/dgomie"
      },
      {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/daniel-gomez-37496057/"
      },
      {
        name: "fa-regular fa-envelope",
        link: "mailto:danny.f.gomez@gmail.com"
      }
    ]
  
    return (
      <div className='footerContainer'>
      <footer className="">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={`${icon.name} fa-xl`}></i></a>
        )
          )}
      </footer>
      </div>
    );
  }
  
  export default Footer;