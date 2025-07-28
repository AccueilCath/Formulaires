import { KEY_SEPARATOR, loadForm } from './LocalStorage';
import { setInputValue } from './utils';

export const BAPTEME_IDX = 0;
export const CERT_BAPTEME_IDX = 1;
export const OBSEQUES_IDX = 2;
export const MARIAGE_IDX = 3;
export const BROUILLONS_IDX = 4;
export const INTENTION_IDX = 5;
export const FORM_LIBS = ['Baptême', 'Certificat de Baptême', 'Obsèques', 'Mariage', 'En Attente', 'Intention de Messe'];

export const EGLISES = [ 'Cathédrale Saint Louis', "Église Sainte Jeanne d'Arc", "Église Sacré-Cœur", "Église Notre Dame", "Église Saint Sauveur", "Chapelle Saint-Louis", "Église Saint-Nicolas", "Chapelle et Centre Jean-Baptiste Souzy"]

export interface BaptemeProps {
  dateBapteme: string;
//  lieu: string;
//  lieuExterieur: string;
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

export interface CertificatBaptemeProps {
  motif: string;
  dateDemande: string;
  enregistreur: string;
  nom: string;
  nomFille: string;
  mere: string;
  egliseBapteme: string;
  dateBapteme: string;
  dateNaissance: string;
  tel: string;
  email: string;
  livraison: string;
  adresseLivraison: string;
}

export interface ObsequesProps {
  typeCelebration: string;
  dateDemande: string;
  enregistreur: string;
  celebrant: string;
  emailCelebrant: string;
  dateCeremonie: string;
  heureCeremonie: string;
  lieuCeremonie: string;
  nom: string;
  nomFille: string;
  prenoms: string;
  dateNaissance: string;
  dateDeces: string;
  lieuDeces: string;
  typeRite: string;
  lieuRite: string;
  adresseDefunt: string;
  contact: string;
  parente: string;
  adresse: string;
  tel: string;
  mobile: string;
  email: string;
  pompesFunebres: string;
  telPompesFunebres: string;
  emailSacristain: string;
}

export interface MariageProps {
  lui: string;
  elle: string;
  dateSouhaitee: string;
  horaire: string;
  dateDemande: string;
  enregistreur: string;
  preparationPar: string;
  preparation: string;
  horsParoisse: string;
  horsDiocese: string;
  celebration: string;
  messe: string;
  lieuCelebration: string;
  egliseCelebration: string;
  dioceseCelebration: string;
  celebrant: string;
  casuel: string;
  nomFiance: string;
  prenomFiance: string;
  pereFiance: string;
  mereFiance: string;
  mereJeuneFiance: string;
  dateNaissanceFiance: string;
  lieuNaissanceFiance: string;
  professionFiance: string;
  domicileFiance: string;
  domicileFuturFiance: string;
  telFiance: string;
  mobileFiance: string;
  emailFiance: string;
  dateBaptemeFiance: string;
  lieuBaptemeFiance: string;
  communionFiance: string;
  confirmationFiance: string;
  marieFiance: string;
  enfantsFiance: string;
  nbEnfantsFiance: string;
  nomFiancee: string;
  prenomFiancee: string;
  pereFiancee: string;
  mereFiancee: string;
  mereJeuneFiancee: string;
  dateNaissanceFiancee: string;
  lieuNaissanceFiancee: string;
  professionFiancee: string;
  domicileFiancee: string;
  domicileFuturFiancee: string;
  telFiancee: string;
  mobileFiancee: string;
  emailFiancee: string;
  dateBaptemeFiancee: string;
  lieuBaptemeFiancee: string;
  communionFiancee: string;
  confirmationFiancee: string;
  marieFiancee: string;
  enfantsFiancee: string;
  nbEnfantsFiancee: string;
}

export interface IntentionMesseProps {
  dateDemande: string;
  enregistreur: string;
  celebrant: string;
  emailCelebrant: string;
  eglise: string;
  dateIntention: string;
  heureIntention: string;
  nom: string;
  decede: string;
}


export type FormulaireProps = BaptemeProps|CertificatBaptemeProps|ObsequesProps|MariageProps|IntentionMesseProps|undefined;

export const getCachedData = (val: string): FormulaireProps => {
  const parts = val.split(KEY_SEPARATOR);
  if (parts.length > 2) {
    setInputValue('timestamp', parts[2]);
    switch (parseInt(parts[1])) {
      case BAPTEME_IDX:
        return loadForm<BaptemeProps>(val);
      case CERT_BAPTEME_IDX:
        return loadForm<CertificatBaptemeProps>(val);
      case OBSEQUES_IDX:
        return loadForm<ObsequesProps>(val);
      case MARIAGE_IDX:
        return loadForm<MariageProps>(val);
      case INTENTION_IDX:
        return loadForm<IntentionMesseProps>(val);
    }
  }
  return undefined;
}
