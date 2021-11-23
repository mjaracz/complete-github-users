import { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/fetchUsers';

export const useSearchingPage = () => {
  const [options, setOptions] = useState([
    { login: 'exampleUser' },
    { login: 'exampleUser1' },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>();
  useEffect(() => {
    async function saveAsyncUsers() {
      setIsLoading(true);
      const users = await fetchUsers();
      setOptions(users);
      setIsLoading(false);
    }
    saveAsyncUsers();
  }, []);

  return {
    isLoading,
    options,
  };
};
