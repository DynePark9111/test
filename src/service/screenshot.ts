import html2canvas from "html2canvas";

const screenshotTarget = document.body;

export default function screenshot() {
  let result = window.confirm("스크린샷을 찍을까요?");
  if (result) {
    html2canvas(screenshotTarget).then((canvas) => {
      const myImage = canvas.toDataURL("image/png");
      downloadURI(myImage, "mise_screenshot");
    });
  }
}

function downloadURI(uri: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
