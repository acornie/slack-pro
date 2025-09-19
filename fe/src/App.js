import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Icons from "./pages/Icons";
import SignIn from "./Auth/LogIn";
import SignUp from "./Auth/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<SignIn />}/>
        <Route path ="/Register" element={<SignUp />}/>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </div>
  );
}

export default App;
