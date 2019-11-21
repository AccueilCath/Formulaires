export const formatDate = (inDate: string): string => {
  return inDate.split('-').reverse().join('/');
};

export const getCCEmail = (email: string, type: string) => {
  const parts = email.split('@');
  if (parts.length > 0) {
    parts[0] += '+' + type;
  }
  return parts.join('@');
}