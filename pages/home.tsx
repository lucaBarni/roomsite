import { Button, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const home = () => {
    const theme = useTheme();
    return (
        <>

            <Container
                style={{
                    color: theme.palette.primary.main,
                }}>
                <Stack>

                    <Typography variant="h4" marginTop={'5vh'} color={"inherit"}>Bienvenido!</Typography>

                    <Stack spacing={"1rem"} marginTop={'50vh'}>





                        <Typography textAlign={"center"} color={"inherit"}>¡Usar Roomsite es realmente sencillo! Sigue estos tips para que tu experiencia sea realmente sensacional</Typography>


                    </Stack>

                    <Button
                        variant="contained"
                        style={{
                            marginTop: "2rem",
                        }}

                    >SIGUIENTE</Button>

                    <Typography textAlign={"center"} color={"inherit"}>¿No quieres ver esto?</Typography>

                    <Container
                        style={{
                            color: theme.palette.secondary.light,
                        }}>

                        <Typography textAlign={"center"} color={"inherit"}>SALTAR</Typography>
                    </Container>

                </Stack>
            </Container>

        </>
    )
}

export default home