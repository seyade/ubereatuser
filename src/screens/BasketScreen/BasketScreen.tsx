import { View, Text, StyleSheet, FlatList } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketScreen = () => {
	return (
		<View style={styles.page}>
			<Text style={styles.name}>{restaurant.name}</Text>

			<Text style={{ fontWeight: "bold", fontSize: 19, marginTop: 20 }}>
				Your items
			</Text>

			<FlatList
				data={restaurant.dishes}
				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			/>

			<View style={styles.separator} />

			<View style={styles.button}>
				<Text style={styles.buttonText}>Create order</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: "100%",
		paddingVertical: 40,
		padding: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: "600",
		marginVertical: 10,
	},
	description: {
		color: "gray",
	},
	separator: {
		height: 1,
		backgroundColor: "lightgray",
		marginVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
		paddingHorizontal: 10,
	},
	quantity: {
		fontSize: 25,
		fontWeight: "bold",
		marginHorizontal: 20,
	},
	button: {
		backgroundColor: "black",
		marginTop: "auto",
		padding: 20,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 20,
	},
	quantityContainer: {
		backgroundColor: "lightgray",
		paddingHorizontal: 5,
		paddingVertical: 2,
		marginRight: 10,
		borderRadius: 3,
	},
});

export default BasketScreen;
