import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ElderlyCareScreen() {
  const router = useRouter();

  const NEXT_MEDICINE = {
    name: 'Aspirin (10mg)',
    time: '2:00 PM',
    type: 'After lunch',
    icon: 'pill',
  };

  const FEATURES = [
    { title: 'Medicine Reminder', subtitle: 'Next: 2:00 PM', icon: 'heart.text.square.fill', color: COLORS.primary, route: '/modules/medicines' },
    { title: 'Health Monitoring', subtitle: 'Blood Pressure: 120/80', icon: 'medical', color: COLORS.secondary, route: '/modules/vitals' },
    { title: 'Doctor Appointment', subtitle: 'Tomorrow, 10:30 AM', icon: 'calendar', color: COLORS.warning, route: '/modules/appointments' },
  ];

  const handleEmergency = () => {
    Alert.alert(
      "Emergency Support",
      "Connect with our 24/7 emergency response team?",
      [{ text: "Cancel", style: "cancel" }, { text: "CALL HELP", style: "destructive", onPress: () => {} }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Large, Easy-to-Read Welcome Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hello, James!</Text>
          <Text style={styles.dayText}>Monday, May 12</Text>
        </View>

        {/* Big Immediate Medicine Reminder Card */}
        <Card style={styles.featuredCard}>
          <View style={styles.featuredCardContent}>
            <View style={styles.featuredIconContainer}>
               <IconSymbol name="bell.fill" size={40} color={COLORS.surface} />
            </View>
            <View style={styles.featuredTextContent}>
               <Text style={styles.featuredLabel}>Next Medicine</Text>
               <Text style={styles.featuredMedName}>{NEXT_MEDICINE.name}</Text>
               <Text style={styles.featuredMedTime}>at {NEXT_MEDICINE.time}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.takenBtn}>
            <Text style={styles.takenBtnText}>TAP IF TAKEN</Text>
          </TouchableOpacity>
        </Card>

        {/* Big, accessible buttons/cards for core features */}
        <View style={styles.featureGrid}>
          {FEATURES.map((feature, index) => (
            <TouchableOpacity 
               key={index} 
               style={styles.bigFeatureBtn}
               onPress={() => {}}
               activeOpacity={0.7}
            >
              <View style={[styles.iconCirc, { backgroundColor: `${feature.color}15` }]}>
                <IconSymbol name={feature.icon as any} size={32} color={feature.color} />
              </View>
              <View style={styles.bigFeatureText}>
                <Text style={styles.bigFeatureTitle}>{feature.title}</Text>
                <Text style={styles.bigFeatureSubtitle}>{feature.subtitle}</Text>
              </View>
              <IconSymbol name="chevron.right" size={24} color={COLORS.textLight} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Major High-Contrast Emergency Button */}
        <TouchableOpacity 
          style={styles.emergencyBigBtn} 
          onPress={handleEmergency}
          activeOpacity={0.8}
        >
          <IconSymbol name="exclamationmark.triangle.fill" size={32} color={COLORS.surface} />
          <Text style={styles.emergencyBtnText}>EMERGENCY HELP</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: SIZES.lg,
    paddingBottom: 40,
  },
  header: {
    marginVertical: SIZES.xl,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
  },
  dayText: {
    fontSize: 20,
    color: COLORS.textLight,
    fontWeight: '500',
  },
  featuredCard: {
    backgroundColor: COLORS.primary,
    padding: SIZES.xl,
    borderRadius: RADIUS.xl,
    marginBottom: SIZES.xl,
    ...SHADOWS.md,
  },
  featuredCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xl,
  },
  featuredIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.xl,
  },
  featuredTextContent: {
    flex: 1,
  },
  featuredLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  featuredMedName: {
    color: COLORS.surface,
    fontSize: 24,
    fontWeight: '800',
    marginTop: 4,
  },
  featuredMedTime: {
    color: COLORS.surface,
    fontSize: 20,
    fontWeight: '500',
  },
  takenBtn: {
    backgroundColor: COLORS.surface,
    paddingVertical: SIZES.lg,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  takenBtnText: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  featureGrid: {
    marginBottom: SIZES.xl,
  },
  bigFeatureBtn: {
    backgroundColor: COLORS.surface,
    padding: SIZES.xl,
    borderRadius: RADIUS.xl,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.md,
    ...SHADOWS.sm,
  },
  iconCirc: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.xl,
  },
  bigFeatureText: {
    flex: 1,
  },
  bigFeatureTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
  },
  bigFeatureSubtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginTop: 4,
  },
  emergencyBigBtn: {
    backgroundColor: COLORS.danger,
    paddingVertical: SIZES.xl * 1.5,
    borderRadius: RADIUS.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.xl,
    ...SHADOWS.md,
  },
  emergencyBtnText: {
    color: COLORS.surface,
    fontSize: 26,
    fontWeight: '900',
    marginLeft: 12,
    letterSpacing: 2,
  },
});
