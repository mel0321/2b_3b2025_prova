import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<View style={styles.caixa}>
<Text style={styles.titulo}>Nome:Melânia</Text>
<Text style={styles.texto}>Serie:2 ano </Text>
<Text style={styles.texto}>Bimestre:2 bimestre</Text>
</View>
<StatusBar style="auto" />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
backgroundColor: '#f5f5f5', 

},
caixa:{
borderWidth:2,
borderColor:'#333',
borderRadius:10,
padding:20,
backgroundColor:'#fff',
},
titulo: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 10,
color:'#333',
},
texto :{
fontSize:18,
marginBottom:5,
color:'#555',
},
});
