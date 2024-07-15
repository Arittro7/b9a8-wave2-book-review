import { Link } from 'react-router-dom';
import bnrImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='sero max-w-7xl my-5'>
      <div className=" bg-gray-200 p-4 border rounded">
          <div className="hero-content flex ">
            <div className='w-2/3'>
            <h2 className='text-3xl mb-8'>Books are the quietest and most <br />constant of friends</h2>
            <Link to={'/listedbook'}>
            <button className='bg-green-600 text-white text-2xl font-semibold py-2 px-3 rounded-xl'>View The List</button>
            </Link>
            </div>
            <img src={bnrImg} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Banner;