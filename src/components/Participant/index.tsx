import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  // Aqui, declaramos o tipos das props
  name: string;
  onRemove: () => void; // função que não retornará nada
};

const Participant = ({ name, onRemove }: Props) => {
  // passamos as props e dizemos que o tipo delas é "Props" que criamos
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participant;
