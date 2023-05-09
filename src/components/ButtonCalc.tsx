import { StyleSheet, Text, View } from 'react-native';
import { colorButtons } from '../theme/appTheme';

interface MyProps {
  text: string;
  color?: string;
}
export const ButtonCalc = ({ text, color = colorButtons.black }: MyProps) => {
  return (
    <View style={{
      ...styles.btn,
      backgroundColor: color
    }}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
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
    fontSize: 30,
    fontWeight: "300",
  }
});



