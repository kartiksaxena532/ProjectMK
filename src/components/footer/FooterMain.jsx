

const FooterMain = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center rounded-full ring-4 ring-fuchsia-100">
      </div>
      <div className="flex h-[45vh] align-center justify-center text-[7vw] uppercase font-bold font-mons">
        <div className="flex justify-center items-center">
          <div className="bg-transparent gap-16 md:gap-28 font-mons ">Let{`'`}s Work Together!
          </div>
        </div>
      </div>
      <div className=" w-full bg-green-500 flex h-[30vh]">
        <div className="flex flex-col gap-9 w-full h-full justify-center items-center">
          <div className="flex justify-center items-center text-white text-2xl md:text-4xl font-mons font-light mt-10">Graphich Design | Branding | Logo Design | UX/UI Design
          </div>
          <div className="flex flex-row justify-between font-sans items-center w-[90vw] mt-10">
            <div className="flex justify-start items-center text-white text-sm md:text-lg font-bold font-mons ">Contact Us
            </div>
            <div className="flex justify-end flex-row gap-10 md:gap-20">
              <div className="flex justify-center items-center font-sans text-white text-sm md:text-lg">FB
              </div>
              <div className="flex justify-center items-center text-white text-sm md:text-lg font-sans ">Insta
              </div>
              <div className="flex justify-center items-center text-white text-sm md:text-lg font-sans ">Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMain