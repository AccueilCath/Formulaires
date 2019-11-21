import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { BaptemePdf, getBaptemeProps, getBaptemeHTML } from './BaptemePdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MailTo } from './mailto';
import { formatDate } from './utils';
import { keys } from 'ts-transformer-keys';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  table: {
  },
  paper: {
    marginBottom: '1em'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

export const CertificatBapteme:React.FC<{}> = () => {
  const classes = useStyles();
  const [generatePdf, setGeneratePdf] = React.useState(false);
  const [motif, setMotif] = React.useState('Communion');
  const changeMotif = (event:React.ChangeEvent<HTMLInputElement>) => setMotif(event.target.value);
  const [livraison, setLivraison] = React.useState('viendra chercher dans une dizaine de jours');
  const changeLivraison = (event:React.ChangeEvent<HTMLInputElement>) => setLivraison(event.target.value);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid container item justify="center">
          <Paper className={classes.paper}>
            <Grid item xs={12}><Typography>Demande de certificat de baptême</Typography></Grid>
            <Grid item xs={12}><Typography>Si c'est une demande en vue de marriage, renvoyer les personnes vers le prêtre qui fait leur préparation. C'est à lui de faire la demande sur un formulaire spécifique.</Typography></Grid>
            <Grid item xs={12}><Typography>N'accepter que les demandes qui concernent notre paroisse.</Typography></Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Motif de la demande :</FormLabel>
                <RadioGroup aria-label="motif" name="motif" value={motif} onChange={changeMotif} >
                  <FormControlLabel value="Communion" control={<Radio />} label="Communion" />
                  <FormControlLabel value="Parrain, marraine" control={<Radio />} label="Parrain, marraine" />
                  <FormControlLabel value="Entrée en école privée" control={<Radio />} label="Entrée en école privée" />
                  <FormControlLabel value="Divers" control={<Radio />} label="Divers" />
                </RadioGroup>
              </FormControl>
              <input style={{display: 'none'}} id="motif" value={motif} readOnly />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  required
                  id="dateDemande"
                  label="Demande faite le"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={today}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="enregistreur"
                  label="par"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nom"
                  label="Nom et prénom"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="nomFille"
                  label="Nom de Jeune Fille"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mere"
                  label="Nom de jeune fille de la mère"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="egliseBapteme"
                  label="Eglise du Baptême"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="dateBapteme"
                  label="Date du baptême"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="dateNaissance"
                  label="Date de naissance"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="tel"
                  label="N° de téléphone"
                  className={classes.textField}
                  margin="normal"
                  type="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="livraison" name="livraison" value={livraison} onChange={changeLivraison} >
                    <FormControlLabel value="viendra chercher dans une dizaine de jours" control={<Radio />} label="viendra chercher dans une dizaine de jours" />
                    <FormControlLabel value="à envoyer :" control={<Radio />} label="à envoyer :" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="livraison" value={livraison} readOnly />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="adresseLivraison"
                  label="Adresse"
                  className={classes.textField}
                  margin="normal"
                  disabled={livraison !== 'à envoyer :'}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <MailTo email={process.env.TO_EMAIL||''} classement={process.env.CC_EMAIL||''} subject="Demande de Certificat de Baptême" content={() => getCertificatBaptemeHTML()} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

interface CertificatBaptemeProps {
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

const getCertificatBaptemeHTML = ():string => {
  const props = getCertificatBaptemeProps();
  return `Demande faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}
Motif de la Demande : ${props.motif}
*******************************************
Nom et prénom : ${props.nom}
Nom de Jeune Fille : ${props.nomFille}
Nom de la Mère : ${props.mere}
Eglise du Baptême : ${props.egliseBapteme}
Date du Baptême : ${props.dateBapteme}
Date de Naissance : ${props.dateNaissance}
N° de téléphone: ${props.tel}
Adresse e-mail : ${props.email}
*******************************************
${props.livraison} ${props.adresseLivraison}
`
};

const getCertificatBaptemeProps = ():CertificatBaptemeProps => {
  const props = {} as CertificatBaptemeProps;
  keys<CertificatBaptemeProps>().forEach(key => {
    const elt = document.getElementById(key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};
