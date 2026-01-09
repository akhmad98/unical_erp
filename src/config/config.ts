import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number,
    nodeEnv: string
}

const serverConfig: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: 'development'
}

export default serverConfig;