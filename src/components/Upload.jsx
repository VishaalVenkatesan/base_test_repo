import Layout from './Layout';
import { excel, menu, logopurp} from "../assets";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();

  // Function to navigate to NavMob component
  const goToNavMob = () => {
    navigate('/Navmob');
  };
  return (
    <Layout>
      {/* Desktop View */}
      <div className="sm:flex hidden">
        <div className="text-black text-2xl font-medium font-['Figtree'] leading-loose mt-[24px] ml-[30px]">Upload CSV</div>
        <div className='flex flex-col items-center'> 
          <div className='bg-white rounded-[10px] w-[550px] h-[290px] justify-center flex mt-[150px] ml-[150px]'>
            <div className='flex flex-col items-center'>
              <img src={excel} className='w-[30px] h-[30px] mt-[40px]' />
              <div className='mt-[20px] ml-[20px] items-center'>Drop your Excel Sheet Here or{' '}
                <span className="text-blue-600 text-base font-normal font-Lato">Browse</span>
                </div>
                <button className="w-[370.77px] h-[43.91px]  mt-[90px] bg-indigo-500 rounded-[10px] flex items-center justify-center">
                  <div className="text-base font-extrabold text-white font-montserrat ">Upload</div>
                </button>
              
            </div>
          </div>
        </div>
      </div>

      
      <div className="sm:hidden flex flex-col">
        <div className='bg-white'>
        <div className="flex items-center mt-[20px] ml-[20px] mb-[20px]">
          <img src={menu} alt="menu" className="w-[40px] h-[40px]" onClick={goToNavMob}/>
          <img src={logopurp} alt="logo" className="w-[40px] h-[40px] ml-[25px]" />
          <div className="font-medium text-black text-4xl ml-[20px] font-montserrat">Base</div>
        </div>
        </div>
        <div className="text-black text-2xl font-medium font-['Figtree'] leading-loose mt-[24px] ml-[30px]">
          Upload CSV
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-[10px] w-[550px] h-[290px] justify-center flex mt-[100px]">
            <div className="flex flex-col items-center">
              <img src={excel} className="w-[30px] h-[30px] mt-[40px]" />
              <div className="mt-[20px]">
                Drop your Excel Sheet Here or{' '}
                <span className="text-blue-600 text-base font-normal font-Lato">Browse</span>
                <button className="w-[300.77px] h-[43.91px] mt-[90px] bg-indigo-500 rounded-[10px] flex items-center justify-center">
                  <div className="text-base font-extrabold text-white font-montserrat">
                    Upload
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;