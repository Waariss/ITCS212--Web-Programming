import React from "react";
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 80vw;
  margin: auto;
`;
class Home extends React.Component{
    render(){
        return(
            <Container>
            <h1>This is Home Page</h1>
            </Container>
        );
    }
}
export default Home;
