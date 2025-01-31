import readline from 'readline'
import https from 'https'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = '5feab16710ceef9eabb5f2c8'
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    })
    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates

        rl.question('Please Enter Amount in USD: ', (amount) => {
            rl.question('Enter the Currency(e.g., INR, EUR, NPR): ', (currency) => {
                const rate = amount * rates[currency.toUpperCase()]
                if (rate) {
                    console.log(`${amount} USD is approximately ${rate} ${currency}`);
                } else {
                    console.log('Invalid currency');
                }
                rl.close()
            })
        });

    })
    response.on('error', (err) => {
        console.log('Error', err);
    })
})