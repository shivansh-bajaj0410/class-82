import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style = {styles.androidSafeArea} />
          <View style = {styles.cardContainer} >
            <View style = {styles.storyImage} >
              <Image source = { require("../assets/story_image_1.png")} style = {{resizeMode : 'contain' ,
               width : Dimensions.get('window').width-60,height : 250 , borderRadius:10}} ></Image>
            </View>
            <View style = {styles.titleContainer}>
              <View style = { styles.titleTextContainer}>
                <View style = {styles.storyTitle}>
                  <Text style = {styles.storyTitlText}>{this.props.story.title}</Text>
                </View>
                <View style = {styles.storyAuthor}>
                  <Text style = {styles.storyAuthorText}>{this.props.story.author}</Text>
                </View>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style = {styles.descriptionText}>{this.props.story.description}</Text>
            </View>
            <View  style = {styles.actionContainer}>
              <View style = {styles.likeButton}>
                <View style = {styles.likeIcon}>
                  <Ionicons name = {"heart"} size = {30} color = {"white"} style = {{
                    width:30,
                    marginLeft:20,
                    marginTop:5
                  }} />
                </View>
              </View>
              <Text style = {styles.likeText}>12K</Text>
            </View>
          </View>
          <Text style={{ color: "white" }}>Story Card!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  androidSafeArea:{marginTop:Platform.OS === "android"? StatusBar.currentHeight : 0},
  cardContainer:{
    marginTop:-20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#2f345d",
    borderRadius:20,
    height:undefined,
    padding:10
  },
  titleContainer:{
    flexDirection:"row"
  },
  titleTextContainer:{
    flex:1
  },
  storyTitlText:{
    fontFamily:"Bubblegum-sans",
    fontSize:25,
    color:"white"
  },
  storyAuthorText:{
    fontFamily:"Bubblegum-sans",
    fontSize:18,
    color:"white"
  },
  descriptionContainer:{marginTop:5},
  descriptionText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:13,
    color:"white"
  },
  actionContainer:{marginTop:10,
  justifyContent:"center",
  alignItems:"center"
  },
  likeButton:{
    backgroundColor:"#eb3948",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row"
  },
  likeText:{
    color:"white",
    fontFamily:"Bubblegum-Sans",
    fontSize:25,
    marginTop:6,
    marginLeft:25
  }
});
