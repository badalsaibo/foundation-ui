import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { styled } from "@linaria/react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Heading color="blue">hello</Heading>
        </div>
    );
}

export default App;

const Heading = styled.h1`
    font-size: 72px;
`;
