import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Logo, BrandName } from '@/components/Logo';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.brandSection}>
            <Logo size={100} />
            <BrandName size={28} />
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Enter your credentials to login to your account</Text>
          </View>

          <View style={styles.form}>
            <Input 
              label="Email Address"
              placeholder="oliver.bennett12@gmail.com"
              leftIcon="envelope.fill"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input 
              label="Password"
              placeholder="••••••••"
              leftIcon="lock.fill"
              isPassword
            />
            
            <TouchableOpacity style={styles.forgotPasswordContainer} activeOpacity={0.7}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <Button 
              title="LOGIN" 
              onPress={handleLogin} 
              style={styles.loginBtn}
              textStyle={{ fontWeight: '900' }}
            />

            <View style={styles.divider}>
               <View style={styles.line} />
               <Text style={styles.dividerText}>Or continue with</Text>
               <View style={styles.line} />
            </View>

            <View style={styles.socialContainer}>
               <TouchableOpacity style={styles.socialBtn}>
                  <IconSymbol name="globe" size={24} color={COLORS.text} />
                  <Text style={styles.socialText}>Google</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.socialBtn}>
                  <IconSymbol name="apple" size={24} color={COLORS.text} />
                  <Text style={styles.socialText}>Apple</Text>
               </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Text 
              style={styles.footerLink} 
              onPress={() => router.replace('/(auth)/register' as any)}
            >
              Sign Up
            </Text>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, // Pure white as in design
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: SIZES.xl,
    flexGrow: 1,
    paddingTop: 60,
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
    paddingHorizontal: SIZES.md,
  },
  form: {
    width: '100%',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: SIZES.xl,
  },
  forgotPasswordText: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: COLORS.textLight, // Image shows lighter for forgot password link
    fontWeight: '700',
  },
  loginBtn: {
    height: 56,
    borderRadius: RADIUS.md, // Rectangular-round feel from the image
    marginBottom: SIZES.xl,
    ...SHADOWS.md,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xl,
    paddingHorizontal: SIZES.md,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    ...TYPOGRAPHY.small,
    fontSize: 13,
    marginHorizontal: SIZES.md,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.md,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.sm,
  },
  socialText: {
    marginLeft: SIZES.sm,
    ...TYPOGRAPHY.body,
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  footerText: {
    ...TYPOGRAPHY.body,
    fontSize: 15,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  footerLink: {
    ...TYPOGRAPHY.body,
    fontSize: 15,
    color: COLORS.text, // "Sign Up" is bold/darker in the image
    fontWeight: '900',
  },
});
