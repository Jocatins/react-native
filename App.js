import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
	const [name, setName] = useState("Nicolas");
	const [age, setAge] = useState(0);

	const handleName = (e) => {
		setName(e);
	};
	const handleAge = (e) => {
		setAge(e);
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.boldText}>
					Hello {name} is {age} years{" "}
				</Text>
			</View>
			<Text>Enter name</Text>
			<TextInput
				multiline
				style={styles.input}
				placeholder="Enter Name"
				onChangeText={handleName}
			/>
			<Text>Enter Age</Text>
			<TextInput
				keyboardType="numeric"
				style={styles.input}
				placeholder="Enter Age"
				onChangeText={handleAge}
			/>

			<View style={styles.buttonContainer}>
				<Button title="Update State" />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "red",
		padding: 20,
	},
	boldText: {
		fontWeight: "bold",
		color: "white",
	},
	buttonContainer: {
		marginTop: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#777",
		margin: 10,
		padding: 10,
		width: 200,
	},
});
