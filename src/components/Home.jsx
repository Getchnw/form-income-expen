const Home = () => {
  const go_to_add_in_ex = () => {
    window.location.href = '/add_in_ex'
  }
  return (
    <div className="flex flex-col items-center justify-center w-full  h-screen border">
      <div>
          Welcome to My web
      </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Go to Add In/Ex
        </button>
    </div>
  )
}
export default Home