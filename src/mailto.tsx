import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { getEmails } from "./utils";

export interface MailToProps {
  email: string | (() => string);
  classement: string;
  subject: string | (() => string);
  content: () => string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: "none",
    },
  })
);

export const MailTo: React.FC<MailToProps> = ({
  email,
  classement,
  subject,
  content,
  children,
}) => {
  const classes = useStyles();
  const onClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    const button = evt.currentTarget as HTMLAnchorElement;
    button.target = "Mail";
    const dest = getEmails(typeof email == "string" ? email : email());

    button.href = `mailto:${encodeURIComponent(
      dest
    )}?subject=${encodeURIComponent(
      typeof subject == "string" ? subject : subject()
    )}&cc=${encodeURIComponent(
      getEmails(classement)
    )}&body=${encodeURIComponent(content())}`;
  };
  return (
    <Button
      href=""
      component="a"
      variant="contained"
      color="primary"
      endIcon={<MailIcon />}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
