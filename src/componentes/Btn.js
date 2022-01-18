import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

const Btn = ({ children }) => {

    return <>
        <TouchableOpacity
            style={estilos.btn}
            onPress={()=> {}}
        >
            <Texto style={estilos.txtBtn}>{ children }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    btn: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    txtBtn: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
});

export default Btn;