export interface WeatherInfo {
  date: string;
  temperature: {
    max: number;
    min: number;
  };
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy';
  humidity: number;
  uvIndex: number;
  hourlyForecast: Array<{
    hour: string;
    temp: number;
    condition: WeatherInfo['condition'];
  }>;
}

export interface WeatherCardProps {
  weather: WeatherInfo;
}