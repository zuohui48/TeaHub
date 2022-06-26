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
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import leaderboardData from '../data/leaderboarddata';
import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";



export default Leaderboard = () => {
    const user = supabase.auth.user();
    const [results, setResults] = useState([]);
    async function getResult() {
        const user = supabase.auth.user();
        const { data, error, status } = await supabase
        .from("points")
        .select(`username, pts`)
        .eq("user_id", user.id)
        .order('pts', {ascending: true});
      
        const newData = Array.from(data);
        setResults(newData);
    }
    useEffect(() => {
    getResult();
    }, []);

    const renderCategoryItem = ({ item }) => {
        return (
            <View style = {styles.leaderboardItemWrapper}>
                <Image source = {item.image} style = {styles.leaderboardItemImage}/>
                <Text style = {styles.leaderboardItemTitle}>{item.title}</Text>
                <Text style = {styles.leaderboardItemPoints}>{item.points}</Text>
            </View>
        );
    }
    return (
        <View>
            <View style = {styles.headerWrapper}>
                <Ionicons name = "arrow-back" size = {40} color = {colors.blanks} />
                <Feather name = "settings" size ={40} color = {colors.blanks} />
            </View>
            <View style = {styles.leaderboardWrapper}>
                <Text style = {styles.leaderboardTitle}>Leaderboard</Text>
                <View style = {styles.leaderboardListWrapper} >
                    <FlatList 
                    data = {results}
                    renderItem = {renderCategoryItem}
                    keyExtractor = {(item) => item.id}
                    />
                </View>
            </View>
            <View style = {styles.bottomWrapper}>
                <FontAwesome5 name = "user-friends" size = {40} color = {colors.buttons} />
                <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
                    <AntDesign name = "pluscircleo" size = {40} color = {colors.blanks} />
                </TouchableOpacity>
                <MaterialIcons name = "leaderboard" size = {40} color = {colors.blanks} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    leaderboardWrapper: {
        marginTop: 80,
    },
    leaderboardTitle: {
        paddingHorizontal: 20,
    },
    leaderboardListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    leaderboardItemWrapper: {
        backgroundColor: colors.background,
        marginBottom: 20,
        borderRadius:20
    },
    leaderboardItemImage: {
        width: 80,
        height: 80,
        marginTop: 20,
    },
    leaderboardItemTitle: {
        textAlign: 'center',
    },
    leaderboardItemPoints: {
        textAlign: 'right',
        marginRight: 20,
    },

    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        paddingTop: 60,
    }
}
)