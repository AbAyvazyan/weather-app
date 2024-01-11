import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import styles from './Header.module.scss'
import { useAppDispatch } from '../../App/store'
import { getWeather } from '../../Features/Weather/weatherSlice'
import { usePlace } from '../../Context/PLaceContext'

const Header = () => {
    const [place, setPLace] = useState<string>('')
    const dispatch = useAppDispatch()
    const { setPlace } = usePlace()

    const formSubmitHandler = useCallback((e: FormEvent) => {
        e.preventDefault()
        setPlace(place)
        dispatch(getWeather(place));
    }, [dispatch, place])
    return <header className={styles.header}>
        <div>
            <form onSubmit={formSubmitHandler}>
                <input type="text" value={place} onChange={(e: ChangeEvent<HTMLInputElement>) => setPLace(e.target.value)} />
                <button>Search City</button>
            </form>
        </div>

        <div className={styles.weather}>
            <div>
                <input type='radio' checked />
                <span>°C</span>
            </div>
            <div>
                <input type='radio' />
                <span>°F</span>
            </div>
        </div>
    </header>
}

export default Header