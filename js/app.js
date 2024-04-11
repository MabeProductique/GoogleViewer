
//Models
const modelsChoice = ['Escalier1','Escalier2','Canoe', 'Chair', 'GeoPlanter', 'Mixer', 'NeilArmstrong', 'ToyTrain']

//Load User Models Choice
const modelsOption = document.getElementById('models');
modelsOption.innerHTML = ''

modelsChoice.forEach(model => {
  const option = document.createElement('option');
  option.value = model;
  option.innerText = model;
  modelsOption.appendChild(option);
});

//First Model to show
const modelViewer = document.getElementById('modelViewer')
modelViewer.style.height = window.innerHeight + 'px'
modelViewer.style.width = 'auto'
modelViewer.style.margin = 'auto'
modelViewer.setAttribute('src', 'assets/' + modelsChoice[0] + '.glb')
modelViewer.setAttribute('poster', 'assets/' + modelsChoice[0] + '.webp')


document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to change model on selection change
  modelsOption.addEventListener('change', function () {
    var selectedFileName = this.value
    modelViewer.setAttribute('src', 'assets/' + selectedFileName + '.glb')
    modelViewer.setAttribute('poster', 'assets/' + selectedFileName + '.webp')
    modelViewer.setAttribute('alt', selectedFileName)
  })
})
