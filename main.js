// var a=[8,3,2,1,-4,5];

// for(i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
      
//     a[Math.floor(Math.random*a.length)]=a[j];
// 	 a[j]=a[i];
// 	 a[i]=a[Math.floor(Math.random*a.length)];
//     }
// }
// console.log(a);
// let sArr=[45,78,4,89,7]
// 		let x1=Math.floor(Math.random()*sArr.length)
// 		for(i=x1;i<sArr.length;i++){
// 			if(i==sArr.length-1){
// 				var y=0
// 			}else{
// 				y=1
// 			}
// 			for(j=i+y;j<sArr.length;j++){
// 				let b=sArr[i]
// 					sArr[i]=sArr[j]
// 					sArr[j]=b
// 			}
// 		}
// 		console.log(sArr)
// var a=[1,2,3,4,5,6,7,8,9],temp,index;
// var c=a.length;
// for(i=c-1;i>0;i--){
// index=Math.floor(Math.random()*i);
//     temp=a[i];
//     a[i]=a[index];
//     a[index]=temp;
// }
// console.log(a);
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));