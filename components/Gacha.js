import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Gacha ({ navigation }) {
    function rand () {
        let x = Math.floor((Math.random() * 8) + 1);
        if (x == 1) {
            return "Milk tea with pearls"
        }
        else if(x == 2){
            return "Green milk tea"
        }
        else if(x == 3) {
            return "Taro milk tea"
        }
        else if(x == 4) {
            return "Caramel milk tea"
        }
        else if(x == 5) {
            return "Chocolate milk tea"
        }
        else if(x == 6) {
            return "Brown sugar milk tea"
        }
        else if(x == 7) {
            return "Matcha milk tea"
        }
        else {
            return "Cheese milk tea"
        }
    }
    return(
        <View styles = {styles.containerr}>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
            </View>
            <View> 
                <Text style = {styles.buttonText}> Gacha </Text>
            </View>
            <View style = {styles.container}>
            <Image
                style = {styles.logo} 
                source = {require("../images/gacha.png")}/>
            </View>
            <View>
            <TouchableOpacity onPress={() => Alert.alert("Congratualations! You got " + rand + " !")}
            style = {styles.buttonStyle}>
                <Text style = {styles.buttonText}>Draw</Text>
            </TouchableOpacity>
            <View>
                <Text style = {styles.buttonText}>Cost: 200</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerr: {
        backgroundColor: "#fdbac4",
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    container: {
        justifyContent: "center",
        alignItems:"center",

    },
    buttonText: {
        fontSize: 35,
        color: "#fdbac4",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonStyle: {
        elevation: 8,
        backgroundColor: colors.buttons,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})