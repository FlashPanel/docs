---
position: 4
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Caching

## Introduce

After [installing a server](../connect/connect-server.md), You can go to [Applications](../server/application.md) to install `Memcached` and `Redis `. By default, none of these services are publicly visible and can only be accessed from within your server.

## Connect to Redis

Redis and Memcache are both available through 127.0.0.1 and their default ports.

```
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

## External connection

When using a GUI Client or other external client to connect to your caching application, you will need to use SSH authentication
