/*Cargarmos la pagina antes iniciar el js */
const form = document.getElementById('set-info');
const btnFile = document.getElementById('active-file');
const file = document.getElementById('file');
const showfile = document.getElementById('showfile');

window.onload = () => {
    getfile();
    
    form.onsubmit = (e) =>{
        e.preventDefault();
        const file = e.target[0].files[0];
        const version = e.target[2].value; 
        getInfo(file , version)
    }

}


/**Optemos el docuemtos */
const getfile = () => {

    btnFile.onclick = (e) => {
        e.preventDefault();
        file.click() 
        file.onchange = (e) => { 
             e.preventDefault();
             showNameFile(e.target.files[0]);
        }
    }
}

const showNameFile = (file) => {
    showfile.innerHTML = '';
    showfile.innerHTML = `
      <p class="w-75 content-file-name">
        Archivo a convetir: <br>
         <strong class="name-file">${file.name}</strong>
      </p>
    `;

}

/*sacamos la informacion */
const getInfo = (data ,  version ) =>{
    const reader = new FileReader(data);
    reader.readAsText(data);
    reader.onload = (e) => {
    const dataRaw = e.target.result;
    const splitName = data.name.split('.');
    const fileName =  splitName[0] + '.json';
    const info = createJSON({fileName , dataRaw,  version });
    download(info , fileName);
  }        
}


const createJSON = (info) => {
    const json = JSON.stringify(info);
    return json;
}

const download = (info,  name) => {
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(info));
    element.setAttribute('download', name);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}