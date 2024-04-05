document.getElementById('downloadBtn').addEventListener('click', function() {
    // Ruta al archivo ZIP que deseas que tus usuarios descarguen.
    // Debes subir este archivo a tu repositorio en GitHub.
    const zipFileUrl = './Downloads.zip';
    
    // Creando un elemento <a> para simular un clic y comenzar la descarga
    const a = document.createElement('a');
    a.href = zipFileUrl;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
