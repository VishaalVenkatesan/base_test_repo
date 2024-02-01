import { logo, apple,google, left, github, twitter, linkedin, discord, logomobile, gitmob, twtmob, discordmob, linkedinmob} from '../assets';


const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const SignIn = () => 
  {
    
  return (
    <div>
  <div className="flex-1 hidden list-none sm:flex">
   
    <div className="w-1/2 bg-img" style={{
      
      background: `url(${left}) left center no-repeat`,
      backgroundColor: '#F8FAFF',
      backgroundSize: '100% 100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      padding: '30px',
      flexDirection: 'column',
      
      }}>
      <img src={logo} alt="logo" className="w-16 h-16 bg-white rounded-full" />
      <div className="h-20 mt-[260px] ml-[160px] font-bold text-white text-7xl font-montserrat">BASE</div>
      <div className='flex flex-row mt-[210px] ml-[100px]  space-x-10'>
      <img src={github} alt="github" className='w-[44px] h-[44px] flex row-auto ' onClick={() => openInNewTab("https://github.com/VishaalVenkatesan")}/>
      <img src={twitter} alt="twitter" className='w-[44px] h-[44px] flex row-auto' onClick={() => openInNewTab("https://twitter.com/openinapp?lang=en")}/>
      <img src={linkedin} alt="linkedin" className='w-[44px] h-[44px] flex row-auto' onClick={() => openInNewTab("https://www.linkedin.com/company/openinapp/?originalSubdomain=in")}/>
      <img src={discord} alt="discord" className='w-[44px] h-[44px] flex row-auto' onClick={() => openInNewTab("https://discord.com/")}/>
      </div>
    </div>

    <div className="w-1/2 bg-slate-50">
      <div className="mt-[130px] ml-[80px]">
        <div className="w-[143.81px] h-[48.30px] text-black text-4xl font-bold font-montserrat ">Sign In</div>
        <div className="w-[176.74px] h-[20.86px] text-black text-base font-normal font-lato mt-4">Sign in to your account</div>

        <div className="flex mt-8 space-x-4">
        <button className="relative flex items-center" >
          <div className="w-[180.60px] h-[32.93px] bg-white rounded-[10px] relative flex items-center">
        <img src={google} alt="google" className="w-[15.37px] h-[15.37px] relative bg-white ml-2" />
        <h2 className="z-10 text-xs text-center font-zinc-500 font-montserrat ml-[20px]">Sign in with Google</h2>
        </div>
        </button>


          <button className="relative flex items-center">
            <div className="w-[180.60px] h-[32.93px] bg-white rounded-[10px] relative flex items-center">
              <img src={apple} alt="apple" className="w-[15.37px] h-[15.37px] relative bg-white ml-2" />
              <h2 className="z-10 text-xs text-center font-zinc-500 font-montserrat ml-[20px]">Sign in with Apple</h2>
            </div>
          </button>
        </div>

        <div className="flex flex-col mt-8">
          <div className="w-[422.64px] h-[347.99px] bg-white rounded-[20px]">
            <form className="w-[105.38px] h-[20.86px] text-black text-base font-normal font-['Lato'] ml-[32px] mt-[32px]">
              <label>
                Email Address
                <input type="email" name="email" className="w-[356.77px] h-[43.91px] bg-neutral-100 rounded-[10px] mb-[21px]" />
              </label>
              <label className="">
                Password
                <input type="password" name="password" className="w-[356.77px] h-[43.91px] bg-neutral-100 rounded-[10px]" />
              </label>
              <button className="w-[136.12px] h-[20.86px] text-blue-600 text-base font-normal font-['Lato'] mt-[21px]">Forgot password?</button>
              <button className="w-[356.77px] h-[43.91px] mt-[21px] bg-indigo-500 rounded-[10px] flex items-center justify-center">
                <div className="text-base font-extrabold text-white font-montserrat">Sign In</div>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="w-[286.51px] text-center">
            <span className="text-zinc-500 text-base font-normal font-['Lato']">
              Don’t have an account? {` `} 
            </span>
            <span className="text-blue-600 text-base font-normal font-['Lato']">
               Register here
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="flex items-center justify-start flex-1 sm:hidden">
      <div className="bg-indigo-500 w-[100%] h-[100px]  ">
        <div className="ml-[20px] mt-[25px] mb-[25px] flex flex-row">
      <img src={logomobile} alt="logo" className="w-[29px] h-[29px] "/>
      <div className="text-neutral-50 text-2xl font-medium font-['Nunito'] ml-[15px]">Base</div>
      </div>
      <div className="bg-slate-50 pt-[28px] pl-[20px] w-[100%]">
      <div className="text-2xl font-bold text-black font-montserrat ">Sign In</div>
      <div className="mt-4 text-base font-normal text-black font-lato">Sign in to your account</div>
      <div className="flex mt-8 space-x-4 ">
        
      <button className="relative flex items-center ">
            <div className="w-[180.60px] h-[32.93px] bg-white rounded-[10px] relative flex items-center ">
              <img src={google} alt="apple" className="w-[15.37px] h-[15.37px] relative bg-white ml-2" />
              <h2 className="z-10 text-xs text-center font-zinc-500 font-montserrat ml-[20px]">Sign in with Google</h2>
              
            </div>
          </button>

          <button className="relative flex items-center ">
            <div className="w-[180.60px] h-[32.93px] bg-white rounded-[10px] relative flex items-center ">
              <img src={apple} alt="apple" className="w-[15.37px] h-[15.37px] relative bg-white ml-2" />
              <h2 className="z-10 text-xs text-center font-zinc-500 font-montserrat ml-[20px]">Sign in with Apple</h2>
              
            </div>
          </button>
        </div>
        <div className="flex mt-8">
  
  <div className="w-[328.64px] h-[350.99px] bg-white rounded-[20px] flex flex-col"  >
    <form className="w-[105.38px] h-[20.86px] text-black text-base font-normal font-['Lato'] ml-[32px] mt-[32px] flex flex-col">
      <label>
      Email Address
      <input type="email" name="email" className="w-[276.77px] h-[43.91px] bg-neutral-100 rounded-[10px] mb-[21px]" />
     </label>
      <label className="">
      Password
      <input type="password" name="password" className="w-[276.77px] h-[43.91px] bg-neutral-100 rounded-[10px]" />
     </label>
    <button className="w-[136.12px] h-[20.86px] text-blue-600 text-base font-normal font-['Lato'] mt-[21px]">Forgot password?</button>
    <button className="w-[276.77px] h-[43.91px] mt-[21px] bg-indigo-500 rounded-[10px] flex items-center justify-center">
      <div className="text-base font-extrabold text-white font-montserrat">Sign In</div>
    </button>
    
  </form>
  </div>
 
  </div>
  <div className="flex flex-col mt-8">
      <div className="w-[286.51px] text-center flex flex-col">
        <div className="text-zinc-500 text-base font-normal font-['Lato']">
          Don’t have an account? {` `} 
          </div>
        
        <span className="text-blue-600 text-base font-normal font-['Lato'] justify-center">
          Register here
        </span>
        </div>
   
  </div>
  </div>
  <div className='flex flex-row space-x-6 bg-grey-400 mt-[10px] ml-[70px]'>
      <img src={gitmob} alt="gitmob" className='w-[30px] h-[30px] flex row-auto ' onClick={() => openInNewTab("https://github.com/VishaalVenkatesan")}/>
      <img src={twtmob} alt="twtmob" className='w-[30px] h-[30px] flex row-auto' onClick={() => openInNewTab("https://twitter.com/openinapp?lang=en")}/>
      <img src={linkedinmob} alt="linkedinmob" className='w-[30px] h-[30px] flex row-auto' onClick={() => openInNewTab("https://www.linkedin.com/company/openinapp/?originalSubdomain=in")}/>
      <img src={discordmob} alt="discordmob" className='w-[30px] h-[30px] flex row-auto' onClick={() => openInNewTab("https://discord.com/")}/>
      </div>
  
  </div>
</div>
</div>
  
);
  };

export default SignIn;





  
