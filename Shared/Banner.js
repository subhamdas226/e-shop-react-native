import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

var { width } = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() =>{
        setBannerData(["https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/tekken-7.jpg",
    "https://cdn1.epicgames.com/34f7e1e275924bb6a90074920f9c1696/offer/ACRG_Store_Landscape_2580x1450-2580x1450-2e3c9cdfd312bb0f063e991982c5ff57.jpg",
"https://www.wallpaperup.com/uploads/wallpapers/2015/06/20/728501/993aa9658d209f235e7f90e10491ac6d-700.jpg",
"https://wrhsstampede.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-11-at-10.10.39-AM.png",
"https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/3/3/2/1329332_Interstellar.jpg",
"https://sm.ign.com/ign_in/feature/m/mortal-kom/mortal-kombat-11s-best-fatalities-ranked-and-how-to-do-them_ukfx.jpg",
"https://i.pinimg.com/originals/01/57/3a/01573a4c08461daa899d925fcae99ee6.jpg",
"https://www.gannett-cdn.com/presto/2019/04/05/USAT/1103ea73-dc18-40ee-8968-744ab9a9a2cf-Mortal_Kombat_11_-_a.jpg",
"https://media.altchar.com/prod/images/940_530/gm-ce859126-d0a2-4c75-834a-0dcde78a4762-mk11c.jpeg"])
    
        return()=>{
            setBannerData([])
        }
},[])
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                    style = {{height: width/2}}
                    showsButtons = {false}
                    autoplay = {true}
                    autoplayTimeout = {2}
                >
                    {bannerData.map((item) =>{
                        return(
                            <Image 
                                key={item}
                                style = {styles.banner}
                                resizeMode = "contain"
                                source={{ uri : item}}
                            />
                        );
                    })}
                </Swiper>
                <View style={{height:20}}>

                </View>
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'gainsboro'
    },
    swiper : {
        width : width,
        alignItems: 'center',
        marginTop : 5
    },
    banner : {
        height : width/2,
        width : width - 20,
        borderRadius : 10,
        // marginHorizontal : 20
        marginLeft : 10
    }
})

export default Banner;