import { Image, View, Text } from "react-native";
import { RestaurantItemProps } from "../../components/RestaurantItem";
import styles from "./styles";

const RestaurantHeader = ({ restaurant }: RestaurantItemProps) => {
	return (
		<View style={styles.page}>
			<Image
				style={styles.image}
				source={{ uri: restaurant.image }}
				resizeMode="cover"
			/>

			<View style={styles.container}>
				<Text style={styles.title}>{restaurant.name}</Text>
				<Text style={styles.subtitle}>
					${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
					{restaurant.maxDeliveryTime} minutes
				</Text>

				<Text style={styles.menuTitle}>Menu</Text>
			</View>
		</View>
	);
};

export default RestaurantHeader;
