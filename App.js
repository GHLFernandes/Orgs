import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta.js';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fonteCarregada){
    return <AppLoading />
  }
//...mock remove a camada externa do objeto (topo={mock.topo} detalhes={mock.detalhes})
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />    
    </SafeAreaView>
  );
}
