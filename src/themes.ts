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

export default {
  turquiose: {
    ...defaultTheme('#45B8AC'),
  },
  cerulean: {
    ...defaultTheme('#98b4d4'),
  },
  coral: {
    ...defaultTheme('#FF6F61'),
  },
  lime: {
    ...defaultTheme('#BFD641'),
  },
  rose: {
    ...defaultTheme('#F7CAC9'),
  },
  sand: {
    ...defaultTheme('#DFCFBE'),
  },
  violet: {
    ...defaultTheme('#6B5B95'),
  },
};
