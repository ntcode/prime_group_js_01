
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var bonusesArray=[];

function bonuses (employees){
	for(var i=0; i<employees.length; i++){
		
		bonusesArray.push(sti(employees[i][0],employees[i][3],employees[i][1],employees[i][2]));
	}
}

function sti (name,rate,employeeNum, salary){
	
	var adjustedSalary=0;
	var bonus=0;
	var percent= 0;
	if(rate>2){
		switch(rate){
		case 3: 
			percent=1.04;
		break;
		case 4: percent=1.06;
		break;
		case 5: percent=1.1;
	    }

	    if(employeeNum.length==4){
	    	percent+=0.05;
	    }
	    if(parseInt(salary)>65000){
	    	percent-=0.01;
	    }
	    if(percent>1.13){
	    	percent=1.13;
	    }

    }
    else{
    	percent=1.0;
    }
    adjustedSalary=Math.round(salary*percent);
    bonus=Math.round(adjustedSalary-salary);
    return [name, percent,adjustedSalary,bonus];
}
bonuses(employees);
for(var i=0; i<bonusesArray.length;i++){
	console.log("* ", bonusesArray[i][0],Math.round((100*bonusesArray[i][1]-100))+"%","$"+bonusesArray[i][2],"$"+bonusesArray[i][3]);
}








