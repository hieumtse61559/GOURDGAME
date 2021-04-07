import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function DanhSachXucXac({ danhSachXucXac }) {
  const dispatch = useDispatch()


  danhSachXucXac = useSelector(state => state.danhSachXucXac)

  const handleXoc = () => {
    const action = {
      type: "XOC_XUCXAC",
      payload: {}
    }
    dispatch(action);
  }
  return (
    <div className="container" style={{paddingTop: "50%"}}>
      {/* Div này chứa 3 xúc xắc */}
      <div className="d-flex align-items-center justify-content-center">
        {danhSachXucXac.map((item, index) => {
          return (
            <div key={index} className="m-2">
              <img width={"50px"} src={item.hinhAnh} alt="Xúc Xắc" />
            </div>
          )
        })}
      </div>
      {/* Div này chứa nút lắc xúc xắc */}
      <button style={{border: "none", background: "white"}} onClick={handleXoc}>
        <img className="w-100" src="./img-gourdgame/soc.png" alt="" />

      </button>

    </div>

  )
}
