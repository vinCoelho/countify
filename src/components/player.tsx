import { useEffect, useState } from 'react';
import { getPlaylist } from '../service/api';

function Player() {
  const [html, setHtml] = useState('');
  const [input, setInput] = useState<string>('');

  const getList = async () => {
    const retrievedUrl = localStorage.getItem('savedUrl');
    console.log(retrievedUrl);
    
    const response = await getPlaylist(
      input.length > 0 ? input 
      : retrievedUrl
      || 'https://open.spotify.com/playlist/739UpZIZldjAMBSiAZjz1q?si=4e351f648aa348b3')
    setHtml(response.html)

    input && localStorage.setItem('savedUrl', input)
    setInput('');
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className='w-1/2 text-center flex flex-col sm:items-center'>
      <section className='flex justify-between'>
        <input className='md:w-auto min-w-0 bg-[#44475a] bg-opacity-50 text-white py-1 px-2 border-2 border-[#ff79c6] font-mono rounded-lg mb-8' type='text' value={input} placeholder='insert a url...' onChange={({ target }: { target: HTMLInputElement }) => setInput(target.value)} />
        <button className='w-38 h-9 py-1.5 px-4 ml-4 font-mono bg-[#ff79c6] rounded-lg text-white disabled:opacity-70' disabled={ input.length <= 24 } onClick={getList}>
          Play!
        </button>
      </section>
      { html && <div className='opacity-90' dangerouslySetInnerHTML={{ __html: html }} /> }
      <h3 className='w-auto max-w-xs bg-[#ff79c6]/70 text-white text-xs rounded-2xl px-3 py-2 font-mono mt-4'>Faça login no Spotify para reproduzir as músicas na íntegra.</h3>
    </div>
  );
}

export default Player;
