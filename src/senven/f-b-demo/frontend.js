const axios = require('axios').default

// 重点，async await怎么工作的
async function request() {
    const result = await axios.get('http://localhost:8080')
    console.log(result.data)
}

request()


