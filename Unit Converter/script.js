const calc_temp = ()=>{
    const temp = document.getElementById("mytemp").value;
    // console.log(temp);
    
    const Unit = document.getElementById("temp_type");
    const Unit_value =  temp_type.options[Unit.selectedIndex].value;
    const celsiusToFah = (celsius) =>{
        let fahrenheit = Math.round((celsius * 9/5) +32);
        return fahrenheit;
    }
    const fahToCelsius = (fahrenheit) =>{
        let celsius = Math.round((fahrenheit - 32) + 5/9);
        return celsius;
    }

    console.log(Unit_value);
    let result;
    if(Unit_value == 'celsius'){
        result = celsiusToFah(temp);
        document.getElementById('ans').innerHTML = `${result}  °fahrenheit`;
    }
    else{
        result = fahToCelsius(temp);
        document.getElementById('ans').innerHTML = `${result}  °Celsius`;
    }
}
           /*---------------------------- Distance ------------------*/

const calc_dist = ()=>{
    const dist = document.getElementById("mydist").value;
    // console.log(temp);
    
    const Unit = document.getElementById("dist_type");
    const Unit_value =  dist_type.options[Unit.selectedIndex].value;
    const meterTocenti = (centi) =>{
        let meter = centi/100;
        return meter;
    }
    const meterToKilo = (meter) =>{
        let kiloMeter = meter/1000;
        return kiloMeter;
    }
    const kiloToMeter = (kiloMeter) =>{
        let meter = kiloMeter*1000;
        return meter;
    }

    console.log(Unit_value);
    let result;
    if(Unit_value == 'Meter'){
        result = meterToKilo(dist);
        document.getElementById('ans').innerHTML = `${result}  Kilometer`;
    }
    else if(Unit_value == 'CentiMeter'){
        result = meterTocenti(dist);
        document.getElementById('ans').innerHTML = `${result}  Meter`;
    }
    else{
        result = kiloToMeter(dist);
        document.getElementById('ans').innerHTML = `${result}  Meter`;
    }
}

/* ------------------Currency ----------------------*/
const calc_curr = ()=>{
    const curr = document.getElementById("mycurr").value;
    // console.log(temp);
    
    const Unit = document.getElementById("curr_type");
    const Unit_value =  curr_type.options[Unit.selectedIndex].value;
    const rupToDoll = (rupee) =>{
           let dollar = rupee/80;
           return dollar;
         }
    const rupToPound = (rupee) =>{
           let pound = rupee/100;
           return pound;
         }
    const dollToRup = (dollar) =>{
             let rupee = dollar*80;
             return rupee;
        }
     const poundToRup = (pound) =>{
            let rupee = pound*100;
            return rupee;
         }
    console.log(Unit_value);
    let result;
    if(Unit_value == 'Rupee_to_dollar'){
        result = rupToDoll(curr);
        document.getElementById('ans').innerHTML = `${result}  Dollar`;
    }
    else if(Unit_value == 'Rupee_to_pound'){
        result = rupToPound(curr);
        document.getElementById('ans').innerHTML = `${result}  Pound`;
    }
    else if(Unit_value == 'Dollar_to_rupee'){
        result = dollToRup(curr);
        document.getElementById('ans').innerHTML = `${result}  Rupees`;
    }
    else{
        result = poundToRup(curr);
        document.getElementById('ans').innerHTML = `${result}  Rupees`;
    }
}