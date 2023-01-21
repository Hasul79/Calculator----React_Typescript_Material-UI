import { Button, Grid , styled} from "@mui/material";


interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void; 
  selectedOperation: string;
}

 const StyledButton = styled(Button)<{selected: boolean}>((props) => ({
    backgroundColor: "rgb(254, 241, 73, .1)",
    borderColor: props.selected ? "#fff"  : "rgb(255, 241, 73, 0.5)",
 }))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
 operation,
 selectedOperation,
 selectOperation,
  
}) => {
    return (
        <Grid item >
           <StyledButton fullWidth variant="outlined" onClick={() => selectOperation(operation)}
           selected={selectedOperation === operation} >
              {operation}
           </StyledButton>
        </Grid>
    )
}