import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Animated as RNAnimated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown, useAnimatedStyle, useSharedValue, withRepeat, withTiming, withSequence } from 'react-native-reanimated';
import { COLORS } from '@/constants/theme';
import { Logo, BrandName } from '@/components/Logo';

export default function MediConnectSplashScreen() {
  const router = useRouter();
  const opacity = useSharedValue(0.4);

  useEffect(() => {
    // Pulse animation for the background/subtle feel
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1500 }),
        withTiming(0.4, { duration: 1500 })
      ),
      -1,
      true
    );

    // Redirect after splash
    const timer = setTimeout(() => {
      router.replace('/(auth)/login' as any);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.backgroundPulse, animatedStyle]} />
      
      <View style={styles.content}>
        <Animated.View 
          entering={FadeInDown.duration(1000).springify()}
          style={styles.logoWrapper}
        >
          <Logo size={120} />
          <BrandName size={36} />
        </Animated.View>

        <Animated.View 
          entering={FadeIn.delay(800).duration(1000)}
          style={styles.loaderContainer}
        >
          <ActivityIndicator size="small" color={COLORS.primary} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, // Pure white
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundPulse: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primaryLight,
    opacity: 0.1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
  },
  loaderContainer: {
    marginTop: 60,
  },
});
