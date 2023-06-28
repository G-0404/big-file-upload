const instance = axios.create();
// 这个基地址是开发环境下的，上线后需要修改
instance.defaults.baseURL = "http://127.0.0.1:8888";
// 设置请求头
instance.defaults.headers["Content-Type"] = "multipart/form-data";

// 判断 Content-Type的值是否等于application/x-www-form-urlencoded，如果是，就调用Qs.stringify方法将 data参数序列化为 URLSearchParams 格式的字符串（即key=value&key1=value1…)，并返回该值。如果不是，直接返回 data 的原始值。
instance.defaults.transformRequest = (data, headers) => {
  const contentType = headers["Content-Type"];
  if (contentType === "application/x-www-form-urlencoded")
    return Qs.stringify(data);
  return data;
};
instance.interceptors.response.use((response) => {
  return response.data;
});
