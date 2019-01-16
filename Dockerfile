FROM registry-vpc.cn-beijing.aliyuncs.com/shimobase/alinode-build:3.8.1 AS base


ENV WORKDIR=/data NPM_CONFIG_REGISTRY=https://registry.npm.taobao.org NODE_ENV=production
WORKDIR ${WORKDIR}

FROM base AS dependencies

COPY . /data
WORKDIR /data
RUN  npm install && npm run build

# final image
FROM registry-vpc.cn-beijing.aliyuncs.com/shimobase/nginx-node:8.9.3
ENV WORKDIR=/data
WORKDIR ${WORKDIR}

COPY --from=dependencies ${WORKDIR}/dist  .
COPY --from=dependencies ${WORKDIR}/nginx_default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
