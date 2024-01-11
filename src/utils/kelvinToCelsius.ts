const kelvinToCelsius = (kelvinTemperature: number) => {
  const celsiusTemperature = kelvinTemperature - 273.15;
  return celsiusTemperature.toFixed();
};

export default kelvinToCelsius