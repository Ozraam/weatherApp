
export const currentCity = $state({name: 'Paris'});
export const weatherData : {data: {location:{name:String}} | null} = $state({data: null});
export const loading = $state({state: false});
