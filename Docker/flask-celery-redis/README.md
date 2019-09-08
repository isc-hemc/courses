# Flask and Celery

Backend of the this example project.

## Contenidos

- [Dependencies](#dependencies)
- [Configuration](#configuration)

---

## Dependencies

![Python +3.7](https://img.shields.io/badge/python-+3.7-blue.svg)
![Docker](https://img.shields.io/badge/docker-*-blue.svg)

---

## Configuration

### Environment Variables File

To run this system it's necessary an **environment file** (**.env**). This file must be in the root of the project.

``` bash
touch .env
```

``` bash
vi .env
```

Then, here's a list of the variables needed with its default value

#### Redis

Stablish the conection with the Redis.

| Variable             | Valor          |
|----------------------|----------------|  
| REDIS_HOST           | 127.0.0.1      |
| REDIS_PORT           | 6379           |
| REDIS_DB             | 0              |
| REDIS_BACKEND_DB     | 0              |
| REDIS_PASSWORD       | password       |

## Authors

***David Martinez** - [Davestring](https://github.com/Davestring)
