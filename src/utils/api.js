import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function api(method, path, data) {
  const URL = process.env.REACT_APP_API_BASE_URL + path;
  const authToken = cookies.get('token');
  
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (authToken) {
    options.headers["Authorization"] = "Bearer " + authToken;
  }
  
  return fetch(URL, options).then(response => {
    if (response.status === 204) {
      return true;
    }

    return response.json().then(data => {
      if (!response.ok) {
        throw new Error(data["error"])
      }

      return data;
    })
  })
}