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
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { MailTo } from './mailto';
import { getCCEmail, useStyles, today, formatDate } from './utils';
import { saveForm, localStorageAvailable, isSaved, removeForm, getKey } from './LocalStorage';
import { BAPTEME_IDX, BaptemeProps } from './Props';

export const Bapteme: React.FC<{data?:BaptemeProps}> = ({data}) => {
  const classes = useStyles();
  const [draftSaved, setDraftSaved] = React.useState(0);

  const [dateBapteme, setdateBapteme] = React.useState(data?data.dateBapteme:'');
  const [dateDemande, setdateDemande] = React.useState(data?data.dateDemande:today());
  const [enregistreur, setenregistreur] = React.useState(data?data.enregistreur:'');
  const [enfant, setenfant] = React.useState(data?data.enfant:'');
  const [dateEnfant, setdateEnfant] = React.useState(data?data.dateEnfant:'');
  const [lieuEnfant, setlieuEnfant] = React.useState(data?data.lieuEnfant:'');
  const [pere, setpere] = React.useState(data?data.pere:'');
  const [mere, setmere] = React.useState(data?data.mere:'');
  const [adresseFamille, setadresseFamille] = React.useState(data?data.adresseFamille:'');
  const [tel, settel] = React.useState(data?data.tel:'');
  const [email, setemail] = React.useState(data?data.email:'');
  const [parrain, setparrain] = React.useState(data?data.parrain:'');
  const [parrainBaptise, setparrainBaptise] = React.useState(data?data.parrainBaptise:'oui');
  const [parrainAge, setparrainAge] = React.useState(data?data.parrainAge:'');
  const [marraine, setmarraine] = React.useState(data?data.marraine:'');
  const [marraineBaptisee, setmarraineBaptisee] = React.useState(data?data.marraineBaptisee:'oui');
  const [marraineAge, setmarraineAge] = React.useState(data?data.marraineAge:'');
  const [frere1, setfrere1] = React.useState(data?data.frere1:'');
  const [frere1Age, setfrere1Age] = React.useState(data?data.frere1Age:'');
  const [frere2, setfrere2] = React.useState(data?data.frere2:'');
  const [frere2Age, setfrere2Age] = React.useState(data?data.frere2Age:'');
  const [frere3, setfrere3] = React.useState(data?data.frere3:'');
  const [frere3Age, setfrere3Age] = React.useState(data?data.frere3Age:'');
  const [frere4, setfrere4] = React.useState(data?data.frere4:'');
  const [frere4Age, setfrere4Age] = React.useState(data?data.frere4Age:'');
  const [frere5, setfrere5] = React.useState(data?data.frere5:'');
  const [frere5Age, setfrere5Age] = React.useState(data?data.frere5Age:'');
  const [frere6, setfrere6] = React.useState(data?data.frere6:'');
  const [frere6Age, setfrere6Age] = React.useState(data?data.frere6Age:'');
  const [frere7, setfrere7] = React.useState(data?data.frere7:'');
  const [frere7Age, setfrere7Age] = React.useState(data?data.frere7Age:'');
  const [preparation, setpreparation] = React.useState(data?data.preparation:'');
  const getProps = ():BaptemeProps => ({
    dateBapteme,
    dateDemande,
    enregistreur,
    enfant,
    dateEnfant,
    lieuEnfant,
    pere,
    mere,
    adresseFamille,
    tel,
    email,
    parrain,
    parrainBaptise,
    parrainAge,
    marraine,
    marraineBaptisee,
    marraineAge,
    frere1,
    frere1Age,
    frere2,
    frere2Age,
    frere3,
    frere3Age,
    frere4,
    frere4Age,
    frere5,
    frere5Age,
    frere6,
    frere6Age,
    frere7,
    frere7Age,
    preparation
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
            <Grid item xs={12}><Typography>Demande de baptême</Typography></Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Date du Baptême"
                className={classes.textField}
                margin="normal"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dateBapteme} onChange={(e:any)=>setdateBapteme(e.target.value)} 
              />
            </Grid>
            {/**
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Lieu de célébration</FormLabel>
                <RadioGroup aria-label="lieu" name="lieu" value={lieu} onChange={changeLieu} >
                  <FormControlLabel value="Cathédrale (11h50)" control={<Radio />} label="Cathédrale (11h50)" />
                  <FormControlLabel value="Notre-Dame (11h20)" control={<Radio />} label="Notre-Dame (11h20)" />
                  <FormControlLabel value="Extérieur (lieu ?)" control={<Radio />} label="Extérieur (lieu ?)" />
                </RadioGroup>
              </FormControl>
              <input style={{display: 'none'}} id="bap_lieu" value={lieu} readOnly />
            </Grid>
             */}
            {/**
            lieu == 'Extérieur (lieu ?)' && <Grid item xs={12}>
              <TextField
                id="bap_lieuExterieur"
                label="LieuExterieur"
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            */}
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
                  label="Nom et prénom(s) de l'enfant"
                  className={classes.textField}
                  margin="normal"
                  fullWidth 
                  value={enfant} onChange={(e:any)=>setenfant(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Date de naissance"
                  className={classes.textField}
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }} 
                  value={dateEnfant} onChange={(e:any)=>setdateEnfant(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Lieu de naissance"
                  className={classes.textField}
                  margin="normal" 
                  value={lieuEnfant} onChange={(e:any)=>setlieuEnfant(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Prénon du père"
                  className={classes.textField}
                  margin="normal"
                  fullWidth 
                  value={pere} onChange={(e:any)=>setpere(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Prénom et nom de jeune fille de la mère"
                  className={classes.textField}
                  margin="normal"
                  fullWidth 
                  value={mere} onChange={(e:any)=>setmere(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Adresse de la famille"
                  className={classes.textField}
                  margin="normal"
                  multiline
                  fullWidth 
                  value={adresseFamille} onChange={(e:any)=>setadresseFamille(e.target.value)}
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
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}><Typography>On peut n'avoir qu'un parrain ou une marraine baptisé</Typography></Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Nom et prénom du Parrain"
                  className={classes.textField}
                  margin="normal"
                  fullWidth 
                  value={parrain} onChange={(e:any)=>setparrain(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Baptisé</FormLabel>
                  <RadioGroup aria-label="baptisé" value={parrainBaptise} onChange={(e:any)=>setparrainBaptise(e.target.value)} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Age"
                  className={classes.textField}
                  margin="normal"
                  type="number" 
                  value={parrainAge} onChange={(e:any)=>setparrainAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Nom et prénom de la Marraine"
                  className={classes.textField}
                  margin="normal"
                  fullWidth 
                  value={marraine} onChange={(e:any)=>setmarraine(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Baptisée</FormLabel>
                  <RadioGroup aria-label="baptisée" value={marraineBaptisee} onChange={(e:any)=>setmarraineBaptisee(e.target.value)} row>
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Age"
                  className={classes.textField}
                  margin="normal"
                  type="number" 
                  value={marraineAge} onChange={(e:any)=>setmarraineAge(e.target.value)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container item >
          <Paper style={{marginTop: '1em'}}>
            <Grid container>
              <Grid item xs={12}><Typography>Frères et Soeurs</Typography></Grid>
              
              <Table className={classes.table} aria-label="table fratrie">
                <TableHead>
                  <TableRow>
                    <TableCell>Nom et prénom</TableCell>
                    <TableCell >Age</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal" 
                        value={frere1} onChange={(e:any)=>setfrere1(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number" 
                        value={frere1Age} onChange={(e:any)=>setfrere1Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal" 
                        value={frere2} onChange={(e:any)=>setfrere2(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere2Age} onChange={(e:any)=>setfrere2Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        value={frere3} onChange={(e:any)=>setfrere3(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere3Age} onChange={(e:any)=>setfrere3Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        value={frere4} onChange={(e:any)=>setfrere4(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere4Age} onChange={(e:any)=>setfrere4Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        value={frere5} onChange={(e:any)=>setfrere5(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere5Age} onChange={(e:any)=>setfrere5Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        value={frere6} onChange={(e:any)=>setfrere6(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere6Age} onChange={(e:any)=>setfrere6Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        value={frere7} onChange={(e:any)=>setfrere7(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        className={classes.textField}
                        margin="normal"
                        type="number"
                        value={frere7Age} onChange={(e:any)=>setfrere7Age(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Grid item xs={12}><Typography>Si plus de 7 ans, bien demander si les enfants vont au catéchisme, si "non", renvoyer impérativement à un prêtre.</Typography></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Choix de la session de préparation"
                  className={classes.textField}
                  margin="normal"
                  value={preparation} onChange={(e:any)=>setpreparation(e.target.value)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {localStorageAvailable() && 
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DraftsIcon/>} onClick={() => {
            saveForm(BAPTEME_IDX, getProps());
            setDraftSaved(draftSaved+1);
          }}>
            Enregistre un brouillon
          </Button>
          }
          {localStorageAvailable() && isSaved(BAPTEME_IDX) &&
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DeleteIcon/>} onClick={() => {
            removeForm(getKey(BAPTEME_IDX));
            setDraftSaved(draftSaved+1);
          }}>
            Supprime le brouillon
          </Button>
          }
          <MailTo 
            email={process.env.TO_EMAIL_BAPTEME||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Bapteme')} 
            subject="Demande de Baptême" 
            content={() => getBaptemeEmail(getProps())} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

const getBaptemeEmail = (props:BaptemeProps):string => {
  return `Date du Baptême : ${formatDate(props.dateBapteme)}
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
};