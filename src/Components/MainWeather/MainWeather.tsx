import { useAppDispatch, useAppSelector } from '../../App/store'
import styles from './MainWeather.module.scss'
import { useEffect } from 'react';
import { getWeather } from '../../Features/Weather/weatherSlice';
import kelvinToCelsius from '../../utils/kelvinToCelsius';
import Forcast from '../Forcasts';
import { usePlace } from '../../Context/PLaceContext';

const MainWeather = () => {

    const { currentPlace } = usePlace()

    const dispatch = useAppDispatch();
    const weather: any = useAppSelector((state) => state.weather.data)

    useEffect(() => {
        dispatch(getWeather('Yerevan'));
    }, [dispatch]);

    return <div className={styles.mainWeather}>
        <div className={styles.currentWeather}>
            <div>
                <p>{currentPlace}</p>
                <p>{kelvinToCelsius(weather?.main?.temp)}°C
                </p>
                <span><img src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`} alt='image' /></span>
                <p>{weather?.weather?.[0]?.main}</p>
            </div>
        </div>
        <Forcast />
    </div>
}

export default MainWeather