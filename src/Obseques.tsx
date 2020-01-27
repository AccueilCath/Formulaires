import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MailTo } from './mailto';
import { formatDate, getCCEmail, today, useStyles } from './utils';
import { keys } from 'ts-transformer-keys';

export const Obseques:React.FC<{}> = () => {
  const classes = useStyles();
  const [typeCelebration, setTypeCelebration] = React.useState('Messe');
  const changeTypeCelebration = (event:React.ChangeEvent<HTMLInputElement>) => setTypeCelebration(event.target.value);
  const [typeRite, setTypeRite] = React.useState('Inhumation');
  const changeTypeRite = (event:React.ChangeEvent<HTMLInputElement>) => setTypeRite(event.target.value);

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
            <Grid item xs={12}><Typography>Renseignements à recueillir auprès des Pompes Funèbres</Typography></Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="type de Celebration" name="typeCelebration" value={typeCelebration} onChange={changeTypeCelebration} row >
                  <FormControlLabel value="Messe" control={<Radio />} label="Messe" />
                  <FormControlLabel value="Bénédiction" control={<Radio />} label="Bénédiction" />
                </RadioGroup>
              </FormControl>
              <input style={{display: 'none'}} id="obs_typeCelebration" value={typeCelebration} readOnly />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="obs_celebrant"
                label="Célébrant"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="obs_dateCeremonie"
                label="Date de la cérémonie"
                type="date"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="obs_heureCeremonie"
                label="Heure de la cérémonie"
                type="time"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="obs_lieuCeremonie"
                label="Lieu de la cérémonie"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  required
                  id="obs_dateDemande"
                  label="Demande faite le"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={today()}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="obs_enregistreur"
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
                  id="obs_nom"
                  label="Nom du défunt"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="obs_nomFille"
                  label="Nom de jeune fille (s'il y a lieu)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="obs_prenoms"
                  label="Prénom (s)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="obs_dateNaissance"
                  label="Date du naissance du défunt"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="obs_dateDeces"
                  label="Date du décès"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="obs_lieuDeces"
                  label="Lieu du décès"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="typeRite" name="typeRite" value={typeRite} onChange={changeTypeRite} row >
                    <FormControlLabel value="Inhumation" control={<Radio />} label="Inhumation" />
                    <FormControlLabel value="Crémation" control={<Radio />} label="Crémation" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="obs_typeRite" value={typeRite} readOnly />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="obs_lieuRite"
                  label="Lieu"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="obs_adresseDefunt"
                  label="Adresse du défunt"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        id="obs_contact"
                        label="Nom et prénom de la personne à contacter"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="obs_parente"
                        label="Lien de parenté avec le défunt"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="obs_adresse"
                        label="Adresse"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="obs_tel"
                        label="N° de téléphone fixe"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="obs_mobile"
                        label="N° de téléphone portable"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="obs_email"
                        label="Adresse e-mail"
                        className={classes.textField}
                        margin="normal"
                        type="email"
                        fullWidth
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
                        id="obs_pompesFunebres"
                        label="Entreprise des Pompes Funèbres"
                        className={classes.textField}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="obs_telPompesFunebres"
                        label="N° de téléphone"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <MailTo 
            email={process.env.TO_EMAIL_OBSEQUES||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Obseques')} 
            subject="Demande d'Obsèques" 
            content={() => getObsequesEmail()} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

interface ObsequeProps {
  typeCelebration: string;
  dateDemande: string;
  enregistreur: string;
  celebrant: string;
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

const getObsequesEmail = ():string => {
  const props = getObsequeProps();
  return `Demande d'Obsèques faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}
*******************************************
Célébration : ${props.typeCelebration}
Célébrant : ${props.celebrant}
Date et heure de la cérémonie : ${formatDate(props.dateCeremonie)} ${props.heureCeremonie}
Lieu de la cérémonie : ${props.lieuCeremonie}
*******************************************
Nom du défunt : ${props.nom}
Nom de jeune fille : ${props.nomFille}
Prénom(s) : ${props.prenoms}
Date de naissance du défunt : ${formatDate(props.dateNaissance)}
Date et lieu du décès : ${formatDate(props.dateDeces)} à ${props.lieuDeces}
${props.typeRite}
Lieu : ${props.lieuRite}
Adresse du défunt : ${props.adresseDefunt}
*******************************************
Nom et prénom de la personne à contacter : ${props.contact}
Lien de parenté avec le défunt : ${props.parente}
Adresse : ${props.adresse}
Tel fixe : ${props.tel} Tel portable : ${props.mobile}
Adresse e-mail : ${props.email}
*******************************************
Entreprise des Pompes Funèbres : ${props.pompesFunebres}
Tel : ${props.telPompesFunebres}
`
};

const getObsequeProps = ():ObsequeProps => {
  const props = {} as ObsequeProps;
  keys<ObsequeProps>().forEach(key => {
    const elt = document.getElementById('obs_' + key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};
