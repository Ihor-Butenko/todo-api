import app from './app'
import config from './config/index'

app.listen(config.port, () => {
    console.log('http://localhost:3001')
})