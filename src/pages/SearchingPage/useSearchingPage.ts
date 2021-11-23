import { useEffect, useState } from 'react';
import { usersApi } from '../../api/users.api';

export const useSearchingPage = () => {
  const [options, setOptions] = useState([
    { login: 'exampleUser' },
    { login: 'exampleUser1' },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>();
  useEffect(() => {
    async function saveAsyncUsers() {
      const { fetchAllUsers } = usersApi();
      setIsLoading(true);
      const users = await fetchAllUsers();
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
