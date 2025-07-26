import { Box, Grid, Typography, IconButton , Divider} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/keyboard";

const images = [
  "/images/15/1.jpeg",
  "/images/15/5.jpeg",
   "/images/15/15.jpg",
 "/images/15/153.jpg",
    "/images/15/155.jpg",
  "/images/15/154.jpg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleOpen = (index) => {
    setStartIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref} sx={{ py: 8, px: 2, maxWidth: "1200px", mx: "auto" }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          textAlign: "center",
        fontFamily: "'Catchy Mager', cursive",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Galería
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.map((src, index) => (
          <Grid item key={index} xs={12} md={6} lg={6} xl={6}>

            <Box
              component="img"
              src={src}
              alt={`Imagen ${index + 1}`}
              onClick={() => handleOpen(index)}
              sx={{
                width: "100%",
                height: { xs: 160, sm: 220, md: 250 },
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal lightbox */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", sm: "90%", md: "900px" },
              mx: "auto",
            }}
          >
            {/* Botón cerrar */}
            <CloseIcon
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: { xs: 8, sm: 16 },
                right: { xs: 8, sm: 16 },
                fontSize: { xs: 24, sm: 30 },
                color: "#fff",
                cursor: "pointer",
                zIndex: 10000,
                "&:hover": {
                  color: "#d1c4e9",
                },
              }}
            />

            {/* Flecha izquierda */}
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                position: "absolute",
                left: { xs: 4, sm: -40 },
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                zIndex: 10000,
                fontSize: 20,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Flecha derecha */}
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                position: "absolute",
                right: { xs: 4, sm: -40 },
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                zIndex: 10000,
                fontSize: 20,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* Swiper */}
            <Swiper
              initialSlide={startIndex}
              keyboard
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Keyboard]}
              style={{
                width: "100%",
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: "100%",
                      maxHeight: { xs: "80vh", sm: "90vh" },
                      objectFit: "contain",
                      borderRadius: 2,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      )}

      
    </Box>
  );
};

export default Gallery;
