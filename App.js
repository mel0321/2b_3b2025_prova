import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// Importe o componente Image da biblioteca que instalamos
import { Image } from 'expo-image';
export default function App() {
// Coloque seu nome aqui
const seuNome = "Melânia Gabrielli Silva Amaral";
return (
<View style={styles.container}>
<Text style={styles.title}>Meu Perfil</Text>
{/* Componente para exibir a imagem */}

<Image
style={styles.image}
source={require('./assets/perfil.jpg')} // Caminho para a sua foto
contentFit="cover" // Garante que a imagem cubra o espaço
transition={1000} // Efeito de transição suave
/>
{/* Caixa de texto com seu nome */}
<TextInput
style={styles.input}
value={seuNome}
editable={false} // Impede que o texto seja editado
/>
<StatusBar style="light" />
</View>
);
}
// Estilos para os componentes
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#2c3e50', // Um fundo escuro
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
title: {
fontSize: 28,
fontWeight: 'bold',
color: '#ecf0f1', // Cor clara para o título
marginBottom: 30,
},
image: {

width: 200,
height: 200,
borderRadius: 100, // Deixa a imagem perfeitamente redonda
marginBottom: 30,
borderWidth: 4,
borderColor: '#3498db', // Borda azul para destacar
},
input: {
width: '100%',
maxWidth: 300,
height: 50,
borderColor: '#3498db',
borderWidth: 1,
borderRadius: 8,
paddingHorizontal: 15,
fontWeight: 'bold', // Deixa o texto em negrito
textAlign: 'center',
backgroundColor: '#ecf0f1',
color: '#2c3e50',
fontSize: 18,
},
});