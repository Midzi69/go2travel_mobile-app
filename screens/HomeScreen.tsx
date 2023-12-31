import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Button, Image, Alert} from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges'
import { BottomModal, ModalFooter, ModalButton, ModalTitle, SlideAnimation, ModalContent } from 'react-native-modals';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'Go2Travel App',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
                backgroundColor: '#003580',
                height: 110,
                borderBottomColor: 'transparent',
                shadowColor: 'transparent',
              },
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
            ),
        })
    }, []);
    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{
                    container: {width: "80%", marginHorizontal: "3%"},
                    text: {fontSize: 20},
                }}
                primary
                title="Submit"
            >
                
            </Button>
        )
    }

    const searchPlaces = (place) => {
      if(!route.params || !selectedDates) {
        Alert.alert(
          "Invalid Parameters",
          "Please enter all the details",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {text: "OK", onPress: () => console.log("OK Pressed")}
          ],
          {cancelable: false}
        )
      }

      if(route.params && selectedDates) {
        navigation.navigate("Places", {
          rooms,
          adults,
          children,
          selectedDates,
          place
        })
      }

    }
  return (
    <>
      <View>
      <Header />

      <ScrollView>
            <View style={{ margin: 20}}>
                <Pressable
                onPress={() => navigation.navigate('Search')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  paddingHorizontal: 10,
                  
                  paddingVertical: 15,
                }}
                >
                <Feather name="search" size={24} color="black" />
                <Text>{route?.params ? route.params.input : "Enter Your Destination"}</Text>
                </Pressable>

                <Pressable
                       style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                      }}
                >
                     <Fontisto name="date" size={24} color="black" />
                     <DatePicker
                        style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0, borderColor: 'transparent' }}
                        customStyles={{
                        placeholderText: { fontSize: 15, flexDirection: 'row', alignItems: 'center', marginRight: 'auto' },
                        headerStyle: {
                            backgroundColor: '#003580',
                        },
                        contentText: {
                            fontSize: 15,
                            flexDirection: 'row',
                 
                            alignItems: 'center',
                            marginRight: 'auto',
                        },
                        }}
                        selectedBgColor="#0047AB"
                        customButton={(onConfirm) => customButton(onConfirm)}
                        onConfirm={(startDate, endDate) => setSelectedDates({ startDate, endDate, key: 'selection' })}
                        allowFontScaling={false}
                        placeholder={'Select Start and End Dates: '}
                        mode={'range'}
                        />

                </Pressable>

                <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />

              <TextInput placeholderTextColor="red" placeholder={`${rooms} room(s), ${adults} adullt(s), ${children} children`}>

              </TextInput>

            </Pressable>

            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: "#2a52be"
              }}
            >
              <Text style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                color: "white"
              }}>Search</Text>
            </Pressable>

            </View>

            <Text style={{marginHorizontal:20,fontSize:17,fontWeight:"500"}}>Travel more, Spend less</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={{width:200,height:150,marginTop:10,marginLeft:10, backgroundColor:"#003580", borderRadius:10,padding:20,}}>
              <Text style={{color:"white",fontSize:15,fontWeight:"bold",marginVertical:7}}>Traveler</Text>
              <Text style={{color:"white",fontSize:15,fontWeight:"500",marginHorizontal:20}}>You are at Traveler Level 1 in our Loyalty program</Text>
            </Pressable>
            <Pressable style={{width:200,height:150,marginTop:10,borderColor:"#E0E0E0",borderWidth:2, borderRadius:10,padding:20,marginHorizontal:10}}>
              <Text style={{color:"#003580",fontSize:15,fontWeight:"bold",marginVertical:7}}>10% Discounts</Text>
              <Text style={{color:"#003580",fontSize:15,fontWeight:"500",marginHorizontal:20}}>Enjoy Discounts at participating at properties worldwide</Text>
            </Pressable>
            <Pressable style={{width:200,height:150,marginTop:10,borderColor:"#E0E0E0",borderWidth:2, borderRadius:10,padding:20,}}>
              <Text style={{color:"#003580",fontSize:15,fontWeight:"bold",marginVertical:7}}>15% Discounts</Text>
              <Text style={{color:"#003580",fontSize:15,fontWeight:"500",marginHorizontal:20}}>The more you travel, the faster you will advance to level 3!</Text>
            </Pressable>
          </ScrollView>

          <Pressable 
          style={{marginTop: 40,justifyContent: "center", alignItems: "center",}}
          >
            <Image style={{width:300, height:50}}
              source={require('../img/logo.png')}
            />
                       

          </Pressable>

      </ScrollView>
    </View>

    <BottomModal swipeThreshold={200} onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={<ModalFooter>
          <ModalButton text="Apply" style={{ marginBottom: 20, color: "white", backgroundColor: "#003580" }}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={new SlideAnimation({
          slideFrom: "bottom"
        })

        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
            <Text style={{fontSize:16,fontWeight:"500"}}>Rooms</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable onPress={() => setRooms(Math.max(1, rooms -1))} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>

              <Pressable onPress={() => setRooms((c) => c+1)} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
              </Pressable >
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
            <Text style={{fontSize:16,fontWeight:"500"}}>Adults</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable onPress={() => setAdults(Math.max(1, adults -1))} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{adults}</Text>
              </Pressable>

              <Pressable onPress={() => setAdults((c) => c+1)} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
              </Pressable >
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
            <Text style={{fontSize:16,fontWeight:"500"}}>Children</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable onPress={() => setChildren(Math.max(0, children -1))} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{children}</Text>
              </Pressable>

              <Pressable onPress={() => setChildren((c) => c+1)} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0" }}>
                <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "600", paddingHorizontal: 6 }}>+</Text>
              </Pressable >
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
         


    </>
   
    

  )
}

export default HomeScreen

const styles = StyleSheet.create({})