import React, {useEffect, useState} from "react";

import { AiOutlineEye } from "react-icons/ai";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

const registerListArr = [
  {
    name: "Roupas compra",
    valor: "800,00",
    status: "saida",
    data: "24/02/2022",
  },
  {
    name: "Celular Venda",
    valor: "400,00",
    status: "entrada",
    data: "22/07/2022",
  },
  {
    name: "Roupas Venda",
    valor: "300,00",
    status: "entrada",
    data: "24/04/2022",
  },
];

export function Crud(props) {
  const addItem = () => {
    registerListArr.unshift({
      'name': "Madddddddddddddddddddddddddd adad   adad ad ada ad ad adqadarca",
      'valor': "200,00",
      'status': "saida",
      'data': "01/01/2000",
    })


  }
 const [itemDel, setItemDel] = useState(0);
  const deleteItem = (index) =>{
    registerListArr.splice(index, 1)
    setItemDel(itemDel + 1)
    console.log(registerListArr)
    console.log(itemDel)
  }

  useEffect(()=>{
  
    renderList()
  },[itemDel])
 
  useEffect(()=>{
    props.clicked ? addItem() : null
    renderList()
  })

  const renderList = () =>{
    return registerListArr.map((item, index) => (
      <div className="registerItem w-full flex gap-10 border-b-2 pb-5">
        <div className="idName flex gap-14 w-full overflow-hidden max-w-[360px] whitespace-nowrap text-ellipsis">
          <span className="font-bold">{index}</span>
          <span>{item.name}</span>
        </div>
        <div className="vlSttDate flex w-full gap-20 overflow-hidden max-w-sm whitespace-nowrap">
          <span className="font-bold">{item.valor}</span>
          <span  className={` min-w-[80px] flex justify-center items-center rounded-full font-semibold uppercase text-xs ${item.status === 'saida' ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>{item.status}</span>
          <span>{item.data}</span>
        </div>
        <div className="optionsBtns flex gap-2">
          <button  className="visualition bg-green-400 py-2 px-2 rounded-full font-semibold hover:bg-green-100 hover:text-green-600 text-green-100 transition-colors">
            <AiOutlineEye />
          </button>
          <button  className="visualition bg-blue-400 py-2 px-2 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-600 text-blue-100 transition-colors">
            <BsPencilFill />
          </button>
          <button  onMouseDown={(e)=> {deleteItem(index)}} onMouseUp={()=> {renderList()}} className="visualition bg-red-400 py-2 px-2 rounded-full font-semibold hover:bg-red-100 hover:text-red-600 text-red-100 transition-colors">
            <BsFillTrashFill className=" disabled"/>
          </button>
        </div>
      </div>
    ))
  }
  return (
    <div className="container">
      <div className="register grid gap-14">
        <header className="flex gap-10 w-full relative">
          <div className="absolute right-[100px] flex gap-3">
            <label htmlFor="filter" className="font-bold">
              Filtro
            </label>
            <select name="filter" className="" id="filter">
              <option value="Entradas">Entrada</option>
              <option value="Entradas">Saida</option>
            </select>
          </div>

          <div className="headerLeft flex gap-14 w-full  max-w-[360px]">
            <span className="font-bold text-gray-500">ID</span>
            <span className="font-bold text-gray-500">nome</span>
          </div>
          <div className="headerRight flex w-full gap-24">
            <span className="font-bold text-gray-500">Valor</span>
            <span className="font-bold text-gray-500">Status</span>
            <span className="font-bold text-gray-500">Data</span>
          </div>
          <div className="headerOptions flex w-full ">
            <span className="font-bold text-gray-500">Opções</span>
          </div>
        </header>
        <div className="registerList grid gap-8">
          {renderList()}
        </div>
      </div>
    </div>
  );
}
