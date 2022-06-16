import 'react-native-gestuer-handler';
import { Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';


Feather.loadFont();

export default Home = () => {
    return (
        <View style = {styles.container}>
            <SafeAreaView>
                <View style = {styles.headerWrapper}>
                    <Ionicons name = "arrow-back" size = {24} color = {colors.blanks} />
                    <Feather name = "settings" size ={24} color = {colors.blanks} />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
}) 