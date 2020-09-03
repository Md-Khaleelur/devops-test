import { createMuiTheme } from '@material-ui/core/styles';


const fontSize = 14;

const htmlFontSize = 16;
const coef = fontSize / 14;

function pxToRem(value) {
    return `${(value / htmlFontSize) * coef}rem`;
  }

const theme = createMuiTheme({
    palette: {
        primary: {
            dark: '#0b399b',
            main: '#1665d8',
            light: '#70b0f3',
        },
        common: {
            black: '#212121',
            white: '#ffffff',
        },
        error: {
            main: '#e6492d'
          },
        warning:{
            main: '#facf55'
        },
        grey: {
            50: '#ffffff',
            100: '#f5f8fa',
            200: '#153920',
            300: '#dfe3eb',
            400: '#eeeeee',
            500: '#99acc2',
            600: '#bdbdbd',
            700: '#516f90',
            800: '#616161',
            900: '#2d3e50',
            A200: '#3e3f42',
            icon500: '#9EA0A5'
          },
    },
    spacing: 4,
    typography: {
        fontFamily: 'Roboto',
        h1:{
            fontSize: pxToRem(36),
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.39',
            letterSpacing: 'normal'
        },
        h2:{
            fontSize: pxToRem(36),
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.39',
            letterSpacing: 'normal'
        },
        h3:{
            fontSize: pxToRem(30),
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.67',
            letterSpacing: 'normal'
        },
        h4:{
            fontSize: pxToRem(26),
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.46',
            letterSpacing: 'normal'
        },
        h5:{
            fontSize: pxToRem(22),
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.45',
            letterSpacing: 'normal'
        },
        h6:{
            fontSize: pxToRem(18),
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.56',
            letterSpacing: 'normal'
        },
        subtitle1:{
            fontSize: pxToRem(20),
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            letterSpacing: 'normal'
        },
        subtitle2:{
            fontSize: pxToRem(20),
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            letterSpacing: 'normal'
        },
        body1:{
            fontSize: pxToRem(16),
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            letterSpacing: 'normal'
        },
        body2:{
            fontSize: pxToRem(14),
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.57',
            letterSpacing: 'normal'
        },
        caption:{
            fontSize: pxToRem(12),
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            letterSpacing: 'normal'
        }
    },
    overrides: {
      },
});

export default theme;
