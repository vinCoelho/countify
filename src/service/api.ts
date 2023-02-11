export const getPlaylist = async (url: string) => {
  const response = await (await fetch(`https://open.spotify.com/oembed?url=${url}`)).json();
  console.log(response);
  return response;
}
