# dockerSimpleWeb
A docker set up to learn how to use docker.
a very bare bones app that simply desplays a message once a user hits the localhost.
The only purpose for this project is to learn docker commands and flow.
dokcer commands:
FROM, RUN, CMD, COPY

docker build -t user_name/nameOfTheApp:latest .

docker run  -p 8080:8080 user_name/nameOfTheApp

 
