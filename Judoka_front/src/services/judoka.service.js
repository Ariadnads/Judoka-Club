/* eslint-disable no-debugger */
import api from './config'

export const getJudoka = async ()=> {
    try {
       const result= await api.get(`/judoka/4`)
       return result.data
    } catch (error) {
         return false
    }
}

export const addJudoka= async ( body ) => {
    try 
    {
        const { data } = await api.post('/judoka', body, 
        { headers: { token: localStorage.getItem('token') } } )
        return data
    } catch (error) {
        console.error('error al crear un judoka', error)
    }
}


export const getUserAndJudoka = async (email)=> {
    try {
       const result= await api.get(`/user/${email}`)
       return result.data
    } catch (error) {
         return false
    }
}


