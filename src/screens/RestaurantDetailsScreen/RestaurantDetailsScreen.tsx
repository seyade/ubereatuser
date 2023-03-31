import { FlatList, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

// will be replaced by backend soon.
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
	return (
		<View style={styles.page}>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant} />}
				data={restaurant.dishes}
				renderItem={({ item }) => <DishListItem dish={item} />}
				showsVerticalScrollIndicator={false}
			/>

			<Ionicons
				name="arrow-back-circle"
				color="white"
				size={45}
				style={styles.iconContainer}
			/>
		</View>
	);
};

export default RestaurantDetailsScreen;
