import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { addJudoka } from "../../../src/services/judoka.service";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { getAllDojos } from "../../services/dojo.service";
import { redirect } from "react-router-dom";
 


function CreateStudent() {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [dojoId, setDojoId] = useState("");
  const [date_of_birth, setdate_of_birth] = useState(null);
  const [nivel, setnivel] = useState("");
  const userEmail = localStorage.getItem("userEmail");
  const [dojos, setDojos] = useState([]);

    const [value, setValue] = React.useState(null);

  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlelastname = (e) => {
    setlastName(e.target.value);
  };

  const handledojo = (e) => {
    setDojoId(e.target.value);
  };

  const handledate_of_birth = (e) => {
    //setdate_of_birth(e);
  };

  const handlenivel = (e) => {
    setnivel(e.target.value);
  };

  async function getDojos(){
    const result= await getAllDojos()
    setDojos(result)

  }
    useEffect(()=>{
    getDojos() 
    },[])

    

  const crearJudoka = async () => {
    const judokaData = {
      name,
      lastName,
      dojoId,
      date_of_birth,
      nivel,
      userEmail,
    };
    try {
      const result = await addJudoka(judokaData)
      
    } catch (error) {
      console.log("Error al enviar la solicitud:", error)
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
        <h1>Crear Judoka</h1>
        <Grid container spacing={2} sx={{ width: "70%" }}>
          <Grid item xs={4} sx={{ width: "80%" }}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              onChange={handlename}
            />
          </Grid>

          <Grid item xs={4} sx={{ width: "80%" }}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              onChange={handlelastname}
            />
          </Grid>
          <Grid item xs={4} sx={{ width: "80%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setdate_of_birth(newValue.$d);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ width: "50%" }} variant="outlined">
              <InputLabel id="select-label">Dojo</InputLabel>
              <Select
                labelId="select-label"
                id="dojo-select"
                label="Dojo"
                onChange={handledojo}
              >
                {dojos.map((dojo) => {
                  return (
                    <MenuItem key={dojo.id} value={dojo.id}>
                      {" "}
                      {dojo.name}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ width: "50%" }} variant="outlined">
              <InputLabel id="select-label">Nivel</InputLabel>
              <Select
                labelId="select-label"
                id="nivel-select"
                label="nivel"
                onChange={handlenivel}
              >
                <MenuItem value="Cinturón Blanco">Cinturón Blanco</MenuItem>
                <MenuItem value="Cinturón Amarillo">Cinturón Amarillo</MenuItem>
                <MenuItem value="Cinturón Naranja">Cinturón Naranja</MenuItem>
                <MenuItem value="Cinturón Verde">Cinturón Verde</MenuItem>
                <MenuItem value="Cinturón Azul">Cinturón Azul</MenuItem>
                <MenuItem value="Cinturón Marrón">Cinturón Marrón</MenuItem>
                <MenuItem value="Cinturón Negro">Cinturon Negro</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* <Link to="/"> */}
        <Link to='/profilepage'>
          <Button
            sx={{
              borderRadius: "50px",
              bgcolor: "blue",
              color: "white",
              width: "190px",
            }}
            onClick={crearJudoka}
          >
            Añadir judoka
          </Button>
        </Link>
        {/* </Link> */}
      </Box>
    </>
  );
}


export default CreateStudent;
