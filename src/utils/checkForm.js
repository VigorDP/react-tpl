function validateMobile(mobile) {
  if (!mobile || !mobile.trim()) {
    return [false, '请输入您的手机号'];
  }
  if (!/^1[3-9]\d{9}$/.test(mobile.trim())) {
    return [false, '手机号格式不正确，请重新输入'];
  }
  return [true, ''];
}

function validateEmail(email) {
  const reg = new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.' +
      '[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );
  if (!email || !email.trim()) {
    return [false, '请输入您的邮箱'];
  }
  if (!reg.test(email.trim())) {
    return [false, '邮箱格式不正确，请重新输入'];
  }
  return [true, ''];
}

function validatePassword(password) {
  var validPasswdPattern = /^[a-zA-Z0-9·`~!@#$%^&*()-_+=[\]{}\\|;:'",<.>/?\s\uFEFF\xA0]*$/;
  if (!password || !password.trim()) {
    return [false, '请输入您的密码'];
  }
  if (password.length < 6) {
    return [false, '密码长度不能小于 6 位'];
  }
  if (password.length > 72) {
    return [false, '密码长度不能超过 72 位'];
  } else if (!validPasswdPattern.test(password)) {
    return [false, '密码包含不支持的特殊符号，请检查并重新输入'];
  }
  return [true, ''];
}

function validateRepeatPassword(old, repeat) {
  if (old !== repeat) {
    return [false, '两次密码不一致，请重新输入'];
  }
  return [true, ''];
}

function validateVerifyCode(verifyCode) {
  var reg = /\d{4}/;
  if (!verifyCode || !verifyCode.trim()) {
    return [false, '请输入验证码'];
  } else if (verifyCode.length > 4) {
    return [false, '验证码长度应为 4 位'];
  } else if (verifyCode.match(reg)) {
    return [true, ''];
  } else {
    return [false, '验证码格式不对'];
  }
}

function validateEmpty(text, type) {
  if (!text) {
    return [false, `${type}不能为空`];
  }
  return [true, ''];
}

export {
  validateMobile,
  validatePassword,
  validateEmail,
  validateRepeatPassword,
  validateVerifyCode,
  validateEmpty
};
