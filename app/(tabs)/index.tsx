import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useCallback, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {View, TextField, Text, Button} from 'react-native-ui-lib';

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showPassword, setShowPassword] = React.useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  // Callback to handle sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1); // Open to the 50% snap point (index 1)
  };

  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <View style={styles.container}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.reactLogo}
            />
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome!</ThemedText>
            <HelloWave />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 1: Try it</ThemedText>
            <ThemedText>
              Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
              Press{' '}
              <ThemedText type="defaultSemiBold">
                {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
              </ThemedText>{' '}
              to open developer tools.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
            <ThemedText>
              Tap the Explore tab to learn more about what's included in this starter app.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
            <ThemedText>
              When you're ready, run{' '}
              <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
              <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
              <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
              <ThemedText type="defaultSemiBold">app-example</ThemedText>.
            </ThemedText>
          </ThemedView>
          <Button  onPress={openBottomSheet}>
            <Text>Continue</Text>
          </Button>
        </ParallaxScrollView>

        {/* BottomSheet component */}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={['25%', '50%', '90%']}  // Define snap points
          onChange={handleSheetChanges}
          enablePanDownToClose={true}  // Optional: allows closing by swiping down
        >
          <BottomSheetView >
            <View style={styles.contentContainer}>
              <Text blue50 text20>Welcome</Text>
              <View flex paddingH-25 paddingT-120>
                <TextField text100 placeholder="username" grey10/>
                <TextField text10 placeholder="password" secureTextEntry grey10/>
                <View marginT-100 center>
                  <Button text70 white background-orange30 label="Login"/>
                  <Button link text70 orange30 label="Sign Up" marginT-20/>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  bottomSheetContainer: {
    paddingHorizontal: 35,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
});

