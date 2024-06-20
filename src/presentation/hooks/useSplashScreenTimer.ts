
import { useEffect, useState } from 'react'

export const useSplashScreenTimer = () => {

    const [isLoading, setisLoading] = useState<Boolean>(true);
    
    useEffect(() => {
        timer();
    })

    const timer = () => {
        setTimeout(() => {
            setisLoading(false);
        }, 2000)
    }

    return {isLoading}

}
