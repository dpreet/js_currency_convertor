


let res1 = document.getElementById('result');
res1.addEventListener('click' , (e) => {

     
     e.preventDefault();

     let base = document.getElementById('from');
     let curr = document.getElementById('to');

     let base1 = base.options[base.selectedIndex].value;
     let curr1 = curr.options[curr.selectedIndex].value;
     
     let url = `http://api.fixer.io/latest?base=${base1}&symbols=${curr1}`;
      console.log(url);

      fetch(`${url}`)
     .then((resp) => resp.json())

	   .then(function(json) {
          
           console.log(json);
           let amount = document.getElementById('First_amount').value ;
            let converted = json.rates;
            for(let key in converted)
            {
              console.log(converted[key]);
              amount = amount*converted[key];
              
             }

            
            console.log(amount);
        
        let disp = document.createElement('h2');
        disp.textContent  = amount;

        let show = document.getElementById('display');
        show.appendChild(disp);



	   })
    




})