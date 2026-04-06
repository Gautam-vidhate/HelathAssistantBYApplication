import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, TYPOGRAPHY, SIZES, RADIUS, SHADOWS } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  time: string;
}

export default function ChatScreen() {
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! I am your AI Health Assistant. How can I help you today?', isUser: false, time: '10:00 AM' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = { id: Date.now().toString(), text: inputText, isUser: true, time: currentTime };
    const newMsgs = [...messages, newMsg];
    
    setMessages(newMsgs);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        text: 'I am analyzing your query. Please remember this is for informational purposes. For emergencies, please use the SOS feature.', 
        isUser: false,
        time: aiTime
      }]);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Premium Header */}
        <View style={styles.header}>
            <View style={styles.headerLeft}>
               <View style={styles.botAvatar}>
                  <IconSymbol name="sparkles" size={20} color={COLORS.surface} />
               </View>
               <View>
                  <Text style={styles.title}>AI Health Assistant</Text>
                  <Text style={styles.onlineStatus}>Online • Ready to help</Text>
               </View>
            </View>
            <TouchableOpacity style={styles.infoBtn}>
               <IconSymbol name="info" size={22} color={COLORS.textLight} />
            </TouchableOpacity>
        </View>

        {/* Chat Area */}
        <ScrollView 
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          style={styles.chatArea} 
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View 
              key={msg.id} 
              style={[
                styles.messageRow, 
                msg.isUser ? styles.userRow : styles.aiRow
              ]}
            >
              <View 
                style={[
                  styles.messageBubble, 
                  msg.isUser ? styles.userBubble : styles.aiBubble
                ]}
              >
                <Text style={[styles.messageText, msg.isUser ? styles.userText : styles.aiText]}>
                  {msg.text}
                </Text>
                <Text style={[styles.timeText, msg.isUser ? styles.userTime : styles.aiTime]}>
                   {msg.time}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Area (WhatsApp Style) */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachBtn}>
             <IconSymbol name="plus" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type your health query..."
              placeholderTextColor={COLORS.textLight}
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            {inputText.length === 0 && (
               <TouchableOpacity style={styles.micBtn}>
                  <IconSymbol name="mic" size={22} color={COLORS.textLight} />
               </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity 
            style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]} 
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <IconSymbol name="paperplane.fill" size={20} color={COLORS.surface} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB', // Light professional background
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.lg,
    backgroundColor: COLORS.surface,
    ...SHADOWS.sm,
    zIndex: 10,
  },
  headerLeft: {
     flexDirection: 'row',
     alignItems: 'center',
  },
  botAvatar: {
     width: 40,
     height: 40,
     borderRadius: 20,
     backgroundColor: COLORS.primary,
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: SIZES.md,
  },
  title: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
  onlineStatus: {
     ...TYPOGRAPHY.small,
     color: COLORS.success,
  },
  infoBtn: {
     padding: SIZES.sm,
  },
  chatArea: {
    flex: 1,
  },
  chatContent: {
    padding: SIZES.md,
    paddingBottom: SIZES.xl,
  },
  messageRow: {
     width: '100%',
     marginBottom: SIZES.md,
  },
  userRow: {
     alignItems: 'flex-end',
  },
  aiRow: {
     alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '85%',
    paddingHorizontal: SIZES.lg,
    paddingVertical: SIZES.md,
    borderRadius: RADIUS.lg,
    ...SHADOWS.sm,
  },
  userBubble: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: COLORS.surface,
    borderBottomLeftRadius: 4,
  },
  messageText: {
    ...TYPOGRAPHY.body,
    fontSize: 15,
    lineHeight: 22,
  },
  userText: {
    color: COLORS.surface,
  },
  aiText: {
    color: COLORS.text,
  },
  timeText: {
     fontSize: 10,
     marginTop: 4,
     alignSelf: 'flex-end',
  },
  userTime: {
     color: 'rgba(255, 255, 255, 0.7)',
  },
  aiTime: {
     color: COLORS.textLight,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: SIZES.md,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 40 : SIZES.md, // Corrected padding for tabs
  },
  attachBtn: {
     marginRight: SIZES.sm,
  },
  inputWrapper: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: COLORS.surface,
     borderRadius: 25,
     paddingHorizontal: SIZES.md,
     marginRight: SIZES.sm,
     ...SHADOWS.sm,
     minHeight: 44,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    ...TYPOGRAPHY.body,
    fontSize: 15,
    maxHeight: 100,
  },
  micBtn: {
     padding: 4,
  },
  sendBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.md,
  },
  sendBtnDisabled: {
     backgroundColor: COLORS.textLight,
     opacity: 0.5,
  }
});
