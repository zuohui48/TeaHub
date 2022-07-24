import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import notificationData from '../data/notificationData';


export default function NotificationsPage ({ navigation }) {
    
    const renderNotificationItem = ({ item }) => {
        return (
            <View style = {styles.notificationsItemWrapper}>
                <Image source = {item.image} style = {styles.notificationsItemImage}/>
                <Text style = {styles.notificationsMessage}>{item.title}</Text>
            </View>
        );
    }
    
    return (
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
            </View>
            <View style = {styles.notificationWrapper}>
                <Text style = {styles.notificationsTitle}> Notifications </Text>
                <View style = {styles.notificationsListWrapper}>
                    <FlatList
                        data={notificationData}
                        renderItem = {renderNotificationItem}
                        keyExtractor = {(item) => item.id}/>
                </View>
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
    notificationsWrapper: {
        marginTop: 20,
    },
    notificationsTitle: {
        paddingHorizontal: 20,
    },
    notificationsListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
        height: 580,
    },
    notificationsItemWrapper: {
        backgroundColor: colors.background,
        marginBottom: 20,
        borderRadius: 20,
    },
    notificationsItemImage: {
        width: 70,
        height: 70,
        marginTop: 20,
    },
    notificationsMessage: {
        textAlign: 'centre',
    },
})