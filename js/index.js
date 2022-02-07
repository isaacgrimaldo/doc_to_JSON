/*Cargarmos la pagina antes iniciar el js */
window.onload = () => {
    form.onsubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }
}


const form = document.getElementById('set-info');
const btnFile = document.getElementById('active-file');
const file = document.getElementById('file');
const version =  document.getElementById('version').value;



/**Optemos el docuemtos */
const getfile = () => {

    btnFile.onclick = () => {
        file.click() 
        file.onchange = (e) => { 
             readFile(e);
        }
    }
}

/*leemos el doc */
const readFile = (event) =>{
  const docs =  event.target.files;
  const file = docs[0];
  getInfo(file)
}

/*sacamos la informacion */
const getInfo = (data ) =>{
    const reader = new FileReader(data);
    reader.readAsText(data);
    reader.onload = (e) => {
    const dataRaw = e.target.result;
    const splitName = data.name.split('.');
    const fileName =  splitName[0] + '.json';
    console.log(splitName); 
    console.log(version); 
    const info = createJSON({fileName , dataRaw,  version });
    download(info);
  }        
}


const createJSON = (info) => {
    const json = JSON.stringify(info);
    return json;
}

const download = (info) => {
    
    const element =  document.createElement('a');
    console.log(info);
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(info.dataRaw));
//     element.setAttribute('download', info.name);
        
//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element); 
//     //// Start file download.
//     download("hello.txt","This is the content of my file :)");
}