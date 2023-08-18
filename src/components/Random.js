import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-8 mt-[15px] py-3 px-9'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Get New Joke</h1>

      {loading ? <Spinner /> : <div>{gif}</div>}
      
      <button
        onClick={() => fetchData()}
        className="w-6/12 bg-white text-lg py-3 px-6 rounded-lg mb-[20px]">
        Generate
      </button>

    </div>
  );
};

export default Random;
