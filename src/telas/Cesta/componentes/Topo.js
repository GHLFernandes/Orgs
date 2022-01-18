import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../../componentes/Texto';

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Topo = () => {
    return <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>
        </>
}

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
    }
});

export default Topo;