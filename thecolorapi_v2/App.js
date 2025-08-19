import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {

  const [codigoCor, setCodigoCor] = useState('');
  const [nomeCor, setNomeCor] = useState('');
  const [nome, setNome] = useState('');

  async function consultarCor() {
    if (codigoCor.trim() != '') {
      const req = await fetch(`https://www.thecolorapi.com/id?hex=${codigoCor}`);
      const ret = await req.json();
      const nomeCor = `Cor: ${ret.name.value}`;
      console.log(nomeCor);
      setNomeCor(nomeCor);
      setNome(codigoCor);
    }
  }

  const propriedades = (dados) => {
    const codCor = dados.backgroundColor.slice(1, 7, 8);
    consultarCor(codCor);
  }

  const limpar = () => {
    setCorDeFundo('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.areaSuperior}>
        <Text style={styles.texto}>Cor em hexadecial</Text>

        <TextInput
          style={styles.txtCor}
          placeholder='Código da cor'
          value={codigoCor}
          onChangeText={(codigoCor) => { setCodigoCor(codigoCor) }}
        />

        <TouchableOpacity style={styles.btnNomeCor} onPress={consultarCor}>
          <Text style={styles.textBtnNomeCor}>Nome da cor</Text>
        </TouchableOpacity>

        <Text style={styles.texto}>{nomeCor}</Text>
      </View>

      <View style={{backgroundColor: `#${nome}`, flex: 1, width: '60%', height: '60%', marginBottom: 40}}></View>

    </View>
  );
}
