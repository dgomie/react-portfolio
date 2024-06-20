function Header(props) {

  return (
    <header className="mt-2">
      <h1>Daniel Gomez</h1>
      <div className="flex justify-center mt-2">
      {props.children}
      </div>
    </header>
  );
}

export default Header;