import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Button } from '@/components/ui/Button';

const screenWidth = Dimensions.get('window').width;

// Manual High-Fidelity Chart to replace broken react-native-chart-kit dependency
const HighFidelityChart = () => {
  const data = [120, 115, 125, 122, 118, 120];
  const max = 130;
  
  return (
    <View style={styles.chartContainer}>
      <View style={styles.yAxis}>
         {[130, 120, 110].map(val => <Text key={val} style={styles.axisText}>{val}</Text>)}
      </View>
      <View style={styles.chartMain}>
         <View style={styles.gridLines}>
            {[1, 2, 3].map(i => <View key={i} style={styles.gridLine} />)}
         </View>
         <View style={styles.barsContainer}>
            {data.map((val, i) => (
               <View key={i} style={styles.barWrapper}>
                  <View style={[styles.bar, { height: (val / max) * 150, backgroundColor: i === 4 ? COLORS.danger : COLORS.primary }]} />
                  <Text style={styles.xLabel}>{['J', 'F', 'M', 'A', 'M', 'J'][i]}</Text>
               </View>
            ))}
         </View>
      </View>
    </View>
  );
};

export default function ReportsScreen() {
  const router = useRouter();

  const REPORTS = [
    { id: '1', name: 'Blood Test Report', date: 'May 10, 2026', type: 'PDF', size: '1.2 MB' },
    { id: '2', name: 'Cardiology Scan', date: 'Apr 22, 2026', type: 'PDF', size: '4.5 MB' },
    { id: '3', name: 'Allergy Test', date: 'Mar 05, 2026', type: 'PDF', size: '0.8 MB' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
           <Text style={styles.title}>Health Reports</Text>
           <Text style={styles.subtitle}>Track your medical history & analytics</Text>
        </View>

        {/* Analytics Section */}
        <View style={styles.analyticsSection}>
          <Text style={styles.sectionTitle}>Trend Analytics</Text>
          <Card style={styles.chartCard}>
             <View style={styles.chartHeader}>
                <Text style={styles.chartTag}>Systolic BP (mmHg)</Text>
                <View style={styles.indicator} />
             </View>
             <HighFidelityChart />
          </Card>
        </View>

        {/* Action Section */}
        <Button 
          title="Upload New Report" 
          icon={<IconSymbol name="plus.circle.fill" size={20} color={COLORS.surface} />}
          onPress={() => {}}
          style={styles.uploadBtn}
        />

        {/* Reports List */}
        <View style={styles.reportsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Reports</Text>
            <TouchableOpacity><Text style={styles.viewAll}>Filter</Text></TouchableOpacity>
          </View>

          {REPORTS.map((report) => (
            <Card key={report.id} style={styles.reportCard}>
               <View style={styles.reportContent}>
                  <View style={styles.fileIcon}>
                     <IconSymbol name="doc.fill" size={28} color={COLORS.primary} />
                  </View>
                  <View style={styles.reportInfo}>
                     <Text style={styles.reportName}>{report.name}</Text>
                     <Text style={styles.reportMeta}>{report.date} • {report.size}</Text>
                  </View>
                  <View style={styles.actionColumn}>
                    <TouchableOpacity style={styles.iconBtn}>
                       <IconSymbol name="eye.fill" size={18} color={COLORS.textLight} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBtn}>
                       <IconSymbol name="arrow.down.doc.fill" size={18} color={COLORS.textLight} />
                    </TouchableOpacity>
                  </View>
               </View>
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
    backgroundColor: COLORS.background, // MediConnect pure white
  },
  container: {
    padding: SIZES.lg,
    paddingBottom: 40,
  },
  header: {
    marginBottom: SIZES.xl,
    marginTop: SIZES.md,
  },
  title: {
    ...TYPOGRAPHY.h1,
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 4,
  },
  analyticsSection: {
    marginBottom: SIZES.xl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: SIZES.md,
    color: COLORS.text,
  },
  chartCard: {
    padding: SIZES.lg,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.xl,
    ...SHADOWS.md,
  },
  chartHeader: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: 10,
  },
  chartTag: {
     ...TYPOGRAPHY.small,
     color: COLORS.textLight,
     fontWeight: '700',
  },
  indicator: {
     width: 8,
     height: 8,
     borderRadius: 4,
     backgroundColor: COLORS.primary,
  },
  chartContainer: {
     flexDirection: 'row',
     height: 200,
     marginTop: 10,
  },
  yAxis: {
     justifyContent: 'space-between',
     paddingBottom: 30,
     marginRight: 10,
  },
  axisText: {
     fontSize: 10,
     color: COLORS.textLight,
     textAlign: 'right',
  },
  chartMain: {
     flex: 1,
  },
  gridLines: {
     position: 'absolute',
     width: '100%',
     height: 150,
     justifyContent: 'space-between',
  },
  gridLine: {
     height: 1,
     backgroundColor: `${COLORS.border}50`,
  },
  barsContainer: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'flex-end',
     justifyContent: 'space-around',
     paddingBottom: 30,
  },
  barWrapper: {
     alignItems: 'center',
  },
  bar: {
     width: 24,
     borderRadius: 6,
  },
  xLabel: {
     position: 'absolute',
     bottom: -20,
     fontSize: 10,
     color: COLORS.textLight,
     fontWeight: '700',
  },
  uploadBtn: {
    height: 56,
    borderRadius: RADIUS.md,
    marginBottom: SIZES.xl,
    ...SHADOWS.md,
  },
  reportsSection: {
    marginBottom: SIZES.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  viewAll: {
    ...TYPOGRAPHY.caption,
    color: COLORS.primary,
    fontWeight: '900',
  },
  reportCard: {
    marginBottom: SIZES.md,
    padding: SIZES.md,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  reportContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: `${COLORS.primary}10`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  reportInfo: {
    flex: 1,
  },
  reportName: {
    ...TYPOGRAPHY.subtitle,
    fontWeight: '800',
    color: COLORS.text,
  },
  reportMeta: {
    ...TYPOGRAPHY.caption,
    fontSize: 12,
    color: COLORS.textLight,
  },
  actionColumn: {
    flexDirection: 'row',
    gap: SIZES.sm,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
