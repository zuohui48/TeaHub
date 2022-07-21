import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import { FlatList } from 'react-native-gesture-handler';
import friendsData from '../data/friendsData';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Friends ({ navigation }) {

    const renderFriendsItem = ({ item }) => {
        return (
            <View style = {styles.friendsItemWrapper}>
                <Image source = {item.image} style = {styles.friendsItemImage}/>
                <Text style = {styles.friendsItemUsername}>{item.username}</Text>
                <Text style = {styles.friendsItemPoints}>{item.points}</Text>
            </View>
        );
    }

    return (
        <View>
        <View style = {styles.headerWrapper}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
            </TouchableOpacity>
            <Feather name = "settings" size ={40} color = {colors.blanks} />
        </View>
        <View style = {styles.statisticsWrapper}>
            <Text style = {styles.statisticsTitle}> Statistics </Text>
            <View style = {styles.statisticsListWrapper}>
                <FlatList
                    data={friendsData}
                    renderItem = {renderFriendsItem}
                    keyExtractor = {(item) => item.id}/>
            </View>
        </View>
        <View style = {styles.bottomWrapper}>
            <TouchableOpacity onPress = {() => navigation.navigate('Leaderboard')}>
                <FontAwesome5 name = "user-friends" size = {40} color = {colors.blanks} />
            </TouchableOpacity>
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
        marginTop: 20,
    },
    statisticsTitle: {
        paddingHorizontal: 20,
    },
    statisticsListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
        height: 580,
    },
    friendsItemWrapper: {
        backgroundColor: colors.background,
        marginBottom: 20,
        borderRadius: 20,
    },
    friendsItemImage: {
        width: 70,
        height: 70,
        marginTop: 20,
    },
    friendsItemUsername: {
        textAlign: 'center',
    },
    friendsItemPoints: {
        textAlign: 'right'
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 25,
    }
})