import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>One</Text>
			<Text style={styles.boxTwo}>Two</Text>
			<Text style={styles.boxThree}>Three</Text>
			<Text style={styles.boxFour}>Four</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-end",
		paddingTop: 40,
		backgroundColor: "#ddd",
	},
	boxOne: {
		flex: 2,
		backgroundColor: "#f4a261",
		padding: 10,
	},
	boxTwo: {
		flex: 1,
		backgroundColor: "violet",
		padding: 20,
	},
	boxThree: {
		flex: 1,
		backgroundColor: "gold",
		padding: 30,
	},
	boxFour: {
		flex: 1,
		backgroundColor: "blue",
		padding: 40,
	},
});