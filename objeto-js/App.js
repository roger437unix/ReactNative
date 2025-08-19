// Atividade para turma do terceiro semestre

import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style';


export default function App() {

  const [corDeFundo, setCorDeFundo] = useState('');
  const [largura, setLargura] = useState();
  const [altura, setAltura] = useState();
  const [borda, setBorda] = useState();

  const dados = (propriedades) => {
    for (let i in propriedades) {
      switch (i) {
        case 'backgroundColor':
          setCorDeFundo(`${i} : ${propriedades[i].slice(1, 7, 8)}`);
          break;
        case 'width':
          setLargura(`${i} : ${propriedades[i]}`);
          break;
        case 'height':
          setAltura(`${i} : ${propriedades[i]}`);
          break;
        case 'borderRadius':
          setBorda(`${i} : ${propriedades[i]}`);
      }
    }
  }

  const clear = () => {
    setCorDeFundo('');
    setLargura('');
    setAltura('');
    setBorda('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={() => { dados(styles.btn1) }}>
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={() => { dados(styles.btn2) }}>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={() => { dados(styles.btn3) }}>
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={() => { dados(styles.btn4) }}>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.output}>
        <Text style={styles.texto}>{corDeFundo}</Text>
        <Text style={styles.texto}>{largura}</Text>
        <Text style={styles.texto}>{altura}</Text>
        <Text style={styles.texto}>{borda}</Text>
        
        <TouchableOpacity style={styles.btnClear} onPress={clear}>
          <Text style={styles.textBtnClear}>Limpar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
