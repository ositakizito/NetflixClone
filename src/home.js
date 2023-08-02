import BodyContent from "./bodyContent";
import BottomBar from "./bottombar";
import Header from "./header";
import Navbar from "./navbar";
export default function Home(){

    return(
        <div className="home">
            <Header/>
           <Navbar/>
           <BodyContent/>
           <BottomBar/>
        </div>
    )
}