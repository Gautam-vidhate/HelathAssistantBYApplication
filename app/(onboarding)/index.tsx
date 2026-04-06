import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <IconSymbol name="heart.text.square.fill" size={120} color={COLORS.primary} />
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Your Personal Healthcare Companion</Text>
          <Text style={styles.subtitle}>
            From baby care and pregnancy tracking to daily insights and emergency SOS, we are here for your entire family.
          </Text>

          <View style={styles.buttonContainer}>
            <Button 
              title="Get Started" 
              onPress={() => router.push('/(auth)/register' as any)}
              style={{ marginBottom: 16 }}
            />
            <Button 
              title="I already have an account" 
              onPress={() => router.push('/(auth)/login' as any)}
              variant="outline"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryLight,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  contentContainer: {
    flex: 1,
    padding: SIZES.xl,
    justifyContent: 'center',
  },
  title: {
    ...TYPOGRAPHY.h2,
    textAlign: 'center',
    marginBottom: SIZES.md,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    marginBottom: SIZES.xxl,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: SIZES.xl,
  },
});
