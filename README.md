# 尚书工坊官网

# 使用

- 本地开发

```
npm run dev
```

- 打包上线

```
npm run build
```

# 技术栈

- react v16
- redux
- react-router v4
- react-redux
- react-router-redux
- redux-promise
- redux-actions
- immutable.js
- webpack v4
- css-modules
- ES6
- axios

# 部署

npm run deploy

scp dist.tar.gz root@39.106.105.188:/root/frontend/testjenkins

ssh root@39.106.105.188

cd /root/frontend/testjenkins
tar -zxvf dist.tar.gz
rm -rf dist.tar.gz
