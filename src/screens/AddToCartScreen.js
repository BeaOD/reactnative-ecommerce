import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";



export default function AddToCartScreen({navigation}) {
  return (
    <View style={styles.homeScreenContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.headingText}> Add To Cart</Text>
            <Text style={styles.paragraphText}>
            oday's VS Code tip: Emmet lorem Just type lorem in #html to generate 
            a paragraph of dummy text. Control how much text is 
            generated with a number suffix, such as lorem10 to generate 
            10 words of dummy text You can also combine lorem with other Emmet abbreviation
            </Text>
        </View>

        <View style={styles.imageContainer}>
            <Image source={require('../../assets/bathroom.jpg')}/>
        </View>

        <View>
            <View> 
                <TouchableOpacity  style={styles.button}
                onPress={()=>{ navigation.navigate('PaymentSuccessful')}}>
                    <Text style={styles.buttonText}>
                        Next
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.options}> 
                <Text style={styles.previous}> Previous </Text>
                <View style={styles.swiperContainer}>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                </View>
                <Text style={styles.skipText}>Skip</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    homeScreenContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: '32',
      marginTop: '65',
    },
    textContainer:{

    },
    headingText:{

    },
    paragraphText:{

    },
    imageContainer:{

    },
    button:{

    },
    buttonText:{

    },

  });
  