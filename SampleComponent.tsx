import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

const SampleComponent = () => {
  const {open} = useWalletConnectModal()

  return (
    <View>
    <TouchableOpacity onPress={() => open()}>
        <Text>Open WalletConnect</Text>
    </TouchableOpacity>
    </View>
  )
}

export default SampleComponent