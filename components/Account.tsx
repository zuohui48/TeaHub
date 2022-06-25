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
import LeaderboardButton from "./leaderboardbutton";
import Leaderboard from "./Leaderboard";

export default function Account( { session }: { session: Session }, { navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");


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
        .select(`username`)
        .eq("id", user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      Alert.alert((error as ApiError).message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
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

  let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._2_Light_carousel_3}>
			<View style = {[stylesheet._Fill_your_Profile, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Fill_your_Profile, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Fill your Profile
			</Text>
			</View>
			<View style = {stylesheet._Theme_Light__Component_Navbar}>
				<View style = {stylesheet._Auto_Layout_Horizontal}>
					<View style = {stylesheet._Iconly_Light_Outline_Arrow___Left}>
						<View style = {stylesheet._Group_5}>
							<Svg style = {stylesheet._Vector_4} fill = {"rgba(33, 33, 33, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 0.8750002384185791 0 C 1.3179787610994254 0 1.6840731886944091 0.3291794856389364 1.742012697268592 0.756267656882604 L 1.7500004768371582 0.875 L 1.7500004768371582 18.375 C 1.7500004768371582 18.858249162634213 1.35824953272774 19.25 0.8750002384185791 19.25 C 0.43202171573773285 19.25 0.06592722946941088 18.920820305744808 0.007987720895227923 18.49373213450114 L 0 18.375 L 0 0.875 C 0 0.3917508373657862 0.39175094410941824 0 0.8750002384185791 0 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
							<Svg style = {stylesheet._Vector_5} fill = {"rgba(33, 33, 33, 1)"}>
							<Path fillRule = {"nonzero"} d = {"M 14.312118311195096 0.25761537094654624 C 14.653090470307855 -0.08482845396238653 15.207108304604732 -0.08602147828810919 15.549552112390295 0.2549506978744328 C 15.860864671244329 0.5649253813507751 15.89015121346698 1.0509710713748366 15.636725895702028 1.3940643535188928 L 15.55221683748323 1.4923847869465485 L 8.524216358987648 8.550718840561874 C 8.213315469563419 8.862961600185846 7.725517201215482 8.891366514107819 7.382431724567835 8.635919952731127 L 7.284169013223218 8.55077002108814 L 0.2550019351884812 1.4924362456278475 C -0.08599863050571022 1.150020722993629 -0.08485160612609854 0.5960025306848504 0.25756389938616525 0.2550019479394562 C 0.5688507289008373 -0.05499856918567331 1.0550158795867803 -0.08223250256837272 1.397035674813518 0.17263972081707923 L 1.494998117813894 0.2575639122652473 L 7.904517014858916 6.692934163285149 L 14.312118311195096 0.25761537094654624 Z"}   strokeLinejoin = {"miter"}/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {stylesheet._Type_Button__Type_2_Primary__Type_3_Rounded__Style_Default__State_Active__Theme_Default__Component_Button}>
				<Button 
        title ={loading ? "Loading ..." : "Update"}
        onPress={() => updateProfile({ username })}
        disabled={loading}
        />
		<LeaderboardButton/>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
			</View>
			<View style = {stylesheet._Rectangle_1}>
				<Input
				placeholder="Full Name"
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
			<View style = {stylesheet._Ellipse_1}>
			</View>
			<Component__person
				variant1_width={200}
				variant1_height={200}
				variant1_left={176}
				variant1_right={"auto"}
				variant1_top={220}
				variant1_bottom={"auto"}
				variant1_transform={[{translateX: -1.9237613894246104e-22},{translateY: 1.9237613894246104e-22},{rotate: "1.5308806722812968e-22deg"},]}
			/>
		</View>
		</ScrollView>
	)
}
const Component__person = ({
	variant1_width,
	variant1_height,
	variant1_left,
	variant1_right,
	variant1_top,
	variant1_bottom,
	variant1_transform,
}) => {
	return (
			<View style = {[
				component__person_stylesheet._person,
				{
					width: variant1_width,
					height: variant1_height,
					left: variant1_left,
					right: variant1_right,
					top: variant1_top,
					bottom: variant1_bottom,
					transform: variant1_transform,
				},
			]}>
				<Svg style = {component__person_stylesheet._Ellipse_39} fill = {"rgba(105, 155, 247, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 20 10 C 20 17 16.075132369995117 21 10 21 C 3.924867630004883 21 0 17 0 10 C 0 3 3.924867630004883 0 10 0 C 16.075132369995117 0 20 3 20 10 Z"}   strokeLinejoin = {"miter"}  strokeWidth = {3}  stroke = {"rgba(0, 0, 0, 1)"}/>
				</Svg>
				<Svg style = {component__person_stylesheet._Vector_8} fill = {"rgba(105, 155, 247, 1)"}>
				<Path fillRule = {"none"} d = {"M 0 20 C 0.0000012372150877126842 14.1578950881958 -0.023055553436279297 8.000005722045898 6 4 C 12.02305555343628 -0.0000057220458984375 18 4.6837133495957316e-17 22 4.6837133495957316e-17 C 26 4.6837133495957316e-17 31.523059844970703 -0.0000057220458984375 38 4 C 44.4769401550293 8.000005722045898 44.061128322035074 14.1578950881958 44 20 L 0 20 Z"}   strokeLinejoin = {"miter"}  strokeWidth = {3}  stroke = {"rgba(0, 0, 0, 1)"}/>
				</Svg>
				<Svg style = {component__person_stylesheet._Ellipse_11} fill = {"rgba(0,0,0,0)"}>
				<Path fillRule = {"none"} d = {"M 0 0 L 0 0.5 C 0 3.6255767345428467 1 5.500000953674316 4 5.500000953674316 C 7 5.500000953674316 8 3.6255767345428467 8 0.5 L 8 0"}   strokeLinejoin = {"miter"}  strokeWidth = {3}  stroke = {"rgba(0, 0, 0, 1)"}/>
				</Svg>
			</View>
	)
}

const stylesheet = StyleSheet.create({
	_2_Light_carousel_3: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 926,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
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
		transform: [
			{translateX: 0},
			{translateY: 91},
			{rotate: "0deg"},
		],
		fontWeight: '500',
		textDecorationLine: "none",
		lineHeight: 110.00000238418579,
		fontSize: 40,
		color: "rgba(33, 33, 33, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
		justifyContent: "flex-end"
	},
	_Theme_Light__Component_Navbar: {
		position: "absolute",
		width: 380,
		height: 48,
		borderRadius: 0,
		left: 23,
		right: "auto",
		top: 53,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 12,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 12,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
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
	_Iconly_Light_Outline_Arrow___Left: {
		position: "relative",
		width: 28.000001907348633,
		height: 28.000001907348633,
		borderRadius: 0,
		minWidth: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
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
	_Ellipse_1: {
		position: "absolute",
		width: 189,
		height: 189,
		borderRadius: 1000,
		backgroundColor: "rgba(217, 217, 217, 1)",
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
});
const component__person_stylesheet = StyleSheet.create({
	_person: {
		position: "absolute",
		width: 64,
		height: 64,
		borderRadius: 0,
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
		justifyContent: "center"
	},
	_Ellipse_39: {
		position: "absolute",
		color: "rgba(105, 155, 247, 1)",
		width: 20,
		height: 21,
		borderRadius: 0,
		left: 22,
		right: "auto",
		top: 10,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "1.5308806722812968e-22deg"},
		],
	},
	_Vector_8: {
		position: "absolute",
		color: "rgba(105, 155, 247, 1)",
		width: 44.027008056640625,
		height: 20,
		borderRadius: 3,
		left: 10,
		right: "auto",
		top: 34,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "1.5308806722812968e-22deg"},
		],
	},
	_Ellipse_11: {
		position: "absolute",
		color: "blue",
		width: 8,
		height: 5.500000953674316,
		borderRadius: 0,
		left: 28,
		right: "auto",
		top: 19.5,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "1.5308806722812968e-22deg"},
		],
	},

});