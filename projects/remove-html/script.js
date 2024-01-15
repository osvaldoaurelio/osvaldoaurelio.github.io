const apiUrl = 'https://remove-html.onrender.com/' || 'http://localhost:3000/';

const textLabel = 'Click to select or drop a text file here to process';

const fileLabel = document.getElementById('file-label');
const fileInput = document.getElementById('file-input');
const btnProcess = document.getElementById('btn-process');

fileLabel.textContent = textLabel;

const emptyFileInput = () => {
  fileInput.value = '';
  fileLabel.textContent = textLabel;
  btnProcess.classList.remove('active');
};

const fillFIleInput = name => {
  fileLabel.textContent = name;
  btnProcess.classList.add('active');
};

const createDownloadLink = (blob, fileName) => {
  const downloadUrl = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');

  downloadLink.href = downloadUrl;
  downloadLink.download = fileName
  document.body.appendChild(downloadLink);
  downloadLink.click();
  
  return { downloadUrl, downloadLink };
}

const removeDownloadLink = (downloadUrl, downloadLink) => {  
  URL.revokeObjectURL(downloadUrl);

  document.body.removeChild(downloadLink);
}

fileInput?.addEventListener('change', ({ target }) => {
  const [file] = target.files;

  if (!file || !file.type.includes('text')) return emptyFileInput();

  fillFIleInput(file.name);
});

btnProcess?.addEventListener('click', async () => {
  const [file] = fileInput.files;

  if (!file) return alert('No files to process\n\nUse the area above and select a text file to process!');

  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${apiUrl}process`, {
    method: 'POST',
    body: formData,
  });

  emptyFileInput();

  if (!response.ok) return console.error('Error processing the file');
  
  const fileName = response.headers.get('X-Filename') ?? 'no-html.txt';
  const blob = await response.blob();
  
  const { downloadUrl, downloadLink } = createDownloadLink(blob, fileName);

  removeDownloadLink(downloadUrl, downloadLink);
});
