import { MdClose } from "react-icons/md"
import { FiStar } from "react-icons/fi"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createAvaliationModalSchema } from "./createAvaliationModal.schema"
import Style from "../../HomeCardModal/style.module.scss"
import { Select } from "../../../../Select"
import { UserContext } from "../../../../../providers/UserContext"
import { MovieContext } from "../../../../../providers/MovieContext"
import { useOutClick } from "../../../../../hooks/useOutClick"
import { useKeyDown } from "../../../../../hooks/useKeyDown"

export const CreateAvaliationModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createAvaliationModalSchema)
    })

    const { user, setIsVisibleCreate } = useContext(UserContext)
    const { currentMovie, createReview } = useContext(MovieContext)

    const cancel = () => {
        setIsVisibleCreate(false)
    }

    const modalRef = useOutClick(cancel)

    useKeyDown("Escape", cancel)

    const submit = async payload => {
        payload.score = Number(payload.score)
        const newReview = { ...payload, userId: user.id, movieId: currentMovie.id }
        const success = await createReview(newReview)
        success && setIsVisibleCreate(false)
    }

    return (
        <div role="dialog" className={`${Style.overlayBox}`}>
            <form ref={modalRef} noValidate onSubmit={handleSubmit(submit)} className={`${Style.flexbox}`}>
                <div className={`${Style.head}`}>
                    <h2 className="title1">Avaliação</h2>
                    <button type="button" onClick={cancel} aria-label="close" title="Fechar">
                        <MdClose size={21} color="rgba(255, 255, 255, 0.5)" />
                    </button>
                </div>
                <div>
                    <Select id="score" {...register("score")} error={errors.score}>
                        <option value="">Selecione uma nota</option>
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
                <div >
                    <textarea className={`textarea`} id="description" placeholder="Deixe um comentário" {...register("description")} error={errors.description}></textarea>
                    <span className={Style.error}>{errors.description && errors.description.message}</span>
                </div>
                <button type="submit" className={`buttonMedium`}><FiStar color="var(--grey-2)" />Avaliar</button>
            </form>
        </div>
    )
}