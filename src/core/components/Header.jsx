 
import logo from './../../assets/images/icons8-crossword-64.png'
export default function Header() {
  return ( 
      <nav className="navbar bg-body-tertiary">
        <div className="container w-100 d-flex justify-content-between align-items-center">
          <a className="navbar-brand">
            <img src={logo} /> 
          </a>
          <div className="langauge-selection">
            <button className="language-btn">
              Spanish
            </button>
            <button className="language-btn">
              English
            </button>
          </div>
        </div>
      </nav> 
  )
}
