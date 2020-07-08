import React from "react";
import img from './img/plan.png'

class App extends React.Component{
   render() {
      return (
      <div>
         <span> Кусочек плана цеха с моего ответа по практике
         </span>
         <img src={img} style={{width: "400px"}}/>
         
      </div>)
   }
}

export default App;

 