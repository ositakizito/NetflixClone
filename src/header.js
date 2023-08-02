import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div className="header">
            <div className="header-content">
                <button>
                    <img src="logo.svg" alt=""/>
                </button>
            </div>
            <div className="header-content">
               <Link to="/signIn">
               <button className="sgn">Sign In</button>
               </Link> 
            </div>
        </div>                                 
    )                                       
}                                               