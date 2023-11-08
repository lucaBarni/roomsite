import { Button,  useTheme, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'


const home = () => {
  const theme = useTheme();
  return (
 <>
     <Container
       style={{
         color: theme.palette.primary.main,
       }}>

      <Stack spacing={"1rem"} marginTop={'2vh'}>
        
        <Typography variant="h4" color={"inherit"}>Home</Typography>

        <TextField id="outlined-basic" label="Ingresar ubicacion" variant="outlined" />
        <TextField id="outlined-basic" label="Seleccione huespedes" variant="outlined" />
        <TextField id="outlined-basic" label="Ingrese fechas" variant="outlined" />
        
        <Button
          variant="contained"
          style={{
            marginTop: "2rem",
          }}
          
        >Buscar</Button>  

        <hr/>

        <Typography color={"inherit"}>Vistos anteriormente</Typography>


    </Stack>      
    </Container>
  </>
  )
}

export default home