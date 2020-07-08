const defaultTheme = (hex: string) => ({
  'activityBar.background': '#222',
  'activityBar.activeBackground': '#444',
  'activityBarBadge.foreground': '#222',
  'titleBar.activeBackground': '#222',
  'titleBar.inactiveForeground': '#222',
  'statusBar.foreground': '#222',
  'activityBar.activeBorder': hex,
  'activityBar.foreground': hex,
  'activityBar.inactiveForeground': hex,
  'activityBarBadge.background': hex,
  'titleBar.inactiveBackground': hex,
  'titleBar.activeForeground': hex,
  'statusBar.background': hex,
  'statusBarItem.hoverBackground': hex,
});

const randomHex = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

export const themeCommands = [
  'turquiose',
  'cerulean',
  'coral',
  'lime',
  'rose',
  'sand',
  'snow',
  'violet',
  'random',
];

export const themes = (colorTheme: string) => {
  switch (colorTheme) {
    case 'turquiose':
      return { ...defaultTheme('#45B8AC') };
    case 'cerulean':
      return { ...defaultTheme('#98b4d4') };
    case 'coral':
      return { ...defaultTheme('#FF6F61') };
    case 'lime':
      return { ...defaultTheme('#BFD641') };
    case 'tangerine':
      return { ...defaultTheme('#FF7216') };
    case 'rose':
      return { ...defaultTheme('#F7CAC9') };
    case 'sand':
      return { ...defaultTheme('#DFCFBE') };
    case 'snow':
      return { ...defaultTheme('#FFFFFF') };
    case 'sand':
      return { ...defaultTheme('#DFCFBE') };
    case 'violet':
      return { ...defaultTheme('#6B5B95') };
    default:
      return { ...defaultTheme(randomHex()) };
  }
};
