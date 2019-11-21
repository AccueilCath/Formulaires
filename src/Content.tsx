import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core';
import { Bapteme } from './Bapteme';
import { CertificatBapteme } from './CertificatBapteme';
import { Obseques } from './Obseques';
import { Mariage } from './Mariage';

interface TabPanelProps {
  index: number;
  value: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabPanel: React.FC<TabPanelProps> = ({index, value, children}) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export const Content: React.FC<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="content tabs">
          <Tab label="Baptême" />
          <Tab label="Certificat de Baptême"  />
          <Tab label="Obsèques" />
          <Tab label="Marriage" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Bapteme />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CertificatBapteme />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Obseques />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Mariage />
      </TabPanel>
    </div>
  );
};