import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="signIn" element={<SignIn/>}></Route>
       </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
