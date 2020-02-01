import { keys } from 'ts-transformer-keys';

export const BAPTEME_IDX = 0;
export const CERT_BAPTEME_IDX = 1;
export const OBSEQUES_IDX = 2;
export const MARIAGE_IDX = 3;
export const BROUILLONS_IDX = 4;
export const FORM_LIBS = ['Baptême', 'Certificat de Baptême', 'Obsèques', 'Mariage', 'En Attente'];

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
  parente: String;
  adresse: string;
  tel: string;
  mobile: string;
  email: string;
  pompesFunebres: string;
  telPompesFunebres: string;
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
  nomFiance: string;
  prenomFiance: string;
  pereFiance: string;
  mereFiance: string;
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

export type FormulaireProps = BaptemeProps|CertificatBaptemeProps|ObsequesProps|MariageProps|undefined;

export const getObsequesProps = ():ObsequesProps => {
  const props = {} as ObsequesProps;
  keys<ObsequesProps>().forEach(key => {
    const elt = document.getElementById('obs_' + key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};

export const setObsequesProps = (props: ObsequesProps) => {
  keys<ObsequesProps>().forEach(key => {
    const elt = document.getElementById('obs_' + key) as HTMLInputElement;
    if (elt) {
      elt.value = props[key] as string;
      if (['typeCelebration', 'typeRite'].indexOf(key) >= 0) {
        selectRadioButton('obs_' + key, props[key] as string);
      }
    }
  });
};

export const getBaptemeProps = ():BaptemeProps => {
  const props = {} as BaptemeProps;
  keys<BaptemeProps>().forEach(key => {
    const elt = document.getElementById('bap_'+key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};

export const setBaptemeProps = (props:BaptemeProps) => {
  keys<BaptemeProps>().forEach(key => {
    const elt = document.getElementById('bap_'+key) as HTMLInputElement;
    if (elt) {
      elt.value = props[key] as string;
      if (['parrainBaptise', 'marraineBaptisee'].indexOf(key) >= 0) {
        selectRadioButton('bap_' + key, props[key] as string);
      }
    }
  });
};

export const getMariageProps = ():MariageProps => {
  const props = {} as MariageProps;
  keys<MariageProps>().forEach(key => {
    const elt = document.getElementById('mar_' + key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};

export const setMariageProps = (props: MariageProps) => {
  keys<MariageProps>().forEach(key => {
    const elt = document.getElementById('mar_' + key) as HTMLInputElement;
    if (elt) {
      elt.value = props[key];
      if (['horaire', 'preparation', 'celebration', 'messe', 'lieuCelebration', 'communionFiance', 'confirmationFiance', 'marieFiance', 'enfantsFiance', 'communionFiancee', 'confirmationFiancee', 'marieFiancee', 'enfantsFiancee'].indexOf(key) >= 0) {
        selectRadioButton('mar_' + key, props[key]);
      }
    }
  });
  return props;
};

export const getCertificatBaptemeProps = ():CertificatBaptemeProps => {
  const props = {} as CertificatBaptemeProps;
  keys<CertificatBaptemeProps>().forEach(key => {
    const elt = document.getElementById('cba_' + key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};

export const setCertificatBaptemeProps = (props: CertificatBaptemeProps) => {
  keys<CertificatBaptemeProps>().forEach(key => {
    const elt = document.getElementById('cba_' + key) as HTMLInputElement;
    if (elt) {
      elt.value = props[key];
      if (['motif', 'livraison'].indexOf(key) >= 0) {
        selectRadioButton('cba_' + key, props[key]);
      }
    }
  });
};

const selectRadioButton = (name: string, value: string) => {
  const rbs = document.getElementsByName(name);
  if (rbs && rbs.length) {
    rbs.forEach(rb => {
      if ((rb as HTMLInputElement).value == value) {
        (rb as HTMLInputElement).checked = true;
      } else {
        (rb as HTMLInputElement).checked = false;
      }
    });
  }
}

export const LISTE_CELEBRANTS:Array<{nom: string, email: string}> = [
  {nom: 'Père David', email: 'David@eglise.fr'}, 
  {nom: 'Père Bertrand Monard', email: 'Bertrand@eglise.fr'}
];