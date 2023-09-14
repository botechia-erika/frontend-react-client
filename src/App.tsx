export function App() {
  return (
    <div className="grid1 font-semibold p-2">
      <header className="headerNavbar">
        <h1 className="header1">
          API<span className="colorWhite">.lab</span>
        </h1>
        <nav>
          <button>Home</button>
          <button>Shop</button>
          <button>Cart</button>
        </nav>
      </header>
      <main className="main">
        <div className="hero">
          <div className="w-full select-none relative">
            <img src={imagesList[0]} alt="imgs" />
          </div>
        </div>
      </main>
      <footer className="footer">
        <a href="https://github.com/botechia-erika" target="_blank">
          @Botechia-Erika
        </a>
      </footer>
    </div>
  );
}
