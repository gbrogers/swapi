const resButton = document.querySelector("button");
const body = document.querySelector("body");

const buttonClicked = () => {
  axios
    .get("https://swapi.dev/api/planets/2")
    .then((res) => {
      const residents = res.data.residents;
      //   console.log(residents);
      for (let i = 0; i < residents.length; i++) {
        // console.log(residents[i]);
        const names = document.createElement("div");
        body.appendChild(names);

        axios
          .get(residents[i])
          .then((res) => {
            // console.log(`${res.data.name}`);
            names.innerHTML = `<h2>${res.data.name}</h2>`;
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

resButton.addEventListener("click", buttonClicked);
