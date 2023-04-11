// ===============show password============/

function show_pass(){

    let pass = document.getElementById("pass");

    if(pass.type = "password"){
        pass.type = "text"
    }else{
        pass.type = "password"
    }
}

function check_blank(){

     // ===============first name============/

    let fname = document.getElementById("fname").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("last").value;
    let mail = document.getElementById("mail").value;
    let mno = document.getElementById("mno").value;
    let pass = document.getElementById("pass").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let dob = document.getElementById("dob").value;
    let add = document.getElementById("add").value;
    let city = document.getElementById("city").value;
    

    if (fname == "" && middle == "" && last == "" && mail == "" && mno == "" && pass == "" && male == false && female == false && dob == "" && add == "" && city == -1){

        document.getElementById("msg1").innerHTML = "Enter First Name"
        document.getElementById("msg2").innerHTML = "Enter Middle Name"
        document.getElementById("msg3").innerHTML = "Enter Last Name"
        document.getElementById("msg5").innerHTML = "Enter Email id"
        document.getElementById("msg6").innerHTML = "Enter Mobile No"
        document.getElementById("msg8").innerHTML = "Enter password"
        document.getElementById("msg4").innerHTML = "Select gender Complusory"
        document.getElementById("msg-4").innerHTML = "Select date"
        document.getElementById("msg--4").innerHTML = "Enter Address"
        document.getElementById("msg---4").innerHTML = "Select city"
        return false;
     }

}




