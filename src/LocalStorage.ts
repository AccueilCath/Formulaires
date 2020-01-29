export const TYPE_ATTR = 'type';
export const TIMESTAMP_ATTR = 'timestamp';
const KEY_PREFIX = 'CATH.';

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

const getKey = (type: string, timestamp: string):string => {
  return KEY_PREFIX + type + '-' + timestamp;
}

export const saveForm = <T>(type: string, data: T) => {
  const elt = document.getElementById('timestamp') as HTMLInputElement;
  let timestamp = '';
  if (elt) {
    timestamp = elt.value;
  }
  if (!timestamp) {
    timestamp = '' + new Date().getTime();
    elt.value = timestamp;
  }
  localStorage.setItem(getKey(type, timestamp), JSON.stringify(data));
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
