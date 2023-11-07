import Style from "./style.module.scss"
import { FiStar } from "react-icons/fi"
import { useContext } from "react"
import { UserContext } from "../../../../providers/UserContext"

export const ReviewCard = ({ review }) => {
  const { users } = useContext(UserContext)

  const reviewUser = users.filter(user => user.id === review.userId)[0]

  return (
    <li className={Style.card}>
      <p className={`buttonSmall round ${Style.icon}`}>{reviewUser?.name.at(0)}</p>
      <p className={`title1-mobileB`}><FiStar color="var(--yellow)" />{` ${Number(review.score).toFixed(1)}`}</p>
      <p className={Style.text}>{review.description}</p>
      <p className={`title3`}>{reviewUser?.name}</p>

    </li>
  )
}