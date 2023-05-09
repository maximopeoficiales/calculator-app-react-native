import { useRef, useState } from "react";

enum Operators {
  add, substract, multiply, split
}

export const useCalc = () => {
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
  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.split:
        let result = num2 / num1;
        // validacion de divicion entre 0 y si es infinity
        result = (num2 == 0) ? 0 : result
        result = (result == Infinity) ? 0 : result;
        setNumber(`${result.toFixed(2)}`);
        break;
    }
    setLastNumber('0');
  }
  return {
    number,
    lastNumber,
    lastOperation,
    clean,
    buildNumberText,
    btnDelete,
    positiveNegative,
    btnSplit,
    btnMultiply,
    btnAdd,
    btnSubstract,
    calc
  }
}