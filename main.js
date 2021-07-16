const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  //1 storyText の値を newStory 変数に格納
  let newStory = storyText;

  //2 配列の中からランダムに要素を取り出す
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //3 newStory の中のプレースホルダーを置き換える
  newStory = newStory
    .replace(":insertx:", xItem)
    .replace(":inserty:", yItem)
    .replace(":insertz:", zItem)
    .replace(":insertx:", xItem);

  //4 'Bob'を customeNameの入力値で置き換える
  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  //5 ukの場合、重さと温度の単位を置き換える
  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + " stone";
    let temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";

    newStory = newStory
      .replace("94 fahrenheit", temperature)
      .replace("300 pounds", weight);
  }

  //6 HTMLにテキストを表示する
  story.textContent = newStory;
  story.style.visibility = "visible";
}
