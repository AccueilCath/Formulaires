import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DraftsIcon from '@material-ui/icons/Drafts';
import { BaptemeProps, CertificatBaptemeProps, FORM_LIBS, BAPTEME_IDX, CERT_BAPTEME_IDX, OBSEQUES_IDX, ObsequesProps, FormulaireProps, MARIAGE_IDX, MariageProps } from './Props';
import { listFormKeys, loadForm, KEY_SEPARATOR, removeForm } from './LocalStorage';
import { setInputValue } from './utils';

const getDetail = (val:string):string => {
  const parts = val.split(KEY_SEPARATOR);
  if (parts.length > 2) {
    const formId = parseInt(parts[1]);
    const d = new Date();
    d.setTime(parseInt(parts[2]));
    val = FORM_LIBS[formId] + ' créé le ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + ' ' + d.getMilliseconds();
  }
  return val;
}

const getData = (val: string): FormulaireProps => {
  const parts = val.split(KEY_SEPARATOR);
  if (parts.length > 2) {
    setInputValue('timestamp', parts[2]);
    switch (parseInt(parts[1])) {
      case BAPTEME_IDX:
        return loadForm<BaptemeProps>(val);
      case CERT_BAPTEME_IDX:
        return loadForm<CertificatBaptemeProps>(val);
      case OBSEQUES_IDX:
        return loadForm<ObsequesProps>(val);
      case MARIAGE_IDX:
        return loadForm<MariageProps>(val);
    }
  }
  return undefined;
}

interface DraftsListProps {
  selectAndFillForm: (key: string, data: FormulaireProps)=> void;
}

export const DraftsList: React.FC<DraftsListProps> = ({selectAndFillForm}) => {
  const [refresh, setRefresh] = React.useState(0);

  return <List component="nav">
    {
      listFormKeys().map(key => <ListItem button key={key} onClick={() => console.info(getData(key))}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={getDetail(key)} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={() => selectAndFillForm(key, getData(key))}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => {removeForm(key);setRefresh(refresh+1);}}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>)
    }
  </List>
}
