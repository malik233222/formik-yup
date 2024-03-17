import { useContext, createContext,useState } from 'react'

export const generalContext = createContext()

function GeneralContextProvider({ children }) {

    const [loading, setLoading] = useState(false)

    const values = {
        loading,
        setLoading
    }

    return (
        <generalContext.Provider value={values}>
            {children}
        </generalContext.Provider>

    )
}

export default GeneralContextProvider