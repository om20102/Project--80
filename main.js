nameofstudent=[];
function submit (){
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    var n3=document.getElementById("s3").value;
    var n4=document.getElementById("s4").value;

    nameofstudent.push(n1);
    nameofstudent.push(n2);
    nameofstudent.push(n3);
    nameofstudent.push(n4);

    document.getElementById("display_name").innerHTML = nameofstudent;
    document.getElementById("b1").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting (){
    nameofstudent.sort();
     console.log(nameofstudent);
      document.getElementById("display_name").innerHTML = nameofstudent;
}