/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 

 import React, { useCallback, useState } from "react";
 import DropDownPicker from 'react-native-dropdown-picker';
 import {View, SafeAreaView, StyleSheet, TextInput, Text, Button, Alert, Linking, TouchableOpacity } from "react-native";
 
 const UselessTextInput = () => {
   const [text, onChangeText] = React.useState(null);
   const [value, setValue] = useState([]);
   const [number, onChangeNumber] = React.useState(null);
   const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Cameroon', value: 'cameroon'},
    {label: 'Nigeria', value: 'nigeria'},
    {label: 'France', value: 'france'},
    
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState([]);
  const [items1, setItems1] = useState([
    {label: 'Service', value: 'service'},
    {label: 'Evaluation', value: 'evaluation'},
    {label: 'Etude', value: 'etude'},
    {label: 'Travaux', value: 'travaux'},
    {label: 'Consultancy', value: 'consultancy'},
    {label: 'Internship', value: 'internship'},
    {label: 'Job', value: 'job'},
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState([]);
  const [items2, setItems2] = useState([
    {label: 'Appels à candidatures', value: 'candidatures'},
    {label: 'Appels d\'offres', value: 'offres'},
    {label: 'Appels à projets', value: 'projets'},
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState([]);
  const [items3, setItems3] = useState([
    {label: 'GOUVERNANCE PUBLIQUE', value: 'gouv. public'},
    {label: 'SANTE PUBLIQUE', value: 'sante public'},
    {label: 'NON DEFINIS', value: 'undefined'},
    {label: 'Administration des bases de données', value: 'db'},
    {label: 'EDUCATION', value: 'education'},
    {label: 'ECONOMIE', value: 'economie'},
    {label: 'TRANSPORT', value: 'transport'},
    {label: 'BATIMENTS ET TRAVAUX PUBLIQUES', value: 'batiments'},
    {label: 'RURAL', value: 'rural'},
    {label: 'INFRASTRUCTURE', value: 'infrastructure'},
  ]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState([]);
  const [items4, setItems4] = useState([
    {label: 'Conception de produits touristiques', value: 'conception'},
    {label: 'Animation', value: 'animation'},
    {label: 'Transport', value: 'transport'},
    {label: 'Professions médico-techniques', value: 'medecine'},
    {label: 'Aide sociale', value: 'aide'},
    {label: 'Animation et encadrement', value: 'encadrement'},
    {label: 'Education spécialisée', value: 'education specialise'},
    {label: 'Coaching sportif', value: 'coaching'},
    {label: 'Organisation et contrôle', value: 'organisation'},
    {label: 'Marketing et Communication', value: 'marketing'},
    ]);

    const onOpen = useCallback(() =>{
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
    }, []);

    const onOpen1 = useCallback(() =>{
      setOpen(false);
      setOpen2(false);
      setOpen3(false);
      setOpen4(false);
    }, []);

    const onOpen2 = useCallback(() =>{
      setOpen1(false);
      setOpen(false);
      setOpen3(false);
      setOpen4(false);
    }, []);

    const onOpen3 = useCallback(() =>{
      setOpen1(false);
      setOpen2(false);
      setOpen(false);
      setOpen4(false);
    }, []);

    const onOpen4 = useCallback(() =>{
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
      setOpen(false);
    }, []);
  
   return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
     <View style={{paddingTop: 20, paddingBottom: 10, backgroundColor: "#f2f0f0",}}>
      <View
        style={styles.container}>
       <Text style={{fontWeight: "900", fontSize: 15, color: "#000"}}>
        Quoi</Text>
       <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
         placeholder="Titre, libellé ou description de l'offre"
         />
      </View>

      <View
        style={styles.secondContainer}>
        <Text style={{fontWeight: "900", paddingRight: 10, fontSize: 15, color: "#000"}}>Où </Text>
        <DropDownPicker 
          style={{width: "91%", borderLeftWidth: 0, borderColor: "#e3dada"}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Pays"
          dropDownDirection="DEFAULT"
          zIndex={3000}
          zIndexInverse={3000}
          onOpen={onOpen}
          dropDownContainerStyle={{width: "91%", borderColor: "#f5f5f5",}}
          labelStyle={{fontWeight: "500"}}
        />
        
      </View>
       {/*<TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
   />*/}
      <View 
      style={styles.thirdContainer}>
        <DropDownPicker 
        style={{width: "103%", borderWidth: 2, borderColor: "#006494", }}
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
        placeholder="Type"
        searchable={true}
        searchPlaceholder="Recherchez ..."
        multiple={true}
        min={0}
        max={8}
        zIndex={2000}
        zIndexInverse={2000}
        onOpen={onOpen1}
        showTickIcon={true}
        placeholderStyle={{color: "#006494",}}
        labelContainerStyle={{color: "#006494", fontWeight: "bold"}}
        dropDownContainerStyle={{width: "103%", borderColor: "#f5f5f5", borderBottomWidth: 3, borderBottomColor: "#006494"}}
        selectedItemContainerStyle={{backgroundColor: "#006494"}}
        selectedItemLabelStyle={{color: "#fff"}}
        searchContainerStyle={{padding: 10, borderBottomWidth: 0}}
      />
      <DropDownPicker 
        style={{width: "103%", borderWidth: 2, borderColor: "#006494", marginLeft: 20}}
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
        placeholder="Catégories"
        dropDownDirection="DEFAULT"
        onOpen={onOpen2}
        placeholderStyle={{color: "#006494",}}
        dropDownContainerStyle={{width: "103%", borderColor: "#f5f5f5", borderBottomWidth: 3, borderBottomColor: "#006494", marginLeft: 20}}
        selectedItemContainerStyle={{backgroundColor: "#006494"}}
        selectedItemLabelStyle={{color: "#fff"}}
        searchContainerStyle={{padding: 10, borderBottomWidth: 0}}
      />
      </View>

      <View 
      style={styles.fourthContainer}>
        <DropDownPicker 
        style={{width: "103%", borderWidth: 2, borderColor: "#006494",}}
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
        placeholder="Secteur"
        searchable={true}
        dropDownDirection="DOWN"
        onOpen={onOpen3}
        searchPlaceholder="Recherchez ..."
        multiple={true}
        min={0}
        max={8}
        placeholderStyle={{color: "#006494",}}
        dropDownContainerStyle={{width: "103%", borderColor: "#f5f5f5", borderBottomWidth: 3, borderBottomColor: "#006494"}}
        searchContainerStyle={{borderColor: "#12ff"}}
        selectedItemContainerStyle={{backgroundColor: "#006494"}}
        selectedItemLabelStyle={{color: "#fff"}}
        searchContainerStyle={{padding: 10, borderBottomWidth: 0}}
      />
      <DropDownPicker 
        style={{width: "103%", borderWidth: 2, borderColor: "#006494", marginLeft: 20}}
        open={open4}
        value={value4}
        items={items4}
        setOpen={setOpen4}
        setValue={setValue4}
        setItems={setItems4}
        placeholder="Domaine"
        searchable={true}
        dropDownDirection="DOWN"
        onOpen={onOpen4}
        searchPlaceholder="Recherchez ..."
        multiple={true}
        min={0}
        max={8}
        placeholderStyle={{color: "#006494",}}
        dropDownContainerStyle={{width: "103%", borderColor: "#f5f5f5", borderBottomWidth: 3, borderBottomColor: "#006494", borderColor: "#f5f5f5", marginLeft: 20}}
        searchContainerStyle={{borderColor: "#12ff"}}
        selectedItemContainerStyle={{backgroundColor: "#006494"}}
        selectedItemLabelStyle={{color: "#fff"}}
        searchContainerStyle={{padding: 10, borderBottomWidth: 0}}
      />
      </View>
      <View style={{width: 365, margin: 10, marginLeft: 15, flexDirection: "row", justifyContent:"space-between"}}>
       
          <TouchableOpacity disabled={true}
          style={{backgroundColor:"#f1f3f4", borderColor: "#ddd", borderWidth: 1, width: 175}}>
            <Text style={{padding: 10, color: "#999", fontSize: 15,}}>Reinitialiser les filtres</Text>
          </TouchableOpacity>

          <View style={{borderColor: "#4d6072", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderBottomWidth: 2,}}>
          <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}
          style={{backgroundColor:"transparent",  width: 175}}>
            <Text style={{padding: 10, color: "#4d6072", fontSize: 13, textAlign: "center", fontWeight: "500"}}> <Text style={{fontSize: 18}}>+</Text>  PLUS DE FILTRES</Text>
          </TouchableOpacity>
          </View>
          
        
      </View>
      </View>
      <View style={{zIndex: -1000}}>
      <Text style={{fontWeight: "bold", color: "#000", fontSize: 15,  paddingLeft: 10, paddingRight: 10,}}>Aucune donnée trouvée, 
      <Text style={{fontWeight: "normal"}}> vous voudriez <Text style={{color: "rgb(0, 100, 148)"}} onPress={()=> Linking.openURL("http://google.com")}>réinitialiser les filtres?</Text></Text> </Text>
      </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     borderWidth: 0,
     padding: 10,
     width: 330,
     borderRadius: 7,
     borderColor: "#e3dada",
     borderLeftWidth: 0,
     marginLeft: 5,
     color: "#245c95"
   },
   container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    width: "93%",
    borderWidth: 1,
    borderColor: "#e3dada",
    borderRadius: 7,
    paddingLeft: 10,
    height: 40,
    margin: 5,
    marginLeft: 15,
   },
   secondContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    width: "93%",
    borderWidth: 1,
    borderColor: "#e3dada",
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    margin: 5,
    marginLeft: 15,
    zIndex: 3000,
    maxHeight: 50
   },
   thirdContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 170,
    height: 50,
    margin: 5,
    marginLeft: 15,
    marginTop: 20,
    zIndex: 2000,
   },
   fourthContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 170,
    height: 50,
    margin: 5,
    marginLeft: 15,
    zIndex: 1000,
   },
   picker: {
    
   }
 });
 
export default UselessTextInput;
