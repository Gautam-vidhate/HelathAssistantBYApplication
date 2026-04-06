import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Logo, BrandName } from '@/components/Logo';

export default function RegisterScreen() {
  const router = useRouter();

  const handleRegister = () => {
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
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Enter your credentials to create an account</Text>
          </View>

          <View style={styles.form}>
            <Input 
              label="Full Name*"
              placeholder="Oliver Bennett"
              leftIcon="person.fill"
            />
            <Input 
              label="Email*"
              placeholder="oliver.bennett12@gmail.com"
              leftIcon="envelope.fill"
              autoCapitalize="none"
              keyboardType="email-address"
            />
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
            
            <View style={styles.rememberRow}>
               <TouchableOpacity style={styles.checkboxContainer} activeOpacity={0.7}>
                  <View style={styles.checkbox}>
                     <IconSymbol name="checkmark.circle.fill" size={14} color={COLORS.primary} />
                  </View>
                  <Text style={styles.rememberText}>Remember me</Text>
               </TouchableOpacity>
            </View>
            
            <Button 
              title="SIGN UP" 
              onPress={handleRegister} 
              style={styles.registerBtn}
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
            <Text style={styles.footerText}>Have an account? </Text>
            <Text 
              style={styles.footerLink} 
              onPress={() => router.replace('/(auth)/login' as any)}
            >
              Sign In
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
    backgroundColor: COLORS.background,
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
  rememberRow: {
    marginBottom: SIZES.xl,
    marginTop: SIZES.xs,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  rememberText: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: '700',
  },
  registerBtn: {
    height: 56,
    borderRadius: RADIUS.md,
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
    color: COLORS.text,
    fontWeight: '900',
  },
});
