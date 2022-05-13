import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { Crud } from "./crud";
export function Add() {
  const [onclick, setOnClick] = useState(false) 
  return (
    <div className="px-10 py-12 sm:ml-[100px] w-full">
      <div className="container grid gap-20">
        <header className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-1 text-center">
          <div className="titleHeader grid gap-1">
            <h1 className="text-2xl text-gray-600 font-bold">
              Adicionar Saida e Entrada
            </h1>
            <p className="text-gray-400 text-sm">
              Registros de Entrada e Saida da Empresa
            </p>
          </div>

          <form action="get" className="relative flex gap-10">
            <BiSearchAlt className="absolute top-3 left-3 text-xl text-gray-400 " />
            <input
              type="search"
              placeholder="Search"
              className="searchAdd border-2 rounded-full pl-10 py-2 px-4 text-sm focus:outline-none focus:shadow-none"
            />
             <button
             onMouseDown={()=>{setOnClick(true)}}
             onMouseUp={()=>{setOnClick(false)}}
            className="bg-gray-400 py-2 px-6 rounded-full font-semibold hover:bg-gray-100 hover:text-gray-600 text-gray-100 transition-colors"
            type="button"
          >
            Adicionar
          </button>
          </form>

         
        </header>
        <div className="crudList">
          <Crud clicked={onclick}/>
        </div>
      </div>
    </div>
  );
}
