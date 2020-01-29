import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import { BaptemeProps } from './BaptemePdf';
import { CertificatBaptemeProps } from './CertificatBapteme';
import { useStyles } from './utils';
import { listFormKeys, loadForm } from './LocalStorage';

const getDetail = (val:string):string => {
  const parts = val.split('.')[1].split('-');
  if (parts.length > 1) {
    const d = new Date();
    d.setTime(parseInt(parts[1]));
    val = parts[0] + ' créé le ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + ' ' + d.getMilliseconds();
  }
  return val;
}

const getData = (val: string): BaptemeProps | CertificatBaptemeProps | undefined => {
  const parts = val.split('.')[1].split('-');
  if (parts.length > 1) {
    const elt = document.getElementById('timestamp') as HTMLInputElement;
    if (elt) {
      elt.value = parts[1];
    }
    switch (parts[0]) {
      case 'Baptême':
        return loadForm<BaptemeProps>(val);
      case 'Certificat de Baptême':
        return loadForm<CertificatBaptemeProps>(val);
      default:
        return {} as BaptemeProps;
    }
  }
  return undefined;
}

export const DraftsList: React.FC<{}> = () => {
  return <List component="nav">
    {
      listFormKeys().map(key => <ListItem button key={key} onClick={() => console.info(getData(key))}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
         <ListItemText primary={getDetail(key)} />
      </ListItem>)
    }
  </List>
}
