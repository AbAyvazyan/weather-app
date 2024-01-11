import { useEffect, useId } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/store';
import styles from './WeatherByDays.module.scss'
import { getForcast } from '../../Features/Forcast/forcastSlice';
import formatedDate from '../../utils/formatedDate';
import kelvinToCelsius from '../../utils/kelvinToCelsius';

const WeatherByDays = () => {
    const id = useId()

    const dispatch = useAppDispatch();
    const weather: any = useAppSelector((state) => state.forcast.data)

    useEffect(() => {
        dispatch(getForcast());
    }, [dispatch]);

    return <div className={styles.weathers}>

        {weather?.list?.map((forcast: any, index: number) => {

            return <div className={styles.weatherCard} key={`${Math.random()}${id}`}>
                <p>{formatedDate(index)}</p>
                <div>
                    <span>{kelvinToCelsius(forcast?.main?.temp)}°C</span>
                    <img src={`https://openweathermap.org/img/wn/${forcast?.weather?.[0]?.icon}@2x.png`} alt='image' />
                </div>
            </div>
        })}

    </div>
}

export default WeatherByDays