import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [avaliationList, setAvaliationList] = useState([])
    const [isVisibleCreate, setIsVisibleCreate] = useState(false)   
    const [isVisibleEdit, setIsVisibleEdit] = useState(false)

    const pathName = window.location.pathName

    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
    }

    const getUsers = async () => {
        try {
            const { data } = await api.get("users")
            setUsers(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")
        const getUser = async () => {
            try {
                const { data } = await api.get(`users/${userId}`, {
                    headers: { Authorizarion: `Bearer ${token}` }
                })
                setUser(data)
                navigate(pathName)
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    }, [])


    return (
        <UserContext.Provider value={{ user, setUser, users, getUsers, logout, avaliationList, setAvaliationList, isVisibleEdit, setIsVisibleEdit, isVisibleCreate, setIsVisibleCreate }}>
            {children}
        </UserContext.Provider>
    )
}