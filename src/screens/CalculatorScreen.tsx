import { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BtnCalc } from '../components/ButtonCalc'
import { BtnAction, BtnOperation } from '../components/Buttons'
import { styles } from '../theme/appTheme'


enum Operators {
   add, substract, multiply, split
}
export const CalculatorScreen = () => {
   const [number, setNumber] = useState<string>("0");
   const [lastNumber, setLastNumber] = useState<string>("0");

   const lastOperation = useRef<Operators>();

   const clean = () => {
      setNumber("0")
      setLastNumber("0");
   };

   const buildNumberText = async (lastNumberText: string) => {
      // No aceptar doble punto
      if (number.includes('.') && lastNumberText === '.') return;
      if (number.startsWith('0') || number.startsWith('-0')) {
         // Punto decimal
         if (lastNumberText === '.') {
            setNumber(number + lastNumberText);
            // Evaluar si es otro cero, y hay un punto
         } else if (lastNumberText === '0' && number.includes('.')) {
            setNumber(number + lastNumberText);

            // Evaluar si es diferente de cero y no tiene un punto
         } else if (lastNumberText !== '0' && !number.includes('.')) {
            setNumber(lastNumberText);

            // Evitar 0000.0
         } else if (lastNumberText === '0' && !number.includes('.')) {
            setNumber(number);
         } else {
            setNumber(number + lastNumberText);
         }

      } else {
         setNumber(number + lastNumberText);
      }
   }
   const changeNumToPrevious = () => {
      // si tiene un . al final
      if (number.endsWith('.')) {
         // quita el caracter del final
         setLastNumber(number.slice(0, -1));
      } else {
         setLastNumber(number);
      }
      setNumber('0');
   }

   const btnDelete = () => {
      let negative = "";
      let numberTmp = number;
      if (number.includes('-')) {
         negative = "-";
         numberTmp = number.substr(1);
      }
      if (numberTmp.length > 1) {
         setNumber(negative + numberTmp.slice(0, -1));
      } else {
         clean()
      }
   }
   const positiveNegative = () => {
      if (number.includes("-")) {
         setNumber(number.replace("-", ""))
      } else {
         setNumber(`-${number}`)
      }
   }

   const btnSplit = () => {
      changeNumToPrevious()
      lastOperation.current = Operators.split;
   }

   const btnMultiply = () => {
      changeNumToPrevious()
      lastOperation.current = Operators.multiply;
   }
   const btnAdd = () => {
      changeNumToPrevious()
      lastOperation.current = Operators.add;
   }

   const btnSubstract = () => {
      changeNumToPrevious()
      lastOperation.current = Operators.substract;
   }

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
            <BtnOperation text='=' action={buildNumberText} />
         </View>

      </View>
   )
}
