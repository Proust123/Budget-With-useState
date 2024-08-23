// import React, { useState } from 'react';

// const Section = () => {
//   const [INPvalue, setINPvalue] = useState(0);
//   const [budget, setBudget] = useState(0);
//   const [arr, setarr] = useState([]);

//   const takeValue = (e) => {
//     setINPvalue(e.target.value);
//   };

//   const addBudget = () => {
//     setBudget(INPvalue)
//   };

//   const [grocery, setGrocery] = useState('')
//   const [amount, setAmount] = useState(0)

//   const itemName = (e) => {
//     setGrocery(e.target.value)
//   }

//   const itemPrice = (e) => {
//     setAmount(e.target.value)
//   }

//   const calculate = () => {
    
//    const obj =  {
//         grocery,
//         amount
//     }

//     setarr([...arr, obj])

//   };

//   console.log(arr);

//   const total = arr.reduce((acc, curr) => {
//     return +acc + +curr.amount
//   }, 0) 

//   return (
//     <>
//       <div className='flex justify-center items-center'>
//         <div className='border border-blue-500 h-[400px] w-[900px] mt-16 flex flex-col'>
//           <div className='upper h-[20%] border border-black flex justify-center items-center'>
//             <input
//               type='number'
//               value={INPvalue}
//               onChange={takeValue}
//               className='h-10 border border-black'
//               placeholder='0'
//             />
//             <button className='border border-black ml-5' onClick={addBudget}>
//               Enter
//             </button>
//           </div>
//           <div className='lower h-[80%] border border-black flex'>
//             <div className='left w-[50%] border border-black flex flex-col justify-evenly'>
//               <div className='form-group flex flex-col'>
//                 <label for='name'>Name</label>
//                 <input
//                   type='text'
//                   className='form-control h-12 border border-black'
//                   id='name'
//                   placeholder='Ex: Groceries'
//                   onChange = {itemName}
//                 />
//               </div>
//               <div className='form-group flex flex-col'>
//                 <label for='amount'>Amount</label>
//                 <input
//                   type='number'
//                   className='form-control h-12 border border-black'
//                   id='amount'
//                   placeholder='Ex: 250'
//                   onChange = {itemPrice}
//                 />
//               </div>
//               <button
//                 type='submit'
//                 className='btn btn-default border border-black'
//                 id='add-btn'
//                 onClick={calculate}
//               >
//                 Add
//               </button>
//             </div>
//             <div className='rite w-[50%] border border-black'>
//               <div>
//                 <h4 className='bg-orange-700 h-12 text-white '>
//                   Budget: <span id='budget'>{budget}</span> Rs
//                 </h4>
//                 <h4 className='bg-green-600 h-12 text-white'>
//                   Left: <span id='left'>{budget - total}</span> Rs
//                 </h4>
//               </div>
//               <h4>My Expences:</h4>
//               <ul className='flex justify-between flex-col' id='list'>
//                 {arr.map((item, idx) => {
//                     return (
//                     <>
//                         <li className='flex justify-between'>
//                             <p>{item.grocery}</p><p>{item.amount}</p>
//                         </li>
//                     </>
//                     )
//                 })}
//               <h4>Total : {total}</h4>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section;


import React, { useState } from 'react';

const Section = () => {
  const [INPvalue, setINPvalue] = useState(0);
  const [budget, setBudget] = useState(0);
  const [arr, setArr] = useState([]);
  const [grocery, setGrocery] = useState('');
  const [amount, setAmount] = useState(0);
  const [warningMessage, setWarningMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const takeValue = (e) => {
    setINPvalue(e.target.value);
  };

  const addBudget = () => {
    setBudget(INPvalue);
    upper.style.display = 'none'
  };

  const itemName = (e) => {
    setGrocery(e.target.value);
  };

  const itemPrice = (e) => {
    setAmount(e.target.value);
  };

  const calculate = () => {
    const obj = {
      grocery,
      amount
    };

    setArr([...arr, obj]);

    // Show warnings based on budget usage
    const newTotal = arr.reduce((acc, curr) => +acc + +curr.amount, 0) + +amount;

    if (newTotal >= budget) {
      setWarningMessage('You have used all of your budget!');
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    } else if (newTotal >= budget / 2) {
      setWarningMessage('You have used half of your budget!');
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    }
  };

  const total = arr.reduce((acc, curr) => +acc + +curr.amount, 0);

  const budgetAdded = budget > 0;

  // console.log(arr);
  

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='h-[400px] w-[900px] mt-16 flex flex-col'>
          <div className={`upper h-[20%] border border-black flex justify-center items-center ${budget ? 'hidden' :'block'}`}>
            <input
              type='number'
              value={INPvalue}
              onChange={takeValue}
              className='h-10 border border-black'
              placeholder='0'
            />
            <button className='border border-black ml-5' onClick={addBudget}>
              Enter
            </button>
          </div>
          <div className='lower h-[80%] border border-black flex'>
            <div className='left w-[50%] border border-black flex flex-col justify-evenly'>
              <div className='form-group flex flex-col'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control h-12 border border-black'
                  id='name'
                  placeholder='Ex: Groceries'
                  onChange={itemName}
                  disabled={!budgetAdded}
                  // disabled={budget === 0} //agar budgetAdded variable nai use krna tou 
                />
              </div>
              <div className='form-group flex flex-col'>
                <label htmlFor='amount'>Amount</label>
                <input
                  type='number'
                  className='form-control h-12 border border-black'
                  id='amount'
                  placeholder='Ex: 250'
                  onChange={itemPrice}
                  disabled={!budgetAdded}
                  // disabled={budget === 0} //agar budgetAdded variable nai use krna tou 
                />
              </div>
              <button
                type='submit'
                className='btn btn-default border border-black'
                id='add-btn'
                onClick={calculate}
                disabled={!budgetAdded}
                  // disabled={budget === 0} //agar budgetAdded variable nai use krna tou 
              >
                Add
              </button>
            </div>
            <div className='rite w-[50%] border border-black'>
              <div>
                <h4 className='bg-orange-700 h-12 text-white '>
                  Budget: <span id='budget'>{budget}</span> Rs
                </h4>
                <h4 className='bg-green-600 h-12 text-white'>
                  Left: <span id='left'>{budget - total}</span> Rs
                </h4>
              </div>
              <h4>My Expenses:</h4>
              <ul className='flex justify-between flex-col' id='list'>
                {arr.map((item, idx) => {
                  return (
                    <li className='flex justify-between' key={idx}>
                      <p>{item.grocery}</p><p>{item.amount}</p>
                    </li>
                  );
                })}
              </ul>
              <h4>Total: {total}</h4>
            </div>
          </div>
          {showWarning && <div className="warning-message">{warningMessage}</div>}
        </div>
      </div>
    </>
  );
};

export default Section;
