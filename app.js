/*const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const entervALUE = inputEl.value;
  const listitemel = document.createElement("li");
  listitemel.textContent = entervALUE;
  listEl.appendChild(listitemel);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);*/

Vue.createApp({
  data() {
    return {
      goals: [],
      enterValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterValue);
      this.enterValue = "";
    },
  },
}).mount("#app");
