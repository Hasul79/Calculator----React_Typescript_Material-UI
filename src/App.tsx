import React from 'react';
import { Container , Grid , Paper , styled} from '@mui/material';

const OutputContainer = styled('div')(({theme}) =>({
  width: "100",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize:"3em",
  overflow: "hidden"
}))
const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius:15
}))
function App() {
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
             <OutputContainer>0</OutputContainer>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
