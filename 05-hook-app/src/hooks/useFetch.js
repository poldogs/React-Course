import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  
    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    }, [url])

    const getFetch = async() => {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                setState({ 
                    data: null, 
                    loading: false, 
                    hasError: true, 
                    error: { 
                        code: response.status,
                        message: response.statusText
                    } 
                })
                return
            }

            const data = await response.json()
            setState({ data, loading: false, hasError: false, error: null })
        } catch (error) {
            setState({ data: null, loading: false, hasError: false, error })
        }
    }
    

    return{
        data: state.data,
        isLoading: state.loading,
        hasError: state.hasError,
    }
}
