import React from 'react'
import { TextField, Button, FormLabel } from "@mui/material"
import '../styles/form.css'

export const Form = () => {

    return (
        <div className="main-div-form">
          <FormLabel sx={{ color:"white" }}>Escribe una descripción detallada de la imagen</FormLabel>
          <TextField
            placeholder='Escribe tu idea'
            sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
            }}
          />
          <Button variant='contained'>Generar</Button>
        </div>
    )

}
