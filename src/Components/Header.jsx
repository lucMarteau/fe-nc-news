
export function Header({ searchTerm }) {
  return (
      <div className="header">
<a href="#default" className="logo">NC News</a>
<div className="header-right">
  <a className="active" href="#home">Articles</a>
  <a href="#contact">Comments</a>
  <a href="#about">Account</a>
</div>
</div>
  )
}