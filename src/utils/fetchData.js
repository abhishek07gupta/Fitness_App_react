export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cafeb0b203msh98d4311d27ed308p13646ejsn22a29000c595',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const videosOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cafeb0b203msh98d4311d27ed308p13646ejsn22a29000c595',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData= async(URL , options)=>{
    const res = await fetch(URL , options);
    const data = await res.json();
    return data;
}