import React from 'react'
import { View, Text, StyleSheet, Image, Pressable , SafeAreaView} from "react-native";
import { Foundation } from '@expo/vector-icons';

export default function OnlineShoppingScreen({navigation}) {
  return (
    <SafeAreaView  style={styles.onlineScreenContainer}>
         <View  style={styles.textContainer}>
            <Text  style={styles.headingText}>ONLINE SHOPPING</Text>
            <Text  style={styles.paragraphText}>
            Control how much text is generated 
            with a number suffix, such as lorem10 to generate
            10 words of dummy text You can also combine lorem
            with other Emmet abbreviations!
            </Text>
         </View>

         <View>
            <Image source= {require('../../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg')}/>
         </View>

         <View>
            <View>
                <Pressable  style={styles.button}
                onPress={()=>{navigation.navigate('AddToCart')}}>
                    <Text  style={styles.buttonText}>
                    <Foundation name="next" size={18} color="black" />Next</Text>
                </Pressable>
            </View>
            <View style={styles.options}> 
                <Text > Previous </Text>
                <View >
                    <Pressable></Pressable>
                    <Pressable ></Pressable>
                    <Pressable ></Pressable>
                </View>
                <Text>Skip</Text>
            </View>
         </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  onlineScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '32',
    marginTop: '65',
  },
  // textContainer:{

  // },
  // headingText:{

  // },
  // paragraphText:{

  // },
  // imageContainer:{

  // },
  // button:{

  // },
  // buttonText:{

  // },

});
