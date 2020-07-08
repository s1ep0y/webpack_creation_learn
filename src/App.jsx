import React from "react";
import img from './img/plan.png'

class App extends React.Component{
   render() {
      return (
      <div>
         <span> Кусочек плана цеха с моего отчета по практике за 2 или 3 курс
         </span>
         <img src={img} style={{width: "400px"}}/>
         
      </div>)
   }
}

export default App;

 