function generateQRCode() {
    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = "";
    var content = document.getElementById('input-content').value;
    var spinner = document.getElementById('spinner');

    if (content.trim() !== "") {
        spinner.style.display = "block";
        setTimeout(function() {
            new QRCode(qrcodeContainer, {
                text: content,
                width: 128,
                height: 128
            });
            spinner.style.display = "none";
            alert("QR Code generated successfully!!😃😃");
            document.getElementById('save-btn').style.display = "flex";
        }, 1000);
    } else {
        alert("Enter content to generate a QR code.");
    }
}

function saveQRCode() {
    var qrcodeCanvas = document.querySelector('#qrcode canvas');
    if (qrcodeCanvas) {
        var imageData = qrcodeCanvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = imageData;
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert("Please generate a QR code first.");
    }
}
