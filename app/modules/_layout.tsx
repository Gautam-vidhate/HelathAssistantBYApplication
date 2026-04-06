import { Stack } from 'expo-router';
import { COLORS } from '@/constants/theme';

export default function ModulesLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.surface,
        },
        headerShadowVisible: false,
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen 
        name="baby-care" 
        options={{ title: 'Baby Care' }} 
      />
      <Stack.Screen 
        name="pregnancy" 
        options={{ title: 'Pregnancy Care' }} 
      />
      <Stack.Screen 
        name="old-age" 
        options={{ title: 'Elder Care' }} 
      />
      <Stack.Screen 
        name="sos" 
        options={{ title: 'Emergency SOS', headerTintColor: COLORS.danger }} 
      />
    </Stack>
  );
}
