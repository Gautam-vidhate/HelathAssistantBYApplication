import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS } from '@/constants/theme';
import { Button } from '@/components/ui/Button';

export default function SetupScreen() {
  const router = useRouter();
  
  const [selectedFocus, setSelectedFocus] = React.useState<string[]>([]);

  const toggleFocus = (focus: string) => {
    if (selectedFocus.includes(focus)) {
      setSelectedFocus(selectedFocus.filter(f => f !== focus));
    } else {
      setSelectedFocus([...selectedFocus, focus]);
    }
  };

  const handleFinish = () => {
    // Save preferences and navigate to main app
    router.replace('/(tabs)' as any);
  };

  const FOCUS_AREAS = [
    'General Health', 'Pregnancy Care', 'Baby Care', 'Elderly Care', 'Fitness & Diet', 'Chronic Illness'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Personalize Your Experience</Text>
          <Text style={styles.subtitle}>Select the areas you're most interested in so we can tailor our insights.</Text>
        </View>

        <View style={styles.grid}>
          {FOCUS_AREAS.map((focus) => {
            const isSelected = selectedFocus.includes(focus);
            return (
              <TouchableOpacity
                key={focus}
                style={[styles.pill, isSelected && styles.pillSelected]}
                onPress={() => toggleFocus(focus)}
              >
                <Text style={[styles.pillText, isSelected && styles.pillTextSelected]}>
                  {focus}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Button 
          title="Complete Setup" 
          onPress={handleFinish} 
          style={styles.doneBtn}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  container: {
    padding: SIZES.xl,
    flexGrow: 1,
  },
  header: {
    marginTop: SIZES.lg,
    marginBottom: SIZES.xxl,
  },
  title: {
    ...TYPOGRAPHY.h2,
    marginBottom: 8,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SIZES.md,
    marginBottom: SIZES.xxl,
  },
  pill: {
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.lg,
    borderRadius: RADIUS.round,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  pillSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  pillText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
  },
  pillTextSelected: {
    color: COLORS.surface,
    fontWeight: '600',
  },
  doneBtn: {
    marginTop: 'auto',
  },
});
