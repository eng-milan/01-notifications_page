import MarkWeber from "../images/avatar-mark-webber.webp"
import AngelaGray from "../images/avatar-angela-gray.webp"
import JacobThompson from "../images/avatar-jacob-thompson.webp"
import RizkyHasanuddin from "../images/avatar-rizky-hasanuddin.webp"
import KimberlySmith from "../images/avatar-kimberly-smith.webp"
import NathanPeterson from "../images/avatar-nathan-peterson.webp"
import AnnaKim from "../images/avatar-anna-kim.webp"
import ChessPicture from "../images/image-chess.webp"

const NotificationData = [
    {
        avatar: MarkWeber,
        name: "Mark Webber",
        reaction: "reacted to your recent post",
        reactionTo: "My first tournament today!",
        time: "1m ago"
    },
    {
        avatar: AngelaGray,
        name: "Angela Gray",
        reaction: "followed you",
        reactionTo: null, time: "5m ago"
    },
    {
        avatar: JacobThompson,
        name: "Jacob Thompson",
        reaction: "has joined your group",
        reactionTo: "Chess Club",
        time: "1 day ago"
    },
    {
        avatar: RizkyHasanuddin,
        name: "Rizky Hasanuddin",
        reaction: "sent you a private message",
        reactionTo: null, time: "5 days ago",
        comment: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
        avatar: KimberlySmith,
        name: "Kimberly Smith",
        reaction: "commented on your picture",
        reactionTo: null,
        time: "1 week ago",
        picture: ChessPicture
    },
    {
        avatar: NathanPeterson,
        name: "Nathan Peterson",
        reaction: "reacted to your recent post",
        reactionTo: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago"
    },
    {
        avatar: AnnaKim,
        name: "Anna Kim",
        reaction: "left the group",
        reactionTo: "Chess Club",
        time: "2 weeks ago"
    }
]

export default NotificationData