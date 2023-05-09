import { Text, View } from 'react-native'
import { BtnCalc } from '../components/ButtonCalc'
import { BtnAction, BtnOperation } from '../components/Buttons'
import { styles } from '../theme/appTheme'
import { useCalc } from '../hooks/useCalc'

export const CalculatorScreen = () => {
   const {
      number,
      lastNumber,
      clean,
      buildNumberText,
      btnDelete,
      positiveNegative,
      btnSplit,
      btnMultiply,
      btnAdd,
      btnSubstract,
      calc
   } = useCalc();
   return (
      <View style={styles.calculatorContainer}>
         {
            (lastNumber !== "0") && (
               <Text style={styles.resultSmall}>{lastNumber}</Text>
            )
         }
         <Text style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit
         >
            {number}
         </Text>

         <View style={styles.row}>
            <BtnAction text='C' action={clean} />
            <BtnAction text='+/-' action={positiveNegative} />
            <BtnAction text='del' action={btnDelete} />
            <BtnOperation text='/' action={btnSplit} />
         </View>
         <View style={styles.row}>
            <BtnCalc text='7' action={buildNumberText} />
            <BtnCalc text='8' action={buildNumberText} />
            <BtnCalc text='9' action={buildNumberText} />
            <BtnOperation text='x' action={btnMultiply} />
         </View>

         <View style={styles.row}>
            <BtnCalc text='4' action={buildNumberText} />
            <BtnCalc text='5' action={buildNumberText} />
            <BtnCalc text='6' action={buildNumberText} />
            <BtnOperation text='-' action={btnSubstract} />
         </View>

         <View style={styles.row}>
            <BtnCalc text='1' action={buildNumberText} />
            <BtnCalc text='2' action={buildNumberText} />
            <BtnCalc text='3' action={buildNumberText} />
            <BtnOperation text='+' action={btnAdd} />
         </View>
         <View style={styles.row}>
            <BtnCalc text='0' width action={buildNumberText} />
            <BtnCalc text='.' action={buildNumberText} />
            <BtnOperation text='=' action={calc} />
         </View>

      </View>
   )
}
