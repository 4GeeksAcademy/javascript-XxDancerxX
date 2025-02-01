let who = ["The dog", "My grandma", "The mailman", "My bird", "The Cat"];
let action = ["ate", "peed", "crushed", "broke", "Took"];
let what = ["my homework", "my phone", "the car", "My Adapter"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuse() {
  let whoRange = Math.floor(Math.random() * who.length);
  let actionRange = Math.floor(Math.random() * action.length);
  let whatRange = Math.floor(Math.random() * what.length);
  let whenRange = Math.floor(Math.random() * when.length);

  let excuseDisplay = who[whoRange];
}

Excuse();
