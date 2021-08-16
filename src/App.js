import React from "react";
import InputForm from "./components/InputForm";

import styled from "styled-components";

const Card = styled.div`
  width: 720px;
  margin: 30px auto;
  padding: 10px 20px;
  height: 60vh;
  background-color: #fff;
  border-radius: 1rem;
`;

const App = () => {
  return (
    <Card>
      <InputForm />
    </Card>
  );
};

export default App;
