function myFunc() {
    let myEmail = document.getElementById("email").value;
    let myPassword = document.getElementById("password").value;
    // let html = document.getElementById("html").value;
    // let css = document.getElementById("css").value;
    // let javascript = document.getElementById("javascript").value;
    // console.log(myEmail);
    // console.log(myPassword);
    let skill = displayCheckedValue();
    let gender = displayRadioValue();
    document.getElementById("result").innerHTML = "Email: " + myEmail + "<br>" + "Password: " + myPassword + "<br>" + "Gender: " + gender + "<br>" + "Skills: " + skill;

}

function displayRadioValue() {
    let ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            // document.getElementById("result").innerHTML
            return ele[i].value;
        }
    }    
}

function displayCheckedValue() {
    let ele = document.getElementsByName('skill');
    let skillSet = []
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            skillSet.push(ele[i].value)
            // console.log(ele[i].value)
            
            // = "Gender: " + ele[i].value;
        }

    }
    return skillSet;
}



