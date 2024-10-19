
import "../index.css"
const Video = () => {
  return (
    <div className='h-[100vh] contain mt-11 rounded-xl flex justify-center'>
        <video src='./video.mp4' alt="video" className="w-[100%] h-[100%] object-cover rounded-xl new" autoPlay muted loop/>
    </div>
  )
}

export default Video