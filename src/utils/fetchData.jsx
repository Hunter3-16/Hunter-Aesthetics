export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '5d349be16bmshff1f55e6bc3fad4p1a55c9jsn73a8e8fd5430',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '5d349be16bmshff1f55e6bc3fad4p1a55c9jsn73a8e8fd5430',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

}

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options)
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error.message)
  }
}