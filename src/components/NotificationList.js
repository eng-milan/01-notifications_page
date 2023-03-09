import NotificationListItem from "./NotidicationListItem"


function NotificationList({ data, state, handleNotificationClick }) {
    const renderedItems = data.map((user) => {
        const [matchedUser] = state.filter((eachUser) => {
            return user.name === eachUser.name
        })

        return <NotificationListItem
            key={user.avatar}
            user={user}
            matchedUser={matchedUser}
            handleNotificationClick={handleNotificationClick} />
    })
    return <div>
        {renderedItems}
    </div>
}

export default NotificationList