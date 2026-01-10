const cells = document.querySelectorAll(".grid-item");
const elements = [];
let count = 1;
cells.forEach((cell) => {
  cell.addEventListener("click", () => {

    if (count == 9) {
      cells.forEach((cell) => {
        cell.innerHTML = "";
      });
      count = 1;
      document.getElementById("ending").innerText = "TIE";
    }
    
    else if (count % 2 == 1 && !elements.includes(cell.dataset.index)) {
      cell.innerHTML = "X";
      elements.push(cell.dataset.index);
      count++;
    }
    
    else if (count % 2 == 0 && !elements.includes(cell.dataset.index)) {
      cell.innerHTML = "O";
      elements.push(cell.dataset.index);
      count++;
    
    }
  });
});
