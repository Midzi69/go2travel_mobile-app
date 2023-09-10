import React from 'react'
import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Header = () => {
  return (
    <View
    style={{
        backgroundColor: "#003580",
        alignItems: "center",
        justifyContent: "space-around",
    }}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={{flexDirection: "row", alignItems: "center", borderColor: "white", borderWidth:1,borderRadius:25,padding:8, marginRight: 7}}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text style={{marginLeft: 8, fontWeight:"bold",color:"white",fontSize:15}}>Stays</Text>
            </Pressable>

            {/* <Pressable style={{flexDirection: "row", alignItems: "center", marginRight: 7}}>
                <Ionicons name="airplane-outline" size={26} color="white" />
                <Text style={{marginLeft: 8, fontWeight:"bold",color:"white",fontSize:15}}>Flights</Text>
            </Pressable>

            <Pressable style={{flexDirection: "row", alignItems: "center", marginRight: 7}}>
                <Ionicons name="car-outline" size={26} color="white" />
                <Text style={{marginLeft: 8, fontWeight:"bold",color:"white",fontSize:15}}>Car Rentals</Text>
            </Pressable>

            <Pressable style={{flexDirection: "row", alignItems: "center", marginRight: 7}}>
                <AntDesign name="car" size={26} color="white" />
                <Text style={{marginLeft: 8, fontWeight:"bold",color:"white",fontSize:15}}>Taxi</Text>
            </Pressable> */}
        </ScrollView>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})