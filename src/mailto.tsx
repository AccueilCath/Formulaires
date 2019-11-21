import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

export interface MailToProps {
  email: string;
  classement: string;
  subject: string;
  content: () => string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

export const MailTo:React.FC<MailToProps> = ({email, classement, subject, content, children}) => {
  const classes = useStyles();
  const onClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    const button = evt.currentTarget as HTMLAnchorElement;
    button.target = 'Mail';
    button.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&cc=${encodeURIComponent(classement)}&body=${encodeURIComponent(content())}`;
  };
  return <Button 
    href=""
    component="a"
    variant="contained" 
    color="primary" 
    endIcon={<MailIcon/>}
    className={classes.button}
    onClick={onClick}>
        {children}
  </Button>
};