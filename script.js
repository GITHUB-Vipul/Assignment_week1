const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  function compare(a,b)
  {
    if (a.age > b.age) return 1; 
    if (a.age == b.age) return 0; 
    if (a.age < b.age) return -1;
  }
  // 1. Print Developers
  function printDeveloper() {
    let developerName;
    data.forEach((a)=>{
           if(a.profession==='developer')
           {
            developerName=a.name;
           }
    });
    if(developerName==undefined)
    {
      console.log("developer not present in database");
    }
    else
    console.log(developerName);
  }
  
  // 2. Add Data
  function addData() {
    data.push({
      name:prompt("Enter Name"),
      age:Number(prompt("Enter Age")),
      profession:prompt("Enter profession"),
    });
    alert("Profession has been added successfully");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let flag=false;
     for(let i=0;i<data.length;i++)
     {
      if(data[i].profession==='admin')
      {
        flag=true;
        data.splice(i,1);
      }
     }
     if(flag)
     {
          console.log("All admin profession are removed successfully ");
     }
     else
     {
       console.log("No admin profession is available");
     }
  
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let newArray=[{
      name:"stanley",
      age:24,
      profession:"designer",
    },
    {
     name:"jennifer",
     age:26,
    profession:"AWS engineer",
   }
  ];
    console.log(data.concat(newArray));
  }
  
  // 5. Average Age
  function averageAge() {
    let ageSum=0;
    data.forEach(a=>{
        ageSum+=a.age;
    });
    console.log(ageSum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some((person) => person.age > 25);
    console.log(
      above25
        ? "Yes, there is at least one profile with an age above 25."
        : "No, there is no profile with an age above 25."
    );
      
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let obj={};
    let uniqueProf=[];
    data.forEach(a=>{
      let prof=a.profession;
      
      if(obj[prof]==undefined)
      {
        
        obj.prof=1;
        uniqueProf.push(a.profession);
      }
    });
    console.log("List of unique Profession ",uniqueProf);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort(compare);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
     data.forEach(a=>{
      if(a.name=="john")
      {
        a.profession="manager";
  
      }
     });
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
  let count=0;
  let obj={};
    data.forEach(a=>{
      let prof=a.profession;
      
      if(obj[prof]==undefined)
      {
        count++;
        obj.prof=1;
      
      }
    });
  
    console.log(count);
  }
  