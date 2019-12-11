export default function api(method, path, data) {
  return fetch(process.env.REACT_APP_API_BASE_URL + path, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json().then(data => {
      if (!response.ok) {
        throw new Error(data["error"])
      }

      return data;
    })
  })
}