/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        preto:'#000000',
        branco: '#ffffff',

        primaria: '#88E0EF',
        secundaria:'#FF5151',
        terciaria:'#161E54',

        base:{
        escuro:'#212429',
        medio:'#7E8A98',
        fundo:'#f4f4f554',
        claro:'#F1F3F5',
        },

      },
       fontFamily:{
      'nunito':['Nunito Sans'],
      'darker':['Darker Grotesque'],
      }
    },
  },
  plugins: [],
}
