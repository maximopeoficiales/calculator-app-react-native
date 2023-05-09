import { colorButtons } from '../theme/appTheme';
import { ButtonCalc } from './ButtonCalc';

interface MyPropsCalc {
  text: string;
}
export const BtnOperation = ({ text }: MyPropsCalc) => {
  return (
    <ButtonCalc text={text} color={colorButtons.orange} />
  )
}

export const BtnAction = ({ text }: MyPropsCalc) => {
  return (
    <ButtonCalc text={text} color={colorButtons.gray} />
  )
}

