import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function BabyCareScreen() {
  const router = useRouter();

  const BABY_DATA = {
    name: 'Lily Ray',
    age: '6 Months Old',
    weight: '7.2 kg',
    height: '65 cm',
  };

  const FEATURES = [
    { title: 'Vaccination Tracker', subtitle: 'Next: Polio (Dose 3)', icon: 'vaccine', color: '#FFB7B2', status: '80% complete' },
    { title: 'Feeding Log', subtitle: 'Last: 2h ago (120ml)', icon: 'bottle', color: '#B2E2F2', status: 'On track' },
    { title: 'Sleep Tracker', subtitle: 'Last sleep: 2h 15m', icon: 'sleep', color: '#B2B2E2', status: 'Healthy' },
    { title: 'Growth Chart', subtitle: 'Normal development', icon: 'chart', color: '#B2F2B2', status: 'Top 75%' },
    { title: 'Health Tips', subtitle: 'Teething guidance', icon: 'medical', color: '#F2F2B2', status: 'New' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Baby Profile Card */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarMain}>
            <IconSymbol name="person.crop.circle.fill" size={80} color={COLORS.primary} />
            <View style={styles.editBadge}>
              <IconSymbol name="plus" size={14} color={COLORS.surface} />
            </View>
          </View>
          <Text style={styles.babyName}>{BABY_DATA.name}</Text>
          <Text style={styles.babyAge}>{BABY_DATA.age}</Text>
          
          <View style={styles.vitalsRow}>
            <View style={styles.vitalItem}>
              <Text style={styles.vitalLabel}>Height</Text>
              <Text style={styles.vitalValue}>{BABY_DATA.height}</Text>
            </View>
            <View style={styles.vitalDivider} />
            <View style={styles.vitalItem}>
              <Text style={styles.vitalLabel}>Weight</Text>
              <Text style={styles.vitalValue}>{BABY_DATA.weight}</Text>
            </View>
          </View>
        </View>

        {/* Feature List */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Daily Tracking</Text>
          {FEATURES.map((feature, index) => (
            <Card key={index} style={styles.featureCard} onPress={() => {}}>
              <View style={styles.cardLayout}>
                <View style={[styles.iconContainer, { backgroundColor: feature.color }]}>
                  <IconSymbol name={feature.icon as any} size={24} color={COLORS.text} />
                </View>
                <View style={styles.cardTextContent}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureSubtitle}>{feature.subtitle}</Text>
                </View>
                <View style={styles.statusBadge}>
                   <Text style={[styles.statusText, { color: COLORS.textLight }]}>{feature.status}</Text>
                </View>
              </View>
              
              {/* Progress Indicator for specific cards */}
              {feature.title === 'Vaccination Tracker' && (
                <View style={styles.progressBarContainer}>
                   <View style={styles.progressBarBg}>
                      <View style={[styles.progressBarFill, { width: '80%', backgroundColor: feature.color }]} />
                   </View>
                </View>
              )}
            </Card>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDFCFB', // Very soft baby-friendly background
  },
  container: {
    padding: SIZES.lg,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SIZES.xl,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    marginBottom: SIZES.xl,
    ...SHADOWS.md,
  },
  avatarMain: {
    position: 'relative',
    marginBottom: SIZES.md,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.surface,
  },
  babyName: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
  },
  babyAge: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    marginBottom: SIZES.lg,
  },
  vitalsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.xl,
    paddingVertical: SIZES.md,
    borderRadius: RADIUS.lg,
  },
  vitalItem: {
    alignItems: 'center',
    paddingHorizontal: SIZES.md,
  },
  vitalLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textLight,
  },
  vitalValue: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.primary,
    fontWeight: '700',
  },
  vitalDivider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.border,
  },
  featuresSection: {
    marginTop: SIZES.md,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    marginBottom: SIZES.md,
    color: COLORS.text,
  },
  featureCard: {
    marginBottom: SIZES.md,
    padding: SIZES.md,
  },
  cardLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  cardTextContent: {
    flex: 1,
  },
  featureTitle: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.text,
    fontSize: 15,
  },
  featureSubtitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textLight,
  },
  statusBadge: {
    paddingHorizontal: SIZES.sm,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.background,
  },
  statusText: {
    ...TYPOGRAPHY.small,
  },
  progressBarContainer: {
    marginTop: SIZES.md,
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.border,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
});
