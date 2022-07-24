import 'react-native-gesture-handler';
import { Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function OrderType ({ navigation }) {

    return (
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
                    <Feather name = "settings" size ={40} color = {colors.blanks} />
                </TouchableOpacity>
            </View>
        <View style = {styles.orderTypeWrapper}>
            <Text style = {styles.orderTypeTitle}> Select Order Type </Text>
            <View style = {styles.orderTypeButtonsWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('Timer')}
                style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}> Single Order </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.orderTypeButtonsWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('GroupOrder')}
                    style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}> Group Order </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style = {styles.bottomWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                <FontAwesome5 name = "user-friends" size = {40} color = {colors.blanks} />
            </TouchableOpacity>
            <AntDesign name = "pluscircleo" size = {40} color = {colors.buttons} />
            <TouchableOpacity onPress = {() => navigation.navigate('Statistics')}>
                <MaterialIcons name = "leaderboard" size = {40} color = {colors.blanks} />
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    orderTypeWrapper: {
        marginTop: 20,
    },
    orderTypeTitle: {
        paddingHorizontal: 20,
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 150
    },
    orderTypeButtonsWrapper: {
        paddingVertical: 20,
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
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 280,
    }
})