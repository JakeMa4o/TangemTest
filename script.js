let answer = localStorage.getItem("showPopup");

const firstBanner = document.querySelector(".first-banner");
const secondBanner = document.querySelector(".second-banner");

const closeBtn = document.querySelector(".closeBtn");


closeBtn.addEventListener("click", () => {
  localStorage.setItem("showPopup", "false");
  secondBanner.classList.remove("show"); 
})



const myFunc = (entry) => {
  const banner = entry[0];

  if(!banner.isIntersecting) {
    secondBanner.classList.add("show");
    observer.unobserve(firstBanner);
  }
}


let observer = new IntersectionObserver(myFunc);

if(answer !== "false") {
  observer.observe(firstBanner);
}


