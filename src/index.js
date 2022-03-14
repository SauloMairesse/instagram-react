import ReactDOM from "react-dom";
import NavBar   from "./navbar";
import Corpo from "./corpo";
import FundoMobile from "./fundomobile";

function App(){
    return (
        <div>
            <NavBar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
