// import React, { useState } from 'react'

// const TodoLists = () => {
//     const [text, setText] = useState("")
//     const [data, setData] = useState([])
    
//     function handleSubmit(event){
//         event.preventDefault()
//         let date = new Date()
//         let newTodos = {
//             id: uuid4v(),
//             text,
//             time: `${date.getHours()}:${date.getMinutes()}`
//         }
//         setData([...data, newTodos])
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit} action="">
//             <input type="text" value={text} onChange={(e) => {e.target.value}}/>
//         </form>
//         <div>
//             {
//                 data?.map((item) => (
//                     <div>
//                         <b>{item.text}</b>
//                         <span>{item.time}</span>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default TodoLists




import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';  // FaTrash ikonasini import qilish

const TodoLists = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    
    function handleSubmit(event){
        event.preventDefault();
        if (!text){
            return null;
        }
        let date = new Date();
        let newTodos = {
            id: new Date().getTime(),  // Yangi ID uchun hozirgi vaqtni ishlatdim (agar kerak bo'lsa UUID dan foydalanishingiz mumkin)
            text,
            time: `${date.getHours()}:${date.getMinutes()}`
        };
        setData([...data, newTodos]);
        setText("");  // Submitdan keyin inputni tozalash
    }

    function handleDelete(id){
        setData(data.filter(item => item.id !== id)); // delete funksiyasi
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='koof' 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} // State yangilash
                />
                {
                    text ? <button>Create</button> : <></> // Text bo'lsa tugma ko'rsatiladi
                }
            </form>
            <div>
                {data?.map((item) => (
                    <div className='fook' key={item.id}>  {/* Har bir elementga key qo'shish */}
                        <b>{item.text}</b>
                        <span>{item.time}</span>
                        <button onClick={() => handleDelete(item.id)}><FaTrash/></button> {/* Delete tugmasi */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoLists;
