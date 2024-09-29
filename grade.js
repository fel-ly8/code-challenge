let grade = 40
//if statement for less than 40 marks
if (grade >=0 && grade <=40){
    console.log("Your Grade Is E");
    
}
//else if statement for 40-49 marks
else if (grade >=40 && grade <=49){
    console.log("Your Grade Is D");
    
}
//else if statement for 49-59 marks
else if(grade >=49 && grade <=59){
    console.log("Your Grade Is C");
    
}
//else if statement for 60-79 marks
else if(grade >=60 && grade <=79){
    console.log("Your Grade Is B");
    
}
//else statement for 79-100 marks
else if(grade >79 && grade <=100){
    console.log("Your Grade Is A");
    
}
// else statement for invalid input
else{
    console.log("Invalid Input");
    
}