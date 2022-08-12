/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { Component } from 'react';
 import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
 
 export default class App extends React.Component{
     render(){
         return(
          <View style={{height: 470,
          margin: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#a9a9a9',
          }}>
            <Text style={styles.indicator}>Cameroon</Text>
            <View style={{
            padding: 14,
            }}>
            <View style={{
              height: 150,
             flexDirection: 'row',
           }}>
             <View><Image style={styles.logo} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFGwLbvR_gFZQ/profile-displayphoto-shrink_200_200/0/1548059370057?e=2147483647&v=beta&t=tCS43nEiAiCD2mY3wJ9eu_5N1Wlg56x9xB-i71KluYY' }} />
             </View>
             <View style={{width: 250}}>
               <Text style={styles.title}>RECRUTEMENT D'UN(E) STAGIAIRE
                 APPRENTI(E) ASSISTANT(E) OFFRE ET PROJETS </Text>
               <Text style={styles.enterprise}>MK WBC, <Text style={{color: '#00008b', fontWeight: 'bold'}}>Internship</Text> </Text>
               <Text style={styles.reference}>Référence: REF18202535 </Text>
             </View>
           </View><View>
               <FlatList 
                 data={[
                   { key: 'Date de Publication : 19 Jul 2022' },
                   { key: 'Date Butoir : 30 Aug 2022' },
                   { key: 'Expérience : N/A' },
                   { key: 'Secteur d\'activité : Etudes'},
                 ]}
                 renderItem={({ item }) => <Text style={styles.item}>{'\u2B24' + ' '}{item.key}</Text>} />
              <Text style={{marginBottom: 10, fontWeight: 'bold'}}>diverses Conseils Evaluation Planification Appui Technique</Text>
               <Text style={{marginBottom: 10,}}>Pour les besoins de nos services, nous recherchons un stagiaire apprenti(e)
                 Assistant(e) Offres et Projets ayant une formation (Bac+3 au moins) d'Ingénieur Civil ou
                 Wash. </Text>
               <Text>Le Poste est à pouvoir dès maintenant pour une durée de 3 mois renouvelable une seule
                 fois. </Text>
             </View></View>
          </View>
         );
     }
 }
 
 const styles = StyleSheet.create({
     indicator:{
       backgroundColor: '#4169e1',
       color: '#fff',
       borderWidth: 1,
       borderColor: '#4169e1',
       borderRadius: 5,
       fontWeight: 'bold',
       width: 80,
       paddingBottom: 2,
       paddingTop: 2,
       paddingRight: 2,
       paddingLeft: 7,
       marginLeft: 295,
       marginTop: 5,
     },
     title:{
      fontSize: 17,
      marginLeft: 10,
      color: '#800080',
     },
     enterprise: {
         fontSize: 15,
         marginLeft: 10,
         marginTop: 5,
         color: '#00ffff'
     },
     reference:{
         fontSize: 15,
         marginLeft: 10,
         marginTop: 5,
         color: '#000'
     },
     item: {
       paddingBottom: 5,
       fontSize: 15,
       height: 26,
     },
     logo: {
       width: 100,
       height: 70,
       marginBottom: 20,
       borderWidth: 1,
       borderColor: '#a9a9a9',
       borderRadius: 5,
     },
  });
