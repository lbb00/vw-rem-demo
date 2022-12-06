<template>
  <main></main>
  <footer>
    <button>购买</button>
  </footer>
</template>

<style>
html {
  font-size: 1vw;
}
body {
  background: #fff;
  font-size: 14px;
}
@media screen and (min-width: 900px) {
  html {
    font-size: 7.5px;
    height: 100%;
    background: #f4f4f4;
  }
  body {
    max-width: 750px;
    min-height: 100%;
    margin: 0 auto;
  }
}

footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 750px;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0px 0px 6px 0px #e5e5e5;
}
footer > button {
  width: 120px;
  height: 50px;
  display: block;
  border-radius: 10px;
  border: none;
  background: #42c2df;
  color: white;
  font-size: 20px;
  transition: background 0.4s;
  cursor: pointer;
}
</style>
