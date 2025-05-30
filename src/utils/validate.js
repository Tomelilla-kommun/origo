const validate = {};

validate.text = (text) => {
  if (typeof text === 'string' || text instanceof String) {
    return text;
  }
  return false;
};

validate.textarea = (textarea) => {
  if (typeof textarea === 'string' || textarea instanceof String) {
    return textarea;
  }
  return false;
};

validate.integer = (integer) => {
  if (integer) {
    const regex = /^[0-9]*$/;
    return regex.test(integer);
  }
  return false;
};

validate.decimal = (decimal) => {
  if (decimal) {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(decimal);
  }
  return false;
};

validate.email = (email) => {
  if (email) {
    const regex = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  return false;
};

validate.url = (url) => {
  if (url) {
    const regex = /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;
    return regex.test(url);
  }
  return false;
};

validate.datetime = (datetime) => {
  if (datetime) {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T|\s[0-9]{2}:[0-9]{2}:[0-9]{2}/;
    return regex.test(datetime);
  }
  return false;
};

validate.date = (date) => {
  if (date) {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    return regex.test(date);
  }
  return false;
};

validate.time = (time) => {
  if (time) {
    const regex = /^[0-9]{2}:[0-9]{2}:[0-9]{2}/;
    return regex.test(time);
  }
  return false;
};

validate.image = (image) => {
  if (image) {
    const regex = /\.(tiff|pjp|pjpeg|jpe?g|jfif|webp|tif|bmp|png|svgz|gif|svg|ico|xbm|dib)$/i;
    return regex.test(image);
  }
  return false;
};

validate.audio = (audio) => {
  if (audio) {
    const regex = /\.(opus|flac|webm|weba|wav|ogg|m4a|oga|mid|mp3|aiff|wma|au)$/i;
    return regex.test(audio);
  }
  return false;
};

validate.video = (video) => {
  if (video) {
    const regex = /\.(ogm|wmv|mpg|webm|ogv|mov|asx|mpeg|mp4|m4v|avi)$/i;
    return regex.test(video);
  }
  return false;
};

validate.color = (color) => {
  if (color) {
    const regex = /#([a-f0-9]{3}){1,2}\b/;
    return regex.test(color);
  }
  return false;
};

validate.json = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default validate;
