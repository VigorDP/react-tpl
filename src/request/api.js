import { get, post } from './http.js'

const loadJokeList = ({
  sort = 'asc',
  page = 1,
  pagesize = 10,
  time = '1418816972'
} = {}) => {
  get('joke/content/list.php', {
    sort,
    page,
    pagesize,
    time,
    key: '9c818748074635227d7b2060c2450c5d'
  }).then(data => console.log('abc' + data))
}

const getMobile = () => {
  get('mobile').then(data => console.log(data))
}

export { loadJokeList, getMobile }
