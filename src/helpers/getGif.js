

export const getGifs = async(category) => {

    const apiKey = 'V9rogthUXGMm2bPoLRA5kXzfsyMPUy3M';
    const limit = 10;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=${ limit }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        gif: gif.images.downsized_medium.url,
    }))

    return gifs;
}
