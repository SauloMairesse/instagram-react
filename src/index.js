import ReactDOM from "react-dom";
import NavBar   from "./navbar";
import Corpo from "./corpo";

function App(){
    return (
        <div>
            <NavBar />
            <Corpo />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))