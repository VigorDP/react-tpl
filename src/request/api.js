import { get, post } from './http.js'
import { loadJoke } from 'store/actions'

const loadJokeList = ({
  sort = 'asc',
  page = 1,
  pagesize = 10,
  time = '1418816972'
} = {}) => dispatch =>
  get('joke/content/list.php', {
    sort,
    page,
    pagesize,
    time,
    key: '9c818748074635227d7b2060c2450c5d'
  }).then(data => dispatch(loadJoke(data)))

export { loadJokeList }
