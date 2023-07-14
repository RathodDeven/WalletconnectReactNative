import './expo-crypto-shims'
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import SampleComponent from './SampleComponent';

const providerMetadata = {
  name: 'my app',
  description: 'my app description',
  url: 'https://myapp.com',
  redirect: {
    native: 'myapp://',
    universal: 'myapp.com'
  }
}

export default function App() {
  const {open} = useWalletConnectModal()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => open()}>
        <Text>Open WalletConnect</Text>
      </TouchableOpacity>
      <SampleComponent />
      <WalletConnectModal 
      projectId='34df0979deea0aa63f5369c691426746'
      providerMetadata={providerMetadata}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
