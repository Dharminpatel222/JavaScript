// ===============Mobile no is valid(ex)============/

function mobile_ex() {
    let mno = document.getElementById("mno").value;

    let reg_ex = /^[0-9]*$/

    if (reg_ex.test(mno)) {
        document.getElementById("msg6").innerHTML = ""
        return false;
    } else {
        document.getElementById("msg6").innerHTML = "Alphabet not allowed"
        return false;
    }
}

// ===============first name(ex)============/

function reg_ex_name(){
    let fname = document.getElementById("fname").value;

    let reg_ex = /^[a-zA-Z]*$/

    if (reg_ex.test(fname)){
        document.getElementById("msg1").innerText = ""
        return false;
    }else{
        document.getElementById("msg1").innerText = "invalid name"
        return false;
    }
}

// ===============Middle name(ex)============/

function reg_ex_middle(){
let middle = document.getElementById("middle").value;

let reg_ex = /^[a-zA-Z]*$/

if(reg_ex.test(middle)){
    document.getElementById("msg2").innerHTML = ""
}else{
    document.getElementById("msg2").innerHTML = "invalid name"
    return false;
}
}






// ===============date of birth(ex)============/

function reg_ex_date() {
    let dob = document.getElementById("dob").value;

    let reg_ex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/

    if (reg_ex.test(dob)) {
        document.getElementById("msg-4").innerHTML = ""
        return false;
    } else {
        document.getElementById("msg-4").innerHTML = ""
        return false;
    }
}


// ===============last name(ex)============/

function reg_ex_last(){
    let last = document.getElementById("last").value;

    let reg_ex = /^[a-zA-Z]*$/

    if (reg_ex.test(last)) {
        document.getElementById("msg3").innerHTML = ""
    } else {
        document.getElementById("msg3").innerHTML = "invalid name"
        return false;
    } 
}

    //==============Email id(ex)===========//

    function reg_ex_mail(){
        let mail = document.getElementById("mail").value;

        let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(reg_ex.test(mail)){
            document.getElementById("msg5").innerHTML = ""
        }else{
            document.getElementById("msg5").innerHTML = "invalid mail"
            return false;
        }
    }

    // ====================password=============//

    function reg_ex_pass(){

        let pass = document.getElementById("pass").value;

        let reg_ex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

        if(reg_ex.test(pass)){
            document.getElementById("msg8").innerHTML = ""
            return false;
        }else{
            document.getElementById("msg8").innerHTML = "invalid password"
            return false;
        }
    }

    function blnk_city(){
        let city = document.getElementById("city").value;
        if(city == -1){
            document.getElementById("msg---4").innerHTML = "Select exp";
            return false;
        }else{
            document.getElementById("msg---4").innerHTML = "";
            return false;
        }
    }

    function blnk_add(){
        let add = document.getElementById("add").value;

        if(add == ""){
            document.getElementById("msg--4").innerHTML = "Enter address"
            return false;
        }else{
            document.getElementById("msg--4").innerHTML = ""
            return false;
        }
    }