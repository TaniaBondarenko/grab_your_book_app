import { nullLiteralTypeAnnotation, TSNonNullExpression } from 'babel-types';
import getTheBooks, { baseURL } from './data/grabYourBookAPI';
import { useEffect, useState } from './framework/hooks';

export const useBooksData = () => {
  const [isNotFiltered, setIsNotFiltered] = useState(true);
  const [theBooksInfo, setTheBooksInfo] = useState([]);
  const [IsDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTheBooks(baseURL)
      .then(date => {
        const { message, code } = data;
        if (code != '200' && message) throw Error(message);
        setError(null);
        setTheBooksInfo(data);
      })
      .catch(setError)
      .finally(() => setIsDataLoading(false));
  }, []);

  return {
    error,
    IsDataLoading,
    theBooksInfo,
  };
};
