const boxEle = document.getElementById("box");
const gmBtn=document.getElementById("gm");
const gnBtn = document.getElementById("gn");
const geBtn = document.getElementById("ge");

gmBtn.addEventListener("click", (e) => {
    boxEle.innerText = "good morning";
  });
  gnBtn.addEventListener("click", (e) => {
    boxEle.innerText = "good noon";
  });
  geBtn.addEventListener("click", (e) => {
    boxEle.innerText = "good evening";
  });

