import { makeStyles } from "@material-ui/core";

export const URI_KEY = 'cache';
export const URI_FORM = 'form';

export const formatDate = (inDate: string): string => {
  return inDate.split('-').reverse().join('/');
};

export const getToEmail = (emailBase: string, ...emailsAndNames: string[]) => {
  const emails: string[] = []
  if (emailBase) {
    emails.push(emailBase);
  }
  if (emailsAndNames) {
    for (let i = 0; i < emailsAndNames.length; i=i+2) {
      if (emailsAndNames[i]) {
        if (i+1 < emailsAndNames.length && emailsAndNames[i+1]) {
          emails.push('"'+emailsAndNames[i+1]+'" <'+emailsAndNames[i]+'>');
        } else {
          emails.push(emailsAndNames[i]);
        }
      }
    }
  }
  return emails.join(';');
}

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

export const findFirst = <T>(list:T[], select: (val: T)=>boolean): T|undefined => {
  for (let idx = 0; idx < list.length; idx++) {
    if (select(list[idx])) {
      return list[idx];
    }
  }
  return undefined;
}

export const setInputValue = (id: string, value: string) => {
  const elt = document.getElementById(id) as HTMLInputElement;
    if (elt) {
      elt.value = value;
    }
}

const LISTE_CELEBRANTS:Array<{nom: string, email: string}> = JSON.parse(process.env.LISTE_CELEBRANTS||'[]');
export const getCelebrants = ():Array<{nom: string, email: string}> => {
  return LISTE_CELEBRANTS;
}

const hostList=JSON.parse(process.env.MAIL_HOSTS||'{}');
export const getEmails = (source:string):string => {
  return source.split(';').map((email) => {
    return email.split('@').map((part, idx) => {
      if (idx > 0) {
        part = part.replace(/(\d+)/, (undefined, p1)=>hostList[p1]);
      }
      return part;
    }).join('@');
  }).join(';');
}
