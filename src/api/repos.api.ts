export const reposApi = () => {
  const baseUrl = 'https://api.github.com/repos';
  const defaultReqOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  async function fetchRepoByUserAndName(user: string, repoName: string) {
    return fetch(`${baseUrl}/${user}/${repoName}`, defaultReqOptions).then(
      (res) => res.json()
    );
  }
  return {
    fetchRepoByUserAndName,
  };
};
