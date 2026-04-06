import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp, FadeInRight } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';

const screenWidth = Dimensions.get('window').width;

const PREGNANCY_COLORS = {
  primary: '#FF64B4', // Soft Maternity Pink
  secondary: '#FFB8D2',
  background: '#FFF5F8',
};

const WEEK_DAYS = [
  { day: 'Su', date: '06' },
  { day: 'Mo', date: '07' },
  { day: 'Tu', date: '08' },
  { day: 'We', date: '09', active: true },
  { day: 'Th', date: '10' },
  { day: 'Fr', date: '11' },
  { day: 'Sa', date: '12' },
];

export default function PregnancyCareScreen() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[PREGNANCY_COLORS.background, '#FFFFFF']}
        style={styles.headerGradient}
      />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
               <IconSymbol name="person.crop.circle.fill" size={44} color={PREGNANCY_COLORS.primary} />
               <View style={styles.headerTitleRow}>
                  <Text style={styles.headerTitle}>My pregnancy</Text>
                  <IconSymbol name="chevron.right" size={16} color={COLORS.text} style={{ transform: [{ rotate: '90deg' }] }} />
               </View>
            </View>
            <TouchableOpacity style={styles.searchCircle}>
               <IconSymbol name="search" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          {/* Weekly Horizontal Calendar Card */}
          <Animated.View entering={FadeInDown.duration(800).delay(100)}>
            <Card style={styles.calendarCard}>
              <View style={styles.monthRow}>
                 <View style={styles.monthLabel}>
                    <IconSymbol name="calendar" size={18} color={COLORS.text} />
                    <Text style={styles.monthText}>April 2025</Text>
                 </View>
                 <View style={styles.monthNav}>
                    <IconSymbol name="chevron.right" size={18} color={COLORS.textLight} style={{ transform: [{ rotate: '180deg' }] }} />
                    <IconSymbol name="chevron.right" size={18} color={COLORS.textLight} />
                 </View>
              </View>

              <View style={styles.daysRow}>
                {WEEK_DAYS.map((item, index) => (
                   <View key={index} style={styles.dayCol}>
                     <Text style={styles.dayLabel}>{item.day}</Text>
                     <View style={[styles.dateCircle, item.active && styles.activeDateCircle]}>
                        <Text style={[styles.dateText, item.active && styles.activeDateText]}>{item.date}</Text>
                     </View>
                   </View>
                ))}
              </View>
            </Card>
          </Animated.View>

          {/* Featured Content: You're Crushing it */}
          <View style={styles.sectionHeader}>
             <Text style={styles.sectionTitle}>You're crushing it</Text>
             <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.horizontalScroll}
          >
             {/* Large Baby/Belly Card (Middle image representation) */}
             <Animated.View entering={FadeInRight.duration(800).delay(300)}>
                <Card style={styles.featuredCard}>
                   <View style={styles.featuredContent}>
                      {/* Placeholder for high-fidelity maternity illustration */}
                      <View style={styles.illustrationPlaceholder}>
                         <IconSymbol name="sparkles" size={60} color={PREGNANCY_COLORS.primary} />
                         <View style={styles.vitalsBadge}>
                            <IconSymbol name="heart.fill" size={20} color={COLORS.surface} />
                            <Text style={styles.vitalsText}>140 bpm</Text>
                         </View>
                      </View>
                      <View style={styles.labelOverlay}>
                         <Text style={styles.labelText}>Your life</Text>
                         <IconSymbol name="chevron.right" size={16} color={COLORS.surface} />
                      </View>
                   </View>
                </Card>
             </Animated.View>

             {/* Secondary Baby Info Card */}
             <Animated.View entering={FadeInRight.duration(800).delay(400)}>
                <Card style={[styles.featuredCard, styles.secondCard]}>
                   <View style={styles.illustrationPlaceholderSmall}>
                      <IconSymbol name="bottle" size={40} color={COLORS.secondary} />
                   </View>
                   <View style={styles.labelOverlay}>
                      <Text style={styles.labelText}>Development</Text>
                      <IconSymbol name="chevron.right" size={16} color={COLORS.surface} />
                   </View>
                </Card>
             </Animated.View>
          </ScrollView>

          {/* Additional Info Section */}
          <View style={[styles.sectionHeader, { marginTop: 30 }]}>
             <Text style={styles.sectionTitle}>Highlights</Text>
             <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>

          <Card style={styles.infoRow}>
             <View style={styles.infoItem}>
                <View style={[styles.infoIcon, { backgroundColor: '#F0E7FF' }]}>
                   <IconSymbol name="chart" size={24} color="#7E57C2" />
                </View>
                <View>
                   <Text style={styles.infoVal}>1.2 kg</Text>
                   <Text style={styles.infoLabel}>Weight Gain</Text>
                </View>
             </View>
             <View style={styles.infoDivider} />
             <View style={styles.infoItem}>
                <View style={[styles.infoIcon, { backgroundColor: '#E3F2FD' }]}>
                   <IconSymbol name="phone" size={24} color="#1E88E5" />
                </View>
                <View>
                   <Text style={styles.infoVal}>24 Days</Text>
                   <Text style={styles.infoLabel}>Next Checkup</Text>
                </View>
             </View>
          </Card>

        </ScrollView>
      </SafeAreaView>

      {/* Specialty Bottom Pill Dock for Pregnancy (matching image) */}
      <View style={styles.dockContainer}>
         <View style={styles.dockPill}>
            <TouchableOpacity style={styles.dockItemActive}>
               <IconSymbol name="house.fill" size={24} color={COLORS.surface} />
               <Text style={styles.dockTextActive}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockItem}>
               <IconSymbol name="calendar" size={24} color={COLORS.textLight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockItem}>
               <IconSymbol name="message.fill" size={24} color={COLORS.textLight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockItem}>
               <IconSymbol name="person.fill" size={24} color={COLORS.textLight} />
            </TouchableOpacity>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: SIZES.lg,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.xl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerTitle: {
    ...TYPOGRAPHY.subtitle,
    fontWeight: '800',
    color: COLORS.text,
  },
  searchCircle: {
     width: 48,
     height: 48,
     borderRadius: 24,
     backgroundColor: COLORS.surface,
     alignItems: 'center',
     justifyContent: 'center',
     ...SHADOWS.sm,
  },
  calendarCard: {
     padding: SIZES.lg,
     backgroundColor: 'rgba(255,255,255,0.9)',
     borderRadius: RADIUS.xl,
     marginBottom: 30,
     ...SHADOWS.md,
  },
  monthRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: 20,
  },
  monthLabel: {
     flexDirection: 'row',
     alignItems: 'center',
     gap: 8,
  },
  monthText: {
     fontSize: 16,
     fontWeight: '800',
     color: COLORS.text,
  },
  monthNav: {
     flexDirection: 'row',
     gap: 16,
  },
  daysRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
  },
  dayCol: {
     alignItems: 'center',
     gap: 8,
  },
  dayLabel: {
     fontSize: 11,
     fontWeight: '700',
     color: COLORS.textLight,
     textTransform: 'uppercase',
  },
  dateCircle: {
     width: 38,
     height: 38,
     borderRadius: 19,
     alignItems: 'center',
     justifyContent: 'center',
  },
  activeDateCircle: {
     backgroundColor: PREGNANCY_COLORS.primary,
     ...SHADOWS.sm,
     shadowColor: PREGNANCY_COLORS.primary,
  },
  dateText: {
     fontSize: 14,
     fontWeight: '700',
     color: COLORS.text,
  },
  activeDateText: {
     color: COLORS.surface,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.md,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.text,
  },
  seeAll: {
    ...TYPOGRAPHY.small,
    color: COLORS.textLight,
    fontWeight: '700',
  },
  horizontalScroll: {
    paddingRight: SIZES.xl,
  },
  featuredCard: {
    width: 200,
    height: 260,
    padding: 0,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: SIZES.lg,
    ...SHADOWS.lg,
  },
  secondCard: {
     width: 140,
     backgroundColor: '#FFF1F5',
  },
  featuredContent: {
    flex: 1,
    backgroundColor: '#FFE4EE',
  },
  illustrationPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD1E1',
  },
  illustrationPlaceholderSmall: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vitalsBadge: {
     position: 'absolute',
     top: 20,
     right: 20,
     backgroundColor: PREGNANCY_COLORS.primary,
     paddingHorizontal: 12,
     paddingVertical: 6,
     borderRadius: 20,
     flexDirection: 'row',
     alignItems: 'center',
     gap: 6,
  },
  vitalsText: {
     color: COLORS.surface,
     fontSize: 12,
     fontWeight: '800',
  },
  labelOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },
  labelText: {
    color: '#333333',
    fontWeight: '900',
    fontSize: 14,
  },
  infoRow: {
     flexDirection: 'row',
     padding: SIZES.lg,
     alignItems: 'center',
     ...SHADOWS.md,
  },
  infoItem: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     gap: 12,
  },
  infoIcon: {
     width: 48,
     height: 48,
     borderRadius: 16,
     alignItems: 'center',
     justifyContent: 'center',
  },
  infoVal: {
     fontSize: 18,
     fontWeight: '900',
     color: COLORS.text,
  },
  infoLabel: {
     fontSize: 12,
     color: COLORS.textLight,
  },
  infoDivider: {
     width: 1,
     height: 40,
     backgroundColor: COLORS.border,
     marginHorizontal: SIZES.md,
  },
  dockContainer: {
     position: 'absolute',
     bottom: 30,
     left: SIZES.xl,
     right: SIZES.xl,
     alignItems: 'center',
  },
  dockPill: {
     backgroundColor: 'rgba(255,255,255,0.95)',
     paddingHorizontal: 12,
     paddingVertical: 10,
     borderRadius: 35,
     flexDirection: 'row',
     alignItems: 'center',
     gap: 12,
     ...SHADOWS.lg,
  },
  dockItemActive: {
     backgroundColor: PREGNANCY_COLORS.primary,
     paddingHorizontal: 20,
     paddingVertical: 12,
     borderRadius: 25,
     flexDirection: 'row',
     alignItems: 'center',
     gap: 8,
     ...SHADOWS.sm,
     shadowColor: PREGNANCY_COLORS.primary,
  },
  dockTextActive: {
     color: COLORS.surface,
     fontWeight: '800',
  },
  dockItem: {
     padding: 12,
  }
});
