  let names = ["raghul", "vijay", "divya", "arun"];
  names.forEach((a)=>{

  console.log(a.toUpperCase()) 
})

let items = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 50 },
    { name: "Bag", price: 500 }
  ];

 let newitems= items.forEach((a,el)=>{
    a.push(12)
    console.log(newitems);
  })


