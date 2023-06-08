import { Octokit } from "octokit";

const Github = (props: { authToken: string }) => {
  const { authToken } = props;
  return new Octokit({
    auth: authToken,
  });
};

const GetIssue = async (props: {
  authToken: string;
  repo: string;
  per_page?: number;
  page?: number;
  state?: string;
}) => {
  const { authToken, repo, per_page = 10, page = 1, state = "closed" } = props;
  return fetch(
    `https://api.github.com/repos/${repo}/issues?${new URLSearchParams([
      ["per_page", `${per_page}`],
      ["page", `${page}`],
      ["state", `${state}`],
    ])}&Authorization=Bearer ${authToken}`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export { Github, GetIssue };
