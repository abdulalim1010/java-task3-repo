const myString = "hellow missa antothion An a ";
let count = 0;
for (let i = 0; i < myString.length; i++)
{
   if (myString.charAt(i) == 'a') {
                count++;
            }
  
}
console.log("the number of 'a' in the string" +count+  "time"); 