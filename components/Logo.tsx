import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';
import { COLORS } from '../constants/theme';

export function Logo({ size = 80 }: { size?: number }) {
  const iconSize = size * 0.5;
  const crossWidth = size * 0.3;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Handshake/Heart iconography inside a medical cross feel */}
      <View style={[styles.crossVertical, { width: crossWidth, backgroundColor: COLORS.danger, borderRadius: 4 }]} />
      <View style={[styles.crossHorizontal, { height: crossWidth, backgroundColor: COLORS.primary, borderRadius: 4 }]} />
      
      {/* Handshake Overlay */}
      <View style={styles.iconOverlay}>
         <IconSymbol name="handshake.fill" size={iconSize} color={COLORS.surface} />
      </View>
    </View>
  );
}

export function BrandName({ size = 24 }: { size?: number }) {
  return (
    <View style={styles.brandContainer}>
      <Text style={[styles.brandText, { fontSize: size }]}>
        <Text style={{ color: COLORS.primary }}>Medi </Text>
        <Text style={{ color: COLORS.danger }}>Connect</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  crossVertical: {
    position: 'absolute',
    height: '100%',
    opacity: 0.9,
  },
  crossHorizontal: {
    position: 'absolute',
    width: '100%',
    opacity: 0.9,
  },
  iconOverlay: {
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  brandContainer: {
    marginTop: 12,
  },
  brandText: {
    fontWeight: '900',
    letterSpacing: -0.5,
  },
});
