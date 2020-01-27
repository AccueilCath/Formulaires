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

const fillNumber =(val:number, len=2, fillChar='0'): string => val.toString().padStart(len, fillChar);

export const today = () => new Date().getFullYear() + '-' + fillNumber(new Date().getMonth() + 1) + '-' + fillNumber(new Date().getDate());

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

