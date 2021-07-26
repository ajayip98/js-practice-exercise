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
    // Exercise - Blog post
const blogPost = {
    title: "The wonderful world",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, deleniti incidunt itaque deserunt odio nihil ipsa illo ducimus",
    author: "John Adams",
    views: 1.345,
    comments: [
      { author: "a", body: "b" },
      { author: "a", body: "b" },
    ],
    isLive: true,
  };
  
  console.log(blogPost);
  
  function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }
  
  const post = new Post("a", "b", "c");
  console.log(post);
  
  // Exercise - Price range;
  const priceRange = [
    {Label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {Label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {Label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
  ]
  