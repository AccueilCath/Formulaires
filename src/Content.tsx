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
import { BAPTEME_IDX, FORM_LIBS, CERT_BAPTEME_IDX, OBSEQUES_IDX, MARIAGE_IDX, BROUILLONS_IDX, BaptemeProps, CertificatBaptemeProps, ObsequesProps, MariageProps, FormulaireProps, getCachedData } from './Props';
import { getFormIdAndTimeStamp } from './LocalStorage';
import { URI_KEY, URI_FORM } from './utils';

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
  let keyFormId = 0;
  let timeStamp = '' + new Date().getTime();
  let formData = undefined as FormulaireProps;
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get(URI_KEY);
  if (key) {
    const formIdAndTimeStamp = getFormIdAndTimeStamp(key);
    if (formIdAndTimeStamp.formId > -1) {
      keyFormId = formIdAndTimeStamp.formId;
    }
    if (formIdAndTimeStamp.timestamp) {
      timeStamp = formIdAndTimeStamp.timestamp;
    }
    formData = getCachedData(key);
  } else {
    const form = urlParams.get(URI_FORM);
    if (form) {
      keyFormId = parseInt(form);
    }
  }
  const [formId, setFormId] = React.useState(keyFormId);
  const handleChange = (event: React.ChangeEvent<{}>, newFormId: number) => {
    if (newFormId == BROUILLONS_IDX) {
      setFormId(newFormId);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete(URI_KEY);
      urlParams.set(URI_FORM, '' + newFormId);
      window.location.search = '?' + urlParams.toString();
      }
  };
  return (
    <div className={classes.root}>
      <input type="hidden" id="timestamp" value={timeStamp} />
      <AppBar position="static">
        <Tabs value={formId} onChange={handleChange} aria-label="content tabs">
          <Tab label={FORM_LIBS[BAPTEME_IDX]} />
          <Tab label={FORM_LIBS[CERT_BAPTEME_IDX]}  />
          <Tab label={FORM_LIBS[OBSEQUES_IDX]} />
          <Tab label={FORM_LIBS[MARIAGE_IDX]} />
          <Tab label={FORM_LIBS[BROUILLONS_IDX]} />
        </Tabs>
      </AppBar>
      <TabPanel value={formId} index={BAPTEME_IDX}>
        <Bapteme data={formData as BaptemeProps}/>
      </TabPanel>
      <TabPanel value={formId} index={CERT_BAPTEME_IDX}>
        <CertificatBapteme data={formData as CertificatBaptemeProps}/>
      </TabPanel>
      <TabPanel value={formId} index={OBSEQUES_IDX}>
        <Obseques data={formData as ObsequesProps} />
      </TabPanel>
      <TabPanel value={formId} index={MARIAGE_IDX}>
        <Mariage data={formData as MariageProps} />
      </TabPanel>
      <TabPanel value={formId} index={BROUILLONS_IDX}>
        <DraftsList />
      </TabPanel>
    </div>
  );
};