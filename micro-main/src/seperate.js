/**-------------------- 污染 start --------------------*/
// 主应用-调用 setItem
setTimeout(() => {
  console.log('污染setItem>>>', window.localStorage.setItem());
}, 3000);
/**-------------------- 污染 end --------------------*/

/**-------------------- 隔离 start --------------------*/
window.user = {
  my: {
    name: 'I m your father',
  },
};
/**-------------------- 隔离 end --------------------*/
