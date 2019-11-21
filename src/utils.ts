
export const formatDate = (inDate: string): string => {
  return inDate.split('-').reverse().join('/');
};
