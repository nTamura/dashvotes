export const clipIdFromUrl = url => {
  if (url.substr(-1) === '/') {
    url = url.substr(0, url.length - 1)
  }
  return url.substr(url.lastIndexOf('/') + 1)
}

export const turnIdToUrl = id => {
  const url = 'https://dashvotes.firebaseapp.com/poll/'
  return url + id
}
