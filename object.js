let products = [
    { id: 1, name: "Laptop", price: 45000, quantity: 5 },
    { id: 2, name: "Mouse", price: 500, quantity: 20 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 10 }
  ]
products.push({ id: 4, name: "Monitor", price: 7000, quantity: 8 })
//   console.log(products.name);

//   let totalvalue = products.reduce((a.price,b.price) => {

//   });
  

  for(let i=0;i<products.length;i++)
  {
    let totalvalus = products[i].price*products[i].quantity;
    console.log(totalvalus);
    
    if(products[i].name == "Mouse")
    {
        console.log(products[i].quantity+10);
    }
    

  }




  