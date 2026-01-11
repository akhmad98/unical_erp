import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

async function connectRedis(): Promise<void> {
    await client.connect();
    console.log('Redis connected successfully');
}

client.on('error', (err: Error) => {
    console.error('Redis connection error:', err);
})

connectRedis().catch(console.error);

export default client;