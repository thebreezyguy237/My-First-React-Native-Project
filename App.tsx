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
 import {View, SafeAreaView, StyleSheet, TextInput, Text, Button, Alert, Linking } from "react-native";
 
 const UselessTextInput = () => {
   const [text, onChangeText] = React.useState(null);
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
    <SafeAreaView>
     <View style={{paddingTop: 20, paddingBottom: 10, backgroundColor: "#f2f0f0"}}>
      <View
        style={styles.container}>
       <Text style={{fontWeight: "bold", fontSize: 15, color: "#000"}}>
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
        <Text style={{fontWeight: "bold", paddingRight: 10, fontSize: 15, color: "#000"}}>Où </Text>
        <DropDownPicker 
          style={{width: 346, borderLeftWidth: 0, borderColor: "#ebe1c5"}}
          open={open}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          placeholder="Pays"
          dropDownDirection="TOP"
          zIndex={3000}
          zIndexInverse={1000}
          onOpen={onOpen}
        />
       {/*<TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
   />*/}
      </View>
      <View 
      style={styles.thirdContainer}>
        <DropDownPicker 
        style={{width: 190, borderWidth: 2, borderColor: "#006494", }}
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
        placeholder="Type"
        searchable={true}
        searchPlaceholder="Recherchez..."
        dropDownDirection="DOWN"
        multiple={true}
        min={0}
        max={8}
        zIndex={2000}
        zIndexInverse={2000}
        onOpen={onOpen1}
        showTickIcon={true}
      />
      <DropDownPicker 
        style={{width: 190, borderWidth: 2, borderColor: "#006494"}}
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
        placeholder="Catégories"
        dropDownDirection="DOWN"
        zIndex={2000}
        zIndexInverse={2000}
        onOpen={onOpen2}
      />
      </View>

      <View 
      style={styles.fourthContainer}>
        <DropDownPicker 
        style={{width: 190, borderWidth: 2, borderColor: "#006494"}}
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
        placeholder="Secteur"
        searchable={true}
        dropDownDirection="TOP"
        zIndex={1000}
        zIndexInverse={3000}
        onOpen={onOpen3}
        searchPlaceholder="Recherchez ..."
        multiple={true}
        min={0}
        max={8}
      />
      <DropDownPicker 
        style={{width: 190, borderWidth: 2, borderColor: "#006494"}}
        open={open4}
        value={value4}
        items={items4}
        setOpen={setOpen4}
        setValue={setValue4}
        setItems={setItems4}
        placeholder="Domaine"
        searchable={true}
        dropDownDirection="TOP"
        zIndex={1000}
        zIndexInverse={3000}
        onOpen={onOpen4}
        searchPlaceholder="Recherchez ..."
        multiple={true}
        min={0}
        max={8}
      />
      </View>
      <View style={{width: 200, margin: 10}}>
        <Button
         title="Reinitialiser les filtres"
         disabled
         onPress={() => Alert.alert('Simple Button pressed')} 
        />
      </View>
      <View style={{width: 200, margin: 10, paddingLeft: 20, paddingRight: 20}}>
        <Button 
          title="+ Plus de filtres"
          onPress={() => Alert.alert('Simple Button pressed')}>
         </Button>
      </View>
      </View>
      <Text style={{fontWeight: "bold", color: "#000", fontSize: 15,  paddingLeft: 10, paddingRight: 10}}>Aucune données trouvée, 
      <Text style={{fontWeight: "normal"}}> vous voudriez <Text style={{color: "rgb(0, 100, 148)"}} onPress={()=> Linking.openURL("http://google.com")}>réinitialiser les filtres?</Text></Text> </Text>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     borderWidth: 0,
     padding: 10,
     width: 320,
     borderRadius: 7,
     borderColor: "#ebe1c5",
     borderLeftWidth: 0,
     marginLeft: 5,
   },
   container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    width: 390,
    borderWidth: 1,
    borderColor: "#ebe1c5",
    borderRadius: 7,
    paddingLeft: 10,
    height: 40,
    margin: 5,
    marginLeft: 10,
   },
   secondContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    width: 390,
    borderWidth: 1,
    borderColor: "#ebe1c5",
    borderRadius: 7,
    paddingLeft: 10,
    height: 50,
    margin: 5,
    marginLeft: 10,
   },
   thirdContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    height: 50,
    margin: 5,
    marginLeft: 10,
    marginTop: 20,
   },
   fourthContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    height: 50,
    margin: 5,
    marginLeft: 10,
   },
   selectedCB: {
    borderWidth: 1,
    borderColor: "#006494"
   }
 });
 
export default UselessTextInput;
