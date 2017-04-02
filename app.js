


let res1 = document.getElementById('result');
res1.addEventListener('click' , (e) => {

    
     e.preventDefault();

     let base = document.getElementById('from');
     let curr = document.getElementById('to');

     let base1 = base.options[base.selectedIndex].value;
     let curr1 = curr.options[curr.selectedIndex].value;
     
     if(base1 === 'CAD') {
     	for(let i=0;i<localStorage.length ; i++) {
           
           let arr =JSON.parse(localStorage.getItem(i));
          
           if(arr[0] === curr1)
           {
           	  let amount = document.getElementById('First_amount').value ;
           	  amount = amount*arr[1];
           	  let disp = document.createElement('h2');
        disp.textContent  = amount;

        let show = document.getElementById('display');
        show.appendChild(disp);
           }
      }
     }

     else 
    {
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
    }




})