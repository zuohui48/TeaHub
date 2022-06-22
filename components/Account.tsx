import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { ApiError, Session } from "@supabase/supabase-js";
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import { Svg, Path } from "react-native-svg";
import { Button, Input } from "react-native-elements"
import {
useFonts,
} from "@expo-google-fonts/dev";
import getPoints from "../src/getPoints"

export default function Account( { session }: { session: Session }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
 
  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      if (!user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, fullname`)
        .eq("id", user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFullname(data.fullname)
      }
    } catch (error) {
      Alert.alert((error as ApiError).message);
    } finally {
      setLoading(false);
    }
  }
  async function insertPoints({
    username
  }: {
    username: string;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      if (!user) throw new Error("No user on the session!");
      
      const updates = {
        id: user.id,
        username,
        points: getPoints, 
        created_at: new Date(),
      };

      let { error } = await supabase
        .from("points")
        .upsert(updates, { returning: "minimal" });

      if (error) {
        throw error;
      }
    } catch (error) {
      Alert.alert((error as ApiError).message);
    } finally {
      setLoading(false);
    }
  }
  async function updateProfile({
    username,
    fullname,
  }: {
    username: string;
    fullname: string;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      if (!user) throw new Error("No user on the session!");

      const updates = {
        id: user.id,
        username,
        fullname,
        updated_at: new Date(),
      };

      let { error } = await supabase
        .from("profiles")
        .upsert(updates, { returning: "minimal" });

      if (error) {
        throw error;
      }
    } catch (error) {
      Alert.alert((error as ApiError).message);
    } finally {
      setLoading(false);
    }
  }
  async function updatePointsProfile({username, fullname}) {
    updateProfile({username, fullname})
    insertPoints({username})
  }

  let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._2_Light_carousel_3}>
			<View style = {[stylesheet._Fill_your_Profile, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Fill_your_Profile, {position: "relative", left: 13, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Complete your Profile
			</Text>
			</View>
			<View style = {stylesheet._Type_Button__Type_2_Primary__Type_3_Rounded__Style_Default__State_Active__Theme_Default__Component_Button}>
				<Button 
        			title ={loading ? "Loading ..." : "Update"}
        			onPress={() => updatePointsProfile({ username , fullname})}
        			disabled={loading}
        />
        <Button 
		title="Sign Out" onPress={() => supabase.auth.signOut()} />
			</View>
			<View style = {stylesheet._Rectangle_1}>
				<Input
				placeholder="Full Name"
        		value = {fullname || ""}
        		onChangeText = {(text) => setFullname(text)}
			/>
			</View>
			<View style = {stylesheet._Rectangle_2}>
      <Input
          placeholder="Username"
          value={username || ""}
          onChangeText={(text) => setUsername(text)}
        />
			</View>
			<View style = {stylesheet._Rectangle_3}>
			<Input
				placeholder="Password"
				/>
			</View>
			<View style = {stylesheet.bubble_tea}>
			<Image
          		style = {stylesheet.logo} 
          		source = {require("../images/bubbletea.jpeg")}/>
			</View>
		</View>
		</ScrollView>
	)
}


const stylesheet = StyleSheet.create({
	_2_Light_carousel_3: {
		justifyContent: "center",
		position: "relative",
		width: Dimensions.get("window").width,
		height: 926,
		borderRadius: 0,
		overflow: "hidden",
		backgroundColor: "#fdbac4",
		left: 0,
		top: 0,
	},
	_Group: {
		position: "absolute",
		width: 18,
		height: 10,
		transform: [
			{translateX: 334},
			{translateY: 18},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_2: {
		position: "absolute",
		width: 15.27237606048584,
		height: 10.965471267700195,
		transform: [
			{translateX: 357},
			{translateY: 17},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Union: {
		position: "absolute",
		width: 15.27237606048584,
		height: 10.965471267700195,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Group_3: {
		position: "absolute",
		width: 26.97806167602539,
		height: 13,
		transform: [
			{translateX: 378},
			{translateY: 16},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_4: {
		position: "absolute",
		width: 26.97806167602539,
		height: 13,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 25,
		height: 13,
		borderRadius: 2.6666667461395264,
		left: "auto",
		right: 1.9780616760253906,
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -6.5},
			{rotate: "0deg"},
		],
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 1.328037977218628,
		height: 4,
		borderRadius: 0,
		left: "auto",
		right: -0.0003669261932373047,
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -1.5},
			{rotate: "0deg"},
		],
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20.199951171875,
		height: 8.329999923706055,
		borderRadius: 1.3333333730697632,
		left: "auto",
		right: 4.478305816650391,
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -4.166748046875},
			{rotate: "0deg"},
		],
	},
	_Fill_your_Profile: {
		position: "absolute",
		width: 380,
		height: 110,
		left: 0,
		right: "auto",
		top: 60,
		fontWeight: '500',
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 40,
		color: "rgba(33, 33, 33, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
		justifyContent: "center"
	},
	_Auto_Layout_Horizontal: {
		position: "relative",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		flexShrink: 0,
	},
	_Group_5: {
		position: "absolute",
		width: 15.807167053222656,
		height: 19.250539779663086,
		transform: [
			{translateX: 23.333984375},
			{translateY: 6.4163818359375},
			{rotate: "-90deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Vector_4: {
		position: "absolute",
		color: "rgba(33, 33, 33, 1)",
		width: "auto",
		height: 19.25,
		borderRadius: 0,
		left: 0,
		right: 14.057166576385498,
		transform: [
			{translateX: 0},
			{translateY: 7.02880859375},
			{rotate: "90deg"},
		],
	},
	_Vector_5: {
		position: "absolute",
		color: "rgba(33, 33, 33, 1)",
		width: "auto",
		height: 8.808334350585938,
		borderRadius: 0,
		left: -10.4423828125,
		right: 10.4423828125,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "90deg"},
		],
	},
	_Type_Button__Type_2_Primary__Type_3_Rounded__Style_Default__State_Active__Theme_Default__Component_Button: {
		position: "absolute",
		width: Dimensions.get("window").width,
		height: "auto",
		borderRadius: 100,
		left: 0,
		right: "auto",
		top: 758,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(255, 87, 92)",
		shadowOffset: {
			width: 4,
			height: 8,
		},
		shadowOpacity: 0.25,
		shadowRadius: 24,
		backgroundColor: "rgba(225, 59, 64, 1)",
		paddingTop: 18,
		paddingLeft: 1,
		paddingRight: 16,
		paddingBottom: 18,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignSelf: "center",
	},
	_Rectangle_1: {
		position: "absolute",
		width: 363,
		height: 43,
		borderRadius: 190,
		opacity: 1,
		left: 10,
		right: "auto",
		top: 397,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	_Rectangle_2: {
		position: "absolute",
		width: 363,
		height: 43,
		borderRadius: 190,
		opacity: 1,
		left: 10,
		right: "auto",
		top: 476,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	_Rectangle_3: {
		position: "absolute",
		width: 363,
		height: 43,
		borderRadius: 190,
		opacity: 1,
		left: 10,
		right: "auto",
		top: 555,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	_Full_Name: {
		position: "absolute",
		alignSelf: "stretch",
		width: 104,
		height: 43,
		left: 0,
		right: "auto",
		top: 397,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '500',
		textDecorationLine: "none",
		lineHeight: 139.9999976158142,
		fontSize: 20,
		color: "rgba(0, 0, 0, 0.5)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.20000000298023224,
	},
	_Nickname: {
		position: "absolute",
		alignSelf : "flex-start",
		width: 146,
		height: 44,
		left: 19,
		right: "auto",
		top: 475,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '500',
		textDecorationLine: "none",
		lineHeight: 139.9999976158142,
		fontSize: 20,
		color: "rgba(0, 0, 0, 0.5)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.20000000298023224,
	},
	_Phone_Number: {
		position: "absolute",
		width: 146,
		height: 44,
		left: 43,
		right: "auto",
		top: 554,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '500',
		textDecorationLine: "none",
		lineHeight: 139.9999976158142,
		fontSize: 20,
		color: "rgba(0, 0, 0, 0.5)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.20000000298023224,
	},
	bubble_tea: {
		position: "absolute",
		width: 189,
		height: 189,
		borderRadius: 1000,
		left: 114,
		right: "auto",
		top: 169,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	logo: {
		position: "relative",
		flex: 1,
		alignSelf: "center",
		width: 186,
		height: 160,
		borderRadius: 100,
	  },
});


