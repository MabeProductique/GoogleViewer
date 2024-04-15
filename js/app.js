
//Models
const modelChoices = ['Shoe', 'Canoe', 'Chair', 'GeoPlanter', 'Mixer', 'NeilArmstrong', 'ToyTrain', 'Escalier1', 'Escalier2']

//Options
const modelNames = document.querySelector('#modelNames');
const variantNames = document.querySelector('#variantNames');
const modelViewer = document.querySelector("#modelViewer");

//Load User Models Choice
modelChoices.forEach(model => {
  const option = document.createElement('option');
  option.value = model;
  option.innerText = model;
  modelNames.appendChild(option);
});

//First Model to show
modelViewer.style.height = window.innerHeight + 'px'
modelViewer.style.width = 'auto'
modelViewer.style.margin = 'auto'
modelViewer.setAttribute('src', 'assets/' + modelChoices[0] + '.glb')
modelViewer.setAttribute('poster', 'assets/' + modelChoices[0] + '.webp')

modelNames.addEventListener('change', function () {
  var selectedFileName = this.value
  console.log('Select ' + selectedFileName)
  modelViewer.setAttribute('src', 'assets/' + selectedFileName + '.glb')
  modelViewer.setAttribute('poster', 'assets/' + selectedFileName + '.webp')
  modelViewer.setAttribute('alt', selectedFileName)
})

modelViewer.addEventListener('load', (event) => {
  console.log('Model loading')

  //remove variants
  Array.from(variantNames.children).forEach(child => child.remove());

  const names = modelViewer.availableVariants;
  if (names.length > 0) {
    // Adds all variant option.
    for (const name of names) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      variantNames.appendChild(option);
    }
  } else {
    // Adds a default option.
    const option = document.createElement('option');
    option.value = 'default';
    option.textContent = 'Default';
    variantNames.appendChild(option);
  }
});


variantNames.addEventListener('change', (event) => {
  modelViewer.variantName = event.target.value === 'default' ? null : event.target.value;
});
