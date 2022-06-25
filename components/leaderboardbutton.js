import React from "react"
import {Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

function LeaderboardButton() {
     const navigation = useNavigation();
     return (
             <Button onPress = {() => navigation.navigate('Leaderboard')} title = "Leaderboard" />
     );
}
export default LeaderboardButton;