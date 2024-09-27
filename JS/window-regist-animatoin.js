var parentaLHoverId = document.getElementById("parental_hover_id");
var retentionSelectionStrokeGivenId = document.getElementById(
  "retention_selection_stroke_given"
);
var saveOrNotId = document.getElementById("save_or_not");
var dontSaveId = document.getElementById("dont_save");
var saveId = document.getElementById("save");
var wrapZoneLoginUsingId = document.getElementById("wrap_zone_login_using");
var loginUsingId = document.getElementById("login_using");
var forgotPasswordId = document.getElementById("forgot_password_id");
var forgotYourPassworMailId = document.getElementById(
  "forgot_your_passwor_mail_id"
);
var buttonRemoveVanichMailId = document.getElementById(
  "button_remove_vanich_mail"
);
var telegramId = document.getElementById("telegram");
var instagramId = document.getElementById("instagram");
var twitterId = document.getElementById("twitter");

var openEyeId = document.getElementById("open_eyeId");
var closeEyeId = document.getElementById("close_eyeId");

////chek registr_user(Придумать как оптимизироваит функции и убрать гору ИФОВ)//////
var inputLoginId = document.getElementById("input_login");
var inputPasswordId = document.getElementById("input_password");
var inputMailId = document.getElementById("input_mail");
var button_registr_sitId = document.getElementById("button_registr_site");
/////////////////////////

function funcAnimationInputLoginCalor() {
  if (inputLoginId.value.length <= 4) {
    inputLoginId.classList.add("active_red");
    inputLoginId.classList.remove("active_green");
  }
  if (inputLoginId.value.length === 0) {
    inputLoginId.classList.remove("active_red");
  }
  if (inputLoginId.value.length >= 4) {
    inputLoginId.classList.add("active_green");
  }
}

/////////////////////////
function funcAnimationInputPasswordCalor() {
  if (inputPasswordId.value.length <= 4) {
    inputPasswordId.classList.add("active_red");
    inputPasswordId.classList.remove("active_green");
  }
  if (inputPasswordId.value.length === 0) {
    inputPasswordId.classList.remove("active_red");
  }
  if (inputPasswordId.value.length >= 4) {
    inputPasswordId.classList.add("active_green");
  }
}

/////////////////////////

button_registr_sitId.addEventListener("click", () => {
  //Сделать очищение полей инпут от тени при отправки данных из инпутов//

  if (
    inputLoginId.value.length >= 4 &&
    inputPasswordId.value.length >= 4 &&
    inputLoginId.value.length <= 10 &&
    inputPasswordId.value.length <= 10
  ) {
  } else {
    alert(
      "Логин и пароль должны быть не менее четырех(4) и не больше десяти(10) символов!"
    );
  }
});

////chek registr_user//////

////////////////////////////////////////////////////////////////////

parentaLHoverId.addEventListener("mousemove", () => {
  parentaLHoverId.classList.add("active");
});
parentaLHoverId.addEventListener("mouseout", () => {
  parentaLHoverId.classList.remove("active");
});

saveId.addEventListener("click", () => {
  saveOrNotId.classList.add("yes");
  retentionSelectionStrokeGivenId.classList.add("active");
});
dontSaveId.addEventListener("click", () => {
  saveOrNotId.classList.remove("yes");
  retentionSelectionStrokeGivenId.classList.remove("active");
});

function vanish() {
  wrapZoneLoginUsingId.classList.add("active");

  setTimeout(() => {
    wrapZoneLoginUsingId.classList.add("vanich");

    telegramId.classList.add("active");
    instagramId.classList.add("active");
    twitterId.classList.add("active");

    setTimeout(() => {
      wrapZoneLoginUsingId.classList.remove("vanich", "active");
      telegramId.classList.remove("active");
      instagramId.classList.remove("active");
      twitterId.classList.remove("active");
    }, 4000);
  }, 5000);
}

loginUsingId.addEventListener("click", () => vanish());

try {
  forgotPasswordId.addEventListener("click", () => {
    forgotPasswordId.classList.add("active");
    forgotYourPassworMailId.classList.add("active");
  });

  buttonRemoveVanichMailId.addEventListener("click", () => {
    forgotPasswordId.classList.remove("active");
    forgotYourPassworMailId.classList.remove("active");
  });
} catch (error) {
  const objectError = ({} = error);
  console.log(objectError);
}

closeEyeId.addEventListener("click", () => {
  closeEyeId.classList.toggle("active");
  openEyeId.classList.toggle("active");
  inputPasswordId.type = "text";
});
openEyeId.addEventListener("click", () => {
  closeEyeId.classList.toggle("active");
  openEyeId.classList.toggle("active");
  inputPasswordId.type = "password";
});
