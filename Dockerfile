FROM node:latest

RUN git clone https://github.com/GodD6366/drone-test.git && \
    cd drone-test && \
    npm install && \
    chmod 777 ./scripts/run.sh

ENTRYPOINT ["/drone-test/scripts/run.sh" ]
EXPOSE 3000