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
import { BAPTEME_IDX, FORM_LIBS, FormulaireProps, getCachedData } from './Props';
import { listFormKeys, KEY_SEPARATOR, removeForm } from './LocalStorage';
import { URI_KEY, URI_FORM } from './utils';

const getPrimary = (val:string):string => {
  const parts = val.split(KEY_SEPARATOR);
  if (parts.length > 2) {
    const formId = parseInt(parts[1]);
    const d = new Date();
    d.setTime(parseInt(parts[2]));
    val = FORM_LIBS[formId] + ' créé le ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString() /*+ ' ' + d.getMilliseconds()*/;
  }
  return val;
}

const getSecondary = (val:string):string => {
  const data = getCachedData(val) as any;
  if (data && data.enregistreur) {
    return 'par ' + data.enregistreur; 
  }
  return '';
}

const showForm = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete(URI_FORM);
  urlParams.set(URI_KEY, key);
  window.location.search = '?' + urlParams.toString();
}

export const DraftsList: React.FC<{}> = () => {
  const [refresh, setRefresh] = React.useState(0);

  return <List component="nav">
    {
      listFormKeys().map(key => <ListItem button key={key} onClick={() => console.info(getCachedData(key))}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={getPrimary(key)} secondary={getSecondary(key)} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" disabled={Number(key.split(KEY_SEPARATOR, 2)[0]) <= BAPTEME_IDX} onClick={() => showForm(key)}>
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
