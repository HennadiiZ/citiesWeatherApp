import { API_KEY, URL_list } from '../constants/constants';

//my func
export const fetchData = async (setLoadedData, setIsLoading) => {
  const response = await fetch(`${URL_list}${API_KEY}`);
  const data = await response.json();
  setLoadedData(data.list);
  setIsLoading(false);
};
