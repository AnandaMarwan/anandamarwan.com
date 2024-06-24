import { Link } from "react-router-dom";

export function HeaderRoute() {
  return (
    <header>
      <nav className="p-4 bg-slate-900 fixed w-full z-20 top-0 start-0 border-b">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl text-white hover:text-blue-300">
            🐼 Ananda Marwanaya Putra
          </a>
          <ul className="flex flex-row gap-10 text-sm text-white">
            <li>
              <Link to={`/`} className="text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to={`/about`} className="text-xl">
                About
              </Link>
            </li>
            <li>
              <Link to={`/contact`} className="text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}