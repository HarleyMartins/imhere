import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

import React, { useState } from "react";

const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]); // hook que cria/organiza o array de participantes
  const [participantName, setParticipantName] = useState(""); // hook que adiciona participante no array

  // funções sempre serão criadas dentro do escopo do componente, mas fora do return
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existente!", // Título
        "Ops, parece que já existe um participante na lista com esse nome" // Mensagem
      );
    }

    setParticipants((prevState) => [...prevState, participantName]); //prevstate é para manter o array original e adicionar o novo participante
    setParticipantName(""); // depois de fazer tudo, o valor do input ficará vazio
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja mesmo remover o participante ${name} ?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipants(
              (prevState) =>
                prevState.filter((participant) => participant !== name) // vai renderizar o array mas mostrando apenas os nomes que são diferente do que foi passado
            ),
        },

        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          style={styles.input}
          keyboardType={"default"}
          onChangeText={setParticipantName} // quando o usuário digitar o nome do participante, o hook será chamado passando o nome
          value={participantName} // o valor do input ficará vazio depois de adicionar
        />

        {/* ao clicar "onpress" acionará a função de adicionar o participante */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants} // array que o flatlist renderizará
        keyExtractor={(participant) => participant} // key do flatlist (é o próprio nome do participante) normalmente é algum id. Ex: participant.id
        renderItem={(
          { item } // irá renderizar o componente de participante
        ) => (
          <Participant
            key={item} // a key é o próprio participante, porém com o nome diferente "item"
            name={item} // mesma coisa
            onRemove={() => handleParticipantRemove(item)} // função do componente que executa a função declarada, passando o nome do participante
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>Lista vázia</Text> // quando a lista estiver vazia, mostrará esse texto
        )}
      />
    </View>
  );
};

export default Home;
