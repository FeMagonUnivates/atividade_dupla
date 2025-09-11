import { router, Link } from "expo-router";
import { View, Text, Button, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Efeito() {
    const [showEffect, setShowEffect] = useState(false);
    const [isInverted, setIsInverted] = useState(false);

    function handleEffect() {
        setShowEffect(true);
        setTimeout(() => setShowEffect(false), 1000);
    }

    function handleInvertColors() {
        setIsInverted((prev) => !prev);
    }

    const backgroundColor = isInverted ? 'black' : 'white';
    const textColor = isInverted ? 'white' : 'black';

    return (
        <SafeAreaView style={[styles.areasegura, { backgroundColor: backgroundColor }]}>
            <View>
                <Text style={{ color: textColor }}>Meu Trabalho</Text>
                <Button title="Efeito" onPress={handleEffect} />
                {showEffect && <Text style={{ color: 'blue', fontSize: 50 }}>Pimba!</Text>}
                <Button title="Inverter cores" onPress={handleInvertColors} />
                <Button title="Alert" onPress={() => ToastAndroid.show('Alerta de Batata!', ToastAndroid.SHORT)} />
                <Button title="Voltar" onPress={() => router.back()} />
                <Button title="Ir para Home" onPress={() => router.push('/')} />
            </View>
        </SafeAreaView>
    );
}


const styles = {
    areasegura: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
};
