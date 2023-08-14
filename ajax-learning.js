// this is asyncronous thats why hello world runs first
//almost the same like settimeout where it runs in the bg
const btn = document.querySelector(".btn");
const url = "https://www.boredapi.com/api/activity";
btn.addEventListener("click", () => {
  getData(url);
});
function getData(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      //parse
      const data = JSON.parse(xhr.responseText);
      console.log(data.activity);
      const ele = document.createElement("div");
      ele.innerHTML = `<p>${data.activity}</p>`;
      document.body.appendChild(ele);

      // console.log(xhr.responseText);
      // const text = document.createElement("p");
      // text.textContent = xhr.responseText;
      // document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
}
