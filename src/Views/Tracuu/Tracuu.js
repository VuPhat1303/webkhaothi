import React, { Component } from 'react';

class Tracuu extends Component {
    render() {
        return (
            <div id="tg-main" className="tg-main tg-haslayout">
          <div className="container">
            <h1 style={{fontSize:'40px'}} >Tra cứu kết quả thi</h1>
            <form className="from" role="form" data-request="SearchForm::onSearch" data-request-update="'SearchForm::result': '#result'" data-request-flash>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Năm</label>
                    <select className="form-control" name="sel_year">
                      <option value={2023}>2023</option>
                      <option value={2022}>2022</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-10">
                  <label>Đợt thi</label>
                  <select  className="form-control " name="sel_exam">
                    <option value={37}> Kết quả kỳ thi đánh giá năng lực tiếng Anh đầu ra K25 - ngày 11-12/3/2023</option>
                    <option value={38}> Kỳ thi đánh giá năng lực tiếng Anh theo khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam - Đợt thi ngày 17-18-19/03/2023</option>
                  </select>
                </div>
              </div>
              <div className="row seach ">
              <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nhập MSSV Hoặc CMND/CCCD" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Tra Cứu</button>
                </div>

              </div>
            </form>
            <hr />
            <div id="result" />
          </div>
        </div>
          
        
        );
    }
}

export default Tracuu;