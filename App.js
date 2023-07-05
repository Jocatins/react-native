import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";

export default function App() {
	const [people, setPeople] = useState([
		{ name: "shaun", id: "1" },
		{ name: "yoshi", id: "2" },
		{ name: "mario", id: "3" },
		{ name: "luigi", id: "4" },
		{ name: "peach", id: "5" },
		{ name: "toad", id: "6" },
		{ name: "titan", id: "7" },
		{ name: "titans", id: "8" },
		{ name: "phil", id: "9" },
	]);

	const pressHandler = (id) => {
		console.log(id);
		setPeople((prev) => {
			return prev.filter((item) => item.id != id);
		});
	};

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={3}
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => pressHandler(item.id)}>
						<Text style={styles.item}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>

			{/* <ScrollView>
				{people.map((people) => (
					<View key={people.id}>
						<Text style={styles.item}>{people.name}</Text>
					</View>
				))}
			</ScrollView> */}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,
		paddingHorizontal: 20,
		// alignItems: "center",
		// justifyContent: "center",
	},
	item: {
		marginTop: 24,
		padding: 30,
		backgroundColor: "red",
		fontSize: 20,
		color: "white",
		marginHorizontal: 10,
	},
});
