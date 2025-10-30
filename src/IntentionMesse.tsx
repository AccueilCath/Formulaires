import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import { MailTo } from "./mailto";
import { formatDate, getCCEmail, getToEmail, today, useStyles } from "./utils";
import { saveForm, localStorageAvailable, isSaved, getKey, removeForm } from "./LocalStorage";
import { EGLISES, INTENTION_IDX, IntentionMesseProps } from "./Props";
import { Autocomplete } from "@material-ui/lab";

export const IntentionMesse: React.FC<{ data?: IntentionMesseProps }> = ({ data }) => {
  const classes = useStyles();
  const [draftSaved, setDraftSaved] = React.useState(0);

  const [dateDemande, setdateDemande] = React.useState(data ? data.dateDemande : today());
  const [enregistreur, setenregistreur] = React.useState(data ? data.enregistreur : "");
  const [eglise, seteglise] = React.useState(data ? data.eglise : "");
  const [nom, setnom] = React.useState(data ? data.nom : "");
  const [dateIntention, setdateIntention] = React.useState(data ? data.dateIntention : "");
  const [heureIntention, setheureIntention] = React.useState(data ? data.heureIntention : "");
  const [decede, setdecede] = React.useState(data ? data.decede : "Décédé");
  const [payeAccueil, setpayeAccueil] = React.useState(data ? data.payeAccueil : "Payé à l'Accueil");
  const getProps = () => ({
    dateDemande,
    enregistreur,
    nom,
    eglise,
    dateIntention,
    heureIntention,
    decede,
    payeAccueil,
  });
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography>Demande d'intention de messe</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  value={eglise}
                  options={EGLISES}
                  onInputChange={(event: object, value: string, reason: string) => seteglise(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="en l'église"
                      margin="normal"
                      className={classes.textField}
                      required
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Date de l'intention de messe"
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateIntention}
                  onChange={(e: any) => setdateIntention(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Heure"
                  type="time"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={heureIntention}
                  onChange={(e: any) => setheureIntention(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Pour"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  value={nom}
                  onChange={(e: any) => setnom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Décédé</FormLabel>
                  <RadioGroup aria-label="Décédé" value={decede} onChange={(e: any) => setdecede(e.target.value)} row>
                    <FormControlLabel value="Décédé" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non Décédé" control={<Radio />} label="Non" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Payé à l'Accueil</FormLabel>
                  <RadioGroup aria-label="Payé à l'Accueil" value={payeAccueil} onChange={(e: any) => setpayeAccueil(e.target.value)} row>
                    <FormControlLabel value="Payé à l'Accueil" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non Payé à l'Accueil" control={<Radio />} label="Non" />
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
                  type="date"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateDemande}
                  onChange={(e: any) => setdateDemande(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="par"
                  className={classes.textField}
                  margin="normal"
                  value={enregistreur}
                  onChange={(e: any) => setenregistreur(e.target.value)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {localStorageAvailable() && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<DraftsIcon />}
              onClick={() => {
                saveForm(INTENTION_IDX, getProps());
                setDraftSaved(draftSaved + 1);
              }}
            >
              Enregistre un brouillon
            </Button>
          )}
          {localStorageAvailable() && isSaved(INTENTION_IDX) && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<DeleteIcon />}
              onClick={() => {
                removeForm(getKey(INTENTION_IDX));
                setDraftSaved(draftSaved + 1);
              }}
            >
              Supprime le brouillon
            </Button>
          )}
          <MailTo
            email={() => getToEmail("")}
            classement={getCCEmail(process.env.CC_EMAIL || "", "IntentionMesse", process.env.CC_INTENTION || "")}
            subject="Intention de Messe"
            content={() => getIntentionMesseEmail(getProps())}
          >
            Email la demande
          </MailTo>
        </Grid>
      </Grid>
    </form>
  );
};

const getIntentionMesseEmail = (props: IntentionMesseProps): string => {
  return `Demande faite le : ${formatDate(props.dateDemande)} par : ${props.enregistreur}

  Intention de messe
*******************************************
En l'église : ${props.eglise}
le : ${props.dateIntention} à ${props.heureIntention}
Pour : ${props.nom}
${props.decede}
${props.payeAccueil}

Fraternellement
L'Accueil de la paroisse du Christ-Sauveur
`;
};
