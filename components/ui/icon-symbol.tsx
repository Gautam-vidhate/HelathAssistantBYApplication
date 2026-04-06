// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// Type describing the valid MaterialIcons names to ensure type safety in the mapping
type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

const MAPPING: Record<string, MaterialIconName> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'heart.fill': 'favorite',
  'star.fill': 'star',
  'person.fill': 'person',
  'exclamationmark.triangle.fill': 'warning',
  'message.fill': 'chat',
  'doc.text.fill': 'description',
  'bell.fill': 'notifications',
  'person.crop.circle.fill': 'account-circle',
  'sparkles': 'auto-awesome',
  'checkmark.circle.fill': 'check-circle',
  'cross.case.fill': 'medical-services',
  'globe': 'public',
  'plus.circle.fill': 'add-circle',
  'heart.text.square.fill': 'health-and-safety',
  'doc.fill': 'description',
  'person.fill.badge.plus': 'person-add',
  'plus': 'add',
  'vaccine': 'vaccines',
  'bottle': 'child-care',
  'sleep': 'bedtime',
  'chart': 'trending-up',
  'medical': 'medical-services',
  'info': 'info',
  'apple': 'phone-iphone' as any, // Cast specific brand icon to any as it varies by Icon Set
  'exercise': 'fitness-center',
  'calendar': 'event',
  'ambulance': 'local-hospital',
  'police': 'local-police',
  'fire': 'local-fire-department',
  'phone': 'contact-phone',
  'mic': 'mic',
  'eye.fill': 'visibility',
  'eye.slash.fill': 'visibility-off',
  'arrow.down.doc.fill': 'file-download',
  'envelope.fill': 'email',
  'lock.fill': 'lock',
  'handshake.fill': 'handshake',
  'search': 'search',
  'tune': 'tune',
  'pulse': 'insights',
  'blood': 'opacity',
  'glucose': 'assessment',
};

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
