import readline from 'readline'
import https from 'https'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKeys = `560b4b23c7bf0c147de0c6b34f6c4088`;

rl.question('Enter The City Name: ', (cityname)=>{
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKeys}&units=metric`;
    let data = ''
    https.get(url, (res)=>{
        res.on('data', (chunk)=>{
            data += chunk
        })
        res.on('end', ()=>{
            const weatherInfo = JSON.parse(data);
            console.log(`${weatherInfo.main.temp}°C`);
            console.log(`${cityname}, ${weatherInfo.sys.country}`);
            
        })
        res.on('error', (error)=>{
            console.log('Error while fetching date: ', error);
        })
    })
    rl.close()

})
