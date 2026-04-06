import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '../../constants/theme';
import { IconSymbol, IconSymbolName } from './icon-symbol';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: IconSymbolName;
  isPassword?: boolean;
}

export function Input({ label, error, leftIcon, isPassword, style, secureTextEntry, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isSecure = isPassword ? !showPassword : secureTextEntry;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error ? styles.inputError : null]}>
        {leftIcon && (
          <View style={styles.leftIconContainer}>
            <IconSymbol name={leftIcon} size={20} color={COLORS.textLight} />
          </View>
        )}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={COLORS.textLight}
          secureTextEntry={isSecure}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.rightIconContainer}
          >
            <IconSymbol 
              name={showPassword ? 'eye.fill' : 'eye.slash.fill'} 
              size={20} 
              color={COLORS.textLight} 
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.md,
  },
  label: {
    ...TYPOGRAPHY.small,
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 8,
    fontWeight: '700',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB', // Light grey background as in image
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 56,
  },
  inputError: {
    borderColor: COLORS.danger,
  },
  leftIconContainer: {
    paddingLeft: SIZES.md,
    paddingRight: SIZES.xs,
  },
  rightIconContainer: {
    paddingRight: SIZES.md,
    paddingLeft: SIZES.xs,
  },
  input: {
    flex: 1,
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    height: '100%',
    paddingHorizontal: SIZES.md,
  },
  errorText: {
    ...TYPOGRAPHY.small,
    color: COLORS.danger,
    marginTop: 4,
  },
});
