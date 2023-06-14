window.addEventListener('load', amazonlookup, false);

let styleSheet = `
.Createbtn {
    background-color: #EC7211;
    padding: 4px 15px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    font-family: Lato,'Helvetica', 'Arial', sans-serif;
    font-weight: bold;
    border-style: solid;
    letter-spacing: 0.02em;
}
`;

function amazonlookup() {
  console.log("amazon lookup is now running after loading the page");
  $('.a-truncate-cut').css('color', 'red');

  console.log("Style has been applied. Creating button now...");

  let btn = document.createElement("button");
  btn.innerHTML = "click Me";
  btn.className = "Createbtn";
  btn.onclick = () => {
    alert("Button clicked");
}

  document.getElementById('pageContent').appendChild(btn);
}