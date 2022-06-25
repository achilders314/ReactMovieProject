import { useNavigate, Link } from "react-router-dom";


const Navbar = ({searchText, setSearchText}, {searchState, setSearchState}) => {
  const navigate = useNavigate()
  searchState=false;

    const updateSearchText = (e) => { 
      navigate('search');
      setSearchText(e.target.value);
    }



  return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Movie Database</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Coming Soon</Link>
           </li>
          </ul>
        <form className="d-flex justify-content-end" role="search">
          <input className="form-control me-2 ml-auto w-25" 
                 type="search"
                 id="search-box"
                 placeholder="Search" 
                 aria-label="Search" 
                 value={searchText}
                 onChange={updateSearchText}
                 />
        </form>
      </div>
    </div>
  </nav>
    )
  }

  export default Navbar;