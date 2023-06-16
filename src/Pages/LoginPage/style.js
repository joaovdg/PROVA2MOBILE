import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labels:{
       
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 3,
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
    },
    viewConfirmar:{
        padding: 5,
    },
    btnConfirmar:{
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 4,
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