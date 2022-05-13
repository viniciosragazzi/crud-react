 <div className="registerItem w-full flex gap-10 border-b-2 pb-5">
        <div className="idName flex gap-14 w-full overflow-hidden max-w-[360px] whitespace-nowrap text-ellipsis">
          <span className="font-bold">{index}</span>
          <span>{item.name}</span>
        </div>
        <div className="vlSttDate flex w-full gap-24 overflow-hidden max-w-sm whitespace-nowrap">
          <span className="font-bold">{item.valor}</span>
          <span>{item.status}</span>
          <span>{item.data}</span>
        </div>
        <div className="optionsBtns flex gap-2">
          <button item={index} className="visualition bg-green-400 py-2 px-2 rounded-full font-semibold hover:bg-green-100 hover:text-green-600 text-green-100 transition-colors">
            <AiOutlineEye />
          </button>
          <button item={index} className="visualition bg-blue-400 py-2 px-2 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-600 text-blue-100 transition-colors">
            <BsPencilFill />
          </button>
          <button item={index} className="visualition bg-red-400 py-2 px-2 rounded-full font-semibold hover:bg-red-100 hover:text-red-600 text-red-100 transition-colors">
            <BsFillTrashFill />
          </button>
        </div>
      </div>