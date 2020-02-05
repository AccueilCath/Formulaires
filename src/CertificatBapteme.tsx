import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';
import { MailTo } from './mailto';
import { formatDate, getCCEmail, today, useStyles } from './utils';
import { saveForm, localStorageAvailable, isSaved, getKey, removeForm } from './LocalStorage';
import { CERT_BAPTEME_IDX, CertificatBaptemeProps } from './Props';

export const CertificatBapteme:React.FC<{data?:CertificatBaptemeProps}> = ({data}) => {
  const classes = useStyles();
  const [draftSaved, setDraftSaved] = React.useState(0);

  const [motif, setmotif] = React.useState(data?data.motif:'Communion');
  const [dateDemande, setdateDemande] = React.useState(data?data.dateDemande:today());
  const [enregistreur, setenregistreur] = React.useState(data?data.enregistreur:'');
  const [nom, setnom] = React.useState(data?data.nom:'');
  const [nomFille, setnomFille] = React.useState(data?data.nomFille:'');
  const [mere, setmere] = React.useState(data?data.mere:'');
  const [egliseBapteme, setegliseBapteme] = React.useState(data?data.egliseBapteme:'');
  const [dateBapteme, setdateBapteme] = React.useState(data?data.dateBapteme:'');
  const [dateNaissance, setdateNaissance] = React.useState(data?data.dateNaissance:'');
  const [tel, settel] = React.useState(data?data.tel:'');
  const [email, setemail] = React.useState(data?data.email:'');
  const [livraison, setlivraison] = React.useState(data?data.livraison:'viendra chercher dans une dizaine de jours');
  const [adresseLivraison, setadresseLivraison] = React.useState(data?data.adresseLivraison:'');
  const getProps = () => ({
    motif,
    dateDemande,
    enregistreur,
    nom,
    nomFille,
    mere,
    egliseBapteme,
    dateBapteme,
    dateNaissance,
    tel,
    email,
    livraison,
    adresseLivraison
  });
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
                <RadioGroup aria-label="motif" value={motif} onChange={(e:any)=>setmotif(e.target.value)} >
                <FormControlLabel value="Communion" control={<Radio />} label="Communion" />
                <FormControlLabel value="Confirmation" control={<Radio />} label="Confirmation" />
                  <FormControlLabel value="Parrain, marraine" control={<Radio />} label="Parrain, marraine" />
                  <FormControlLabel value="Entrée en école privée" control={<Radio />} label="Entrée en école privée" />
                  <FormControlLabel value="Divers" control={<Radio />} label="Divers" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Demande faite le"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateDemande} onChange={(e:any)=>setdateDemande(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="par"
                  className={classes.textField}
                  margin="normal"
                  value={enregistreur} onChange={(e:any)=>setenregistreur(e.target.value)}
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
                  label="Nom et prénom"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nom} onChange={(e:any)=>setnom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nom de Jeune Fille"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nomFille} onChange={(e:any)=>setnomFille(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Nom de jeune fille de la mère"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={mere} onChange={(e:any)=>setmere(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Eglise du Baptême"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={egliseBapteme} onChange={(e:any)=>setegliseBapteme(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              {/*
                <TextField
                  required
                  label="Date du baptême"
                  className={classes.textField}
                  margin="normal"
                  
                  value={dateBapteme} onChange={(e:any)=>setdateBapteme(e.target.value)}
                />
              */}
                <FormControl margin="normal" className={classes.textField}>
                  <InputLabel htmlFor="formatted-text-mask-input">Date du baptême</InputLabel>
                  <Input
                    value={dateBapteme}
                    onChange={(e:any)=>setdateBapteme(e.target.value)}
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom as any}
                    margin="dense"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Date de naissance"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateNaissance} onChange={(e:any)=>setdateNaissance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="N° de téléphone"
                  className={classes.textField}
                  margin="normal"
                  type="phone"
                  value={tel} onChange={(e:any)=>settel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                  value={email} onChange={(e:any)=>setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup aria-label="livraison" value={livraison} onChange={(e:any)=>setlivraison(e.target.value)} >
                          <FormControlLabel value="viendra chercher dans une dizaine de jours" control={<Radio />} label="viendra chercher dans une dizaine de jours" />
                          <FormControlLabel value="à envoyer :" control={<Radio />} label="à envoyer :" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Adresse"
                        className={classes.textField}
                        margin="normal"
                        disabled={livraison !== 'à envoyer :'}
                        value={adresseLivraison} onChange={(e:any)=>setadresseLivraison(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {localStorageAvailable() && 
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DraftsIcon/>} onClick={() => {
            saveForm(CERT_BAPTEME_IDX, getProps());
            setDraftSaved(draftSaved+1);
          }}>
            Enregistre un brouillon
          </Button>
          }
          {localStorageAvailable() && isSaved(CERT_BAPTEME_IDX) &&
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DeleteIcon/>} onClick={() => {
            removeForm(getKey(CERT_BAPTEME_IDX));
            setDraftSaved(draftSaved+1);
          }}>
            Supprime le brouillon
          </Button>
          }
          <MailTo 
            email={process.env.TO_EMAIL_CERTIFICAT||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'CertificatBapteme')} 
            subject="Demande de Certificat de Baptême" 
            content={() => getCertificatBaptemeEmail(getProps())} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

const getCertificatBaptemeEmail = (props: CertificatBaptemeProps):string => {
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

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[\s\d]/, /[\s\d]/, '/', /[\s\d]/, /[\s\d]/, '/',  /[\d]/, /\d/, /\d/, /\d/]}
      showMask
      placeholderChar={'\u2000'}
      pipe={createAutoCorrectedDatePipe('dd/mm/yyyy', {minYear:1800, maxYear: new Date().getFullYear()})}
    />
  );
}

const maxValueMonth = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const formatOrder = ['yyyy', 'yy', 'mm', 'dd', 'HH', 'MM', 'SS']
const createAutoCorrectedDatePipe = (dateFormat = 'mm dd yyyy', {
  minYear = 1,
  maxYear = 9999
} = {}) => {
  const dateFormatArray = dateFormat
    .split(/[^dmyHMS]+/)
    .sort((a, b) => formatOrder.indexOf(a) - formatOrder.indexOf(b))
  return (conformedValue: string) => {
    const indexesOfPipedChars:number[] = []
    const maxValue:any = {'dd': 31, 'mm': 12, 'yy': 99, 'yyyy': maxYear, 'HH': 23, 'MM': 59, 'SS': 59}
    const minValue:any = {'dd': 1, 'mm': 1, 'yy': 0, 'yyyy': minYear, 'HH': 0, 'MM': 0, 'SS': 0}
    const conformedValueArr = conformedValue.split('')

    // Check first digit
    dateFormatArray.forEach((format) => {
      const position = dateFormat.indexOf(format)
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10)

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position]
        conformedValueArr[position] = '' + 0
        indexesOfPipedChars.push(position)
      }
    })

    // Check for invalid date
    let month = 0
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format)
      const length = format.length
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '')
      const value = parseInt(textValue, 10)
      if (format === 'mm') {
        month = value || 0
      }
      const maxValueForFormat = format === 'dd' ? maxValueMonth[month] : maxValue[format]
      if (format === 'yyyy' && (minYear !== 1 || maxYear !== 9999)) {
        const scopedMaxValue = parseInt(maxValue[format].toString().substring(0, textValue.length), 10)
        const scopedMinValue = parseInt(minValue[format].toString().substring(0, textValue.length), 10)
        return value < scopedMinValue || value > scopedMaxValue
      }
      return value > maxValueForFormat || (textValue.length === length && value < minValue[format])
    })

    if (isInvalid) {
      return false
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars
    }
  }
}