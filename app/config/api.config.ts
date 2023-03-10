export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `auth/${string}`
export const getMoviesUrl = (string: string) => `movies/${string}`
export const getUsersUrl = (string: string) => `${API_URL}/users/${string}`
export const getActorsUrl = (string: string) => `actors/${string}`
export const getRatingsUrl = (string: string) => `ratings/${string}`
export const getGenresUrl = (string: string) => `genres/${string}`
