import {Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div>
            <Link to='/'>Home</Link>
            <Link to='/series'>Series</Link>
            <Link to='/movies'>Movies</Link>
        </div>
     );
}
 
export default NavBar;