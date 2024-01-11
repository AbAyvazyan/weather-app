import { useEffect, useId } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/store';
import styles from './Forcast.module.scss'
import { getForcast } from '../../Features/Forcast/forcastSlice';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

const Forcast = () => {
    const id = useId()
    const dispatch = useAppDispatch();
    const weather: any = useAppSelector((state) => state.forcast.data)

    useEffect(() => {
        dispatch(getForcast());
    }, [dispatch]);

    return <div className={styles.todaysWeather}>
        {weather?.list?.map((forcast: any) => {
            return <div key={`${Math.random()}${id}`} className={styles.dayPartWeather}><span>{forcast.dt_txt.split(' ')[1]}</span><span>{kelvinToCelsius(forcast.main?.temp)}°C
            </span></div>

        })}
    </div>
}

export default Forcast