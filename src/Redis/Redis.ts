import { Redis } from "ioredis";
import { RedisClient } from "../Config/Config";

class RedisClass {
     private redis: Redis;
     private RedisClient: any = RedisClient;


     constructor () {
          const { host, port, password } = this.RedisClient
          const URL = `redis://:${password}@${host}:${port}`

          this.redis = new Redis(URL)
          this.connect();
     }

     private connect (): void {
          this.redis.on('connect', () => {
               console.log('Connected to Redis');
          });

          this.redis.on('error', (error) => {
               console.error('Error connecting to Redis:', error);
          });
     }


}

export {
     RedisClass
}