import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Urbanist_700Bold } from '@expo-google-fonts/dev';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { FlatList } from 'react-native-gesture-handler';

export default Statistics = () => {
    return (
        <View>
            <View style = {StyleSheet.headerWrapper}>
                <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                <Feather name = "settings" size ={40} color = {colors.blanks} />
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
        paddingTop: 30,
    }
})