function getFinalOpenedDoors(numDoors) {
  let result = [];
  for (let i = 1; i * i <= numDoors; i++) {
    result.push(i * i);
  }
  return result;
}

document.getElementById("runBtn").addEventListener("click", () => {
  const numDoors = 100;
  const opened = getFinalOpenedDoors(numDoors);
  const output = document.getElementById("output");

  output.innerHTML = ""; // clear cũ

  

  for (let i = 1; i <= numDoors; i++) {
    const door = document.createElement("div");
    door.classList.add("door");
    door.textContent = i;

    if (opened.includes(i)) {
      door.classList.add("open");
    } else {
      door.classList.add("closed");
    }

    output.appendChild(door);
  }
});

