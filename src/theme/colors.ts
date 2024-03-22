export const palette = {
  bluePrimary: '#6B55FD',
  grayPrimary: '#313139',

  grayBlack: '#0C0C1F',
  grayWhite: '#FFFFFF',

  gray1: '#111111',
  gray2: '#5C5C5C',
};

const lightTheme = {
  ...palette,
  primary: palette.bluePrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.bluePrimary,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  paragraph: palette.gray1,

  iconColor: palette.gray2,
};

const darkTheme: typeof lightTheme = {
  ...palette,
  primary: palette.bluePrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.bluePrimary,

  background: palette.grayPrimary,
  backgroundContrast: palette.grayWhite,

  paragraph: palette.grayWhite,

  iconColor: palette.gray2,
};

export const colors = {palette, lightTheme, darkTheme};
