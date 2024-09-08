import Search from "./searchbar/search"

const Navbar = () => {
  return (
    <div className="flex justify-between ring-white w-full place-items-center">
    <div className="flex justify-evenly gap-40">
      <div>Sidebar Icon</div>
        <div>Main Icon</div>
        <div>Text1 button</div>
        <div>Text2 button</div>
    </div>
    <Search/>
    </div>
  )
}

export default Navbar