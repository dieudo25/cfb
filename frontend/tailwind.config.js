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

        'max-xsm': {'max': '360px'},
        // => @media (max-width: 640px) { ... }

        'max-sm': {'max': '640px'},
        // => @media (max-width: 640px) { ... }

        'max-md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }

        'max-lg': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }

        'max-xl': {'max': '1280px'},
        // => @media (max-width: 1280px) { ... }
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
          dark: {
            500: '#00000099',
          }
        },

        width: {
          'fit-content': 'fit-content',
        },
      },
    }
}