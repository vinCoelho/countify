import { useEffect, useState } from 'react';
import { getPlaylist } from '../service/api';

function Player() {
  const [html, setHtml] = useState('');
  const [input, setInput] = useState<string>('');

  const getList = async () => {
    const response = await getPlaylist(input.length > 0 ? input : 'https://open.spotify.com/playlist/7DKd2MZRE4e4WQzfxuFZa1?si=64ba46b694ef4f6d')
    setHtml(response.html)
  }

  useEffect(() => {
    getList()
  }, [])

  return (<div className='w-1/2'>
    <input className='bg-[#44475a] text-white py-1 px-2 border-2 border-[#ff79c6] rounded-lg mb-3' type='text' value={input} placeholder='url da playlist...' onChange={({ target }: { target: HTMLInputElement }) => setInput(target.value)}></input>
    <button className='py-1 px-2 ml-2 bg-[#ff79c6] rounded-lg text-gray-200' onClick={getList}>
      search
    </button>
    {html && <div dangerouslySetInnerHTML={{ __html: html }} />
    }
  </div>);
}

export default Player;