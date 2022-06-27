import 'react-native-gesture-handler';
import { Text, StyleSheet, View, Alert, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer ({ navigation }) {
    
    const handlePress = () => {
        Alert.alert('Set your order time')
    }

    const handleFinish = () => {
        Alert.alert('Order Complete!')
    }

    const [duration, setDuration] = useState('30')
    const [isPlaying, setIsPlaying] = useState(false)
    
    const children = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600)/60)
        const seconds = remainingTime % 60

        return'${hours}:${minutes}:${seconds}'
    }

    return (
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
                <Feather name = "settings" size ={40} color = {colors.blanks} />
            </View>
            <View style = {styles.countdownWrapper}>
                <Text style = {styles.countdownTitle}>Enter order duration</Text>
                <TextInput
                style = {styles.countdownInput}
                placeholder = 'Order duration in MINUTES'
                onChangeText={(val) => setDuration(val)}
                keyboardType = 'numeric'
                maxLength={3}
                />
            </View>
            <View style = {styles.timerWrapper}>
                <CountdownCircleTimer
                    style = {styles.countdownTimer}
                    isPlaying = {isPlaying}
                    duration = {duration * 60}
                    colors = {["#004777", "#F7B801", "#A30000", "#A30000"]}
                    onComplete = {() => ({ shouldRepeat: true, delay: 2})}
                >
                
                    {({ remainingTime, color }) => (
                     <Text style = {{color: colors.black, fontSize: 40}}> 
                        {Math.floor(remainingTime / 3600)}:{Math.floor((remainingTime % 3600)/60)}:{remainingTime % 60}
                     </Text>
                 )}
                </CountdownCircleTimer>
                <Button 
                    color={colors.buttons}
                    title = "Start/Pause" onPress={() => setIsPlaying(prev => !prev)} />
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
        justifyContent:'center'
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    countdownWrapper: {
        paddingTop: 50,
    },
    countdownTitle: {
        fontSize: 30,
        textAlign: 'center'
    },
    countdownInput:{
        borderWidth: 1,
        borderColor: colors.blackFont,
        padding: 8,
        margin: 10,
        width: 200,
        alignSelf: 'center'
    },
    timerWrapper:{
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 90
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        paddingTop: 190,
    }
})