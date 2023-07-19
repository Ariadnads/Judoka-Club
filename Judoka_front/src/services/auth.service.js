/* eslint-disable no-debugger */
import api from './config'

export const login = async (body)=> {
    try {
        const result = await api.post("/auth/login", body)
        localStorage.setItem("token", result.data.token)
        localStorage.setItem("userEmail", result.data.userEmail)
        return true
    } catch (error) {
         return error
    }

}


