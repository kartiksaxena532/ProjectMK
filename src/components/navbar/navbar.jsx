import Search from "./searchbar/search"

const Navbar = () => {
  return (
    <div className="flex justify-between ring-white ring-2 w-full place-items-center">
    <div className="flex justify-evenly gap-40">
        <div>Icon</div>
        <div>Text1</div>
        <div>Text2</div>
    </div>
    <Search/>
    </div>
  )
}

export default Navbar