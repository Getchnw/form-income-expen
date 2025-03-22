const Navbar = () => {
    const go_to_home = () => {
        window.location.href = '/'
    }
    const go_to_add_in_ex = () => {
        window.location.href = '/add_in_ex'
    }
    const go_to_show_in_ex = () => {
        window.location.href = '/show_in_ex'
    }
  return (
    <div className="w-full flex justify-between bg-gray-800 text-white h-12 items-center px-4">
        <div>
            <button className="hover:underline" onClick={go_to_home}>Home</button>
        </div>
        <div className="flex gap-4"> 
            <div>
                <button className="hover:underline" onClick={go_to_add_in_ex}>Add In/Ex</button>
            </div>
            <div>
                <button className="hover:underline" onClick={go_to_show_in_ex}>Shoow In/Ex</button>
            </div>
        </div>

    </div>
  )
}
export default Navbar