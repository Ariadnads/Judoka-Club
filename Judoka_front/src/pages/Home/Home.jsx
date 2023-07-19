import React from "react";
import "./Home.css";
import {Container,Box, Typography, Button, Card} from "@mui/material";
import  Image from '../../../../imagenes/samuel-castro-MS_RP-Lba0U-unsplash.jpg'
import { Link } from "react-router-dom";

function Home() {
  

  return (
    <>
      <Box
        className="herosection"
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "scroll",
          backgroundImage: `url(${Image})`,
          display: "flex",
          alignItems: "center",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          flex: 1,
        }}
      >
        <div
          className="filtro"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(#2D2824, black)",
            zIndex: 1,
            filter: "opacity(60%)",
          }}
        ></div>
        <Container
          sx={{
            zIndex: "8",
            width: "30vw",
            textAlign: "Center",
          }}
        >
          <Typography
            component="div"
            className="headline"
            variant="h1"
            sx={{ textAlign: "center", color: "white" }}
          >
            Judoka club
          </Typography>
          <Link to="/login">
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "20px", width: "210px", height: "55px" }}
              align="center"
              /* sx={{ textAlign: "Center", bgcolor: "#3430E4", borderRadius: "20px", color:"white", width:"210px", height: "55px"}} */
            >
              Apúntate
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
}

export default Home;
