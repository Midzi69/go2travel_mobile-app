import React, { useLayoutEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  // Assuming you have a user object in the state
  const user = auth.currentUser;
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigation.replace("Login"); 
    } catch (error) {
      console.error("Error signing out: ", error);
      Alert.alert("Sign Out Error", "An error occurred while signing out.");
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <View>
      
      {user && (
        <View style={{padding:20}}>
   
            <View style={{ flexDirection: "column", gap: 10 }}>
            <Text style={{fontSize:20}}>Email: {user.email}</Text>
          </View>


          
          <Pressable
            onPress={handleSignOut}
            style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
              Sign Out!
            </Text>
          </Pressable>

        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
