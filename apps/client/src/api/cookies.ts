import Cookies from 'universal-cookie';

const AUTH = 'Authorization';

const cookie = new Cookies();

export const getAuthCookie = () => cookie.get(AUTH);
