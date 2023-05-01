const onClickAdd = () => {
  const text = document.getElementById("add-text").value;
  console.log(text);
  createIncompleteList(text);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-text";
  p.innerText = text;

  console.log(p);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.firstElementChild.textContent = null;

    const p = document.createElement("p");
    p.className = "todo-text";
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode.parentNode);
      const addTarget = backButton.parentNode.parentNode;
      const text = addTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(backButton);

    console.log(addTarget);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(div);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-list").append(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
