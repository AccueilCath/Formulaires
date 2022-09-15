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
import { MailTo } from './mailto';
import { formatDate, getCCEmail, today, useStyles } from './utils';
import { MARIAGE_IDX, MariageProps } from './Props';
import { localStorageAvailable, saveForm, isSaved, removeForm, getKey } from './LocalStorage';

export const Mariage:React.FC<{data?: MariageProps}> = ({data}) => {
  const classes = useStyles();
  const [draftSaved, setDraftSaved] = React.useState(0);

  const [lui, setlui] = React.useState(data?data.lui:'');
  const [elle, setelle] = React.useState(data?data.elle:'');
  const [dateSouhaitee, setdateSouhaitee] = React.useState(data?data.dateSouhaitee:'');
  const [horaire, sethoraire] = React.useState(data?data.horaire:'14h30');
  const [dateDemande, setdateDemande] = React.useState(data?data.dateDemande:'');
  const [enregistreur, setenregistreur] = React.useState(data?data.enregistreur:'');
  const [preparationPar, setpreparationPar] = React.useState(data?data.preparationPar:'');
  const [preparation, setpreparation] = React.useState(data?data.preparation:'dans la paroisse');
  const [horsParoisse, sethorsParoisse] = React.useState(data?data.horsParoisse:'');
  const [horsDiocese, sethorsDiocese] = React.useState(data?data.horsDiocese:'');
  const [celebration, setcelebration] = React.useState(data?data.celebration:'oui');
  const [messe, setmesse] = React.useState(data?data.messe:'oui');
  const [lieuCelebration, setlieuCelebration] = React.useState(data?data.lieuCelebration:'dans la paroisse');
  const [egliseCelebration, setegliseCelebration] = React.useState(data?data.egliseCelebration:'');
  const [dioceseCelebration, setdioceseCelebration] = React.useState(data?data.dioceseCelebration:'');
  const [celebrant, setcelebrant] = React.useState(data?data.celebrant:'');
  const [nomFiance, setnomFiance] = React.useState(data?data.nomFiance:'');
  const [prenomFiance, setprenomFiance] = React.useState(data?data.prenomFiance:'');
  const [pereFiance, setpereFiance] = React.useState(data?data.pereFiance:'');
  const [mereFiance, setmereFiance] = React.useState(data?data.mereFiance:'');
  const [mereJeuneFiance, setmereJeuneFiance] = React.useState(data?data.mereJeuneFiance:'');
  const [dateNaissanceFiance, setdateNaissanceFiance] = React.useState(data?data.dateNaissanceFiance:'');
  const [lieuNaissanceFiance, setlieuNaissanceFiance] = React.useState(data?data.lieuNaissanceFiance:'');
  const [professionFiance, setprofessionFiance] = React.useState(data?data.professionFiance:'');
  const [domicileFiance, setdomicileFiance] = React.useState(data?data.domicileFiance:'');
  const [domicileFuturFiance, setdomicileFuturFiance] = React.useState(data?data.domicileFuturFiance:'');
  const [telFiance, settelFiance] = React.useState(data?data.telFiance:'');
  const [mobileFiance, setmobileFiance] = React.useState(data?data.mobileFiance:'');
  const [emailFiance, setemailFiance] = React.useState(data?data.emailFiance:'');
  const [dateBaptemeFiance, setdateBaptemeFiance] = React.useState(data?data.dateBaptemeFiance:'');
  const [lieuBaptemeFiance, setlieuBaptemeFiance] = React.useState(data?data.lieuBaptemeFiance:'');
  const [communionFiance, setcommunionFiance] = React.useState(data?data.communionFiance:'oui');
  const [confirmationFiance, setconfirmationFiance] = React.useState(data?data.confirmationFiance:'oui');
  const [marieFiance, setmarieFiance] = React.useState(data?data.marieFiance:'non');
  const [enfantsFiance, setenfantsFiance] = React.useState(data?data.enfantsFiance:'non');
  const [nbEnfantsFiance, setnbEnfantsFiance] = React.useState(data?data.nbEnfantsFiance:'1');
  const [nomFiancee, setnomFiancee] = React.useState(data?data.nomFiancee:'');
  const [prenomFiancee, setprenomFiancee] = React.useState(data?data.prenomFiancee:'');
  const [pereFiancee, setpereFiancee] = React.useState(data?data.pereFiancee:'');
  const [mereFiancee, setmereFiancee] = React.useState(data?data.mereFiancee:'');
  const [mereJeuneFiancee, setmereJeuneFiancee] = React.useState(data?data.mereJeuneFiancee:'');
  const [dateNaissanceFiancee, setdateNaissanceFiancee] = React.useState(data?data.dateNaissanceFiancee:'');
  const [lieuNaissanceFiancee, setlieuNaissanceFiancee] = React.useState(data?data.lieuNaissanceFiancee:'');
  const [professionFiancee, setprofessionFiancee] = React.useState(data?data.professionFiancee:'');
  const [domicileFiancee, setdomicileFiancee] = React.useState(data?data.domicileFiancee:'');
  const [domicileFuturFiancee, setdomicileFuturFiancee] = React.useState(data?data.domicileFuturFiancee:'');
  const [telFiancee, settelFiancee] = React.useState(data?data.telFiancee:'');
  const [mobileFiancee, setmobileFiancee] = React.useState(data?data.mobileFiancee:'');
  const [emailFiancee, setemailFiancee] = React.useState(data?data.emailFiancee:'');
  const [dateBaptemeFiancee, setdateBaptemeFiancee] = React.useState(data?data.dateBaptemeFiancee:'');
  const [lieuBaptemeFiancee, setlieuBaptemeFiancee] = React.useState(data?data.lieuBaptemeFiancee:'');
  const [communionFiancee, setcommunionFiancee] = React.useState(data?data.communionFiancee:'oui');
  const [confirmationFiancee, setconfirmationFiancee] = React.useState(data?data.confirmationFiancee:'oui');
  const [marieFiancee, setmarieFiancee] = React.useState(data?data.marieFiancee:'non');
  const [enfantsFiancee, setenfantsFiancee] = React.useState(data?data.enfantsFiancee:'non');
  const [nbEnfantsFiancee, setnbEnfantsFiancee] = React.useState(data?data.nbEnfantsFiancee:'1');
  const getProps = () => ({
    lui,
    elle,
    dateSouhaitee,
    horaire,
    dateDemande,
    enregistreur,
    preparationPar,
    preparation,
    horsParoisse,
    horsDiocese,
    celebration,
    messe,
    lieuCelebration,
    egliseCelebration,
    dioceseCelebration,
    celebrant,
    nomFiance,
    prenomFiance,
    pereFiance,
    mereFiance,
    mereJeuneFiance,
    dateNaissanceFiance,
    lieuNaissanceFiance,
    professionFiance,
    domicileFiance,
    domicileFuturFiance,
    telFiance,
    mobileFiance,
    emailFiance,
    dateBaptemeFiance,
    lieuBaptemeFiance,
    communionFiance,
    confirmationFiance,
    marieFiance,
    enfantsFiance,
    nbEnfantsFiance,
    nomFiancee,
    prenomFiancee,
    pereFiancee,
    mereFiancee,
    mereJeuneFiancee,
    dateNaissanceFiancee,
    lieuNaissanceFiancee,
    professionFiancee,
    domicileFiancee,
    domicileFuturFiancee,
    telFiancee,
    mobileFiancee,
    emailFiancee,
    dateBaptemeFiancee,
    lieuBaptemeFiancee,
    communionFiancee,
    confirmationFiancee,
    marieFiancee,
    enfantsFiancee,
    nbEnfantsFiancee
  });
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
                label="lui"
                className={classes.textField}
                margin="normal"
                fullWidth
                value={lui} onChange={(e:any)=>setlui(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                label="elle"
                className={classes.textField}
                margin="normal"
                fullWidth
                value={elle} onChange={(e:any)=>setelle(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Date souhaitée"
                type="date"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateSouhaitee} onChange={(e:any)=>setdateSouhaitee(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Horaire :</FormLabel>
                <RadioGroup aria-label="horaire souhaité" value={horaire} onChange={(e:any)=>sethoraire(e.target.value)} row >
                  <FormControlLabel value="14h30" control={<Radio />} label="14h30" />
                  <FormControlLabel value="16h00" control={<Radio />} label="16h00" />
                </RadioGroup>
              </FormControl>
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
                  label="Demande faite le"
                  className={classes.textField}
                  margin="normal"
                  type="date"
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
                  fullWidth
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
                  label="Préparation par le Père"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={preparationPar} onChange={(e:any)=>setpreparationPar(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Préparation</FormLabel>
                  <RadioGroup aria-label="lieu de préparation" value={preparation} onChange={(e:any)=>setpreparation(e.target.value)} row >
                    <FormControlLabel value="dans la paroisse" control={<Radio />} label="dans la paroisse" />
                    <FormControlLabel value="hors paroisse" control={<Radio />} label="hors paroisse" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {preparation !== 'dans la paroisse' &&
              <>
                <Grid item xs={6}>
                  <TextField
                    label="Paroisse de"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    value={horsParoisse} onChange={(e:any)=>sethorsParoisse(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Diocèse"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    value={horsDiocese} onChange={(e:any)=>sethorsDiocese(e.target.value)}
                  />
                </Grid>
              </>
              }
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Célébration</FormLabel>
                  <RadioGroup aria-label="Célébration" value={celebration} onChange={(e:any)=>setcelebration(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Messe</FormLabel>
                  <RadioGroup aria-label="Messe" value={messe} onChange={(e:any)=>setmesse(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="lieu de célébration" value={lieuCelebration} onChange={(e:any)=>setlieuCelebration(e.target.value)} row >
                    <FormControlLabel value="dans la paroisse" control={<Radio />} label="dans la paroisse" />
                    <FormControlLabel value="hors paroisse" control={<Radio />} label="hors paroisse" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={egliseCelebration} onChange={(e:any)=>setegliseCelebration(e.target.value)}
                />
              </Grid>
              {lieuCelebration !== 'dans la paroisse' &&
              <>
                <Grid item xs={6}>
                  <TextField
                    label="Diocèse"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    value={dioceseCelebration} onChange={(e:any)=>setdioceseCelebration(e.target.value)}
                  />
                </Grid>
              </>
              }
              <Grid item xs={12}>
                <TextField
                  label="Prêtre Célébrant"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={celebrant} onChange={(e:any)=>setcelebrant(e.target.value)}
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
                  label="Nom Fiancé"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nomFiance} onChange={(e:any)=>setnomFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  label="Prénom Fiancé"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={prenomFiance} onChange={(e:any)=>setprenomFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  label="Fils de M"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={pereFiance} onChange={(e:any)=>setpereFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  label="et de Mme"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={mereFiance} onChange={(e:any)=>setmereFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Nom Jeune Fille"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={mereJeuneFiance} onChange={(e:any)=>setmereJeuneFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date de Naissance"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateNaissanceFiance} onChange={(e:any)=>setdateNaissanceFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Lieu de Naissance"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={lieuNaissanceFiance} onChange={(e:any)=>setlieuNaissanceFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Profession"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={professionFiance} onChange={(e:any)=>setprofessionFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Domicile actuel"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={domicileFiance} onChange={(e:any)=>setdomicileFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Domicile futur du nouveau foyer"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={domicileFuturFiance} onChange={(e:any)=>setdomicileFuturFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="N° de téléphone fixe"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                  value={telFiance} onChange={(e:any)=>settelFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="N° de téléphone portable"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                  value={mobileFiance} onChange={(e:any)=>setmobileFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                  value={emailFiance} onChange={(e:any)=>setemailFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date de Baptême"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateBaptemeFiance} onChange={(e:any)=>setdateBaptemeFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Baptême : Commune et Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={lieuBaptemeFiance} onChange={(e:any)=>setlieuBaptemeFiance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">1ère communion</FormLabel>
                  <RadioGroup aria-label="1ere communion" value={communionFiance} onChange={(e:any)=>setcommunionFiance(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Confirmation</FormLabel>
                  <RadioGroup aria-label="Confirmation" value={confirmationFiance} onChange={(e:any)=>setconfirmationFiance(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous déjà été marié civilement ?</FormLabel>
                  <RadioGroup aria-label="marié civilement" value={marieFiance} onChange={(e:any)=>setmarieFiance(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous des enfants ?</FormLabel>
                  <RadioGroup aria-label="des enfants" value={enfantsFiance} onChange={(e:any)=>setenfantsFiance(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              { enfantsFiance !== 'non' &&
              <Grid item xs={6}>
                <TextField
                  required
                  label="Combien ?"
                  className={classes.textField}
                  margin="normal"
                  type="number"
                  value={nbEnfantsFiance} onChange={(e:any)=>setnbEnfantsFiance(e.target.value)}
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
                  label="Nom Fiancée"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nomFiancee} onChange={(e:any)=>setnomFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  label="Prénom Fiancée"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={prenomFiancee} onChange={(e:any)=>setprenomFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  label="Fille de M"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={pereFiancee} onChange={(e:any)=>setpereFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  label="et de Mme"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={mereFiancee} onChange={(e:any)=>setmereFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Nom Jeune Fille"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={mereJeuneFiancee} onChange={(e:any)=>setmereJeuneFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date de Naissance"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateNaissanceFiancee} onChange={(e:any)=>setdateNaissanceFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Lieu de Naissance"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={lieuNaissanceFiancee} onChange={(e:any)=>setlieuNaissanceFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Profession"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={professionFiancee} onChange={(e:any)=>setprofessionFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Domicile actuel"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={domicileFiancee} onChange={(e:any)=>setdomicileFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Domicile futur du nouveau foyer"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={domicileFuturFiancee} onChange={(e:any)=>setdomicileFuturFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="N° de téléphone fixe"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                  value={telFiancee} onChange={(e:any)=>settelFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="N° de téléphone portable"
                  className={classes.textField}
                  margin="normal"
                  type="tel"
                  value={mobileFiancee} onChange={(e:any)=>setmobileFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adresse e-mail"
                  className={classes.textField}
                  margin="normal"
                  type="email"
                  fullWidth
                  value={emailFiancee} onChange={(e:any)=>setemailFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date de Baptême"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateBaptemeFiancee} onChange={(e:any)=>setdateBaptemeFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Baptême : Commune et Eglise"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={lieuBaptemeFiancee} onChange={(e:any)=>setlieuBaptemeFiancee(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">1ère communion</FormLabel>
                  <RadioGroup aria-label="1ere communion" value={communionFiancee} onChange={(e:any)=>setcommunionFiancee(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Confirmation</FormLabel>
                  <RadioGroup aria-label="Confirmation" value={confirmationFiancee} onChange={(e:any)=>setconfirmationFiancee(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous déjà été mariée civilement ?</FormLabel>
                  <RadioGroup aria-label="mariée civilement" value={marieFiancee} onChange={(e:any)=>setmarieFiancee(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Avez vous des enfants ?</FormLabel>
                  <RadioGroup aria-label="des enfants" value={enfantsFiancee} onChange={(e:any)=>setenfantsFiancee(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
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
                  value={nbEnfantsFiancee} onChange={(e:any)=>setnbEnfantsFiancee(e.target.value)}
                />
              </Grid>
              }
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
         {localStorageAvailable() && 
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DraftsIcon/>} onClick={() => {
            saveForm(MARIAGE_IDX, getProps());
            setDraftSaved(draftSaved+1);
          }}>
            Enregistre un brouillon
          </Button>
          }
          {localStorageAvailable() && isSaved(MARIAGE_IDX) &&
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DeleteIcon/>} onClick={() => {
            removeForm(getKey(MARIAGE_IDX));
            setDraftSaved(draftSaved+1);
          }}>
            Supprime le brouillon
          </Button>
          }
          <MailTo 
            email={process.env.TO_EMAIL_MARIAGE||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Mariage')} 
            subject="Demande de Mariage" 
            content={() => getMariageEmail(getProps())} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

const getMariageEmail = (props: MariageProps):string => {
  return `Demande de Mariage faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}
*******************************************
Mariage de ${props.lui} et de ${props.elle}
Date souhaitée : ${formatDate(props.dateSouhaitee)} à ${props.horaire}
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
Fils de M : ${props.pereFiance} et de Mme : ${props.mereFiance} (${props.mereJeuneFiance})
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
Fille de M : ${props.pereFiancee} et de Mme : ${props.mereFiancee} (${props.mereJeuneFiancee})
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
