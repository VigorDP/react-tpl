import { get } from './http'

const loadJokeList = ({ sort = 'asc', page = 1, pagesize = 10, time = '1418816972' } = {}) =>
  get('joke/content/list.php', {
    sort,
    page,
    pagesize,
    time,
    key: '9c818748074635227d7b2060c2450c5d'
  })

const getMobile = () => {
  return get('/mobile', {})
}

export { loadJokeList, getMobile }
