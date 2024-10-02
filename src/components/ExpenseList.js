import { useSelector } from "react-redux";
import { deleteExpense } from "../app/expenseSlice";
import { useDispatch } from "react-redux";


function ExpenseList (){

    const {expenses} =  useSelector((state)=> state.expense) ;
    console.log(expenses)


    return (
        <div>

            {expenses.map((item)=>(
                <ul>
                    <li>{item.expenseItem}</li>
                    <li>{item.amount}</li>
                </ul>
            ))}

            

        </div>
    )
}

export  default ExpenseList ;