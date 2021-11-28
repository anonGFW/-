var result = ['男的', '毋庸置疑男的', '天王老子来了也是男的', '女的', '性感少妇', '世纪美女', '公主小妹'];

var upload_image;
const image_input = document.getElementById("image_input");
image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        upload_image = reader.result;
        handleOrder();
        document.getElementById("display_image").style.backgroundImage = `url(${upload_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

const result_display = document.getElementById("result");
const display = document.getElementById("display_text")
handleOrder();
result_display.addEventListener('click', function() {
    display.innerHTML = '';

    const random = Math.floor(Math.random() * result.length);;
    var display_text = document.createElement("p");
    display_text.setAttribute("id", "display_text")
    display_text.innerHTML = result[random];
    display.appendChild(display_text);
    var warning = document.createElement("p");
    warning.innerHTML = "我随便写的代码你就信了吗，性别是靠你的眼睛来判断的!"
    display.appendChild(warning);
})

function handleOrder() {
    if (upload_image === undefined) {
        result_display.disabled = true;
    } else {
        result_display.disabled = false;
    }
}