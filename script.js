function change_count(on, plus) {
  let on_count = document.getElementById("on_number").innerText;
  let off_count = document.getElementById("off_number").innerText;
  if (on) {
    if (plus && on_count < 2000) {
      on_count++;
    } else if (on_count > 0) {
      on_count--;
    }
    document.getElementById("on_number").innerText = on_count;
  } else {
    if (plus && off_count < 2000) {
      off_count++;
    } else if (off_count > 0) {
      off_count--;
    }
    document.getElementById("off_number").innerText = off_count;
  }
}
