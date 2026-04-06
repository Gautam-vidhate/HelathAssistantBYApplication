import React from 'react';
import { StyleSheet, ViewStyle, Pressable, StyleProp } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, RADIUS, SHADOWS, SIZES } from '../../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  variant?: 'elevated' | 'outlined' | 'flat';
}

export function Card({ children, style, onPress, variant = 'elevated' }: CardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    if (onPress) scale.value = withSpring(0.97, { damping: 10, stiffness: 200 });
  };

  const onPressOut = () => {
    if (onPress) scale.value = withSpring(1, { damping: 10, stiffness: 200 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          backgroundColor: COLORS.surface,
          borderWidth: 1,
          borderColor: COLORS.border,
        };
      case 'flat':
        return {
          backgroundColor: COLORS.primaryLight,
        };
      case 'elevated':
      default:
        return {
          backgroundColor: COLORS.surface,
          ...SHADOWS.md,
        };
    }
  };

  return (
    <Animated.View style={[styles.card, getVariantStyles(), style, animatedStyle]}>
      <Pressable 
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed && onPress ? 0.9 : 1 }
        ]}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.lg,
    marginVertical: SIZES.sm/2, // Reduced vertical margin for 8pt grid
    overflow: 'hidden',
    width: '100%',
  },
  pressable: {
    padding: SIZES.lg,
    width: '100%',
  }
});
