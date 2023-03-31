import { FlatList, View, Text, StyleSheet } from "react-native";
import React from "react";
import OrderListItem from "../../components/OrderListItem";

import orders from "../../../assets/data/orders.json";

const OrderScreen = () => {
	return (
		<View style={{ flex: 1, width: "100%", paddingTop: 52 }}>
			<FlatList
				data={orders}
				renderItem={({ item }) => <OrderListItem order={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default OrderScreen;
