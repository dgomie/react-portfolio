// function Header () {
//     return (
//         <section className="my-5">
//             Nav links to site components
//         </section>
//     );
// }

// export default Header

// import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Daniel Gomez</h1>
      <img src="" alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;