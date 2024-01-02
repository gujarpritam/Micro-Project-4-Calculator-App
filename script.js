let buttonsArray = Array.from(document.getElementsByTagName("button"));

buttonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    if (
      button.innerText != "DEL" &&
      button.innerText != "RESET" &&
      button.innerText != "="
    ) {
      if (document.getElementById("output").innerText == "0") {
        if (button.innerText == "/" || button.id == "multiplication") {
          let output = document.getElementById("output");
          output.style.setProperty("--disp", "flex");
        } else {
          document.querySelector("#output").innerHTML = "";
        }
      }

      if (document.getElementById("output").innerText != "0") {
        let output = document.getElementById("output");
        let string = output.innerText.toString();

        console.log(string);
        console.log(string.charAt(string.length - 1));

        let element = document.createElement("div");
        element.innerHTML = "&times;";
        console.log(element.innerHTML);
        if (
          (string.charAt(string.length - 1) == "+" ||
            string.charAt(string.length - 1) == "-" ||
            string.charAt(string.length - 1) == "/" ||
            string.charAt(string.length - 1) == element.innerHTML) &&
          (button.innerText == "+" ||
            button.innerText == "-" ||
            button.innerText == "/" ||
            button.innerText == element.innerHTML)
        ) {
          output.style.setProperty("--disp", "flex");
        } else {
          output.style.setProperty("--disp", "none");
          document.getElementById("output").innerHTML =
            document.getElementById("output").innerHTML + button.innerHTML;
        }
      }
    }
  });

  // ----------------delete------------------
  button.addEventListener("click", function () {
    if (button.innerText == "DEL") {
      document.getElementById("output").innerText = document
        .getElementById("output")
        .innerText.slice(0, -1);
    }
    if (document.getElementById("output").innerText == "") {
      document.getElementById("output").innerText = "0";
    }
  });

  // ---------------reset-------------------
  button.addEventListener("click", function () {
    if (button.innerText == "RESET") {
      document.getElementById("output").innerText = "0";
      output.style.setProperty("--disp", "none");
    }
  });
});

// console.log(eval("--3*4"));
