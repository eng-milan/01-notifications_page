
function Header({ state, handleClick }) {
    let counter = 0
    state.map((user) => {
        if (!user.isRead) {
            counter++
        }
        return null
    })

    return <div className="mb-8 flex flex-row justify-between items-center">
        <div className="flex">
            <h1 className="text-3xl font-bold">Notifications</h1>
            <h2 className="flex items-center ml-4 px-3 bg-blue-800 text-white font-bold rounded-lg text-lg">{counter}</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600" onClick={() => handleClick()}>Mark all as read</button>
    </div>
}

export default Header