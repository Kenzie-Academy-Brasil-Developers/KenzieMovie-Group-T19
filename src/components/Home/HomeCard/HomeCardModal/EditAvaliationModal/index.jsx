import { MdClose } from "react-icons/md"
import { FiStar } from "react-icons/fi"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import Style from "../../HomeCardModal/style.module.scss"
import { Select } from "../../../../Select"
import { MovieContext } from "../../../../../providers/MovieContext"
import { UserContext } from "../../../../../providers/UserContext"
import { useOutClick } from "../../../../../hooks/useOutClick"
import { useKeyDown } from "../../../../../hooks/useKeyDown"

export const EditAvaliationModal = ({ review }) => {

    const { editReview } = useContext(MovieContext)
    const { setIsVisibleEdit } = useContext(UserContext)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            score: review.score,
            description: review.description
        }
    })

    const cancel = () => {
        setIsVisibleEdit(false)
    }

    const modalRef = useOutClick(cancel)

    useKeyDown("Escape", cancel)

    const submit = async payload => {
        payload.score = Number(payload.score)
        const success = await editReview({ ...payload, userId: review.userId, movieId: review.movieId, id: review.id })
        success && setIsVisibleEdit(false)
    }

    return (
        <div role="dialog" className={`${Style.overlayBox}`}>
            <form ref={modalRef} onSubmit={handleSubmit(submit)} className={`${Style.flexbox}`}>
                <div className={`${Style.head}`}>
                    <h2 className="title1 nowrap">Editar Avaliação</h2>
                    <button onClick={cancel} aria-label="close" title="Fechar">
                        <MdClose size={21} color="rgba(255, 255, 255, 0.5)" />
                    </button>
                </div>
                <div>
                    <Select id="score" {...register("score")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Select>
                </div>
                <div>
                    <textarea required className={`textarea`} name="description" id="description" placeholder="Deixe um comentário" {...register("description")}></textarea>
                </div>

                <button className={`buttonMedium`} type="submit"> <FiStar color="var(--grey-2)" />Atualizar</button>
            </form>
        </div>
    )
}