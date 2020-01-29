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
import TextField from '@material-ui/core/TextField';
import { getBaptemeEmail, getBaptemeProps } from './BaptemePdf';
import { MailTo } from './mailto';
import { getCCEmail, today, useStyles } from './utils';
import { saveForm, localStorageAvailable } from './LocalStorage';

export const Bapteme: React.FC<{}> = () => {
  const classes = useStyles();
  const [parrainBaptise, setParrainBaptise] = React.useState('oui');
  const changeParrainBaptise = (event:React.ChangeEvent<HTMLInputElement>) => setParrainBaptise(event.target.value);
  const [marraineBaptisee, setMarraineBaptisee] = React.useState('oui');
  const changeMarraineBaptisee = (event:React.ChangeEvent<HTMLInputElement>) => setMarraineBaptisee(event.target.value);

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
                id="bap_dateBapteme"
                label="Date du Baptême"
                className={classes.textField}
                margin="normal"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
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
                  id="bap_dateDemande"
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
                  id="bap_enregistreur"
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
                  id="bap_enfant"
                  label="Nom et prénom(s) de l'enfant"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="bap_dateEnfant"
                  label="Date de naissance"
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
                  id="bap_lieuEnfant"
                  label="Lieu de naissance"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="bap_pere"
                  label="Prénon du père"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="bap_mere"
                  label="Prénom et nom de jeune fille de la mère"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="bap_adresseFamille"
                  label="Adresse de la famille"
                  className={classes.textField}
                  margin="normal"
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="bap_tel"
                  label="N° de téléphone"
                  className={classes.textField}
                  margin="normal"
                  type="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="bap_email"
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
              <Grid item xs={12}><Typography>On peut n'avoir qu'un parrain ou une marraine baptisé</Typography></Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="bap_parrain"
                  label="Nom et prénom du Parrain"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Baptisé</FormLabel>
                  <RadioGroup aria-label="baptisé" name="parrainBaptise" value={parrainBaptise} onChange={changeParrainBaptise} row >
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="bap_parrainBaptise" value={parrainBaptise} readOnly />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="bap_parrainAge"
                  label="Age"
                  className={classes.textField}
                  margin="normal"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="bap_marraine"
                  label="Nom et prénom de la Marraine"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Baptisée</FormLabel>
                  <RadioGroup aria-label="baptisée" name="marraineBaptisee" value={marraineBaptisee} onChange={changeMarraineBaptisee} row>
                    <FormControlLabel value="oui" control={<Radio />} label="oui" />
                    <FormControlLabel value="non" control={<Radio />} label="non" />
                  </RadioGroup>
                </FormControl>
                <input style={{display: 'none'}} id="bap_marraineBaptisee" value={marraineBaptisee} readOnly />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="bap_marraineAge"
                  label="Age"
                  className={classes.textField}
                  margin="normal"
                  type="number"
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
                        id="bap_frere1"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere1Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere2"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere2Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere3"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere3Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere4"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere4Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere5"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere5Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere6"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere6Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="bap_frere7"
                        className={classes.textField}
                        margin="normal"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        id="bap_frere7Age"
                        className={classes.textField}
                        margin="normal"
                        type="number"
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
                  id="bap_preparation"
                  label="Choix de la session de préparation"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {localStorageAvailable() && 
          <Button variant="contained" color="primary" className={classes.button} endIcon={<DraftsIcon/>} onClick={() => saveForm('Baptême', getBaptemeProps())}>
            Enregistre un brouillon
          </Button>
          }
          <MailTo 
            email={process.env.TO_EMAIL_BAPTEME||process.env.TO_EMAIL||''} 
            classement={getCCEmail(process.env.CC_EMAIL||'', 'Bapteme')} 
            subject="Demande de Baptême" 
            content={() => getBaptemeEmail()} >Email la demande</MailTo>
        </Grid>
      </Grid>
    </form>
  );
};