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
import statisticsData from '../data/statisticsdata';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Statistics ({ navigation }) {
    
    const renderStatisticsItem = ({ item }) => {
        return (
            <View style = {styles.statisticsItemWrapper}>
                <Image source = {item.image} style = {styles.statisticsItemImage}/>
                <Text style = {styles.statisticsItemOrderType}>{item.ordertype}</Text>
                <Text style = {styles.statisticsItemDuration}>{item.duration}</Text>
                <Text style = {styles.statisticsItemDate}>{item.date}</Text>
            </View>
        );
    }
    
    return (
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.navigate('Timer')}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
                <Feather name = "settings" size ={40} color = {colors.blanks} />
            </View>
            <View style = {styles.statisticsWrapper}>
                <Text style = {styles.statisticsTitle}> Statistics </Text>
                <View style = {styles.statisticsListWrapper}>
                    <FlatList
                        data={statisticsData}
                        renderItem = {renderStatisticsItem}
                        keyExtractor = {(item) => item.id}/>
                </View>
            </View>
            <View style = {styles.bottomWrapper}>
                <FontAwesome5 name = "user-friends" size = {40} color = {colors.blanks} />
                <TouchableOpacity onPress = {() => navigation.navigate('Timer')}>
                    <AntDesign name = "pluscircleo" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
                <MaterialIcons name = "leaderboard" size = {40} color = {colors.buttons} />
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
    statisticsWrapper: {
        marginTop: 50,
    },
    statisticsTitle: {
        paddingHorizontal: 20,
    },
    statisticsListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    statisticsItemWrapper: {
        backgroundColor: colors.background,
        marginBottom: 20,
        borderRadius: 20,
    },
    statisticsItemImage: {
        width: 80,
        height: 80,
        marginTop: 20,
    },
    statisticsItemOrderType: {
        textAlign: 'left',
    },
    statisticsItemDuration: {
        textAlign: 'center'
    },
    statisticsItemDate: {
        textAlign: 'right'
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        paddingTop: 30,
    }
})