import app from './app.ts';
import serverConfig from './config/config.ts';

app.listen(serverConfig.port | 4000, () => {
    console.log('Server is running!')
})