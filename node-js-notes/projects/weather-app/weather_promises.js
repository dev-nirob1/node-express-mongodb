import readline from 'readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKeys = `560b4b23c7bf0c147de0c6b34f6c4088`;

const getWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKeys}&units=metric`;
    try {
        const response = await fetch(url)
        const weather = await response.json()
        console.log(weather)
    } catch (error) {
        console.log(error);
    }
}
const main = async () => {
    const city = await rl.question('Enter the city name: ')
    await getWeather(city)
    rl.close()
}
main()