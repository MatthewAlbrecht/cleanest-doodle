module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comic Neue'],
        body: ['Lato'],
      },
      colors: {
        doodlesBg: {
          1: '#382754',
          2: '#4d457c',
          3: '#6066a6',
          4: '#708ad2',
          5: '#7dafff',
        },
        doodles: {
          aqua: '#92EBEB',
          green: '#95F1C5',
          purple: '#ADBFFD',
          yellow: '#FFE375',
          orange: '#FFC48C',
          pink: '#FFADDE',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
