let studentNames = ["John", "Bobby", "Jason"];
let teachers = [
  {
    name: "damian",
    subjects: "arrays,javascript,mongodb",
  },
  {
    name: "jonathon",
    subjects: "Arrays, javascript",
  },
];

const sortedStudents = studentNames.sort()
//console.log(sortedStudents)

// const filteredStudents=studentNames.filter(
//   //(student)=>{true}//dont do
//    // return student == "Bobby"
// (student)=> { return student==="Bobby"}
  
// )
// const someBpbby = studentNames.some((stud)=>stud=='Bobby')
// console.log('Do we have a Bobby',someBpbby)
// //console.log(filteredStudents)
// const everyBobby=studentNames.every((students)=>students.name==='Bobby')
// console.log('everyone is a bobby',everyBobby)
//studentNames.forEach((student)=>{console.log(student)})
// const justTheNames=teachers.map(teacher =>{
//   return teacher.name
// })
// console.log(justTheNames)]

let nums = [10,20,30]
let totals = nums.reduce((accumulator,currentValue,index,array)=>{
  return accumulator+currentValue


},)
console.log(totals)
let total =0 
for (let i = 0 ; i <nums.length; i++){
  total += nums[i]
}
console.log(total)
total = nums.reduce((tot,currentNum)=> tot+currentNum,0)
console.log(total)