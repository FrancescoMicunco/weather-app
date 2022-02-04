

// MARK: - Weather
export interface Weather {
     cod: string
     message:number
     cnt: number
     list: [List]
     city: City
}

// MARK: - City
export interface City {
     id: number
     name: string
     coord: Coord
     country: string
     population: number
     timezone: number
     sunrise: number
     sunset: number
}

// MARK: - Coord
export interface Coord {
     lat: number
     lon: number
}

// MARK: - List
export interface List {
     dt: number
     main: MainClass
     weather: [WeatherElement]
     clouds: Clouds
     wind: Wind
     visibility: number
     pop: number
     rain: Rain?
     sys: Sys
     dtTxt: String

    enum CodingKeys: String {
         dt, main, weather, clouds, wind, visibility, pop, rain, sys
         dtTxt = "dt_txt"
    }
}

// MARK: - Clouds
export interface Clouds {
     all: number
}

// MARK: - MainClass
export interface MainClass {
     temp:number
     feelsLike:number
     tempMin:number
     tempMax: number
     pressure: number
     seaLevel: number
     grndLevel: number
     humidity: number
     tempKf: number

    enum CodingKeys: String, CodingKey {
         temp
         feelsLike = "feels_like"
         tempMin = "temp_min"
         tempMax = "temp_max"
         pressure = "pressure"
         seaLevel = "sea_level"
         grndLevel = "grnd_level"
         humidity="umidity"
         tempKf = "temp_kf"
    }
}

// MARK: - Rain
export interface Rain {
     the3H: number

    enum CodingKeys: String, CodingKey {
         the3H = "3h"
    }
}

// MARK: - Sys
export interface Sys {
     pod: Pod
}

enum Pod: String, Codable {
     d = "d"
     n = "n"
}

// MARK: - WeatherElement
export interface WeatherElement {
     id: number
     main: MainEnum
     weatherDescription: Description
     icon: String

    enum CodingKeys: String, CodingKey {
         id, main
         weatherDescription = "description"
         icon
    }
}

enum MainEnum: String {
     clear = "Clear"
     clouds = "Clouds"
     rain = "Rain"
}

enum Description: String {
     brokenClouds = "broken clouds"
     clearSky = "clear sky"
     fewClouds = "few clouds"
     lightRain = "light rain"
     overcastClouds = "overcast clouds"
     scatteredClouds = "scattered clouds"
}


// MARK: - Wind
export interface Wind {
     speed: number
     deg: number
     gust: number
}
