import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp, FadeInRight } from 'react-native-reanimated';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Card } from '@/components/ui/Card';

const screenWidth = Dimensions.get('window').width;

const SOS_SERVICES = [
  { id: '1', title: 'Ambulance', icon: 'ambulance', color: '#EF4444', desc: 'Medical Emergency' },
  { id: '2', title: 'Police', icon: 'police', color: '#1E40AF', desc: 'Security Incident' },
  { id: '3', title: 'Fire', icon: 'fire', color: '#B91C1C', desc: 'Fire Emergency' },
  { id: '4', title: 'Emergency Contact', icon: 'phone', color: COLORS.secondary, desc: 'Call Family/Friend' },
];

export default function SOSScreen() {
  const router = useRouter();

  const handleSOS = (service: string) => {
    Alert.alert(
      `🚨 Emergency ${service}`,
      `Initiating emergency protocols for ${service}. Your location is being shared with responders.`,
      [{ text: "Cancel", style: "cancel" }, { text: "CALL NOW", style: "destructive", onPress: () => {} }]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
               <IconSymbol name="chevron.right" size={24} color={COLORS.surface} style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Emergency SOS</Text>
            <View style={{ width: 44 }} />
          </View>

          {/* SOS Signal Radar Animation Simulation */}
          <View style={styles.radarContainer}>
             <Animated.View entering={FadeInDown.duration(1000)} style={styles.radarPulse}>
                <View style={styles.pulseInner}>
                   <IconSymbol name="exclamationmark.triangle.fill" size={60} color={COLORS.surface} />
                </View>
             </Animated.View>
             <Text style={styles.locationText}>📍 Currently at: 123 Health Ave, NY</Text>
             <Text style={styles.statusText}>GPS Signal: High Accuracy</Text>
          </View>

          {/* Emergency Service Cards */}
          <View style={styles.gridSection}>
             <Text style={styles.sectionHeader}>Emergency Hub</Text>
             {SOS_SERVICES.map((service, index) => (
                <Animated.View 
                  key={service.id} 
                  entering={FadeInDown.delay(200 + index * 100).duration(600)}
                >
                   <TouchableOpacity 
                     style={[styles.sosCard, { borderLeftColor: service.color }]}
                     onPress={() => handleSOS(service.title)}
                     activeOpacity={0.8}
                   >
                      <View style={[styles.iconCircle, { backgroundColor: `${service.color}15` }]}>
                         <IconSymbol name={service.icon as any} size={28} color={service.color} />
                      </View>
                      <View style={styles.cardInfo}>
                         <Text style={styles.cardTitle}>{service.title}</Text>
                         <Text style={styles.cardDesc}>{service.desc}</Text>
                      </View>
                      <View style={styles.actionCircle}>
                         <IconSymbol name="chevron.right" size={20} color={COLORS.border} />
                      </View>
                   </TouchableOpacity>
                </Animated.View>
             ))}
          </View>

          <View style={styles.safetySection}>
              <Text style={styles.safetyTitle}>Safety Tip</Text>
              <Text style={styles.safetyBody}>In case of severe bleeding, apply direct pressure and elevation until help arrives.</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0F172A', // Dark High-Contrast Background for SOS
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: SIZES.lg,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  backBtn: {
     width: 44,
     height: 44,
     borderRadius: 12,
     backgroundColor: 'rgba(255,255,255,0.1)',
     alignItems: 'center',
     justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.surface,
  },
  radarContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  radarPulse: {
     width: 180,
     height: 180,
     borderRadius: 90,
     backgroundColor: 'rgba(239, 68, 68, 0.2)',
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: SIZES.xl,
  },
  pulseInner: {
     width: 140,
     height: 140,
     borderRadius: 70,
     backgroundColor: '#EF4444',
     alignItems: 'center',
     justifyContent: 'center',
     ...SHADOWS.lg,
     shadowColor: '#EF4444',
  },
  locationText: {
     color: COLORS.surface,
     fontSize: 16,
     fontWeight: '700',
     marginBottom: 6,
  },
  statusText: {
     color: 'rgba(255,255,255,0.5)',
     fontSize: 12,
     textTransform: 'uppercase',
     letterSpacing: 1,
  },
  gridSection: {
     width: '100%',
  },
  sectionHeader: {
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 20,
    paddingLeft: 4,
  },
  sosCard: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: 'rgba(255,255,255,0.05)',
     padding: 20,
     borderRadius: RADIUS.xl,
     marginBottom: SIZES.md,
     borderLeftWidth: 6,
  },
  iconCircle: {
     width: 54,
     height: 54,
     borderRadius: 27,
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: SIZES.md,
  },
  cardInfo: {
     flex: 1,
  },
  cardTitle: {
     fontSize: 18,
     fontWeight: '900',
     color: COLORS.surface,
  },
  cardDesc: {
     fontSize: 12,
     color: 'rgba(255,255,255,0.4)',
     marginTop: 2,
  },
  actionCircle: {
     width: 32,
     height: 32,
     borderRadius: 16,
     backgroundColor: 'rgba(255,255,255,0.05)',
     alignItems: 'center',
     justifyContent: 'center',
  },
  safetySection: {
      marginTop: 40,
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      padding: 24,
      borderRadius: RADIUS.xl,
      borderWidth: 1,
      borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  safetyTitle: {
      color: '#F59E0B',
      fontWeight: '900',
      fontSize: 16,
      marginBottom: 8,
  },
  safetyBody: {
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 20,
      fontSize: 14,
  }
});
