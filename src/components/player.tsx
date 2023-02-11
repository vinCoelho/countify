import { useEffect, useState } from 'react';
import { getPlaylist } from '../service/api';

function Player() {
  const [html, setHtml] = useState('');
  const [input, setInput] = useState<string>('');

  const getList = async () => {
    const response = await getPlaylist(input.length > 0 ? input : 'https://open.spotify.com/playlist/1RaveuWpJqDrer2wejmx86?si=f776a19b3e0d4b32')
    setHtml(response.html)
  }

  useEffect(() => {
    getList()
  }, [])

  return (<div className='w-1/2 text-center'>
    <input className='w-10/12 bg-[#44475a] bg-opacity-50 text-white py-1 px-2 border-2 border-[#ff79c6] font-mono rounded-lg mb-8' type='text' value={input} placeholder='insira a url...' onChange={({ target }: { target: HTMLInputElement }) => setInput(target.value)}></input>
    <button className='py-1.5 px-4 ml-4 font-mono bg-[#ff79c6] rounded-lg text-gray-200' onClick={getList}>
      Play!
    </button>
    {html && <div dangerouslySetInnerHTML={{ __html: html }} />
    }
  </div>);
}

export default Player;