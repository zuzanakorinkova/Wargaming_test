let sliderItems = document.querySelectorAll('.flag-wrapper')
let selectedIndex = 0;
let leftArrow = document.getElementById('left')
let rightArrow = document.getElementById('right')

for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', function() {

      for (let j = 0; j < sliderItems.length; j++) {
        sliderItems[j].classList.remove('selected');
      }

      this.classList.add('selected');
      selectedIndex = i;
    });
   
  }



function handleSelectLeft() {
  selectedIndex = Math.max(0, selectedIndex - 1)

  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('selected');
  }
  // Add active class to the selected item
  sliderItems[selectedIndex].classList.add('selected');

  selectedIndex == 0 ? leftArrow.classList.remove('active') && rightArrow.classList.add('active') : leftArrow.classList.add('active')
}
console.log(selectedIndex)
function handleSelectRight() {
    selectedIndex = Math.max(0, selectedIndex + 1)
    
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('selected');
      }
      // Add active class to the selected item
      sliderItems[selectedIndex].classList.add('selected');

      //console.log(sliderItems.length)
      if(selectedIndex == sliderItems.length - 1){
        rightArrow.classList.remove('active')
      }

      selectedIndex > 0 ? leftArrow.classList.add('active') : leftArrow.classList.remove('active')
}