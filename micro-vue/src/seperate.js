/**-------------------- 污染 start --------------------*/
// 子应用-改写了 setItem 方法
window.localStorage.setItem = function () {
  console.log('Hi child>>>');
};
console.log('🌟child>>>', window);
/**-------------------- 污染 end --------------------*/

/**-------------------- 隔离 start --------------------*/
// 2. 微应用 这里第一次输出还是会继承父的 数据
console.log('first>>>', window.user); // {my: {name: "I m your father"}}
window.user = {
  // 改变数据
  my: {
    name: 'child',
  },
};
console.log('second>>>', window.user); // {my: {name: "child"}}
/**-------------------- 隔离 end --------------------*/
