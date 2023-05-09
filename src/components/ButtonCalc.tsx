import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colorButtons } from '../theme/appTheme';

interface MyProps {
  text: string;
  color?: string;
  width?: boolean;
  action: (numberText: string) => void;
}
export const BtnCalc = ({ text, color = colorButtons.black, action, width = false }: MyProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action(text);
      }}
      style={{
        ...styles.btn,
        backgroundColor: color,
        width: (width) ? 180 : 80
      }}>
      <Text style={{
        ...styles.btnText,
        color: color === colorButtons.gray ? "black" : "white"
      }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: ""
  },
  btnText: {
    textAlign: "center",
    color: "white",
    padding: 10,
    fontSize: 35,
    fontWeight: "300",
  }
});



