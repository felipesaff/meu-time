import { useDispatch } from 'react-redux'
import { allowLogin } from '../login/loginSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const [error, setError] = useState<boolean>(false)
    const [api, setApi] = useState<string>('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleClick() {
        if(api === import.meta.env.VITE_API_KEY) {
            dispatch(allowLogin());
            return navigate('/')
        }
        return setError(true)
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-800">
            <div className="bg-gray-700 flex flex-col justify-center rounded-md px-8 py-4">
                <label htmlFor="" className="flex flex-col mb-4">
                    Digite sua API-key
                    <input
                        value={api}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApi(e.target.value)}
                        type="text"
                        className="rounded-md px-2 py-1 text-gray-700"
                        placeholder="API-key"
                    />
                    {
                        error && <span className='text-red-600'>KEY inválida</span>
                    }
                </label>
                <button
                    className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-md"
                    onClick={handleClick}
                >
                        login
                </button>
            </div>
        </div>
    )
}