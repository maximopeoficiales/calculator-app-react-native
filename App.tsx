import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';


const App = () => {

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        animated={true}
        backgroundColor={"black"}
        barStyle={"dark-content"}
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;
