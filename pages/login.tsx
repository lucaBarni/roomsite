import Login from "@/src/login/Login";
import { Button, Container, Stack, TextField, Typography, useTheme } from "@mui/material";

const login = () => {
  const theme = useTheme();
  return (
 <>
     <Container
       style={{
         color: theme.palette.primary.main,
       }}>
      <Stack spacing={"1rem"} marginTop={'20vh'}>
       
       <Typography variant="h4" color={"inherit"}>Ingresar a tu cuenta</Typography>
  
       <TextField id="standard-basic" label="Correo electronico" variant="standard" />
       <TextField id="standard-basic" label="Contraseña" variant="standard" type="password" />
       </Stack>
       <Button
          variant="contained"
          style={{
            marginTop: "2rem",
          }}
          
        >Iniciar Sesion</Button>    
       
       

       <Typography variant="h6" marginTop={'35vh'}>Olvidaste tu contraseña?</Typography>
     </Container>
 </>
  )
}

export default login;
