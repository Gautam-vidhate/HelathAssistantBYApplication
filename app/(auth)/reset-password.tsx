import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Logo, BrandName } from '@/components/Logo';

export default function ResetPasswordScreen() {
  const router = useRouter();

  const handleVerify = () => {
    // Navigate back to login or dashboard
    router.replace('/(auth)/login' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity 
            style={styles.backBtn}
            onPress={() => router.back()}
          >
             <IconSymbol name="chevron.left.forwardslash.chevron.right" size={24} color={COLORS.text} />
          </TouchableOpacity>

          <View style={styles.brandSection}>
            <Logo size={100} />
            <BrandName size={28} />
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>At least 8 characters with uppercase and lowercase letters.</Text>
          </View>

          <View style={styles.form}>
            <Input 
              label="Password*"
              placeholder="••••••••"
              leftIcon="lock.fill"
              isPassword
            />
            <Input 
              label="Confirm Password*"
              placeholder="••••••••"
              leftIcon="lock.fill"
              isPassword
            />
            
            <Button 
              title="VERIFY" 
              onPress={handleVerify} 
              style={styles.verifyBtn}
              textStyle={{ fontWeight: '900' }}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: SIZES.xl,
    flexGrow: 1,
    paddingTop: 40,
  },
  backBtn: {
     width: 44,
     height: 44,
     borderRadius: 12,
     backgroundColor: '#F9FAFB',
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: SIZES.xl,
     borderWidth: 1,
     borderColor: COLORS.border,
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: SIZES.xxl,
  },
  title: {
    ...TYPOGRAPHY.h2,
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: SIZES.lg,
  },
  form: {
    width: '100%',
  },
  verifyBtn: {
    height: 56,
    borderRadius: RADIUS.md,
    marginTop: SIZES.xl,
    ...SHADOWS.md,
  },
});
