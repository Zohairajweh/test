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
    //  let's review some conditions -related operators,,    
        
console.log(1==true);//true
console.log('hello,world'==true);//false
console.log(-137==true);//false
console.log('test'=='test');//true
console.log(36=='36');//true

console.log(1===true);//false
console.log(''==true);//false
console.log(-137===true);//false
console.log('test'==='test');//true
console.log(36==='36');//false


// hamburger menu 
 var myNav =document.querySelector('nav');
 var myNavButton =document.querySelector('.menu-button');
 myNavButton.addEventListener('click',function( event ) {
     //when clicked ,add/remove the "nav-open"class (in Html.)
myNav.classList.toggle('nav-open')

 });
var myObject={
name:'jerry',
age: 61,
hobbies:[
    'snowboarding',
    'action movies'
]

};

console.log(myObject);
console.log('object"name:'+myObject.name);
console.log('object"age:'+myObject.age);
console.log('object"hobbies:'+myObject.hobbies[0]+','+myObject.hobbies[1]);
myObject.hobbies.push('programing');
console.log('updated hobbies:');
console.log(myObject.hobbies);

var newObject={
myNum: 5,updateNum: function(){

    this.myNum=this.myNum +5;
    return this.myNum
}


};
function Person(name,age,hobbies){

this.name =name;
this.age =age;
this.hobbies =hobbies;
this.sayGoodbye=function(){
document.body.innerHTML +=`
<p>
This is <strong>`+this.name+`</strong>, saying <em> Goofbye </em>!
</p>
`;

};
}
var jerry =new Person('jerry',61,['snowboarding','programing'] );
var sally =new Person('sally',36,['action movies','skydiving','teaching'] );

Person.prototype.introduction=function(){
var hobbiesString= '<ul>';
this.hobbies.forEach(function(Value, index)
 {
    hobbiesString +='<li>'+ Value +'</li>';
});
hobbiesString+='</ul>';
    document.body.innerHTML +=`
    <h2>`+this.name + `</h2>
<dl><!--my name is :`+this.name +`-->
    <dt>age</dt>
    <dd>`+this.age+`</dd>
    <dt>Hobbies</dt>
    <dd>`+hobbiesString+ `</dd>
</dl>

 `;
}
Person.prototype.nickname='';
jerry.nickname='the big jare';
sally.nickname='sallers'