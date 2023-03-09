import { GoPrimitiveDot } from "react-icons/go";

function NotificationListItem({ user, matchedUser, handleNotificationClick }) {

    return <div className={`px-6 py-6 mb-2 rounded-xl ${matchedUser.isRead ? "" : "bg-gray-50"}`} onClick={() => handleNotificationClick(user)}>
        <div className="flex justify-between">
            <div className="flex -my-3">
                <img className="h-12 mt-1" src={user.avatar} alt={user.name} />
                <div className="ml-4">
                    <div className="flex justify-between items-center">
                        <p><a className=" font-bold hover:text-blue-800" href="/">{user.name}</a>
                            <span className="ml-1 text-lg text-gray-500">{user.reaction}</span>
                            {user.reactionTo ? <a className="ml-1 font-bold hover:text-blue-800" href="/">{user.reactionTo}</a> : null}
                            {matchedUser.isRead ? null : <GoPrimitiveDot className=" ml-1 inline text-red-500" />}
                        </p>

                    </div>
                    <p className="text-gray-400">{user.time}</p>
                </div>
            </div>
            {user.picture ? <img className="ml-2 w-12 h-12 cursor-pointer" src={user.picture} alt="one of your images" /> : null}
        </div>
        {user.comment ? <p className="ml-[70px] mt-5 p-5 border border-blue-100 text-gray-500 rounded-lg hover:bg-blue-100 cursor-pointer">{user.comment}</p> : null}
    </div >
}

export default NotificationListItem

