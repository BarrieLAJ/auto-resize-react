import React from "react";
//import logo from './logo.svg';
//import './App.css';
import { Tile } from "./features/AutoSize";

const App = () => {
  // const elemRef = React.useRef(null);
  //const [pElem, setPElem] = React.useState(elemRef.current)
  // const [refIsSet, setRefIsSet]= React.useState(false)
  // React.useEffect(() => {
  //   setRefIsSet(true)
  //   //console.log(pElem)
  // },[])
  return (
    <>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <Tile>
        {({ width, height,}) => (
          <div
            style={{ height, width, backgroundColor: "darkgoldenrod" }}
          ></div>
        )}
      </Tile>
      </>
  );
};

export default App;
