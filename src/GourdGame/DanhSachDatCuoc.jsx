import React from 'react'
import { Button } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux'


export default function DanhSachDatCuoc({ danhSachDatCuoc }) {
  console.log(danhSachDatCuoc)
  const tienThuong = useSelector(state => state.tienThuong)
  const dispatch = useDispatch();
  const handleIncrease = (index) => {
    const action = {
      type: "TANG_SOCUOC",
      payload : {
        index: index
      }
    }
    dispatch(action)
  }

  const handleDecrease = (index) => {
    const action = {
      type: "GIAM_SOCUOC",
      payload : {
        index: index
      }
    }
    dispatch(action)
  }

  return (
    <div className="row mt-4">
      {danhSachDatCuoc.map((item, index) => {
        return (
          <div key={index} className="mr-3 mb-3">

            <img className="w-100" src={item.hinhAnh} alt="hình ảnh" />
            <div className="bg-success ">
              <div className="d-flex justify-content-between align-items-center p-1">
                <span>Điểm cược:</span>
                <span>
                  <Button disabled={!item.soCuoc} color="warning" onClick={() => handleDecrease(index)} >-</Button>
                  <span className="mx-1">{item.soCuoc}</span>
                  <Button disabled={!tienThuong} color="warning" onClick={() => handleIncrease(index)}>+</Button>
                </span>
              </div>


            </div>


          </div>
        )
      }

      )}
    </div>
  )
}
