//ANONYMOUS Func
var oddnum=function(arr){
   for(let i in arr){
        if(i%2!==0){
            console.log(i);
            
        }
    }
}
oddnum([1,2,3,4,5,6]);

//IIFE
(function (arr){
    for(var i=0;i<=arr.length;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
})([1,2,3,5,6,9])


//ANONYMOUS
var titcase=function(str){
    
    str=str.toLowerCase().split(' ');
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    
    return str.join(' ');
}

var res=titcase('guvi geek');
console.log(res); 


//IIFE
(function titcase(str){
    str=str.toLowerCase().split(' ');
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    
     console.log(str.join(' '));
})("guvi geek")


//ANONYMOUS
var sumall=function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    
    console.log(sum);
}
sumall([1,2,3,4,5])



//IIFE
(function (arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
})([2,2,2,2,2])



//ANONYMOUS
var primenum=function(arr){
    for(var i=0;i<arr.length;i++){
        var j=2;
        var p=1;
        while(j<arr[i]){
            if(arr[i]%j===0){
                p=0;
                break;
            }
            j++;
        }
        if(p==1){
            console.log(arr[i]);
        }
    }
}

primenum([3,4,5,6,7])


//IIFE
(function (arr){
    for(var i=0;i<arr.length;i++){
        var j=2;
        var p=1;
        while(j<arr[i]){
            if(arr[i]%j===0){
                p=0;
                break;
            }
            j++;
        }
        if(p==1){
            console.log(arr[i]);
        }
    }
})([4,5,6,8])


//Remove DUPLICATES
var getUnique=function(array){
        var uniqueArray = [];
        
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    var values = [2,6,6,5,4,3,3];
    var uniqueVal = getUnique(values);
    console.log(uniqueVal);
    

(function(array){
     var uniqueArray = [];
        
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        console.log(uniqueArray) ;
})([1,1,2,2,3,3,4,4,5,5])    


//array rotation k times 

var rotate=function(array){
    var k = 2;
    var n = array.length;
    for (var i = 0; i < k; i++){
        var j, temp;
        temp = array[0];
        for(j = 0;j < n - 1;j++){
            array[j] = array[j + 1];
        }
        array[j] = temp;
    }    
   
    return array;
}
   
var values = [2,6,4,5,1,3];
var rotatedArray = rotate(values);
console.log(rotatedArray);


//IIFE
(function(array){
    var k = 2;
    var n = array.length;
    for (var i = 0; i < k; i++){
        var j, temp;
        temp = array[0];
        for(j = 0;j < n - 1;j++){
            array[j] = array[j + 1];
        }
        array[j] = temp;
    }    
   
    console.log(array);
})([2,6,4,5,1,3])


//ANONYMOUS Palindrome

var palindromeInArray = function(array){
    var n = array.length;
    for(var i = 0;i < n;i++){
        var str = array[i];
        var newString = "";
        for (var j = str.length - 1; j >= 0; j--) {
            newString += str[j];
        }
        if(newString === str)
            console.log(array[i]);
    }
}

var values = ['madam','bob','teacher','sir','racecar'];
palindromeInArray(values);


//IIFE
(function(array){
    var n = array.length;
    for(var i = 0;i < n;i++){
        var str = array[i];
        var newString = "";
        for (var j = str.length - 1; j >= 0; j--) {
            newString += str[j];
        }
        if(newString === str)
            console.log(array[i]);
    }
})(['madam','bob','teacher','sir','racecar'])


var findMedian = function(ar1, ar2){
    var i = 0;  
    var j = 0;  
    var count;
    var m1 = -1, m2 = -1;
    var n = ar1.length;  
   
    for (count = 0; count <= n; count++){
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
       
        else if (j == n){
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j]){    
            m1 = m2;  
            m2 = ar1[i];
            i++;
        }
        else{
            m1 = m2;  
            m2 = ar2[j];
            j++;
        }
    }
       
    return (m1 + m2)/2;
}

var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];

var median = findMedian(arr1,arr2);
console.log(median);


(function(arr1,arr2){
    var i = 0;  
    var j = 0;  
    var count;
    var m1 = -1, m2 = -1;
    var n = arr1.length;  
   
    for (count = 0; count <= n; count++){
        if (i == n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
       
        else if (j == n){
            m1 = m2;
            m2 = arr1[0];
            break;
        }
       
        if (arr1[i] <= arr2[j]){    
            m1 = m2;  
            m2 = arr1[i];
            i++;
        }
        else{
            m1 = m2;  
            m2 = arr2[j];
            j++;
        }
    }
       
    console.log((m1 + m2)/2);

})([1,12,15,26,38],[2,13,17,30,45])
    
