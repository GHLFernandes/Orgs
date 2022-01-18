import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import Texto from '../../../componentes/Texto';

const Item = ({ item: { nome, imagem } }) => {
    return <>
        <View style={estilos.item}
            key={nome}>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    </>

};

export default Item;

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }

});