export default function decorate(block) {
  const rows = [...block.children];
  [...block.children].forEach((row, r) => {
    if (r == 0) {
      const nextBtn = document.createElement("button");
      nextBtn.classList.add("btn");
      nextBtn.classList.add("btn-next");
      const node = document.createTextNode(row.textContent);
      nextBtn.append(node);
      row.replaceWith(nextBtn);
    } else if (r == rows.length - 1) {
      const prevBtn = document.createElement("button");
      prevBtn.classList.add("btn");
      prevBtn.classList.add("btn-prev");
      const node = document.createTextNode(row.textContent);
      prevBtn.append(node);
      row.replaceWith(prevBtn);
    } else {
      row.classList.add("slide");
      [...rows.children].forEach((col, c) => {
        console.log("==>", row, r, col, c);
        if (c == 1) {
          col.classList.add("slide-text");
        }
      });
    }
  });

  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((item) => {
      item.style.display = "none";
    });
    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);

  document.querySelector(".btn-next").addEventListener("click", nextSlide);
  document.querySelector(".btn-prev").addEventListener("click", prevSlide);
}
