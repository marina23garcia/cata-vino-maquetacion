module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontSize: {
      'xxxs': '.5rem',
      'xxs': '.875rem',
      'xs': '1rem',
      'sm': '1.125rem',
      'md': '1.25rem',
      'lg': '1.375rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
    },
    lineHeight: {
      'xs': '.75rem',
      'sm': '1.5rem',
      'md': '2rem',
      'lg': '3rem',
      '2x1': '3.5rem',
      '3x1': '4.5rem',
    },
    extend: {
      spacing: {
        '23': '5.5rem',
        '540': '540px',
        '570': '570px',
        '635': '635px',
        '700': '700px',
        '820': '820px',
      },
      
      colors: {
        primario: '#B28C00',
        back: {
          claro: '#FAFAFA',
          oscuro: '#333333',
        },
        front: {
          claro: '#FFFFFF',
          oscuro: '#6A6F74'
        },
        accent: '#957614',
        base: '#545760',
        exito: '#00AB89',
        error: '#C0564B',
        info: '#00ADF2',
        aviso: '#FFD330',

        blanco: '#FFFFFF',
        
      },
      backgroundImage: {
        'imgprincipal': "url('https://picsum.photos/600/600')",
      },
      screens: {
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        'secundaria': "'Open Sans', sans-serif",
        'primaria':"'Yantramanav', sans-serif",
      },
    },
  },
  
  plugins: [],
};


