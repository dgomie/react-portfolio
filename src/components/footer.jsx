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
      <footer className="flex-row px-1">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </footer>
    );
  }
  
  export default Footer;