export const theme = {
  palette: {
    primary: {
      default: '#00D68F',
      dark: '#004A45',
      transparent: '#00D68F48',
      gradient: '' // TODO -> Need impl: not implemented yed
    },
    action: {
      default: '#D82C66',
      dark: '#FF3D71'
    },
    background: {
      default: '',
      modal: '#00000035'
    },
    success: {
      main: '#32cc6f'
    },
    text: {
      primary: ''
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '18',
      lineHeight: '24px'
    },
    h2: {
      fontSize: '15px',
      lineHeight: '24px'
    },
  },
  
} as const
