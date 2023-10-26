function submit(){
    const fname = document.RegisterForm.fname.value;
    const lname = document.RegisterForm.lname.value;
    const fullname = fname + lname;
    document.getElementById('data').innerHTML = fullname;
    console.log(fullname);
}

function countPara(){
    const totalpara = document.getElementsByTagName("p")
    const totalhed = document.getElementsByTagName("h1");
    alert(`Total p tags are: ${totalpara.length}`);
    console.log (`Total p tags are: ${totalhead.length}`);
}

function totalElement(){
    const gender = document.getElementsByName("gender");
    console .log(genders);
    alert("Total: gender".length);
}

function printvalue(){
    const name = document.form1.name.value;
    const address = document.form1.address.value;
    console.log("Hello" + name + address);
    alert(`Hello: Mr.${name}\n Address: ${address}`);
}