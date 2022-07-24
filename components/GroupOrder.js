import 'react-native-gesture-handler';
import { Image, Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GroupOrder ({ navigation }) {
    return (
        <View>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
            </View>
            <View style = {styles.addFriendWrapper}>
                <Text style = {styles.addFriendTitle}>Enter Username for Group Order</Text>
                <TextInput
                    style = {styles.addFriendField}
                    placeholder = 'Username'
                />
            </View>
            <View>
                <TouchableOpacity style = {styles.addFriendButton}>
                    <Text style = {styles.addFriendButtonText}> Add to Group Order Session </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.bottomButtonWrapper}>
                <TouchableOpacity onPress = {()=> navigation.navigate('Timer')}
                style = {styles.addFriendButton}>
                    <Text style = {styles.addFriendButtonText}> Start Group Order </Text>
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
        padding: 20,
    },
    addFriendTitle: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 130,
        paddingTop: 50
    },
    addFriendField: {
        borderWidth: 1,
        borderColor: colors.blackFont,
        padding: 8,
        margin: 10,
        width: 250,
        alignSelf: 'center',
    },
    addFriendButton: {
        elevation: 8,
        backgroundColor: colors.buttons,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        
    },
    addFriendButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    bottomButtonWrapper: {
        paddingTop: 20,
    }
})