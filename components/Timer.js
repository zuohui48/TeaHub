import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Timer ({ navigation }) {
    
    const handlePress = () => {
        Alert.alert('Set your order time')
    }

    const handleFinish = () => {
        Alert.alert('Order Complete!')
    }

    return (
        <View>
            <View style = {styles.headerWrapper}>
                <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                <Feather name = "settings" size ={40} color = {colors.blanks} />
            </View>
            <View style = {styles.countdownWrapper}>
                <CountDown
                size = {35}
                until = {30}
                onPress = {()=>{handlePress()}}
                onFinish = {()=>{handleFinish()}}
                timeToShow = {['H', 'M', 'S']}
                />
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
    countdownWrapper: {
        paddingTop: 250,
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        paddingTop: 280,
    }
})