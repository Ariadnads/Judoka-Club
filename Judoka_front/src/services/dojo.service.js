import api  from "./config";


export const getAllDojos = async () => {
    try {
        const { data } = await api.get('/dojo', {headers: {token: localStorage.getItem( 'token' ) } } )
        return data
    } catch (error) {
        console.error('error al ver todos los dojos', error)
    }
}