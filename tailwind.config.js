module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
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
        'bottles': "url('./img/bottles.png')",
      },
    },
  },
  plugins: [],
};
