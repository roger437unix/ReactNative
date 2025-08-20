// Atividade Mobile

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
    else {
      setNomeCor('');
      setNome(747679);
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
        <Text style={styles.title}>Cor em hexadecial</Text>

        <TextInput
          style={styles.txtCor}
          placeholder='Código da cor'
          value={codigoCor}
          onChangeText={(codigoCor) => { setCodigoCor(codigoCor) }}
        />

        <TouchableOpacity style={styles.btnNomeCor} onPress={consultarCor}>
          <Text style={styles.textBtnNomeCor}>Nome da cor</Text>
        </TouchableOpacity>

        <Text style={styles.output}>{nomeCor}</Text>
      </View>

      <View style={{
        backgroundColor: `#${nome}`,
        flex: .4,
        width: '60%',
        height: '100%',
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#072405ff',
        marginBottom: 100
      }}></View>

    </View>
  );
}
