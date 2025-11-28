const listInput = document.getElementById("list-input");
const list = document.getElementById("list");
const listArray = [];

listInput.addEventListener("keydown", function (event){
  if (event.key === "Enter") {
    if (listArray.length < 5){
      const li = document.createElement("li");
      const deleteButton = document.createElement("button");
      const span = document.createElement("span");
      list.appendChild(span);
      span.style.display = "flex";
      list.appendChild(span);
      span.appendChild(li);
      li.textContent = listInput.value;
      span.appendChild(deleteButton);
      deleteButton.textContent = "🗑️";
      listArray.push(li);
      listInput.value = "";
      listInput.readOnly = false;
    }
    else {
      listInput.value = "Max Items: 5";
      listInput.readOnly = true;
    }
  }
}); 