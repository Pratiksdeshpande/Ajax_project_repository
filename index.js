setInterval(updatetxt,2000);

function updatetxt() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Pratik.txt', true);
    
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState==4 && xhr.status==200 ) {
            document.getElementById('box1').innerHTML= xhr.responseText;
        }
    }
    
    xhr.send();
        
};
