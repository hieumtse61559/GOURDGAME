import React from 'react'
import DanhSachDatCuoc from './DanhSachDatCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import { useSelector } from 'react-redux'
// import { v4  } from 'uuid';



export default function GourdGame() {

  const {tienThuong, danhSachDatCuoc, danhSachXucXac} = useSelector(state => state)
  
  return (
    <div className="container">
      <div>
        <img src="./img-gourdgame/Logo.png" width="100%" alt="Logo" />
        <h3 className="bg-success text-warning">Tiền thưởng : {tienThuong}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <DanhSachDatCuoc danhSachDatCuoc={danhSachDatCuoc}/>
          </div>
          <div className="col-4">
            <DanhSachXucXac danhSachXucXac={danhSachXucXac}/>
          </div>
        </div>
      </div>

    </div>
  )
}
