import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, ActivityIndicator, Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, SIZES, RADIUS, TYPOGRAPHY, SHADOWS } from '../../constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const getVariantStyles = (): { bg: string; text: string; border?: string; shadow?: boolean } => {
    switch (variant) {
      case 'secondary':
        return { bg: COLORS.secondary, text: COLORS.surface, shadow: true };
      case 'danger':
        return { bg: COLORS.danger, text: COLORS.surface, shadow: true };
      case 'outline':
        return { bg: 'transparent', text: COLORS.primary, border: COLORS.primary };
      case 'ghost':
        return { bg: 'transparent', text: COLORS.primary };
      case 'primary':
      default:
        return { bg: COLORS.primary, text: COLORS.surface, shadow: true };
    }
  };

  const getSizeStyles = (): { padding: number; fontSize: number; height: number } => {
    switch (size) {
      case 'small':
        return { padding: SIZES.sm, fontSize: TYPOGRAPHY.small.fontSize, height: 40 };
      case 'large':
        return { padding: SIZES.lg, fontSize: TYPOGRAPHY.h3.fontSize, height: 64 };
      case 'medium':
      default:
        return { padding: SIZES.md, fontSize: TYPOGRAPHY.subtitle.fontSize, height: 56 };
    }
  };

  const currentVariant = getVariantStyles();
  const currentSize = getSizeStyles();

  return (
    <Animated.View style={[styles.outer, animatedStyle, style]}>
      <Pressable
        onPressIn={() => (scale.value = withSpring(0.96))}
        onPressOut={() => (scale.value = withSpring(1))}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: currentVariant.bg,
            height: currentSize.height,
            paddingHorizontal: currentSize.padding * 1.5,
            borderColor: currentVariant.border,
            borderWidth: currentVariant.border ? 1 : 0,
            opacity: disabled || isLoading ? 0.6 : (pressed ? 0.9 : 1),
            ...(currentVariant.shadow ? SHADOWS.md : {}),
          },
        ]}
        onPress={onPress}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={currentVariant.text} />
        ) : (
          <>
            {icon && <React.Fragment>{icon}</React.Fragment>}
            <Text
              style={[
                styles.text,
                { color: currentVariant.text, fontSize: currentSize.fontSize },
                icon ? { marginLeft: SIZES.sm } : null,
                textStyle,
              ]}
            >
              {title}
            </Text>
          </>
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: '100%',
  },
  container: {
    borderRadius: RADIUS.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '800', // Increased weight for "effective" feeling
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
