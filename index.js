//exercise 1
 const address = {
   street: "Parahat 5",
   city: "Ashgabat",
   zipCode: "744000",
 };
 const creat = new CreatAddress2("Bulvar", "Mary", "1712839");
 console.log(creat);

//Exercise object equality
 let address1 = new Address("a", "b", "c");
 let address2 = new Address("a", "b", "c");

 console.log(areEqual(address1, address2));
 console.log(areSame(address1, address2));
 //Constructor Function
 function Address(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
 }

 function areEqual(address1, address2) {
   return (
     address1.street === address2.street &&
     address1.city === address2.city &&
     address1.zipCode === address2.zipCode
   );
 }

 function areSame(address1, address2) {
    return address1 === address2;
     }
    