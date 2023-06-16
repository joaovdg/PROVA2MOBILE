import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titulo:{
        fontSize: '20px',
        color: 'white',
        borderStyle: 'solid',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '25px',
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 5,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg:{
        width: '25%',
        height: '50%',
    },
    logoImg:{
        width: '100%',
        height: '100%',
        borderRadius: 500,
        borderWidth: 3,
        borderColor: 'black',
    },
    inputs: {
        padding: 10,
    },
    labels:{
       
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 3,
    },
    inputNome: {
        height: 30,
        padding: 5,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSobrenome: {
        height: 30,
        padding: 5,
        paddingLeft: 10,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputEmail: {
        height: 30,
        padding: 5,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenha: {
        height: 30,
        padding: 5,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputConfirmarSenha: {
        height: 30,
        padding: 5,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6
    },
    viewConfirmar:{
        padding: 5,
    },
    btnConfirmar:{
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    txtBtnConfirmar:{
        color: 'black',
        fontWeight: 'bold',
    },
    viewLink:{
        flexDirection: 'row',
        padding: 5,
    },
    link:{
        color: 'white',
        padding: 5
    },
})

export default styles;