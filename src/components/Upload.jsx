import Layout from './Layout';
import { excel } from "../assets";

const Upload = () => {
  return (
    <Layout>
      <div className="">
        <div className="text-black text-2xl font-medium font-['Figtree'] leading-loose mt-[24px] ml-[30px]">Upload CSV</div>
        <div className='flex flex-col items-center'> 
        <div className='bg-white rounded-[10px] w-[550px] h-[290px] justify-center flex mt-[100px]'>
          <div className='flex flex-col items-center'>
            <img src={excel} className='w-[30px] h-[30px] mt-[40px]' />
            <div className='mt-[20px]'>Drop your Excel Sheet Here or{' '}
              <span className="text-blue-600 text-base font-normal font-Lato">Browse</span>
              </div>
              <button className="w-[370.77px] h-[43.91px]  mt-[90px] bg-indigo-500 rounded-[10px] flex items-center justify-center">
                <div className="text-base font-extrabold text-white font-montserrat ">Upload</div>
              </button>
            
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;

