FROM node:12

WORKDIR /usr/src/app

COPY ./assets/hello-world-docker/package*.json ./

RUN npm install

COPY ./assets/hello-world-docker .

EXPOSE 3000

CMD [ "npm", "start" ]

# docker run -p [PORT_1]:[PORT_2] -v <path_to_dir_on_your_host>:<path_to_dir_inside_container> <your name>/<image name>

# docker run -p 3000:5000 -v ./assets/hello-world-docker:. pierrelouisgaucher/my_image