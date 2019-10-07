# NGINX

**NGINX** is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers. In this respository you will be able to find how to configure **NGINX** setting it up as a service, configuring static file service and connecting to a Python backend, how to optimize NGINX processes, client side and server side caching, reverse proxy, load balancing, secure and encrypted with SSL and more so, let’s get started.

The examples were taken from the course [Nginx Fundamentals: High Performance Servers from Scratch](https://www.udemy.com/course/nginx-fundamentals/).

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Authors](#Authors)

---

## Dependencies

![NGINX +10.15.1](https://img.shields.io/badge/NGINX-+1.17.3-green.svg)
![Docker 3.6.3](https://img.shields.io/badge/Docker-+19.03.2-blue.svg)

## Configuration

To run any of this examples it's prepared a docker-compose file which takes automatically a *.env* (**environment**) file and search for the *Dockerfile* and *nginx.conf* that are especified, for example if you want to run the example *1-creating-virtual-host* in the *1.-basics* folder then, the *.env* configuration file should look as follows:

> .env file

```bash
DOCKERFILE_PATH=./1.-basics/1.-creating-virtual-host/
NGINX_CONF_PATH=./1.-basics/1.-creating-virtual-host/nginx.conf
```

### Environment File

File that the docker-compose needs to execute correctly. This file needs the following variables:

| Variable        | Value                | Description                                              |
| --------------- | -------------------- | -------------------------------------------------------- |
| DOCKERFILE_PATH | ./example            | Relative path were the "x" dockerfile example is located |
| NGINX_CONF_PATH | ./example/nginx.conf | Relative path were the "x" nginx.conf example is located |

## Authors

**\*David Martinez** - [Davestring](https://github.com/Davestring)
