import fetch from 'cross-fetch'

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export const getQueryString = (params = {}) => {
  let res = ''
  const keys = Object.keys(params)
  const length = keys.length
  for (let i = 0; i < length; i++) {
    const key = keys[i]
    res += `${key}=${encodeURI(params[key])}`
    if (i + 1 < length) {
      res = `${res}&`
    }
  }
  return res
}

export default (options) => {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined')
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video'
  }

  console.log(`${ROOT_URL}?${getQueryString(params)}`)
  return fetch(`${ROOT_URL}?${getQueryString(params)}`,
    {method: 'GET'}).then((response) => {
    return response.json()
  }).catch((error) => {
    console.error(error)
  })
}
