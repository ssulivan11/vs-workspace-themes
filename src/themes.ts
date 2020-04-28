const defaults = {
  'activityBar.background': '#222',
  'activityBar.activeBackground': '#444',
  'activityBarBadge.foreground': '#222',
  'titleBar.activeBackground': '#222',
  'titleBar.inactiveForeground': '#222',
  'statusBar.foreground': '#222',
};

const defaultTheme = (hex: string) => ({
  ...defaults,
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
  if (colorTheme === 'turquiose') return { ...defaultTheme('#45B8AC') };
  if (colorTheme === 'cerulean') return { ...defaultTheme('#98b4d4') };
  if (colorTheme === 'coral') return { ...defaultTheme('#FF6F61') };
  if (colorTheme === 'lime') return { ...defaultTheme('#BFD641') };
  if (colorTheme === 'tangerine') return { ...defaultTheme('#FF7216') };
  if (colorTheme === 'rose') return { ...defaultTheme('#F7CAC9') };
  if (colorTheme === 'sand') return { ...defaultTheme('#DFCFBE') };
  if (colorTheme === 'snow') return { ...defaultTheme('#FFFFFF') };
  if (colorTheme === 'violet') return { ...defaultTheme('#6B5B95') };
  return { ...defaultTheme(randomHex()) };
};
