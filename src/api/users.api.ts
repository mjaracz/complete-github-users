import { reposApi } from './repos.api';

export const usersApi = () => {
  const baseUrl = 'https://api.github.com/users';
  const defaultReqOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };
  async function fetchAllUsers() {
    return fetch(baseUrl, defaultReqOptions).then((res) => res.json());
  }
  async function fetchUserAndRepoByName(username: string, repoName: string) {
    const { fetchRepoByUserAndName } = reposApi();
    return Promise.all([
      fetch(`${baseUrl}/${username}`, defaultReqOptions).then((res) =>
        res.json()
      ),
      fetchRepoByUserAndName(username, repoName),
    ]);
  }
  return {
    baseUrl,
    fetchAllUsers,
    fetchUserAndRepoByName,
  };
};
