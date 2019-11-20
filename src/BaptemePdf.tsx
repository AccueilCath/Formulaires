import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { keys } from 'ts-transformer-keys';


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

export interface BaptemeProps {
  dateBapteme: string;
  lieu: string;
  lieuExterieur: string;
  dateDemande: string;
  enregistreur: string;
  enfant: string;
  dateEnfant: string;
  lieuEnfant: string;
  pere: string;
  mere: string;
  adresseFamille: string;
  tel: string;
  email: string;
  parrain: string;
  parrainBaptise: string;
  parrainAge: string;
  marraine: string;
  marraineBaptisee: string;
  marraineAge: string;
  frere1?: string;
  frere1Age?: string;
  frere2?: string;
  frere2Age?: string;
  frere3?: string;
  frere3Age?: string;
  frere4?: string;
  frere4Age?: string;
  frere5?: string;
  frere5Age?: string;
  frere6?: string;
  frere6Age?: string;
  frere7?: string;
  frere7Age?: string;
  preparation: string;
}

const formatDate = (inDate: string): string => {
  return inDate.split('-').reverse().join('/');
};

export const getBaptemeProps = ():BaptemeProps => {
  const props = {} as BaptemeProps;
  keys<BaptemeProps>().forEach(key => {
    const elt = document.getElementById(key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};

export const getBaptemeHTML = (props: BaptemeProps):string => (
  `Date du Baptême : ${formatDate(props.dateBapteme)}
Lieu de célébration : ${props.lieu} ${props.lieuExterieur?props.lieuExterieur:''}
*******************************************
Demande faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}
*******************************************
Nom et prénom de l'enfant : ${props.enfant}
Date de naissance et lieu : ${formatDate(props.dateEnfant)} à ${props.lieuEnfant}
*******************************************
Prénom du père : ${props.pere}
Prénom et nom de jeune fille de la mère : ${props.mere}
Adresse de la famille: ${props.adresseFamille}
N° de téléphone: ${props.tel}
Adresse e-mail : ${props.email}
*******************************************
Nom est prénom du parrain : ${props.parrain}
Age : ${props.parrainAge}
Baptisé : ${props.parrainBaptise}
Nom est prénom de la marraine : ${props.marraine}
Age : ${props.marraineAge}
Baptisé : ${props.marraineBaptisee}
*******************************************
Frères et Soeurs :
Nom et prénom: Age
${props.frere1}: ${props.frere1Age}
${props.frere2}: ${props.frere2Age}
${props.frere3}: ${props.frere3Age}
${props.frere4}: ${props.frere4Age}
${props.frere5}: ${props.frere5Age}
${props.frere6}: ${props.frere6Age}
${props.frere7}: ${props.frere7Age}
*******************************************
Choix de la session de préparation : ${props.preparation}
`
);

// Create Document Component
export const BaptemePdf:React.FC<BaptemeProps> = ({  dateBapteme, lieu, lieuExterieur, dateDemande, enregistreur, enfant, dateEnfant, lieuEnfant, pere, mere, adresseFamille, tel, email, parrain, parrainBaptise, parrainAge, marraine, marraineBaptisee, marraineAge, frere1, frere1Age, frere2, frere2Age, frere3, frere3Age, frere4, frere4Age, frere5, frere5Age, frere6, frere6Age, frere7, frere7Age, preparation}) => (
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