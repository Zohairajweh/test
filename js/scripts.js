var myVariable='38.9587';
console.log(myVariable+5);


myVariable=parseFloat(myVariable);//floating point nuber,decimal maintained. 
console.log(myVariable);
myVariable=parseInt(myVariable);// Converted to integget,decimal removed.
console.log(myVariable);


myVariable=Number(myVariable);//convert to any number type is can.
console.log(myVariable);
myVariable= myVariable + 5;// add 5 .
console.log(myVariable);
myVariable=myVariable.toString();//concvert back to a string.
console.log(myVariable);


//other tayps?

var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null:
    null,
    // Number (float/integer):
    34,
    168.793,
    // String:
    'Hello, World!',
    // Value not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];

/**
 * Creating elements for a webpage. (Adding to the DOM!)
 */

 // Create datalist.
var myDataList = document.createElement( 'DL' ); // Won't show yet! We didn't tell it where to go.
myDataList.className='data-list';
// Let's loop through the array so we don't have to type out each item!
for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
{ // ( ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // Create datalist title.
    var dataListTitle = document.createElement( 'DT' );
    dataListTitle.className='data-table';
    
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement( 'DD' );
    dataListData.className='data-list-data'
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );
}
var myHeadingText=`our data type test`
document.body.innerHTML+=
`<h2>
`+myHeadingText+`
</h2>`;
document.body.innerHTML+=
`<img src='./img/img3.jpeg'>
`;
// Add ALL of that to the body! Yay! We should be able to see it now!
document.body.appendChild( myDataList );

var myHeading=document.getElementById('my-heading');
myHeading.title='this  is a heading';
// myHeading.style.color='red';
myHeading.style.fontSize= '100px';
myHeading.className= 'gray-text';
//evnts
myHeading.addEventListener('mouseover',function(evnt){
this.className= 'salmon-text';

});

myHeading.addEventListener('mouseleave',function(evnt){
    this.className= 'indigo-text';
    
    });
    
    myHeading.addEventListener('click',function(evnt){

        var bigclass='big-text';
        if (!this.className.includes(bigclass))
        {
            this.className += ' big-text';


        }
        
        });

        //let's make a function

        function addTwoNubers(x,y){
x=Number(x);
y=Number(y);
return (x+y);


        }
        function currentDaystring()
        {
 var date=new Date();
var dateString='';
dateString+=date.getFullYear();
dateString+='//'
dateString+=date.getMonth();
dateString+='//'
dateString+=date.getDay();
dateString+='//'
return dateString;

        }
        console.log('the current date is :\r\n'+currentDaystring());
        
        
