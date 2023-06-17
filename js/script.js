function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);
  const showInfo = document.querySelector("#info");
  // console.log("check show info", showInfo);
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    showInfo.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email!!!";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const content = parentElement.querySelectorAll(".content");
  if (viewMore.classList.value.includes("view-more")) {
    content.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.innerHTML = "View less";
  } else {
    content.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
