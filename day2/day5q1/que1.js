
// Fetch elements using TagName:  
// •	We can fetch the elements from HTML file usingTagName.
//  example:  document.getElementsByTagName (“ Tag_Name “);
// •	If two or more elements have the same TagName then we use index numbers to get them.
//  Example:    Let us assume <h1> tag has hii, hello as values in HTML file.

 var ele=document.getElementsByTagName ("h1");
 console.log(ele[2]);
//  2)Fetch elements using ClassName:
//  we can fetch elements using ClassName from html document. If we have two or more with same ClassName then we can get the element using index number.
//  In html file we have to give class to the element
// Example: <td class=”age”>100</td>
// And then in js file:
// Type 
// Var ele=document.getElementByClassName(‘age”);
// Console.log(ele[1]);
// Result;
// <td class=”age”>100</td>


// Fetch elements using Id:
// We can fetch elements using Id from an HTML document. If we have two or more with the same Id then we can get the element using an index number.
// Html file:
// <body>
// <h1 id=heading> javascript is amazing</h1>
// </body>

// In JS file:
// Var ele=document.getElementById(“heading”);
// Console.log(ele);

// Result:
// <h1 id=heading> javascript is amazing</h1>




