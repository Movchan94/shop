import React from 'react';
import './App.css';

function App(props) {

 let newPostText = React.createRef()

  let addNewPost =()=>{
   let text = newPostText.current.value
    newPostText.current.value = ''
    console.log(text)
  }




  return (
    <div className="App">
   <textarea ref = {newPostText} ></textarea>
      <button onClick={addNewPost}>Отправить</button>
     <div>{props.state.message}</div>
    </div>
  );
}

export default App;
