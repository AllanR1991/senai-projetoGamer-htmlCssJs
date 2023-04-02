const input = document.getElementById('image_uploads');
const preview = document.querySelector('.preview');

// input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement('p');
      para.textContent = 'Nenhum arquivo foi selecionado.';
      preview.appendChild(para);
    } else {
      const list = document.createElement('ol');
      preview.appendChild(list);
  
      for (const file of curFiles) {
        const listItem = document.createElement('li');
        const para = document.createElement('p');
        if (validFileType(file)) {
          // para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
          const image = document.createElement('img');
          image.src = URL.createObjectURL(file);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = `O arquivo ${file.name}, não é um tipo de arquivo valido. Favor selecionar outro arquivo de extensão :(.jpg ,.png ,.jpeg ,.svg).`;
          listItem.appendChild(para);
        }
  
        list.appendChild(listItem);
      }
    }
  }


  const fileTypes = [
    "image/jpeg",
    "image/png",
    "image/svg+xml",
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }