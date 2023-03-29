let imgBox = document.getElementById("imgBox_qr");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() 
{
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Happy%20Birthday%20to" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else if (qrText.value.length === 0) {
        alert("Please enter some text or URL")
        qrText.classList.add("error");
        setTimeout(() => { qrText.classList.remove('error') }, 1000);
    }
}

var input = document.getElementById("qrText");
input.addEventListener("keypress", function (event) 
{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});