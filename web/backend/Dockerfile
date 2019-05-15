FROM node:12-stretch

COPY www/ /var/www/
WORKDIR /var/www


RUN npm i -g yarn
RUN yarn

EXPOSE 80

CMD ["yarn", "start"]