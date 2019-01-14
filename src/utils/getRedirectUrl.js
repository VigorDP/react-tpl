const config = {
  login: {
    test: 'https://platform.shimodev.com/login.html',
    prod: 'https://platform.shimo.im/login.html'
  },
  demo: {
    test: 'https://platform.shimodev.com/demo/login',
    prod: 'https://platform.shimo.im/demo/login'
  }
};

const isProd = window.location.href.indexOf('platform.shimo.im') !== -1;

const getUrlByType = type => {
  return isProd ? config[type].prod : config[type].test;
};

export default getUrlByType;
