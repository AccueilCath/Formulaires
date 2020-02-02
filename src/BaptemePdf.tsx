/*
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { formatDate } from './utils';
import { BaptemeProps, getBaptemeProps } from './Props';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  title: {
    fontWeight: 'bold'
  }
});

// Create Document Component
export const BaptemePdf:React.FC<BaptemeProps> = ({  dateBapteme, dateDemande, lieu, lieuExterieur, enregistreur, enfant, dateEnfant, lieuEnfant, pere, mere, adresseFamille, tel, email, parrain, parrainBaptise, parrainAge, marraine, marraineBaptisee, marraineAge, frere1, frere1Age, frere2, frere2Age, frere3, frere3Age, frere4, frere4Age, frere5, frere5Age, frere6, frere6Age, frere7, frere7Age, preparation}) => (
  <Document title="Demande de baptême">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Demande de Baptême</Text>
        <Text>Date du Baptême : {formatDate(dateBapteme)}</Text>
        <Text>Lieu de célébration : {lieu} {lieuExterieur}</Text>
      </View>
      <View style={styles.section}>
        <Text>Demande faite le : {formatDate(dateDemande)} par : {enregistreur}</Text>
      </View>
      <View style={styles.section}>
        <Text>Nom et prénom de l'enfant : {enfant}</Text>
        <Text>Date de naissance et lieu : {formatDate(dateEnfant)} à {lieuEnfant}</Text>
      </View>
      <View style={styles.section}>
        <Text>Prénom du père : {pere}</Text>
        <Text>Prénom et nom de jeune fille de la mère : {mere}</Text>
        <Text>Adresse de la famille: {adresseFamille}</Text>
        <Text>N° de téléphone: {tel}</Text>
        <Text>Adresse e-mail : {email}</Text>
      </View>
      <View style={styles.section}>
        <Text>Nom est prénom du parrain : {parrain}</Text>
        <Text>Baptisé : {parrainBaptise} Age : {parrainAge}</Text>
        <Text>Nom est prénom de la marraine : {marraine}</Text>
        <Text>Baptisé : {marraineBaptisee} Age : {marraineAge}</Text>
      </View>
      <View style={styles.section}>
        <Text>Frères et Soeurs : </Text>
        <Text>Nom et prénom              Age</Text>
        <Text>{frere1}              {frere1Age}</Text>
        <Text>{frere2}              {frere2Age}</Text>
        <Text>{frere3}              {frere3Age}</Text>
        <Text>{frere4}              {frere4Age}</Text>
        <Text>{frere5}              {frere5Age}</Text>
        <Text>{frere6}              {frere6Age}</Text>
        <Text>{frere7}              {frere7Age}</Text>
      </View>
      <View style={styles.section}>
        <Text>Choix de la session de préparation : {preparation}</Text>
      </View>
    </Page>
  </Document>
);
*/