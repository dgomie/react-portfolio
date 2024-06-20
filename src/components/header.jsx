function Header(props) {

  return (
    <header className="mt-2">
      <h1>Daniel Gomez</h1>
      {props.children}
    </header>
  );
}

export default Header;