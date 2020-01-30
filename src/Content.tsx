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
import { Mariage} from './Mariage';
import { DraftsList } from './DraftsList';
import { BAPTEME_IDX, FORM_LIBS, CERT_BAPTEME_IDX, OBSEQUES_IDX, MARIAGE_IDX, BROUILLONS_IDX, BaptemeProps, CertificatBaptemeProps, ObsequesProps, MariageProps, FormulaireProps, setObsequesProps, setBaptemeProps, setMariageProps, setCertificatBaptemeProps } from './Props';
import { getFormIdAndTimeStamp } from './LocalStorage';

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
  const [timeStamp, setTimeStamp] = React.useState('' + new Date().getTime());
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const changeData = (key: string, data: FormulaireProps) => {
    const {formId, timestamp} = getFormIdAndTimeStamp(key);
    setValue(formId);
    setTimeStamp(timestamp);
    switch (formId) {
      case BAPTEME_IDX:
        setBaptemeProps(data as BaptemeProps);
        break;
      case CERT_BAPTEME_IDX:
        setCertificatBaptemeProps(data as CertificatBaptemeProps);
        break;
      case OBSEQUES_IDX:
        setObsequesProps(data as ObsequesProps);
        break;
      case MARIAGE_IDX:
        setMariageProps(data as MariageProps);
    }
    
  }

  return (
    <div className={classes.root}>
      <input type="hidden" id="timestamp" value={timeStamp} />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="content tabs">
          <Tab label={FORM_LIBS[BAPTEME_IDX]} />
          <Tab label={FORM_LIBS[CERT_BAPTEME_IDX]}  />
          <Tab label={FORM_LIBS[OBSEQUES_IDX]} />
          <Tab label={FORM_LIBS[MARIAGE_IDX]} />
          <Tab label={FORM_LIBS[BROUILLONS_IDX]} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={BAPTEME_IDX}>
        <Bapteme />
      </TabPanel>
      <TabPanel value={value} index={CERT_BAPTEME_IDX}>
        <CertificatBapteme />
      </TabPanel>
      <TabPanel value={value} index={OBSEQUES_IDX}>
        <Obseques />
      </TabPanel>
      <TabPanel value={value} index={MARIAGE_IDX}>
        <Mariage />
      </TabPanel>
      <TabPanel value={value} index={BROUILLONS_IDX}>
        <DraftsList selectAndFillForm={changeData}/>
      </TabPanel>
    </div>
  );
};