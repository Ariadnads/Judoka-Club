import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import image from "../../../../imagenes/efdbf025f958209d71781fc4819289cc.jpg";
import { login } from "../../../src/services/auth.service";
import { useNavigate } from "react-router-dom";

function FilteredImage({ src, alt }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100%",
        borderRadius: "20px",
        overflow: "hidden", // Ensure overflow is hidden
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${src})`, // Use background image
          backgroundSize: "contain", // Contain the image within the div
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(#977644, black)",
          zIndex: 90,
          opacity: 0.35,
          borderRadius: "20px",
        }}
      />
    </Box>
  );
}




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  const handleClickVisibility = () => setIsPassVisible(!isPassVisible);

  const handleLogIn = async () => {
    if (await login({ email, password })) {
      navigate("/profilepage");
    } else {
      alert("Error: Usuario o contraseña invalidos");
    }
  };

  return (
    <Card
      elevation={0}
      
      sx={{
        display: "flex",
        background:'transparent',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        p: 3,
        overflow: "hidden",
        width: '950px',
        maxWidth: '100%',
        margin: 'auto',
        boxShadow: 'none'
      }}
    >
      <CardContent sx={{width: '950px', maxWidth: '100%',}}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <FilteredImage src={image} alt="judo_ilustration" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography align="center" variant="h4" component="div">
              Log in
            </Typography>
            <Box sx={{ mt: 3, mx: 6 }}>
  <TextField
    fullWidth
    margin="dense"
    label="Email"
    variant="outlined"
    InputProps={{
      startAdornment: <Email />,
    }}
    inputProps={{
      style: {
        fontWeight: 'normal', // Peso de fuente normal
        padding: '10px', // Agregar más padding
      }
    }}
    onChange={handleEmail}
  />
  <TextField
    fullWidth
    margin="dense"
    type={isPassVisible ? "text" : "password"}
    label="Password"
    variant="outlined"
    InputProps={{
      startAdornment: <Lock />,
      endAdornment: (
        <IconButton onClick={handleClickVisibility}>
          {isPassVisible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      ),
    }}
    inputProps={{
      style: {
        fontWeight: 'normal', // Peso de fuente normal
        padding: '10px', // Agregar más padding
      }
    }}
    onChange={handlePassword}
  />
</Box>


            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "20px", width: "190px" }}
                onClick={handleLogIn}
                align="center"
              >
                Login
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Login;
