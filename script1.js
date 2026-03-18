function calculateResult(){
    let n = document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
let x = parseFloat(prompt("enter the subjects NO."+(i+1)));
total+=x;
    }
    let average= total/n;
    let grade;
    if(average>=90){
        grade="A";
    } else if(average>=80){
        grade ="B";
    } else if(average>=70){
        grade= "C";
    }else{
grade= "F";}
if(average >= 40){
result= "Pass";}
else{
result= "Fail";}
document.getElementById("result").innerHTML =
"Total Marks:" + total + "<br>" +
"Average Marks:" + average + "<br>" +
"Grade:" + grade + "<br>" +
"Result:" + result;}


    
    

    
   
    