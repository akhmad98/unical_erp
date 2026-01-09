import app from './app.ts';
import serverConfig from './config/config.ts';

app.listen(serverConfig.port, () => {
    console.log('Server is running!')
})