import { colorButtons } from '../theme/appTheme';
import { BtnCalc } from './ButtonCalc';

interface MyPropsCalc {
  text: string;
  action: (numberText: string) => void;
}
export const BtnOperation = ({ text, action }: MyPropsCalc) => {
  return (
    <BtnCalc text={text} color={colorButtons.orange} action={action} />
  )
}

export const BtnAction = ({ text, action }: MyPropsCalc) => {
  return (
    <BtnCalc text={text} color={colorButtons.gray} action={action} />
  )
}

