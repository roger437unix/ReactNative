import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {

  const [corDeFundo, setCorDeFundo] = useState('');  

  async function consultarCor(cor) {
    if (cor.trim() != '') {
      const req = await fetch(`https://www.thecolorapi.com/id?hex=${cor}`);
      const ret = await req.json();
      const nomeCor = `Cor: ${ret.name.value}`;
      console.log(nomeCor);
      setCorDeFundo(nomeCor);
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

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={() => { propriedades(styles.btn1) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={() => { propriedades(styles.btn2) }} >
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={() => { propriedades(styles.btn3) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={() => { propriedades(styles.btn4) }} >
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn5} onPress={() => { propriedades(styles.btn5) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn6} onPress={() => { propriedades(styles.btn6) }} >
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn7} onPress={() => { propriedades(styles.btn7) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn8} onPress={() => { propriedades(styles.btn8) }} >
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn9} onPress={() => { propriedades(styles.btn9) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn10} onPress={() => { propriedades(styles.btn10) }} >
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn11} onPress={() => { propriedades(styles.btn11) }} >
          </TouchableOpacity>
        </View>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn12} onPress={() => { propriedades(styles.btn12) }} >
          </TouchableOpacity>
        </View>
      </View>

      

      <View style={styles.output}>
        <Text style={styles.texto}>{corDeFundo}</Text>

        <TouchableOpacity style={styles.btnClear} onPress={limpar}>
          <Text style={styles.textBtnClear}>Limpar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
