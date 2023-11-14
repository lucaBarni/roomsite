import { Button,  useTheme, Container, Stack, TextField, Typography, InputAdornment } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Rooms = () => {
  const theme = useTheme();
  return (
 <>
     <Container
       style={{
         color: theme.palette.primary.main,
       }}>

      <Stack spacing={"1rem"} marginTop={'2vh'}>
        
        <Typography variant="h4" color={"inherit"}>Rooms</Typography>

        
        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              ingrese Ubicación
            </InputAdornment>
          ),
        }}
        />

        <TextField 
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonAddIcon />
              Seleccone Huespedes
            </InputAdornment>
          ),
        }}
        />

        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarMonthIcon />
              Ingresar Fechas
            </InputAdornment>
          ),
        }}
        />
           
        
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

export default Rooms