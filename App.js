import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
export default class App extends React.Component{
 buscar(textoCidade) {
  return fetch('https://api.hgbrasil.com/weather?key=3636ff67&city_name='+ textoCidade)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        carregando: false,
        Cidade: responseJson.results.city_name,
        Temperatura: `${responseJson.results.temp}ºC`,
        Vento: responseJson.results.wind_speedy,
        NascerSol: responseJson.results.sunrise,
        PorSol: responseJson.results.sunset,
        Descricao: responseJson.results.description,
      }, function () {
      });
    })
    .catch((erro) => {
      console.error(erro);
    });
}
constructor(props) {
  super(props);
  this.state = { carregando: true }
  this.state = {
    Cidade: '',
    Temperatura: '',
    Vento: '',
    NascerSol: '',
    PorSol: '',
    Descricao: '',
  };
}
render() {
   return (
    <ScrollView style={styles.scroll}>
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Previsão do Tempo Para:
       </Text>
       <View style={styles.view}>
         <Text style={styles.text1}>
           Informática 514-A
         </Text>
         <View style={styles.viewPesq}>
           <TextInput  style={styles.pesc} placeholder="Informe a Cidade" onSubmitEditing={({nativeEvent}) => this.buscar(nativeEvent.text)}
           onChangeText={(text)=> this.setState({Cidade: text})}>
           </TextInput>
         </View>
         <TouchableOpacity  title="Pesquisar" type="outline"  style={styles.Button} onPress={() => this.buscar(this.state.Cidade)}>
           <Text style={styles.welcome}> Pesquisar</Text>
         </TouchableOpacity>
       </View>
       <View style={styles.view2}>
         <View style={styles.view3}>
           <View style={styles.viewC}>
             <Text>Cidade:{this.state.Cidade}</Text>
           </View>
           <View style={styles.viewT}>
             <Text>Temperatura:{this.state.Temperatura}</Text>
           </View>
         </View>
         <View style={styles.view3}>
           <View style={styles.viewV}>
             <Text>Velocidade do vento:{this.state.Vento}</Text>
           </View>
           <View style={ styles.viewN}>
             <Text>Nascer do Sol:{this.state.NascerSol}</Text>
           </View>
         </View>
         <View style={styles.view3}>
           <View style={styles.viewP}>
             <Text>Por do Sol: {this.state.PorSol}</Text>
           </View>
           <View style={styles.viewD}>
             <Text>Descrição: {this.state.Descricao}</Text>
           </View>
         </View>
       </View>
     </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'white',
  textAlign: 'center',
  margin: 5,
},
welcome: {
  fontSize: 20,
  color: '#2E2E2E',
  margin: 10,
  textAlign: 'center'
},
text1: {
  fontSize: 13,
  color: '#848484',
  textAlign: 'center',
  margin: 5,
},
view2: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: '#FFFFFF',
},
view3: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#FFFFFF',
  margin: 5
},
viewPesq:{
  alignItems: 'center',
  paddingBottom: 15,
},
pesc:{
  borderColor:'red',
  borderWidth: 2,
  fontSize:20,
  textAlign:'center',
  width: 250,
},
 
Button:{
  backgroundColor:'blue',
  paddingBottom:10,
},
 
scroll:{
   maxHeight:400,
  backgroundColor: 'red',
  textAlign: 'center',
   margin:20,
  marginHorizontal:10,
 
},
 
viewC:{
  flex: 1,
  backgroundColor: '#FE9A2E',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
 
viewT:{
  flex: 1,
  backgroundColor: '#FF8000',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
 
 
viewV:{
  flex: 1,
  backgroundColor: '#0080FF',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
 
 
viewN:{
  flex: 1,
  backgroundColor: '#084B8A',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
 
 
viewP:{
  flex: 1,
  backgroundColor: '#4446',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
 
 
viewD:{
  flex: 1,
  backgroundColor: '#4446',
  marginVertical: 10,
  marginHorizontal:1,
  height:50
},
});
 
 

