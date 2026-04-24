let arr = [];

function generate() {
  arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  render();
}

function render(highlight = []) {
  let container = document.getElementById("bars");
  container.innerHTML = "";

  arr.forEach((v, i) => {
    let bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = v * 2 + "px";

    if (highlight.includes(i)) {
      bar.style.background = "red";
    }

    container.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function startSort() {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      render([j, j+1]);

      document.getElementById("log").innerText =
        `Comparing ${arr[j]} and ${arr[j+1]}`;

      await sleep(500);

      if (arr[j] > arr[j+1]) {

        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        document.getElementById("log").innerText = "Swapping...";

        render([j, j+1]);

        await sleep(500);
      }
    }
  }

  document.getElementById("log").innerText = "Sorting Completed!";
}
