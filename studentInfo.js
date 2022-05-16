
const fs = require("fs");

const addInfo = (name, id, comment, degrees) => {
  const student = loadInfo();

  //json ==> read tostring obj

  const uniqNum = student.filter((num) => {
    return num.id === id;
  });

  // =====================================
  


// =============================================
 

  if (uniqNum.length === 0) {
    let sum = 0;
    degrees.forEach((all)=>{
      sum+=all
      
    });
    
    console.log(sum);  
    student.push({
      name,
      id,
      comment,
     degrees:sum,
    });

    saveInfo(student);


    console.log("Done");
  } else {
    console.log("You Can't Enter The Same Number");
  }
 

};
  // =====================================

  /** Load Func */


    const loadInfo = ()=> {
      try {
        const obj = fs.readFileSync("info.json").toString();
        return JSON.parse(obj);
      } catch (e) {
        return [];
      }
    };

/** Save Func */
    const saveInfo = (student) => {
      const json = JSON.stringify(student);
      fs.writeFileSync("info.json", json);
    };

// =========================================================

//** Delete Func  */

const deletInfo = (id) => {
  const student = loadInfo();
  const idToKeep = student.filter((i) => {
    return i.id !== id;
  });

  if (student.length !== idToKeep.length) {
    saveInfo(idToKeep);

    console.log("Removed");
  } else {
    console.log("Not found");
  }
};

// ====================================================

//** Read Func  */
const readInfo = (id) => {
  const student = loadInfo();
  const reads = student.find((re) => {
    return re.id === id;
  });
  if (reads) {
    console.log(reads);
  } else {
    console.log("Not Fount Id To Read");
  }
};

//  ====================================================
/**  List Func */
const listInfo = () => {
  const student = loadInfo();
  student.forEach((re) => {
    console.log(re.name);
  });
};

module.exports = {
  addInfo,
  deletInfo,
  readInfo,
  listInfo,
};
