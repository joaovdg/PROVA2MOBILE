import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";


export default function ForgotPassword(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://img.freepik.com/fotos-gratis/um-close-up-de-um-capacete-com-a-palavra-assassino-nele_1340-38759.jpg?w=740&t=st=1686883915~exp=1686884515~hmac=50b2b2d6e929c0b9ed884813ca3a5d659c8ae076e7fdcc5c076c2349fb4c6181'}}
                />
            </View>
            <View style={styles.inputs}>
            <label style={styles.labels}>
            Email
            </label>
                <TextInput style={styles.inputEmail} placeholder='joao@uvv.com.br'/>
                <label style={styles.labels}>
                Nova Senha
            </label>
            <TextInput
            style={styles.inputSenha}
            placeholder="bananinha123"
            secureTextEntry={true}
          />
                
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "Login"}}>Confirmar</Link>
            </View>
        </SafeAreaView>
    )
}