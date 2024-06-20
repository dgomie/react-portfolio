function Header(props) {

  return (
    <header className="">
      <h1>Daniel Gomez</h1>
      <img src="" alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;