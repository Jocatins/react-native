import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

export default function TodoItem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View style={styles.item}>
				<MaterialCommunityIcons
					name="delete-empty"
					size={24}
					color="#333"
				/>
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		margin: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10,
		flexDirection: "row",
	},
	itemText: {
		marginLeft: 10,
	},
});
