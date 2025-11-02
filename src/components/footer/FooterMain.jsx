
import Email from '../../assets/images/icons/Email.png'
import Insta from '../../assets/images/icons/Insta.png'
import In from '../../assets/images/icons/linked.png'
const FooterMain = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center rounded-full ring-4 ring-fuchsia-100">
      </div>      <div className="flex h-[45vh] align-center justify-center text-[7vw] uppercase font-bold font-mons">
        <div className="flex justify-center items-center">
          <div className="bg-transparent gap-16 md:gap-28 font-mons ">Let{`'`}s Work <span className="text-green-500 ml-4 bg-white px-2">Together</span>
          </div>
        </div>
      </div>
      <div className=" w-full bg-green-500 flex h-[30vh]">
        <div className="flex flex-col gap-9 w-full h-full justify-center items-center">
          <div className="flex justify-center items-center text-center text-white text-2xl md:text-4xl sm:text-center font-mons font-light mt-4">Graphich Design | Branding | Logo Design | UX/UI Design
          </div>
          <div className="flex flex-row justify-between font-sans items-center w-[90vw] ">
            <div className="flex justify-start items-center text-white text-sm italic md:text-2xl font-bold font-mons ">Contact Us
            </div>
            <div className="flex justify-end flex-row gap-10 md:gap-20">
              <a href="mailto:karrtiksaxena@gmail.com" className="flex justify-center items-center font-sans hover:animate-pulse text-white text-sm md:text-2xl">
                <img src={Email} alt="email" className="w-8 h-8 invert" />
              </a>
              <a href="" className="flex justify-center items-center text-white  md:text-2xl font-sans hover:animate-pulse"> <img src={Insta} alt="email" className="w-8 h-8 invert" />
              </a>
              <a href="https://www.linkedin.com/company/may-kreate" className="flex justify-center items-center hover:animate-pulse text-white text-sm md:text-2xl font-sans "> <img src={In} alt="email" className="w-9 h-9  invert" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMain