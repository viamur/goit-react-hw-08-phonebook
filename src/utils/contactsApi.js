import axios from 'axios';

axios.defaults.baseURL = 'https://62fa84e33c4f110faa9b10dc.mockapi.io';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactsApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const removeContactsApi = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
