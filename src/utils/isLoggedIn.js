import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function isLoggedIn() {
  return cookies.get('token') !== undefined;
}