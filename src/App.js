import { useState } from "react"
import NotificationData from "./data/NotificationData"
import Header from "./components/Header"
import NotificationList from "./components/NotificationList"
import Footer from "./components/Footer"

function App() {
    const [notificationRead, setNotificationRead] = useState(() => {
        const initialState = NotificationData.map((user, index) => {
            if (index < 3) {
                return { name: user.name, isRead: false }
            }
            return { name: user.name, isRead: true }
        })
        return initialState
    })

    const onMarkAllReadClick = () => {
        const newState = notificationRead.map((user) => {
            return { ...user, isRead: true }
        })
        setNotificationRead(newState)
    }

    const onNotificationClick = (user) => {
        const newState = notificationRead.map((data) => {
            if (user.name === data.name) {
                return { ...data, isRead: true }
            }
            return data
        })
        setNotificationRead(newState)
    }

    return <div className="bg-gray-50 md:py-[50px] md:px-[150px] lg:px-[250px] xl:px-[360px] 2xl:px-[500px]">
        <div className="px-5 pt-8 pb-2 bg-white md:rounded-lg">
            <Header state={notificationRead} handleClick={onMarkAllReadClick}></Header>
            <NotificationList
                data={NotificationData}
                state={notificationRead}
                handleNotificationClick={onNotificationClick} />
        </div>
        <Footer className={"mt-6"} />
    </div>
}

export default App