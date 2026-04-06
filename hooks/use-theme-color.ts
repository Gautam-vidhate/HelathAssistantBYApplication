/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { COLORS } from '@/constants/theme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: string
) {
  // Always return the standard theme variable or light version to satisfy TS temporarily
  return (COLORS as any)[colorName] || COLORS.text;
}
