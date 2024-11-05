const $colorMode = document.querySelector('.dark');
const $switchColor = document.querySelector('#color');
const $switchLenguage = document.querySelector('#lenguage');

const $lenguage1 = document.querySelector('#lenguage1');
const $lenguage2 = document.querySelector('#lenguage2');
const $inputTextTitle = document.querySelector('#inputTextTitle');
const $inputTimeTitle = document.querySelector('#inputTimeTitle');


let currentLenguage = "en";

const loadContent = async (lenguage) => {
   try {
      const response = await fetch('content.json');
      
      if (!response.ok) {
         throw new Error('Network response was not ok')
      }
      const data = await response.json();
     $lenguage1.textContent= data[lenguage].lenguage1;
     $lenguage2.textContent= data[lenguage].lenguage2;
     $inputTextTitle.textContent= data[lenguage].inputTextTitle;
     $inputTimeTitle.textContent= data[lenguage].inputTextTitle;
     $buttonAdd.textContent = data[lenguage].buttonAdd;
     $buttonDeleteAll.textContent = data[lenguage].buttonDeleteAll; 
   } catch (error) {
      console.error('Error loading content:', error);
   }   
}

$switchLenguage.addEventListener('change', () => {
  currentLenguage = $switchLenguage.checked ? 'es':'en'
   loadContent(currentLenguage);
})

loadContent(currentLenguage);


$switchColor.addEventListener('click', () => {
   $colorMode.classList.toggle('dark');
   $colorMode.classList.toggle('light');
});



