import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import exersizes from "../components/exersizes.json";
import CharacterCard from "../components/CharacterCard";

class Workout extends Component {
  state = {
    exersizes
    
  };

  render() {
    return (
     <div>
{/* // {this.state.exersizes.map(exersize=> */}
<CharacterCard>
 
{/* <h1>{exersize.musclegroup}</h1> */}
</CharacterCard>
   
     </div>
    );
    }
}


export default Workout;
