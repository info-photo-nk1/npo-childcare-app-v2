export const mockWeather = {
  date: '2024年3月15日',
  temperature: {
    max: 18,
    min: 12,
  },
  condition: 'sunny' as const,
  humidity: 45,
  uvIndex: 6,
  hourlyForecast: [
    { hour: '9時', temp: 14, condition: 'sunny' },
    { hour: '12時', temp: 18, condition: 'sunny' },
    { hour: '15時', temp: 17, condition: 'cloudy' },
    { hour: '18時', temp: 15, condition: 'cloudy' },
  ],
};