import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import Texto from '../../componentes/Texto'

import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imageFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.desc}>Uma cesta com produtos selecionas cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
};

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,   //altura da imagem dividido pela largura multiplacado pela largura da tela do dispositivo.  
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        padding: 16,
        fontWeight: "bold",
        color: "white"
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
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