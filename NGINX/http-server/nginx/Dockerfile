FROM nginx:1.17.8

RUN rm /etc/nginx/conf.d/default.conf

COPY ./sites/ /sites/

COPY ./ssl /etc/nginx/ssl

COPY ./keys /etc/nginx/