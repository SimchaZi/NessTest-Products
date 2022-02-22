module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FCFCFC',
          75: '#F2F2F2',
          100: '#F8F9FF',
          115: '#F5F5F5',
          125: '#F9F9F9',
          150: '#FAFAFA',
          175: '#FBFBFB',
          200: '#D2DAE2',
          225: '#e5e5e5',
          250: '#e0e0e0',
          300: '#d4e4f3',
          350: '#A6B2BF',
          400: '#7A8C96',
          450: '#828282',
          800: '#4F4F4F'
        },
        red: {
          100: '#FCEEEE',
          200: '#FAD1D5',
          400: '#EB5757',
          700: '#AA2125',
          800: '#6E1C24'
        },
        blue: {
          100: '#A6B3BF',
          150: '#E3EDF6',
          200: '#C5E2FD',
          400: '#4EBFFF',
          500: '#2D9CDB',
          800: '#335E89',
          900: '#003366'
        },
        purple: {
          50: '#F3EEF8',
          100: '#9B51E0'
        },
        green: {
          50: '#F0FAF4',
          200: '#8ADDAD',
          300: '#CBEAD7',
          400: '#6FCF97',
          800: '#185930'
        },
        orange: {
          100: '#FDF4EC',
          500: '#F2994A'
        },
        yellow: {
          50: '#FFF8E4',
          200: '#F2C94C'
        }
      },
      height: {
        '30-px': '30px'
      },
      width: {
        '3/10': '30%',
        '54-px': '54px',
        '600-px': '600px'
      },
      minWidth: {
        '600-px': '600px'
      },
      maxWidth: {
        '1100-px': '1100px'
      },
      spacing: {
        7.5: '1.875rem',
        13: '3.125rem'
      },
      margin: {
        7.5: '1.875rem'
      },
      fontSize: {
        'size-10-px': '10px',
        'size-18-px': '18px',
        'size-22-px': '22px',
        'size-26-px': '26px',
        'size-38-px': '38px',
        'size-50-px': '50px'
      },
      boxShadow: {
        button: '0 2px 12px 0px rgba(212, 228, 243, 1)',
        navBar: '3px 0px 40px 0px rgba(238, 239, 246, 1)'
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
