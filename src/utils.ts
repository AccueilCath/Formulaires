import { makeStyles } from "@material-ui/core";

export const formatDate = (inDate: string): string => {
  return inDate.split('-').reverse().join('/');
};

export const getCCEmail = (email: string, type: string) => {
  const parts = email.split('@');
  if (parts.length > 0) {
    parts[0] += '+' + type;
  }
  return parts.join('@');
}

export const today = () => new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

export const useStyles = makeStyles(theme => ({
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

