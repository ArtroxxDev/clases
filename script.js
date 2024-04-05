document.getElementById('downloadBtn').addEventListener('click', function() {

    const zipFileUrl = './Downloads.zip';
    
    const a = document.createElement('a');
    a.href = zipFileUrl;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
