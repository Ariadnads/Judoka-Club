import {
  Avatar,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import image from "../../../../imagenes/foto-carnet-jaime.jpg";
import license from "../../../../imagenes/licencia.jpg"

const ProfileCardInfo = ({judokas}) => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleClickOpen = (cardImage) => {
    setSelectedCard(cardImage);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  // Contenido dummy por si judoka está vacío.
  const dummyContent = {
    name: 'Nombre',
    lastName: 'Apellido',
    date_of_birth: 'Fecha de nacimiento',
    dojo: { name: 'Dojo' },
    nivel: 'Nivel',
  }

  // Usa judoka si está definido, si no, usa el contenido dummy. 
 // const content = judoka  || [dummyContent]  
  return (
     <Container
      sx={{
        width: "100%",
        margin: "0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "right",
      }}
    >
      <Container
        className="profileCard"
        sx={{
          width: "100%",
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            color: "#3430E4",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          Área de Judoka
        </h1>

          {judokas.map((judoka, index) => {
            return (
              <Card
              key={index}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Avatar
                        sx={{
                          width: "150px",
                          height: "150px",
                          display: "block",
                        }}
                        src={image}
                        alt="Avatar"
                      />
                      <Button onClick={() => handleClickOpen(license)}>
                        Ver licencia
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Nombre"
                            secondary={judoka.name}
                            primaryTypographyProps={{
                              fontSize: "16px",
                              color: "#3430E4",
                            }}
                            secondaryTypographyProps={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          />
                          <ListItemText
                            primary="Apellido"
                            secondary={judoka.lastName}
                            primaryTypographyProps={{
                              fontSize: "16px",
                              color: "#3430E4",
                            }}
                            secondaryTypographyProps={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          />
                          <ListItemText
                            primary="Fecha de nacimiento"
                            secondary={judoka.date_of_birth}
                            primaryTypographyProps={{
                              fontSize: "16px",
                              color: "#3430E4",
                            }}
                            secondaryTypographyProps={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Dojo"
                            secondary={judoka.dojo.name}
                            primaryTypographyProps={{
                              fontSize: "16px",
                              color: "#3430E4",
                            }}
                            secondaryTypographyProps={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          />
                          <ListItemText
                            primary="Nivel"
                            secondary={judoka.nivel}
                            primaryTypographyProps={{
                              fontSize: "16px",
                              color: "#3430E4",
                            }}
                            secondaryTypographyProps={{
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
          {/* <Card
            sx={{ width: "100%", marginBottom: "20px", textAlign: "center" }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Avatar
                    sx={{ width: "150px", height: "150px", display: "block" }}
                    src={image}
                    alt="Avatar"
                  />
                  <Button onClick={() => handleClickOpen(license)}>
                    Ver licencia
                  </Button>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Nombre"
                        secondary={judoka.name}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          color: "#3430E4",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />
                      <ListItemText
                        primary="Apellido"
                        secondary={judoka.lastName}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          color: "#3430E4",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />
                      <ListItemText
                        primary="Fecha de nacimiento"
                        secondary={judoka.date_of_birth}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          color: "#3430E4",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Dojo"
                        secondary={judoka.dojo.name}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          color: "#3430E4",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />
                      <ListItemText
                        primary="Nivel"
                        secondary={judoka.nivel}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          color: "#3430E4",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
 */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Licencia Federativa</DialogTitle>
          <DialogContent>
            <img
              src={selectedCard}
              alt="Licencia Federativa"
              style={{ maxWidth: "100%" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

      <Link
        to="/newstudent"
        style={{ textDecoration: "none", display: "inline" }}
      >
        <Button
          sx={{
            borderRadius: "50px",
            bgcolor: "#3430E4",
            color: "white",
            width: "190px",
          }}
        >
          Añadir judoka
        </Button>
      </Link>
    </Container> 
  );
}

export default ProfileCardInfo;
