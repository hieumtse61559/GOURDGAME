const gourdGameState = {
  danhSachDatCuoc: [
    { ten: "bau", hinhAnh: "./img-gourdgame/bau.png", soCuoc: 0 },
    { ten: "ca", hinhAnh: "./img-gourdgame/ca.png", soCuoc: 0 },
    { ten: "cua", hinhAnh: "./img-gourdgame/cua.png", soCuoc: 0 },
    { ten: "ga", hinhAnh: "./img-gourdgame/ga.png", soCuoc: 0 },
    { ten: "nai", hinhAnh: "./img-gourdgame/nai.png", soCuoc: 0 },
    { ten: "tom", hinhAnh: "./img-gourdgame/tom.png", soCuoc: 0 },
  ],
  tienThuong: 500,
  danhSachXucXac: [
    { ten: "bau", hinhAnh: "./img-gourdgame/bau.png" },
    { ten: "bau", hinhAnh: "./img-gourdgame/bau.png" },
    { ten: "bau", hinhAnh: "./img-gourdgame/bau.png" },
  ],
}

export const GourdReducer = (state = gourdGameState, action) => {
  switch (action.type) {
    case "TANG_SOCUOC": {
      const index = action.payload.index;
      const newDanhSachDatCuoc = [...state.danhSachDatCuoc];
      newDanhSachDatCuoc[index].soCuoc += 1;
      const newTienThuong = state.tienThuong - 100;

      return { ...state, danhSachDatCuoc: newDanhSachDatCuoc, tienThuong: newTienThuong }
    }

    case "GIAM_SOCUOC": {
      const index = action.payload.index;
      const newDanhSachDatCuoc = [...state.danhSachDatCuoc];
      newDanhSachDatCuoc[index].soCuoc -= 1;
      const newTienThuong = state.tienThuong + 100;

      return { ...state, danhSachDatCuoc: newDanhSachDatCuoc, tienThuong: newTienThuong }
    }

    case "XOC_XUCXAC": {

      // Tạo ngẫu nhiên ra một mảng Xúc Xắc mới
      const newDanhSachXucXac = [];
      for (let i = 0; i < 3; i++) {
        newDanhSachXucXac.push(state.danhSachDatCuoc[Math.floor(Math.random() * 5)])
      }

      // Xử lí tiền thưởng khi trúng cược
      // Lấy ra danh sách đã đặt cược
      const danhSachDaCuoc = state.danhSachDatCuoc.filter( item => item.soCuoc);

      let tongDiem = 0;
      // Duyệt qua mảng danhSachDaCuoc để trải lại tiền cược nếu trúng
      danhSachDaCuoc.forEach(item => {
        const found = newDanhSachXucXac.find(newDanhSachXucXac => newDanhSachXucXac.ten === item.ten);
        //Tìm thấy xúc xắc trùng với item trong danhSachDatCuoc
        if(found){
          tongDiem += item.soCuoc;
        }
      })


      // Duyệt qua mảng Xúc Xắc để tính tiền thắng cược
      newDanhSachXucXac.forEach(item =>{
        const found = danhSachDaCuoc.find(cuoc => cuoc.ten === item.ten);
        if(found) {
          tongDiem += found.soCuoc;
        }
      })


      // Reset số cược về 0
      const resetDanhSachDatCuoc = state.danhSachDatCuoc.map(item => {
        return {...item, soCuoc: 0}
      })

      const newTienThuong = state.tienThuong + tongDiem*100;



      return {...state, danhSachXucXac: newDanhSachXucXac, danhSachDatCuoc: resetDanhSachDatCuoc, tienThuong: newTienThuong}
    }
    default:
      return { ...state }
  }
}