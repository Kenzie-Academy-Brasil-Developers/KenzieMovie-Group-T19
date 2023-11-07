import { MdEdit, MdDelete, MdStarOutline } from "react-icons/md"
import { FiStar } from "react-icons/fi"
import { CreateAvaliationModal } from "./HomeCardModal/CreateAvaliationModal"
import { EditAvaliationModal } from "./HomeCardModal/EditAvaliationModal"
import Style from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { MovieContext } from "../../../providers/MovieContext"

export const HomeCard = () => {

    const { user, isVisibleCreate, setIsVisibleCreate, isVisibleEdit, setIsVisibleEdit } = useContext(UserContext)
    const { userReview, deleteReview } = useContext(MovieContext)

    const handleCreateReview = () => {
        setIsVisibleCreate(true)
    }

    const handleDeleteReview = async () => {
        await deleteReview(userReview.id)
    }

    return (
        <div className={Style.myAvaliation}>
            {user ?
                <div className={Style.avaliationTitle}>
                    <h3 className="title1">Avaliações</h3>
                    {!userReview && <button onClick={handleCreateReview} className="buttonSmall"><MdStarOutline /> Avaliar</button>}
                </div> :
                <div>
                    <h3 className="title-1">Avaliações</h3>
                </div>
            }

            {userReview &&
                <ul>
                    <li>
                        <p>Sua avaliação</p>
                        <div>
                            <div className={Style.divAvaliation}>
                                <p className={`paragraph`}>{userReview.description}</p>
                            </div>
                            <div className={Style.noteEditRemove}>
                                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" />{` ${Number(userReview.score).toFixed(1)}`}</p>
                                <div>
                                    <button onClick={() => { setIsVisibleEdit(true) }} aria-label="edit"><MdEdit size={17} color="var(--yellow)" /></button>
                                    <button onClick={handleDeleteReview} aria-label="delete"><MdDelete size={17} color="var(--yellow)" /></button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>}

            {isVisibleCreate ? <CreateAvaliationModal /> : null}
            {isVisibleEdit ? <EditAvaliationModal review={userReview} /> : null}
        </div>
    )
}