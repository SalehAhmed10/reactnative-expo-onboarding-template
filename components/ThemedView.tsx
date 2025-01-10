// import { View, type ViewProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedViewProps = ViewProps & {
//   lightColor?: string;
//   darkColor?: string;
// };

// export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
//   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

//   return <View style={[{ backgroundColor }, style]} {...otherProps} />;
// }


import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { Colors } from '@/constants/Colors'


// use ColorScheme from useThemeColor to get the color scheme
// use the color scheme to set the background color


export function ThemedView(props: ViewProps) {
  const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');

  return <View {...props} style={[props.style, { backgroundColor }, { paddingHorizontal: 10 }]} />;
}
