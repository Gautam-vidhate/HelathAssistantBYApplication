import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function EnhancedDashboard() {
  const router = useRouter();

  const VITALS = [
    { title: 'Blood Status', label: 'Now', value: '116/70', icon: 'blood' },
    { title: 'Blood Count', label: 'Now', value: '80-90', icon: 'pulse' },
    { title: 'Heart Rate', label: 'Now', value: '120 bpm', icon: 'heart.fill' },
    { title: 'Glucose Level', label: 'Now', value: '9,000/ml', icon: 'glucose' },
  ];

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#F0F4FF', '#FFFFFF']}
        style={styles.headerGradient}
      />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          {/* Header following Design Image */}
          <Animated.View 
            entering={FadeInDown.duration(600).delay(100)}
            style={styles.header}
          >
            <TouchableOpacity style={styles.profileBtn}>
                <IconSymbol name="person.crop.circle.fill" size={50} color={COLORS.primary} />
            </TouchableOpacity>
            <View style={styles.headerActions}>
                <TouchableOpacity style={styles.actionIcon}>
                   <IconSymbol name="search" size={24} color={COLORS.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon}>
                   <IconSymbol name="bell.fill" size={24} color={COLORS.text} />
                </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Title Section */}
          <Animated.View 
            entering={FadeInDown.duration(600).delay(200)}
            style={styles.titleSection}
          >
             <Text style={styles.titleText}>Health <Text style={styles.titleBold}>Status</Text></Text>
             <Text style={styles.titleBold}>Review</Text>
          </Animated.View>

          {/* Medication Highlight Card */}
          <Animated.View 
            entering={FadeInUp.duration(800).delay(300)}
          >
             <Card 
               style={styles.statsCard} 
               onPress={() => router.push('/modules/test-results' as any)}
             >
                <View style={styles.statsHeader}>
                   <View style={styles.statsIconBox}>
                      <IconSymbol name="medical" size={20} color={COLORS.primary} />
                   </View>
                   <View>
                      <Text style={styles.statsLabel}>Paracetamol</Text>
                      <Text style={styles.statsValue}>25%</Text>
                   </View>
                   <View style={styles.influenzaBadge}>
                      <Text style={styles.influenzaText}>Influenza</Text>
                   </View>
                </View>
                {/* Visual Placeholder for the Chart/Wave */}
                <View style={styles.waveformContainer}>
                   {[1, 0.4, 0.6, 0.8, 1, 0.5, 0.3, 0.7, 0.9, 0.4].map((h, i) => (
                     <View 
                        key={i} 
                        style={[
                            styles.waveBar, 
                            { height: 30 * h, backgroundColor: (i === 4 || i === 8) ? COLORS.primary : '#E2E8F0' }
                        ]} 
                     />
                   ))}
                   <View style={styles.respiratoryBox}>
                      <Text style={styles.respValue}>523</Text>
                      <Text style={styles.respLabel}>Respiratory</Text>
                   </View>
                </View>
             </Card>
          </Animated.View>

          {/* Vitals Main Grid Area */}
          <Animated.View 
            entering={FadeInUp.duration(800).delay(400)}
            style={styles.vitalsContainer}
          >
             <View style={styles.userRow}>
                <View style={styles.userBadge}>
                    <IconSymbol name="person.fill" size={20} color={COLORS.primary} />
                    <Text style={styles.userName}>Sarah</Text>
                </View>
                <TouchableOpacity style={styles.calendarBtn}>
                   <IconSymbol name="calendar" size={20} color={COLORS.surface} />
                </TouchableOpacity>
             </View>

             <View style={styles.vitalsGrid}>
                {VITALS.map((vital, index) => (
                   <View key={index} style={styles.vitalCard}>
                      <View style={styles.vitalHeader}>
                         <View style={styles.vitalIconBg}>
                            <IconSymbol name={vital.icon as any} size={20} color={COLORS.primary} />
                         </View>
                         <View style={styles.vitalTextRight}>
                            <Text style={styles.vitalLabelSmall}>{vital.label}</Text>
                            <Text style={styles.vitalValueSmall}>{vital.value.split(' ')[0]}</Text>
                         </View>
                      </View>
                      <Text style={styles.vitalTitle}>{vital.title}</Text>
                   </View>
                ))}
             </View>
          </Animated.View>

        </ScrollView>
      </SafeAreaView>
      
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
    paddingBottom: 150, // Space for docking pill
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.lg,
  },
  profileBtn: {
    ...SHADOWS.sm,
  },
  headerActions: {
    flexDirection: 'row',
    gap: SIZES.md,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.sm,
  },
  titleSection: {
     marginTop: 8,
     marginBottom: SIZES.xl,
  },
  titleText: {
     fontSize: 36,
     color: COLORS.text,
     lineHeight: 40,
     fontWeight: '400',
  },
  titleBold: {
     fontWeight: '900',
  },
  statsCard: {
     padding: SIZES.xl,
     backgroundColor: COLORS.surface,
     borderRadius: RADIUS.xl,
     marginBottom: SIZES.xl,
     ...SHADOWS.md,
  },
  statsHeader: {
     flexDirection: 'row',
     alignItems: 'center',
  },
  statsIconBox: {
     width: 44,
     height: 44,
     borderRadius: 12,
     backgroundColor: '#F8F9FE',
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: SIZES.md,
  },
  statsLabel: {
     fontSize: 12,
     color: COLORS.textLight,
  },
  statsValue: {
     fontSize: 22,
     fontWeight: '900',
     color: COLORS.text,
  },
  influenzaBadge: {
     marginLeft: 'auto',
     backgroundColor: '#F2F4F7',
     paddingHorizontal: 12,
     paddingVertical: 6,
     borderRadius: RADIUS.round,
  },
  influenzaText: {
     fontSize: 12,
     color: COLORS.textLight,
     fontWeight: '700',
  },
  waveformContainer: {
     marginTop: SIZES.xl,
     flexDirection: 'row',
     alignItems: 'flex-end',
     gap: 6,
  },
  waveBar: {
     width: 10,
     borderRadius: 5,
  },
  respiratoryBox: {
     marginLeft: 'auto',
     alignItems: 'flex-end',
  },
  respValue: {
     fontSize: 20,
     fontWeight: '900',
     color: COLORS.text,
  },
  respLabel: {
     fontSize: 10,
     color: COLORS.textLight,
     textTransform: 'uppercase',
  },
  vitalsContainer: {
     backgroundColor: COLORS.primary,
     borderRadius: RADIUS.xl * 1.5,
     padding: SIZES.xl,
     marginTop: 8,
  },
  userRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: SIZES.xl,
  },
  userBadge: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: COLORS.surface,
     paddingHorizontal: 16,
     paddingVertical: 8,
     borderRadius: RADIUS.round,
  },
  userName: {
     marginLeft: 8,
     fontWeight: '900',
     color: COLORS.text,
  },
  calendarBtn: {
     width: 44,
     height: 44,
     borderRadius: 12,
     backgroundColor: 'rgba(255,255,255,0.15)',
     alignItems: 'center',
     justifyContent: 'center',
  },
  vitalsGrid: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'space-between',
     gap: SIZES.md,
  },
  vitalCard: {
     width: '47%',
     backgroundColor: 'rgba(255,255,255,0.12)',
     borderRadius: RADIUS.lg,
     padding: 16,
  },
  vitalHeader: {
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'space-between',
     marginBottom: 12,
  },
  vitalIconBg: {
     width: 36,
     height: 36,
     borderRadius: 18,
     backgroundColor: COLORS.surface,
     alignItems: 'center',
     justifyContent: 'center',
  },
  vitalTextRight: {
     alignItems: 'flex-end',
  },
  vitalLabelSmall: {
     fontSize: 10,
     color: 'rgba(255,255,255,0.6)',
  },
  vitalValueSmall: {
     fontSize: 14,
     fontWeight: '800',
     color: COLORS.surface,
  },
  vitalTitle: {
     fontSize: 14,
     fontWeight: '700',
     color: COLORS.surface,
     opacity: 0.9,
  },
});
