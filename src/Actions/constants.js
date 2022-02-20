const BASE_URL = 'https://deploy-back-mangaka-v2.herokuapp.com/';

export const AllMangas = BASE_URL + 'api/mangas/allMangas'
export const Directory = BASE_URL + 'api/mangas/directory'
export const Genres = BASE_URL + 'api/mangas/listOfGenres'
export const recentMangas = BASE_URL + 'api/mangas/recentMangas'
export const Detail = BASE_URL + 'api/mangas/manga/'
export const Post = BASE_URL + 'api/mangas/'
export const FilterByAuthor = BASE_URL + 'api/mangas/byAuthor?author='
export const SearchManga = BASE_URL + 'api/mangas/Search?title='
export const Paginado = BASE_URL + 'api/mangas/directory?page='
export const Chapters = BASE_URL + 'api/chapters'
export const Register = BASE_URL + 'api/users/register'
export const LoginGoogle = BASE_URL + 'api/auth/google/response'
export const LogOut = BASE_URL + 'api/auth/logout'
export const LoginLocal = BASE_URL + 'api/auth/local/login'
export const GetChapters = BASE_URL + 'api/chapters/chapter/getchapter/'
export const GetUserInfo = BASE_URL + 'api/users/user/'
export const getPopularMangas = BASE_URL + 'api/mangas/popularMangas'
export const getAllUsers = BASE_URL + 'api/users'
export const setActive = BASE_URL + 'api/users/user/setActive/'
export const setActiveManga = BASE_URL + 'api/mangas/manga/setActive/'
export const setAdmin = BASE_URL + 'api/users/user/setAdmin/'
export const postCheckout = BASE_URL + 'api/coins/sell'
export const getPacks = BASE_URL + 'api/coins/pack'
export const buyCoins = BASE_URL + 'api/coins/buy'
export const getChapterById = BASE_URL + 'api/chapters/chapter/getchapter/'
