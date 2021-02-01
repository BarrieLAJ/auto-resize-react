import React, { useEffect } from "react";
import HttpC from "./clients";
import AutoSize from "./components/AutoSize";
//import logo from './logo.svg';
//import './App.css';



let post = {body: "quia et suscipit↵suscipit recusandae consequuntur expedita   et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1}


const App = () => {
  useEffect(() => {
    HttpC.get({url: '/comments', body: post, params: {postId: [1,2,3]}}).then((data)=> {
      console.log(data)
    })
  }, [])
  return (
    <>
      <AutoSize>
        {({ width, height}) => (
          <div style={{ height, width}} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet consectetur urna. Proin malesuada risus sed est hendrerit lacinia.
          </div>
        )}
      </AutoSize>
      </>
  );
};

export default App;
