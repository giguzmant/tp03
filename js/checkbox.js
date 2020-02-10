const mainCheckbox = document.querySelector("#main-checkbox");
const checkAll = () =>{
    const childCheckbox = document.getElementsByClassName("checkbox");
    for(let checkbox of childCheckbox){
        if(mainCheckbox.checked == true){
            checkbox.checked = true;
        } else{
            checkbox.checked = false;
                }
    }
}

mainCheckbox.addEventListener("change", checkAll)