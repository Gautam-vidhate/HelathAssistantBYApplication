import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Button } from '@/components/ui/Button';

export default function ProfileScreen() {
  const router = useRouter();

  const USER = {
    name: 'Sarah Bennett',
    email: 'sarah.b@mediconnect.com',
    age: 24,
    height: '168 cm',
    weight: '58 kg',
  };

  const handleLogout = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to log out of your secure health account?",
      [{ text: "Cancel", style: "cancel" }, { text: "LOGOUT", style: "destructive", onPress: () => router.replace('/(auth)/login' as any) }]
    );
  };

  const SETTINGS = [
    { title: 'Personal Information', icon: 'person.fill' },
    { title: 'Test Results', icon: 'doc.fill', route: '/modules/test-results' },
    { title: 'Notifications', icon: 'bell.fill' },
    { title: 'Privacy & Security', icon: 'lock.fill' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Profile Card Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
             <IconSymbol name="person.crop.circle.fill" size={100} color={COLORS.primary} />
             <TouchableOpacity style={styles.editBadge}>
                <IconSymbol name="plus" size={18} color={COLORS.surface} />
             </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{USER.name}</Text>
          <Text style={styles.userEmail}>{USER.email}</Text>
          
          <Button 
            title="Edit Profile" 
            variant="outline" 
            style={styles.editBtn} 
            onPress={() => {}} 
          />
        </View>

        {/* Vital Details Bar */}
        <View style={styles.vitalsRow}>
           <View style={styles.vitalBox}>
              <Text style={styles.vitalLabel}>Age</Text>
              <Text style={styles.vitalValue}>{USER.age}</Text>
           </View>
           <View style={styles.vitalDivider} />
           <View style={styles.vitalBox}>
              <Text style={styles.vitalLabel}>Height</Text>
              <Text style={styles.vitalValue}>{USER.height}</Text>
           </View>
           <View style={styles.vitalDivider} />
           <View style={styles.vitalBox}>
              <Text style={styles.vitalLabel}>Weight</Text>
              <Text style={styles.vitalValue}>{USER.weight}</Text>
           </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
           {SETTINGS.map((item, index) => (
             <TouchableOpacity 
                key={index} 
                style={styles.menuItem}
                onPress={() => item.route && router.push(item.route as any)}
             >
                <View style={[styles.menuIcon, { backgroundColor: `${COLORS.primary}10` }]}>
                   <IconSymbol name={item.icon as any} size={22} color={COLORS.primary} />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <IconSymbol name="chevron.right" size={18} color={COLORS.textLight} />
             </TouchableOpacity>
           ))}
        </View>

        {/* Logout Section */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
           <IconSymbol name="exclamationmark.triangle.fill" size={20} color={COLORS.danger} />
           <Text style={styles.logoutText}>Log Out Account</Text>
        </TouchableOpacity>

        <Text style={styles.versionInfo}>MediConnect v2.0.4 • Build 8821</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, // Pure white
  },
  container: {
    padding: SIZES.lg,
    paddingBottom: 150,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SIZES.xl,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    ...SHADOWS.md,
    marginBottom: SIZES.xl,
    marginTop: SIZES.md,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: SIZES.md,
  },
  editBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: COLORS.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.surface,
  },
  userName: {
    ...TYPOGRAPHY.h2,
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.text,
  },
  userEmail: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: SIZES.lg,
  },
  editBtn: {
    width: 140,
    height: 48,
    borderRadius: RADIUS.md,
    borderColor: COLORS.border,
  },
  vitalsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SIZES.lg,
    ...SHADOWS.sm,
    marginBottom: SIZES.xl,
  },
  vitalBox: {
    flex: 1,
    alignItems: 'center',
  },
  vitalLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  vitalValue: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.primary,
    fontWeight: '900',
  },
  vitalDivider: {
    width: 1,
    backgroundColor: COLORS.border,
    height: '100%',
  },
  menuSection: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    paddingVertical: SIZES.sm,
    ...SHADOWS.sm,
    marginBottom: SIZES.xl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.lg,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.border}50`,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  menuTitle: {
    flex: 1,
    ...TYPOGRAPHY.body,
    fontWeight: '700',
    color: COLORS.text,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.xl,
    backgroundColor: 'rgba(225, 29, 72, 0.05)',
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    borderColor: 'rgba(225, 29, 72, 0.1)',
  },
  logoutText: {
    ...TYPOGRAPHY.body,
    color: COLORS.danger,
    fontWeight: '800',
    marginLeft: 12,
  },
  versionInfo: {
    marginTop: SIZES.xl,
    textAlign: 'center',
    ...TYPOGRAPHY.small,
    color: COLORS.textLight,
    opacity: 0.5,
  },
});
