import getTheBooks, { baseURL } from './data/grabYourBookAPI';
import { useEffect, useState } from 'react';

export const useBooksData = () => {
  const [theBooksInfo, setTheBooksInfo] = useState([]);
  const [IsDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    if (isClicked) {
      getTheBooks(baseURL)
        .then(data => {
          const { message, code } = data;
          if (code != '200' && message) throw Error(message);
          setError(null);
          setTheBooksInfo(data);
        })
        .catch(setError)
        .finally(() => {
          setIsDataLoading(false);
          setIsClicked(false);
        });
    }
  }, [isClicked]);

  return {
    isClicked,
    error,
    IsDataLoading,
    theBooksInfo,
  };
};
