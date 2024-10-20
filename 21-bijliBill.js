// Bijli Bill - Description 

let unit = +prompt('Enter your bijli unit')
if (unit <= 100) {
  let bill = unit * 10;
    console.log(`Bill of ${unit} unit according to 10/unit is = `+bill);
    
} else if (unit <= 200) {
    let bill = unit * 15;
      console.log(`Bill of ${unit} unit according to 15/unit is = `+bill);
    
} else if (unit <= 300) {
    let bill = unit * 20;
      console.log(`Bill of ${unit} unit according to 20/unit is = `+bill);
}else if(unit > 300){
    let bill = unit * 25;
    console.log(`Bill of ${unit} unit according to 25/unit is = `+bill);
    
}else{
    console.log("You enterd invalid input");
    
}