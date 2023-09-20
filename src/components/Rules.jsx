import styled from "styled-components";

const Rules = () =>{
    return(
        <RulesContainer>
<h2>How To Play Dice Game</h2>
<div className="text">
    <p> <span style={{fontWeight:"bold"}}>Rule 1:</span> Select any number</p>
    <p> <span style={{fontWeight:"bold"}}>Rule 2:</span> Click on dice</p>
    <p><span style={{fontWeight:"bold"}}>Rule 3:</span> After click on dice after click on  dice  if selected number is equal to dice 
number you will get same point as dice  
        <br/>
    <span style={{fontWeight:"bold"}}>Rule 4:</span>  if you get wrong guess then  2 point will be dedcuted  {" "}
    </p>
</div>
        </RulesContainer>
    )
};

export default Rules

const RulesContainer = styled.div`
  background-color: red;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  margin-right: 70px;
  margin-top: -250px;
  border-radius: 10px;


  span{
    color: black;
  }

  h2{
    font-size: 24px;
    text-align: center;
    color: white;
  }
  .text{
    text-align: center;
    margin-top: 24px;
    color: white;
  }

`;