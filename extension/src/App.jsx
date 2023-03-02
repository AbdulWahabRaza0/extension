import React, { useState } from "react";
import { Wrapper } from "../components/Layout";
import { P } from "../components/Typography";
function App() {
  return (
    <>
      <Wrapper
        height="100vh"
        width="100%"
        className="d-flex flex-row align-items-center justify-content-center"
      >
        <P size="25px" color="green" weight="900">
          Login
        </P>
      </Wrapper>
    </>
  );
}

export default App;
