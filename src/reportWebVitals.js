/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-28 01:26:19
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 01:26:20
 * @Description: 
 * @FilePath: /taskTracker/src/reportWebVitals.js
 * @GitHub: https://github.com/liuyuchen777
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
