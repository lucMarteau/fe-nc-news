import { Link } from 'react-router-dom';


export function Header({}) {
  return (
    <div className="header">
      <Link href="#default" className="logo" to={"/"}>
        NC News
      </Link>
      <div className="header-right">
        <Link className="active" href="#home" to={"/"}>
          Articles
        </Link>
        <a href="#contact">Categories</a>
        <a href="#about">Account</a>
      </div>
    </div>
  );
}