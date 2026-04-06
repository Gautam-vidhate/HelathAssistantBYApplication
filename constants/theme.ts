export const COLORS = {
  primary: '#3B82F6', // Brighter, modern blue (Medi Connect)
  primaryLight: '#EFF6FF',
  secondary: '#2E8B57', 
  secondaryLight: '#F0FDF4',
  background: '#FFFFFF', // Pure, clean white background
  surface: '#FFFFFF',
  text: '#111827', // Richer, darker text
  textLight: '#6B7280',
  danger: '#E11D48', // Correct red for medical logo
  dangerLight: '#FFF1F2',
  warning: '#F59E0B',
  success: '#10B981',
  border: '#E5E7EB',
};

export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 999,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 32, fontWeight: '800' as const, color: COLORS.text },
  h2: { fontSize: 24, fontWeight: '800' as const, color: COLORS.text },
  h3: { fontSize: 18, fontWeight: '700' as const, color: COLORS.text },
  subtitle: { fontSize: 16, fontWeight: '600' as const, color: COLORS.text },
  body: { fontSize: 16, fontWeight: '400' as const, color: COLORS.textLight },
  caption: { fontSize: 14, fontWeight: '400' as const, color: COLORS.textLight },
  small: { fontSize: 12, fontWeight: '500' as const, color: COLORS.textLight },
};

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, 
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  }
};
