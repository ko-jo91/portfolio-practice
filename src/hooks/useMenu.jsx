import React,{ useState } from 'react'

const useMenu = (initialValue = false) => {
    let [state=mobileMenuIsOpen, setState] = useState(initialValue)

    function toggleMenu (){
        setState(prev => !prev)
    }

    return [state,toggleMenu]
}

export default useMenu
