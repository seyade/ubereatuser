import { View, Text, StyleSheet } from "react-native";

type BasketDishItemProps = {
	basketDish: { name: string; price: number };
};

const BasketDishItem = ({ basketDish }: BasketDishItemProps) => (
	<View style={styles.row}>
		<View style={styles.quantityContainer}>
			<Text>1</Text>
		</View>
		<Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
		<Text style={{ marginLeft: "auto" }}>£{basketDish.price}</Text>
	</View>
);

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
		paddingHorizontal: 10,
	},
	quantityContainer: {
		backgroundColor: "lightgray",
		paddingHorizontal: 5,
		paddingVertical: 2,
		marginRight: 10,
		borderRadius: 3,
	},
});

export default BasketDishItem;
