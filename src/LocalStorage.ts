export const TIMESTAMP_ATTR = 'timestamp';

export const KEY_SEPARATOR = '/';
const KEY_PREFIX = 'CATH' + KEY_SEPARATOR;

export const localStorageAvailable = () => storageAvailable('localStorage');

const storageAvailable = (type: string):boolean => {
  var storage;
  try {
      storage = (window as any)[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

export const getFormIdAndTimeStamp = (key: string):{formId: number, timestamp: string} => {
  const parts = key.split(KEY_SEPARATOR);
  if (parts.length > 2) {
    return {formId: parseInt(parts[1]), timestamp: parts[2]};
  }
  return {formId: -1, timestamp: ''};
}

export const getKey = (formId: number):string => {
  const elt = document.getElementById('timestamp') as HTMLInputElement;
  let timestamp = '';
  if (elt) {
    timestamp = elt.value;
  }
  if (!timestamp) {
    timestamp = '' + new Date().getTime();
    elt && (elt.value = timestamp);
  }
  return KEY_PREFIX + formId + KEY_SEPARATOR + timestamp;
}

export const isSaved = (formId: number): boolean => {
  return !!localStorage.getItem(getKey(formId));
}

export const removeForm = (key: string) => {
  localStorage.removeItem(key);
}

export const saveForm = <T>(formId: number, data: T) => {
  localStorage.setItem(getKey(formId), JSON.stringify(data));
}

export const loadForm = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) || '') as T;
}

export const listFormKeys = ():string[] => {
  const res: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) || '';
    if (key.startsWith(KEY_PREFIX)) {
      res.push(key);
    }
  }
  return res;
}
