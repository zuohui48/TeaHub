import 'react-native-gesture-handler';
import { Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Settings ({ navigation }) {

    return(
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
            </View>
            <View style = {styles.addFriendWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('Friends')}
                    style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}> Add Friends </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.addFriendWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('Gacha')}
                    style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}> Gacha </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.addFriendWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('NotificationsPage')}
                    style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}> Notifications </Text>
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
    addFriendWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    gachaWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    notificationsWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    buttonStyle: {
        elevation: 8,
        backgroundColor: colors.buttons,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})