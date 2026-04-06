import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const screenWidth = Dimensions.get('window').width;

export default function TestResultsScreen() {
  const router = useRouter();

  const BP_DATA = [
     { val: 0.8, color: COLORS.primary },
     { val: 0.6, color: COLORS.primary },
     { val: 1.0, color: COLORS.primary },
     { val: 0.4, color: '#E2E8F0' }, // Low bar
     { val: 0.7, color: COLORS.primary },
     { val: 0.9, color: COLORS.primary },
     { val: 0.5, color: COLORS.primary },
     { val: 0.3, color: COLORS.primary },
     { val: 0.8, color: COLORS.primary },
     { val: 0.6, color: COLORS.primary },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
             <IconSymbol name="chevron.right" size={24} color={COLORS.text} style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
          <View style={styles.headerRight}>
             <TouchableOpacity style={styles.actionIcon}>
                <IconSymbol name="search" size={24} color={COLORS.text} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.actionIcon}>
                <IconSymbol name="bell.fill" size={24} color={COLORS.text} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Title Content */}
        <Animated.View entering={FadeInDown.duration(600).delay(100)} style={styles.titleArea}>
           <Text style={styles.titleText}>Your <Text style={styles.titleBold}>Test</Text></Text>
           <Text style={styles.titleBold}>Result</Text>
        </Animated.View>

        {/* anatomy system background feel (Simulated with a placeholder circle/tint) */}
        <View style={styles.anatomyBg}>
           {/* In a real app, this would be an SVG or Image of the human vascular system as in the design */}
           <View style={styles.anatomyCenter} />
        </View>

        {/* Test Result Card: Blood Pressure (Bespoke chart from image) */}
        <Animated.View entering={FadeInUp.duration(800).delay(300)} style={styles.cardContainer}>
           <Card style={styles.resultCard}>
              <Text style={styles.cardTitle}>Blood Pressure</Text>
              
              <View style={styles.chartArea}>
                 <View style={styles.chartBars}>
                    {BP_DATA.map((item, index) => (
                       <View key={index} style={styles.barStack}>
                          <View style={[styles.mainBar, { height: 100 * item.val, backgroundColor: item.color }]} />
                       </View>
                    ))}
                 </View>
                 
                 <View style={styles.xAxis}>
                    {['3am', '6', '9', '12pm', '15', '18'].map((label, i) => (
                       <Text key={i} style={styles.axisLabel}>{label}</Text>
                    ))}
                 </View>
              </View>

              <Button 
                title="Details" 
                onPress={() => {}} 
                style={styles.detailsBtn}
                textStyle={{ fontWeight: '900' }}
              />
           </Card>
        </Animated.View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: SIZES.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.xxl,
  },
  backBtn: {
     width: 44,
     height: 44,
     borderRadius: 12,
     backgroundColor: 'rgba(0,0,0,0.03)',
     alignItems: 'center',
     justifyContent: 'center',
  },
  headerRight: {
     flexDirection: 'row',
     gap: SIZES.md,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.03)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleArea: {
     marginBottom: 40,
     zIndex: 10,
  },
  titleText: {
     fontSize: 36,
     color: COLORS.text,
     fontWeight: '400',
     lineHeight: 44,
  },
  titleBold: {
    fontWeight: '900',
  },
  anatomyBg: {
     position: 'absolute',
     top: '30%',
     right: -50,
     width: 300,
     height: 400,
     opacity: 0.1,
  },
  anatomyCenter: {
     width: 250,
     height: 250,
     borderRadius: 125,
     backgroundColor: COLORS.primary,
     opacity: 0.1,
  },
  cardContainer: {
     marginTop: 'auto',
     marginBottom: SIZES.xl,
  },
  resultCard: {
     padding: SIZES.xl,
     borderRadius: RADIUS.xl,
     backgroundColor: 'rgba(255,255,255,0.95)',
     borderWidth: 1,
     borderColor: COLORS.border,
     ...SHADOWS.lg,
  },
  cardTitle: {
     ...TYPOGRAPHY.subtitle,
     fontWeight: '800',
     marginBottom: SIZES.xl,
  },
  chartArea: {
     height: 160,
     width: '100%',
     marginBottom: SIZES.xl,
     justifyContent: 'flex-end',
  },
  chartBars: {
     flexDirection: 'row',
     alignItems: 'flex-end',
     justifyContent: 'space-between',
     paddingHorizontal: 10,
  },
  barStack: {
     width: 14,
     alignItems: 'center',
  },
  mainBar: {
     width: 8,
     borderRadius: 4,
  },
  xAxis: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 16,
  },
  axisLabel: {
     fontSize: 12,
     color: COLORS.textLight,
     fontWeight: '700',
  },
  detailsBtn: {
     height: 56,
     borderRadius: RADIUS.round,
  }
});
