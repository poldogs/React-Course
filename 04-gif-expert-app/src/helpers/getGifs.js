export const getGifs = async (category) => {
    const url = `api.giphy.com/v1/gifs/search?api_key=7yO4u6tLlrcZjxgP536KGapgslL7dFjy&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
  }