import { Text, View } from 'react-native'
import { BtnAction, BtnOperation } from '../components/Buttons'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
   return (
      <View style={styles.calculatorContainer}>
         <Text style={styles.resultSmall}>1,500.00</Text>
         <Text style={styles.result}>1,500.00</Text>

         <View style={styles.row}>
            {/* Button */}
            <BtnAction text='C' />
            <BtnAction text='+/-' />
            <BtnAction text='%' />
            <BtnOperation text='/' />

         </View>

      </View>
   )
}
