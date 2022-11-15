FROM node:14.0.0-alpine

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && apk del .gyp
    
RUN mkdir -p /opt/frontend
WORKDIR /opt/frontend

# Install dependencies
COPY ./frontend/ .
COPY ./entrypoint.sh .

RUN yarn install --network-timeout 1000000

RUN yarn global add serve

RUN chmod u+x entrypoint.sh

EXPOSE 5000

ENTRYPOINT ["./entrypoint.sh"]