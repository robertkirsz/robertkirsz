const preloadSingle = url =>
  new Promise(resolve => {
    const img = new Image()
    img.src = url
    img.onload = resolve
  })

export const preload = urls =>
  new Promise(resolve => {
    if (urls.constructor === Array) Promise.all(urls.map(preloadSingle)).then(resolve)
    else preloadSingle(urls).then(resolve)
  })
