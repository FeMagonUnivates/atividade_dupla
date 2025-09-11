import { router, Link } from "expo-router";
import { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {

    const [resultado, setResultado] = useState(0)
    cosnt[num1, setNum1] = useState(0)
    cosnt[num2, setNum2] = useState(0)

    function somar(n1, n2) {
        const n1Convertido = parseFloat(n1);
        const n2Convertido = parseFloat(n2);
        const soma = n1Convertido + n2Convertido;
        return soma;
    }
    function zerar() {
        setNum1(0)
        setNum2(0)
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={estilos.titulo}>Página do Fernando</Text>
                <Text> Tomara que dê certo</Text>
            </View>

            <View style={estilos.doisBotoes}>
                <View style={[estilos.botao, { backgroundColor: '#6795ffff' }]}>
                    <Link href="/index" asChild>
                        <Button title="Voltar para Index" color={'white'}></Button>
                    </Link>
                </View>
                <View style={[estilos.botao, { backgroundColor: '#4f8a61ff' }]}>
                    <Link href="/guilherme">
                        <Button title="Ir para Guilherme" color={'white'}></Button>
                    </Link>
                </View>
            </View>

            <Text style={estilos.textoNum}>Número 1</Text>
            <TextInput
                style={estilos.campo}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={setNum1}
                value={num1}
            />
            <Text style={[estilos.textoNum, { marginTop: 5 }]}>Número 2</Text>
            <TextInput
                style={estilos.campo}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={setNum2}
                value={num2}
            />

            <View style={estilos.margemBotoes}>
                <View style={estilos.botao}>
                    <Button
                        title="+"
                        onPress={() => setResultado(somar(num1, num2))} />
                </View>
            </View>

            <View style={estilos.botaoZerar}>
                <Button
                    title="Zerar campos"
                    onPress={() => setResultado(zerar())} />
            </View>

            <View>
                <Text style={estilos.resultado}>Resultado: {resultado}</Text>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    areaSegura: {
        flex: 1,
        margin: 10
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18
    },
    doisBotoes: {
        marginTop: 20,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    botao: {
        width: 150,
        borderRadius: 4
    },
    campo: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    margemBotoes: {
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10
    },
    botaoZerar: {
        width: 300,
        height: 50,
        backgroundColor: '#e4e4e4ff',
        borderRadius: 5,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 40
    },
    textoNum: {
        fontWeight: 'bold',
        fontSize: 20
    },
    resultado: {
        fontWeight: 'bold',
        fontSize: 30
    }
})