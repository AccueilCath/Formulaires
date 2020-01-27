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
import { makeStyles } from '@material-ui/core/styles';
import { MailTo } from './mailto';
import { formatDate, getCCEmail, today, useStyles } from './utils';
import { keys } from 'ts-transformer-keys';

export const Mariage:React.FC<{}> = () => {
  const classes = useStyles();
  const [horaire, setHoraire] = React.useState('14h30');
  const changeHoraire = (event:React.ChangeEvent<HTMLInputElement>) => setHoraire(event.target.value);
  const [preparation, setPreparation] = React.useState('dans la paroisse');
  const changePreparation = (event:React.ChangeEvent<HTMLInputElement>) => setPreparation(event.target.value);
  const [celebration, setCelebration] = React.useState('oui');
  const changeCelebration = (event:React.ChangeEvent<HTMLInputElement>) => setCelebration(event.target.value);
  const [messe, setMesse] = React.useState('oui');
  const changeMesse = (event:React.ChangeEvent<HTMLInputElement>) => setMesse(event.target.value);
  const [lieuCelebration, setLieuCelebration] = React.useState('dans la paroisse');
  const changeLieuCelebration = (event:React.ChangeEvent<HTMLInputElement>) => setLieuCelebration(event.target.value);
  const [communionFiance, setCommunionFiance] = React.useState('oui');
  const changeCommunionFiance = (event:React.ChangeEvent<HTMLInputElement>) => setCommunionFiance(event.target.value);
  const [confirmationFiance, setConfirmationFiance] = React.useState('oui');
  const changeConfirmationFiance = (event:React.ChangeEvent<HTMLInputElement>) => setConfirmationFiance(event.target.value);
  const [marieFiance, setMarieFiance] = React.useState('non');
  const changeMarieFiance = (event:React.ChangeEvent<HTMLInputElement>) => setMarieFiance(event.target.value);
  const [enfantsFiance, setEnfantsFiance] = React.useState('non');
  const changeEnfantsFiance = (event:React.ChangeEvent<HTMLInputElement>) => setEnfantsFiance(event.target.value);
  const [communionFiancee, setCommunionFiancee] = React.useState('oui');
  const changeCommunionFiancee = (event:React.ChangeEvent<HTMLInputElement>) => setCommunionFiancee(event.target.value);
  const [confirmationFiancee, setConfirmationFiancee] = React.useState('oui');
  const changeConfirmationFiancee = (event:React.ChangeEvent<HTMLInputElement>) => setConfirmationFiancee(event.target.value);
  const [marieFiancee, setMarieFiancee] = React.useState('non');
  const changeMarieFiancee = (event:React.ChangeEvent<HTMLInputElement>) => setMarieFiancee(event.target.value);
  const [enfantsFiancee, setEnfantsFiancee] = React.useState('non');
  const changeEnfantsFiancee = (event:React.ChangeEvent<HTMLInputElement>) => setEnfantsFiancee(event.target.value);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           <Grid container>
            <Grid item xs={2}><Typography variant="h5">Mariage de </Typography></Grid>
            <Grid item xs={5}>
              <TextField
                required
                id="mar_lui"
                label="lui"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                id="mar_elle"
                label="elle"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="mar_dateSouhaitee"
                label="Date souhaitée"
                type="date"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Horaire :</FormLabel>
                <RadioGroup aria-label="horaire souhaité" name="horaire" value={horaire} onChange={changeHoraire} row >
                  <FormControlLabel value="14h30" control={<Radio />} label="14h30" />
                  <FormControlLabel value="16h00" control={<Radio />} label="16h00" />
                </RadioGroup>
              </FormControl>
              <input style={{display: 'none'}} id="mar_horaire" value={horaire} readOnly />
            </Grid>
           </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_dateDemande"
                  label="Demande faite le"
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
                  id="mar_enregistreur"
                  label="par"
                  className={classes.textField}
                  margin="normal"
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
                  required
                  id="mar_preparationPar"
                  label="Préparation par le Père"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Préparation</FormLabel>
                  <RadioGroup aria-label="lieu de préparation" name="preparation" value={preparation} onChange={changePreparation} row >
                    <FormControlLabel value="dans la paroisse" control={<Radio />} label="dans la paroisse" />
                    <FormControlLabel value="hors paroisse" control={<Radio />} label="hors paroisse" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_preparation" value={preparation} readOnly />
              </Grid>
              {preparation !== 'dans la paroisse' &&
              <>
                <Grid item xs={6}>
                  <TextField
                    id="mar_horsParoisse"
                    label="Paroisse de"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="mar_horsDiocese"
                    label="Diocèse"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </>
              }
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Célébration</FormLabel>
                  <RadioGroup aria-label="Célébration" name="celebration" value={celebration} onChange={changeCelebration} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_celebration" value={celebration} readOnly />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Messe</FormLabel>
                  <RadioGroup aria-label="Messe" name="celebration" value={messe} onChange={changeMesse} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_messe" value={messe} readOnly />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="lieu de célébration" name="lieuCelebration" value={lieuCelebration} onChange={changeLieuCelebration} row >
                    <FormControlLabel value="dans la paroisse" control={<Radio />} label="dans la paroisse" />
                    <FormControlLabel value="hors paroisse" control={<Radio />} label="hors paroisse" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_lieuCelebration" value={lieuCelebration} readOnly />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mar_egliseCelebration"
                  label="Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              {lieuCelebration !== 'dans la paroisse' &&
              <>
                <Grid item xs={6}>
                  <TextField
                    id="mar_dioceseCelebration"
                    label="Diocèse"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </>
              }
              <Grid item xs={12}>
                <TextField
                  id="mar_celebrant"
                  label="Prêtre Célébrant"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={2}><Typography variant="h5">Fiancé</Typography></Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="mar_nomFiance"
                  label="Nom Fiancé"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="mar_prenomFiance"
                  label="Prénom Fiancé"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_pereFiance"
                  label="Fils de M"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_mereFiance"
                  label="et de Mme"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_dateNaissanceFiance"
                  label="Date de Naissance"
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
                  id="mar_lieuNaissanceFiance"
                  label="Lieu de Naissance"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_professionFiance"
                  label="Profession"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_domicileFiance"
                  label="Domicile actuel"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_domicileFuturFiance"
                  label="Domicile futur du nouveau foyer"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mar_telFiance"
                  label="N° de téléphone fixe"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mar_mobileFiance"
                  label="N° de téléphone portable"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="mar_emailFiance"
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_dateBaptemeFiance"
                  label="Date de Baptême"
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
                  id="mar_lieuBaptemeFiance"
                  label="Baptême : Commune et Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">1ère communion</FormLabel>
                  <RadioGroup aria-label="1ere communion" name="communionFiance" value={communionFiance} onChange={changeCommunionFiance} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_communionFiance" value={communionFiance} readOnly />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Confirmation</FormLabel>
                  <RadioGroup aria-label="Confirmation" name="confirmationFiance" value={confirmationFiance} onChange={changeConfirmationFiance} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_confirmationFiance" value={confirmationFiance} readOnly />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous déjà été marié civilement ?</FormLabel>
                  <RadioGroup aria-label="marié civilement" name="marieFiance" value={marieFiance} onChange={changeMarieFiance} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_marieFiance" value={marieFiance} readOnly />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous des enfants ?</FormLabel>
                  <RadioGroup aria-label="des enfants" name="enfantsFiance" value={enfantsFiance} onChange={changeEnfantsFiance} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_enfantsFiance" value={enfantsFiance} readOnly />
              </Grid>
              { enfantsFiance !== 'non' &&
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_nbEnfantsFiance"
                  label="Combien ?"
                  className={classes.textField}
                  margin="normal"
                  type="number"
                  defaultValue="1"
                />
              </Grid>
              }
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={2}><Typography variant="h5">Fiancée</Typography></Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="mar_nomFiancee"
                  label="Nom Fiancée"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="mar_prenomFiancee"
                  label="Prénom Fiancée"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_pereFiancee"
                  label="Fille de M"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_mereFiancee"
                  label="et de Mme"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_dateNaissanceFiancee"
                  label="Date de Naissance"
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
                  id="mar_lieuNaissanceFiancee"
                  label="Lieu de Naissance"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_professionFiancee"
                  label="Profession"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_domicileFiancee"
                  label="Domicile actuel"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mar_domicileFuturFiancee"
                  label="Domicile futur du nouveau foyer"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mar_telFiancee"
                  label="N° de téléphone fixe"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mar_mobileFiancee"
                  label="N° de téléphone portable"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="mar_emailFiancee"
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_dateBaptemeFiancee"
                  label="Date de Baptême"
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
                  id="mar_lieuBaptemeFiancee"
                  label="Baptême : Commune et Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">1ère communion</FormLabel>
                  <RadioGroup aria-label="1ere communion" name="communionFiancee" value={communionFiancee} onChange={changeCommunionFiancee} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_communionFiancee" value={communionFiancee} readOnly />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Confirmation</FormLabel>
                  <RadioGroup aria-label="Confirmation" name="confirmationFiancee" value={confirmationFiancee} onChange={changeConfirmationFiancee} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_confirmationFiancee" value={confirmationFiancee} readOnly />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous déjà été mariée civilement ?</FormLabel>
                  <RadioGroup aria-label="mariée civilement" name="marieFiancee" value={marieFiancee} onChange={changeMarieFiancee} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_marieFiancee" value={marieFiancee} readOnly />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous des enfants ?</FormLabel>
                  <RadioGroup aria-label="des enfants" name="enfantsFiancee" value={enfantsFiancee} onChange={changeEnfantsFiancee} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="mar_enfantsFiancee" value={enfantsFiancee} readOnly />
              </Grid>
              { enfantsFiancee !== 'non' &&
              <Grid item xs={6}>
                <TextField
                  required
                  id="mar_nbEnfantsFiancee"
                  label="Combien ?"
                  className={classes.textField}
                  margin="normal"
                  type="number"
                  defaultValue="1"
                />
              </Grid>
              }
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <MailTo 
            email={process.env.TO_EMAIL_MARIAGE||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Mariage')} 
            subject="Demande de Mariage" 
            content={() => getMariageEmail()} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

interface MariageProps {
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

const getMariageEmail = ():string => {
  const props = getMariageProps();
  return `Demande de Mariage faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}
*******************************************
Mariage de ${props.lui} et de ${props.elle}
Date souhaitée : ${props.dateSouhaitee} à ${props.horaire}
*******************************************
Préparation par le père : ${props.preparationPar}
${props.preparation} ${(props.preparation !== 'dans la paroisse') ? ('Eglise : ' + props.horsParoisse + ' Diocèse : ' + props.horsDiocese):''}
*******************************************
Célébration : ${props.celebration} Messe : ${props.messe}
${props.lieuCelebration} : Eglise : ${props.egliseCelebration} ${(props.lieuCelebration !== 'dans la paroisse') ? ('Diocèse : ' + props.dioceseCelebration):''}
Prêtre Célébrant : ${props.celebrant}
*******************************************
Fiancé  Nom : ${props.nomFiance} Prénom : ${props.prenomFiance}
======
Fils de M : ${props.pereFiance} et de Mme : ${props.mereFiance}
Né le : ${formatDate(props.dateNaissanceFiance)} à ${props.lieuNaissanceFiance}
Domicile actuel : ${props.domicileFiance}
Domicile futur du nouveau foyer : ${props.domicileFuturFiance}
Tel fixe : ${props.telFiance} Tel portable : ${props.mobileFiance}
Courriel : ${props.emailFiance}
Baptisé le : ${props.dateBaptemeFiance} à ${props.lieuBaptemeFiance}
1ère communion : ${props.communionFiance}       Confirmation : ${props.confirmationFiance}
Marié civilement : ${props.marieFiance}
Nb Enfants : ${(props.enfantsFiance !== 'non') ? props.nbEnfantsFiance:'0'}
*******************************************
Fiancée  Nom : ${props.nomFiancee} Prénom : ${props.prenomFiancee}
======
Fille de M : ${props.pereFiancee} et de Mme : ${props.mereFiancee}
Née le : ${formatDate(props.dateNaissanceFiancee)} à ${props.lieuNaissanceFiancee}
Domicile actuel : ${props.domicileFiancee}
Domicile futur du nouveau foyer : ${props.domicileFuturFiancee}
Tel fixe : ${props.telFiancee} Tel portable : ${props.mobileFiancee}
Courriel : ${props.emailFiancee}
Baptisée le : ${props.dateBaptemeFiancee} à ${props.lieuBaptemeFiancee}
1ère communion : ${props.communionFiancee}       Confirmation : ${props.confirmationFiancee}
Mariée civilement : ${props.marieFiancee}
Nb Enfants : ${(props.enfantsFiancee !== 'non') ? props.nbEnfantsFiancee:'0'}

`
};

const getMariageProps = ():MariageProps => {
  const props = {} as MariageProps;
  keys<MariageProps>().forEach(key => {
    const elt = document.getElementById('mar_' + key) as HTMLInputElement;
    if (elt) {
      props[key] = elt.value;
    }
  });
  return props;
};
