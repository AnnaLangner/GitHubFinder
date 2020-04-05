class Github {
  constructor () {
    this.client_id = 'd38903d3742229b11581';
    this.client_secret = 'e47f080fd04c37faf1845c38d212e2042bf269fd';
    this.repos_count = 5;
    this.repos_sort = 'create asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}