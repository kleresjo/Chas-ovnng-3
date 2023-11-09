// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.

const newNode = document.createElement("div");
const textNode = document.createTextNode("B");
newNode.appendChild(textNode);

const addsText = document.getElementById("my-element");
addsText.insertBefore(newNode, addsText.children[1]);