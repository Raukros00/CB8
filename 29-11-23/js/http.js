const httpGet = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();
  return data;
};

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQyM2E2NGVjMDAwMDU1OTRmNGE2OWZjOTI3ODQ1ZSIsInN1YiI6IjY1NjRlMjlhZDk1NTRiMDExZDY0MmFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2N8GOFUxxLl7NhHwZl3Y7AVMYxm_IgpmqYsrOyq6z4I";

export { httpGet };
