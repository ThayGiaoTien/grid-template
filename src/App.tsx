import React from 'react';
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";
import GridRuler from "./components/GridRuler/GridRule";
function App() {
  return (
    <div className="App" style={{margin:"16px", position:"relative", height: "100vh"}}  >
      <GridRuler spacing="lg"></GridRuler>
      <Grid container spacing="sm" justifyContent="center" alignItems="flex-end" style={{height: "100%"}}>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box1</Box> 
        </Grid>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box2</Box> 
        </Grid>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box3</Box> 
        </Grid> 
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box4</Box> 
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
