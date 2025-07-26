import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#fff",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"    // <-- centrar el único ítem
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="right" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
              <CelebrationIcon
                sx={{ fontSize: 50, color: "#b0b0b0", mb: 1 }}
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "'Catchy Mager', cursive",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Fiesta
              </Typography>

              {/* Fecha personalizada */}
              <Typography
                component="p"
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2 ,   fontFamily: "'Catchy Mager', cursive",}}
              >
                1 de diciembre de 2025
              </Typography>

            
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 , fontFamily: "'Catchy Mager', cursive",}}>
                Palacio Duhau - Park Hyatt Buenos Aires
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2 , fontFamily: "'Catchy Mager', cursive",}}
              >
                Victoria, Buenos Aires.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3,   fontFamily: "'Catchy Mager', cursive" }}
              >
                ¡TE ESPERO!
              </Typography>

              <a
                href="https://www.google.com/maps/place/Palacio+Duhau+-+Park+Hyatt+Buenos+Aires/@-34.5893841,-58.3888138,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
              <Button
  variant="contained"
  sx={{
    borderRadius: 999,
    fontFamily: "'Catchy Mager', cursive",
    px: 4,
    backgroundColor: "#9a64ea",  // color principal
    color: "#fff",               // texto en blanco para contraste
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",         // fondo blanco al pasar
      border: "2px solid #9a64ea",     // borde con el mismo morado
      color: "#9a64ea",                // texto morado
    },
  }}
>
  Llegar al salón
</Button>

              </a>
            </Box>
          </Slide>
        </Grid>
      </Grid>

      <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default InfoEvent;
