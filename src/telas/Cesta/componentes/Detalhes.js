import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

import logo from '../../../../assets/logo.png';

const Detalhes = () => {
    return <>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imageFazenda} />
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.desc}>Uma cesta com produtos selecionas cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
};

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        color: "#464646",
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imageFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 10
    },
    desc: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,

    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});

export default Detalhes;