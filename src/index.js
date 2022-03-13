import ReactDOM from "react-dom";
import NavBar   from "./navbar";

function App(){
    return (
        <div>
            <NavBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))