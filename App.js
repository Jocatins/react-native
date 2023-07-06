import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import SandBox from "./components/sandbox";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create an app", key: "2" },
		{ text: "play on the switch", key: "3" },
	]);

	const pressHandler = (id) => {
		setTodos((prev) => {
			return prev.filter((todo) => todo.key != id);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 5) {
			setTodos((prev) => {
				return [{ text: text, key: Math.random().toString() }, ...prev];
			});
		} else {
			Alert.alert(
				"Error",
				"Text should be at least five characters long",
				[
					{
						text: "Understood",
						onPress: () => console.log("Alert closed"),
					},
				]
			);
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem
									item={item}
									pressHandler={pressHandler}
								/>
							)}
						/>
					</View>
				</View>

				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
		// <SandBox />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
		flex: 1,
	},
	list: {
		padding: 40,
		flex: 1,
	},
});
