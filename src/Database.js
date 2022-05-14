import styled from 'styled-components'
import { useState, useEffect, useRef} from 'react';
import Navbar from './Navbar';
import Announcement from './Announcement';
import { useReactToPrint } from 'react-to-print';
import Footer from './Footer';

function Database() {

  //Print Pdf
  const compRef = useRef()
  const handlePrint = useReactToPrint({
    content: ()=>compRef.current,
  })

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(()=>{
    fetch(`http://127.0.0.1/php/rfid_final/getdata.php`)
        .then(res => res.json())
        .then(posts => {
            setDataSource(posts)
        })
},[])

  const [value, setValue] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [tableFilter, setTableFilter] = useState([])

  const filterData = (e)=>{
    if(e.target.value !== ""){
      setValue(e.target.value)
      const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())))
      setTableFilter([...filterTable])
    }else{
      setValue(e.target.value)
      setDataSource([...dataSource])
    }
  }

  const Button = styled.span`
    &:hover{
      cursor: pointer;
      opacity: 0.7;
    }
  `

  return (
    <div ref={compRef}>
      <Announcement/>
      <Navbar/>
    <div className='container mt-5'>

      <div class="input-group mb-3">
        <Button><span class="input-group-text" id="basic-addon1" onClick={refreshPage}>RFID</span></Button>
        
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"
        value={value} onChange={filterData}/>

        <Button><span class="input-group-text" id="basic-addon1" onClick={handlePrint}>PRINT</span></Button>
      </div>
      
      <table ref={compRef} class="table table table-success table-striped border-primary table-hover ">
        <thead>
          <tr style={{fontSize:"20px", fontWeight:"300"}}>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Giá trị thực tế</th>
            <th scope="col">Giá trị lý thuyết</th>
            <th scope="col">GAP</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {value.length > 0 ? tableFilter.map((rfid) => {
           let status = "Đủ hàng"
             if(rfid.gap >= 1){
                status = "Thiếu hàng"
             }else if(rfid.gap < 0){
                status = "Dư hàng"
             }
             
            return(
              <tr style={{fontSize:"20px"}}>
                <td>{rfid.item_code}</td>
                <td>{rfid.real_value}</td>
                <td>{rfid.theory_value}</td>
                <td>{rfid.gap}</td>
                <td>{status}</td>
                <td>{rfid.time}</td>
              </tr>
            )
          })
        :
          dataSource.map((rfid) => {
            let status = "Đủ hàng"
             if(rfid.gap >= 1){
                status = "Thiếu hàng"
             }else if(rfid.gap < 0){
                status = "Dư hàng"
             }
            return(
              <tr style={{fontSize:"20px"}}>
                <td>{rfid.item_code}</td>
                <td>{rfid.real_value}</td>
                <td>{rfid.theory_value}</td>
                <td>{rfid.gap}</td>
                <td>{status}</td>
                <td>{rfid.time}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  );
}

export default Database;
