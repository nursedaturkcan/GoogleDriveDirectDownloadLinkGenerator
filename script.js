// variables
const gLinkInput = document.getElementById("glink");
const btnGenerate = document.getElementById("btn");
const downloadLinkTextarea = document.getElementById("download-link");
const clear = document.querySelector(".clear");
btnGenerate.addEventListener("click", generateLink);
function generateLink(e) {
    e.preventDefault();
    // console.log(gLinkInput.value);
    const gLinkInputValue = gLinkInput.value;
    /*"It checks whether the value of the variable 'gLinkInput.value' contains the string 'https://drive.google.com/file/d/'." */
    const confirmLink = gLinkInput.value.includes("https://drive.google.com/file/d/");
    // console.log(gLinkInputValue);
    if (confirmLink == true) {
        const getDownloadLink = gLinkInput.value.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "");
        downloadLinkTextarea.value = getDownloadLink;


        function copyText(target) {
            if (target.value = "") {
                alert("Please generate a download link")
            }
            else {
                target.select();
                document.execCommand("copy");
                alert("Link has been copied to clipboard");
            }
        }
        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLinkTextarea);
        })
        // embed audio function
        const audio1 = `
    <audio width="300" height="32" controls="controls" src="
    `;
        const audio2 = `"type="audio/mp3></audio>`;
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = `${audio1}${downloadLinkTextarea.value}${audio2}`;
        // console.log(embedAudio.value);

        // copy audio embed code
        const copyAudio = document.querySelector(".copy-audio");
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio);
        })
        // embed video
        const getVideoLink = gLinkInput.value.replace("/view?usp=sharing", "");
        const video1 = `<iframe src="`;
        const video2 = `/preview" width="560" height="315"> </iframe>`;
        const embedVideo = document.getElementById("embed-video");
        embedVideo.value = `${video1}${getVideoLink}${video2}`;
        const copyVideo = document.querySelector(".copy-video");
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo);
        })
        clear.addEventListener("click", clearForm);
        function clearForm(e) {
            e.preventDefault();
            gLinkInput.value = "";
            downloadLinkTextarea.value = "";
            embedAudio.value = "";
            embedVideo.value = "";
        }
    }else{
        alert("Please enter a Google Drive File Link");
    }
    
       
       

}



