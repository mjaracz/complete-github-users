export const usersApi = () => {
  const baseUrl = 'https://api.github.com/users';
  const defaultReqOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };
  async function fetchAllUsers() {
    return fetch(baseUrl, defaultReqOptions).then((res) => res.json());
  }
  async function fetchUserByName(name: string) {
    return fetch(`${baseUrl}/${name}`, defaultReqOptions).then((res) =>
      res.json()
    );
  }
  return {
    baseUrl,
    fetchAllUsers,
    fetchUserByName,
  };
};
