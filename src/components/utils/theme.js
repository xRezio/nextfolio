import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';


const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#673AB7', // Couleur principale violette
      },
      secondary: {
        main: blue[300], // Couleur de fond 
        light: blue[500], // Couleur de fond
        dark: blue[700], // Couleur de fond
        darker: blue[900], // Couleur de fond
      },
      background: {
        primary: '#f5f5f5', // Couleur de fond principale
      }
    },
    typography: {
      fontFamily: ['Roboto', 'sans-serif'], // Police par défaut
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20, // Coins arrondis pour les boutons
            fontWeight: 'bold', // Texte en gras pour les boutons
          },
          containedPrimary: {
            color: '#fff', // Couleur du texte pour les boutons primaires
          },
          containedSecondary: {
            color: '#fff', // Couleur du texte pour les boutons secondaires
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 'bold', // Texte en gras pour les chips
            borderRadius: 20, // Coins arrondis pour les chips
            fontStyle: 'normal', // Style italique pour les chips
          },
         colorPrimary: {
            backgroundColor: blue[500], // Couleur de fond pour les chips primaires
          },
          colorSecondary: {
            backgroundColor: '#673AB7', // Couleur de fond pour les chips secondaires
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Ombre légère pour les cartes
          },
        },
      },
    },
    Image: {
      styleOverrides: {
        borderRadius: '100px', // Coins arrondis pour les images
      },
    }
  });
  


export default theme;