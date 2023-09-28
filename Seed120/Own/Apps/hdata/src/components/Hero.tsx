import Image from "next/image"
import heroBg from "@/assets/HDATABG.png"
import sideHeroImage from "@/assets/side-hero-image.png"
import  { Sora } from 'next/font/google'
import styles from "@/styles/styles"

const sora = Sora({
  weight: ['100', '200','300', '400', "500", "600", "700", "800"],
  subsets: ['latin']
})

const Hero = () => {
  return (
    // <section id="home" className={`flex h-screen  md:flex-row flex-col sm:py-16 py-6`}>
    //    <div className="relative w-full">
    //     <div className='-z-10 absolute'>
    //           <Image
    //               className="max-w-[1218px]"
    //               src={heroBg}
    //               alt="Background Image"
    //           />
    //       </div>
    //    </div>
    //     <div className="flex flex-col top-0">
    //       <div className=" lg:px-4 lg:text-center">
    //           <h1 className={`  ${sora.className}  mb-4 text-4xl font-bold tracking-tight text-dark-950  lg:text-6xl lg:leading-none lg:text-center xl:px-36 lg:mb-7`}>
    //             Find The <span className="text-primary-700">Perfect</span>  <br />
    //             Job That You <br />
    //             <span className="text-primary-700">Deserves</span>
    //           </h1>
    //       </div>
    //       <div className="flex justify-self-center text-center flex-row md:flex-row gap-6">
    //           <div className="">
    //             <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
    //           </div>
    //           <div className="">
    //             <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">How It work ?</button>
    //           </div>
    //       </div>
    //     </div>        
    // </section>
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className="font-normal text-dark-800 text-[18px] leading-[30.8px]">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
        <div className={ ` ${sora.className} font-black flex flex-row justify-between items-center w-full`}>
          <h1 className="flex-1 font-poppins font-black text-dark-950 ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          Find The <span className="text-primary-800"></span>  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Perfect Job </span>{" "}
          </h1>
        </div>
        <h1 className={`${sora.className} text-primary-800 font-poppins font-black ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full`}>
        You Deserves
        </h1>
        <p className={`${sora.className} text-dark-900 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        We utilize our strengths to facilitate the success of our participants, 
        enabling them to establish enduring careers that benefit themselves,
        their families, and the community as a whole.
        </p>
        <div className="flex justify-self-center text-center flex-row md:flex-row gap-6 mt-5">
               <div className="">
                 <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
               </div>
               <div className="">
                 <button type="button" className="text-white py-4 px-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">How It work ?</button>
               </div>
           </div>
      </div>
      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
        <Image src={sideHeroImage} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero