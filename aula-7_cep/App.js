import { Text, View, TextInput, TouchableOpacity, Image } from "react-native"
import { styles } from "./style.js";
import { useState } from "react";

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('')
  const [estado, setEstado] = useState('');

  async function consultarCep() {
    console.log(input);
    if (input.trim() != '') {
      const req = await fetch(`https://viacep.com.br/ws/${input}/json`);
      const retorno = await req.json();
      console.log(retorno);
      setCep(input);
      setRua(retorno.logradouro);
      (retorno.bairro != "") ? setBairro('Bairro: ' + retorno.bairro) : setBairro('');      
      setLocalidade('Cidade: ' + retorno.localidade);
      setEstado('Estado: ' + retorno.estado) ;
      setInput('');
    }
    else {
      setCep('');
      setRua('');
      setBairro('');
      setLocalidade('')
      setEstado('');
    }
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.imagem}
        // source={require()} 
        source={{ uri: 'https://cdn.codemarket.com.br/image/data/felipo/opencart/2/completar-endereco-cep.png' }}
      />

      <Text style={styles.titulo}>Consulta CEP</Text>

      <TextInput
        style={styles.TextInputCep}
        placeholder="Digite o cep..."
        value={input}
        onChangeText={(input) => setInput(input)}
      />

      <TouchableOpacity style={styles.btnConsultar} onPress={consultarCep}>
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>

      <Text style={styles.output}>{cep}</Text>
      <Text style={styles.output}>{rua}</Text>
      <Text style={styles.output}>{bairro}</Text>
      <Text style={styles.output}>{localidade}</Text>
      <Text style={styles.output}>{estado}</Text>

    </View>
  )
}

export default App;
