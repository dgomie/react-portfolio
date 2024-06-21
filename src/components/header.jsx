function Header(props) {
  return (
    <header className="mt-2">
      <div className="text-center m-2">
        <h1>Danny Gomez</h1>
      </div>
      <div className="flex justify-center mt-2">{props.children}</div>
    </header>
  );
}

export default Header;
