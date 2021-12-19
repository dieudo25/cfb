module.exports = {
    theme: {
      screens: {
        'xsm': '360px',
        // => @media (min-width: 360px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      extend: {
        colors: {
          main: {
            500: '#FF661B',
            900: '#DC4304',
          },
          second: {
            500: '#0764A1',
          },
        },

        width: {
          'fit-content': 'fit-content',
        },
      },
    }
}