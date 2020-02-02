import React from 'react';
import FormControl from '@material-ui/core/FormControl';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MailTo } from './mailto';
import { formatDate, getCCEmail, today, useStyles, findFirst, setInputValue, getToEmail } from './utils';
import { OBSEQUES_IDX, LISTE_CELEBRANTS, ObsequesProps } from './Props';
import { localStorageAvailable, saveForm, isSaved, getKey, removeForm } from './LocalStorage';

export const Obseques:React.FC<{data?: ObsequesProps}> = ({data}) => {
  const classes = useStyles();
  const [draftSaved, setDraftSaved] = React.useState(0);
 
  const [typeCelebration, settypeCelebration] = React.useState(data?data.typeCelebration:'Messe');
  const [dateDemande, setdateDemande] = React.useState(data?data.dateDemande:today());
  const [enregistreur, setenregistreur] = React.useState(data?data.enregistreur:'');
  const [celebrant, setcelebrant] = React.useState(data?data.celebrant:'');
  const [emailCelebrant, setemailCelebrant] = React.useState(data?data.emailCelebrant:'');
  const [dateCeremonie, setdateCeremonie] = React.useState(data?data.dateCeremonie:'');
  const [heureCeremonie, setheureCeremonie] = React.useState(data?data.heureCeremonie:'');
  const [lieuCeremonie, setlieuCeremonie] = React.useState(data?data.lieuCeremonie:'');
  const [nom, setnom] = React.useState(data?data.nom:'');
  const [nomFille, setnomFille] = React.useState(data?data.nomFille:'');
  const [prenoms, setprenoms] = React.useState(data?data.prenoms:'');
  const [dateNaissance, setdateNaissance] = React.useState(data?data.dateNaissance:'');
  const [dateDeces, setdateDeces] = React.useState(data?data.dateDeces:'');
  const [lieuDeces, setlieuDeces] = React.useState(data?data.lieuDeces:'');
  const [typeRite, settypeRite] = React.useState(data?data.typeRite:'');
  const [lieuRite, setlieuRite] = React.useState(data?data.lieuRite:'Inhumation');
  const [adresseDefunt, setadresseDefunt] = React.useState(data?data.adresseDefunt:'');
  const [contact, setcontact] = React.useState(data?data.contact:'');
  const [parente, setparente] = React.useState(data?data.parente:'');
  const [adresse, setadresse] = React.useState(data?data.adresse:'');
  const [tel, settel] = React.useState(data?data.tel:'');
  const [mobile, setmobile] = React.useState(data?data.mobile:'');
  const [email, setemail] = React.useState(data?data.email:'');
  const [pompesFunebres, setpompesFunebres] = React.useState(data?data.pompesFunebres:'');
  const [telPompesFunebres, settelPompesFunebres] = React.useState(data?data.telPompesFunebres:'');
  const getProps = ():ObsequesProps => ({
    typeCelebration,
    dateDemande,
    enregistreur,
    celebrant,
    emailCelebrant,
    dateCeremonie,
    heureCeremonie,
    lieuCeremonie,
    nom,
    nomFille,
    prenoms,
    dateNaissance,
    dateDeces,
    lieuDeces,
    typeRite,
    lieuRite,
    adresseDefunt,
    contact,
    parente,
    adresse,
    tel,
    mobile,
    email,
    pompesFunebres,
    telPompesFunebres
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
            <Grid item xs={12}><Typography>Renseignements à recueillir auprès des Pompes Funèbres</Typography></Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="type de Celebration" value={typeCelebration} onChange={(e:any)=>settypeCelebration(e.target.value)} row >
                  <FormControlLabel value="Messe" control={<Radio />} label="Messe" />
                  <FormControlLabel value="Bénédiction" control={<Radio />} label="Bénédiction" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                value={celebrant}
                options={LISTE_CELEBRANTS.map(celeb => celeb.nom)}
                onInputChange={(event: object, value: string, reason: string) => {
                  setcelebrant(value);
                  if (reason == 'reset') {
                    const celeb = findFirst(LISTE_CELEBRANTS, val => val.nom == value);
                    if (celeb) {
                      setemailCelebrant(celeb.email);
                    }
                  } else {
                    setemailCelebrant('');
                  }
                }}
                renderInput={params => (
                  <TextField {...params} label="Célébrant" margin="normal" className={classes.textField} required fullWidth />
                )}
              />
              <TextField
                required
                label="Email"
                className={classes.textField}
                margin="normal"
                fullWidth
                value={emailCelebrant} onChange={(e:any)=>setemailCelebrant(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Date de la cérémonie"
                type="date"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateCeremonie} onChange={(e:any)=>setdateCeremonie(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Heure de la cérémonie"
                type="time"
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={heureCeremonie} onChange={(e:any)=>setheureCeremonie(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Lieu de la cérémonie"
                className={classes.textField}
                margin="normal"
                fullWidth
                value={lieuCeremonie} onChange={(e:any)=>setlieuCeremonie(e.target.value)}
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
                  value={enregistreur} onChange={(e:any)=>setenregistreur(e.target.value)}                />
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
                  label="Nom du défunt"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nom} onChange={(e:any)=>setnom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nom de jeune fille (s'il y a lieu)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nomFille} onChange={(e:any)=>setnomFille(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Prénom (s)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={prenoms} onChange={(e:any)=>setprenoms(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Date du naissance du défunt"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateNaissance} onChange={(e:any)=>setdateNaissance(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date du décès"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateDeces} onChange={(e:any)=>setdateDeces(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Lieu du décès"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={lieuDeces} onChange={(e:any)=>setlieuDeces(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup aria-label="typeRite" value={typeRite} onChange={(e:any)=>settypeRite(e.target.value)} row >
                    <FormControlLabel value="Inhumation" control={<Radio />} label="Inhumation" />
                    <FormControlLabel value="Crémation" control={<Radio />} label="Crémation" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Lieu"
                  className={classes.textField}
                  margin="normal"
                  value={lieuRite} onChange={(e:any)=>setlieuRite(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Adresse du défunt"
                  className={classes.textField}
                  margin="normal"
                  value={adresseDefunt} onChange={(e:any)=>setadresseDefunt(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        label="Nom et prénom de la personne à contacter"
                        className={classes.textField}
                        margin="normal"
                        value={contact} onChange={(e:any)=>setcontact(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Lien de parenté avec le défunt"
                        className={classes.textField}
                        margin="normal"
                        value={parente} onChange={(e:any)=>setparente(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Adresse"
                        className={classes.textField}
                        margin="normal"
                        value={adresse} onChange={(e:any)=>setadresse(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="N° de téléphone fixe"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                        value={tel} onChange={(e:any)=>settel(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="N° de téléphone portable"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                        value={mobile} onChange={(e:any)=>setmobile(e.target.value)}
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
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        label="Entreprise des Pompes Funèbres"
                        className={classes.textField}
                        margin="normal"
                        value={pompesFunebres} onChange={(e:any)=>setpompesFunebres(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="N° de téléphone"
                        className={classes.textField}
                        margin="normal"
                        type="tel"
                        value={telPompesFunebres} onChange={(e:any)=>settelPompesFunebres(e.target.value)}
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
            saveForm(OBSEQUES_IDX, getProps());
            setDraftSaved(draftSaved+1);
          }}>
            Enregistre un brouillon
          </Button>
          }
          {localStorageAvailable() && isSaved(OBSEQUES_IDX) &&
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DeleteIcon/>} onClick={() => {
            removeForm(getKey(OBSEQUES_IDX));
            setDraftSaved(draftSaved+1);
          }}>
            Supprime le brouillon
          </Button>
          }
          <MailTo 
            email={() => getToEmail(process.env.TO_EMAIL_OBSEQUES||process.env.TO_EMAIL||'', emailCelebrant, celebrant)} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Obseques')} 
            subject="Demande d'Obsèques" 
            content={() => getObsequesEmail(getProps())} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

const getObsequesEmail = (props: ObsequesProps):string => {
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
