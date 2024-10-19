

const FooterMain = () => {
  return (

    <div className="relative h-[80vh] w-full my-10 cursor-pointer overflow-hidden">
        <div className="absolute bg-green-500 h-64 right-0 w-4/5 md:w-1/2 rounded-bl-full z-[999]">
        </div>
        <div className="min-h-screen bg-transparent justify-start ">
  <div className="relative sm:max-w-xl ml-10 py-12">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Create an Query</h2>
            <p className="text-sm text-gray-300 font-normal leading-relaxed capitalize">We would love to hear from your side.</p>
          </div>
        </div>
        <form className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Email</label>
              <input required type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="mailus@gmail.com"/>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Name</label>
              <input required type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Jonny Storm"/>
            </div>
            <div className="flex flex-col">
              <label  className="leading-loose">Description</label>
              <input required type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="I Want To Create A Fanstanstic 4 Website"/>
            </div>
          </div>
          <div className="pt-4 flex items-center space-x-4">
              <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default FooterMain