import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SerachOrder = () => {
    const [quaery, setQuaery] = useState("")

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!quaery) return
        navigate(`/order/${quaery}`)
        setQuaery("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className=' focus:scale-110 ease-out duration-300 w-[150px] md:w-[230px] text-sm md:text-base outline-0 px-2 py-2 rounded-full' type="text" placeholder='Search order #' onChange={(e) => setQuaery(e.target.value)} value={quaery} />

        </form>
    )
}

export default SerachOrder