FROM mhart/alpine-node:7.2.0

# Set non-root permissions & create home directory
RUN addgroup node && adduser -h /home/node -s /bin/true -G node -D node

# Where the app lives inside of the container file system
ENV HOME=/home/node
WORKDIR $HOME

# Copy package.json files and install dependencies
COPY package.json npm-shrinkwrap.json $HOME/
RUN npm install

# Copy application files
COPY server.js $HOME

# Set file ownership to non root user
RUN chown -R node:node $HOME/*
USER node

CMD [ "node", "server.js" ]
