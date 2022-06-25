import 'react-native-gesture-handler';
import { Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Urbanist_700Bold } from '@expo-google-fonts/dev';

export default Home = () => {
    return (
        <View style = {styles.container}>
            <SafeAreaView>
                <View style = {styles.headerWrapper}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                    <Feather name = "settings" size ={40} color = {colors.blanks} />
                </View>
            </SafeAreaView>
            {/*Titles*/}
            <View style = {styles.titlesWrapper}>
                <Text style = {styles.titlesTitle} >Single Order</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    titlesWrapper: {
        margin: 80,
    },
    titlesTitle: {
        fontFamily: Urbanist_700Bold,
        fontSize: 40,
        color: colors.blackFont,

    },
}) 