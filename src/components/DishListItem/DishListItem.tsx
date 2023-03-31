import { View, Text, StyleSheet, Image } from "react-native";

type Dish = {
	name: string;
	description: string;
	price: number;
	image?: string;
};

type DishProps = { dish: Dish };

const DishListItem = ({ dish }: DishProps) => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.name}>{dish.name}</Text>
				<Text style={styles.description} numberOfLines={2}>
					{dish.description}
				</Text>
				<Text style={styles.price}>£{dish.price}</Text>
			</View>
			<View>
				{dish?.image && (
					<Image source={{ uri: dish.image }} style={styles.image} />
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		marginVertical: 10,
		paddingHorizontal: 20,
		borderBottomColor: "lightgray",
		borderBottomWidth: 1,
		flexDirection: "row",
	},
	name: {
		fontWeight: "600",
		fontSize: 16,
		letterSpacing: 0.5,
	},
	description: {
		color: "gray",
		marginVertical: 5,
	},
	price: {
		fontSize: 16,
	},
	image: {
		height: 100,
		aspectRatio: 1,
	},
});

export default DishListItem;
