import "./App.css";
import welcomeSvg from "./assets/welcome.svg";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="main">
      <div className="sign-header">
        <h1 className="header">Sign Up</h1>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={welcomeSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
