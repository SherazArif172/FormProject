const image = document.getElementById("image");
const input = document.getElementById("image-input");
const Form = document.querySelector("#Form");

input.onchange = function () {
  image.src = URL.createObjectURL(input.files[0]);
};

const submit = document.querySelector("#submit");
const form = document.querySelector("#Form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  const name = document.querySelector("#name");
  const address = document.querySelector("#adress");
  const skill = document.querySelector("#skill");
  const email = document.querySelector("#email");

  console.log(name.value, address.value, skill.value, email.value);
  console.log(input.files[0]);

  const outimage = document.querySelector("#outimage");
  outimage.src = URL.createObjectURL(input.files[0]);

  const outname = document.querySelector("#outname");
  outname.value = name.value;

  const outadress = document.querySelector("#outadress");
  outadress.value = address.value;

  const outputemil = document.querySelector("#outemail");
  outputemil.value = email.value;

  const outskill = document.querySelector("#outskill");
  outskill.value = skill.value;
});
