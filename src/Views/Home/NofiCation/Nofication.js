import React, { Component } from 'react';
import '../../../acesst/css/style.css';
class Nofication extends Component {
    render() {
        return (
            <div className="news ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 news-info">
                            <div className="module  k2-mega-new-main thong-bao">
                            <a style={{textDecoration:'none' }} href="#" title="Thông báo">
                                <h3  className="modtitle">THÔNG BÁO MỚI NHẤT</h3>
                            </a>
                            <div className="modcontent clearfix">
                                <div className="sj-meganew ">
                                <div className="meganew-wrap  meganew-rps01-1 meganew-rps02-1 meganew-rps03-1 meganew-rps04-1">
                                    <div className="meganew-box">
                                    <div className="meganew-box-inner">
                                        <div className="meganew-items theme1 ">
                                        <div className="item-first">
                                            <div className="item-image">
                                            <a  href="#" title="Curabitur luctus tortor non quam">
                                                <img src alt="" />
                                            </a>
                                            <div className="over-image" />
                                            </div>
                                            <div className="content-main">
                                            <div  className="item-title"><a  href="#" title>Danh sách hình thức thi KTHP Học kỳ 1 năm 2023</a> </div>
                                            <a  href="#" className="xem_them">Đọc thêm</a>
                                            </div>
                                            {/* end content-main*/}
                                        </div>
                                        <div className="item-other col-xs-12">
                                            <ul className="otehr-link ">
                                            
                                            <li className="row "><a href="#">-   Thông báo xét miễn thi môn học cho sinh viên hệ chính quy, VLVH Học kỳ 1 năm 2023</a> </li>
                                            <li className="row "><a href="#">-   Thông báo tổ chức thi lại môn Chủ nghĩa XHKH thuộc HK3 năm 2022 đối với khóa 21D</a> </li>
                                            <li className="row "><a href="#">-   Kết quả miễn thi môn học cho sinh viên hình thức Chính quy, Vừa làm vừa học học kỳ 3 năm 2022</a> </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      {/* end news-info */}
      
           
                <div className="col-lg-4 col-sm-12 form-info">
                        <div className="module  k2-mega-new-main thong-bao ">
                            <a href="/vi/bieu-mau-mau-don">
                                <h3 className="modtitle">Biểu mẫu - Mẫu đơn</h3>
                            </a>
                            <div className="su-kien">
                                <ul>
                                <li className="icon-doc icons"><a href="#" title>Các loại biểu mẫu dành cho Sinh viên</a></li>
                                <li className="icon-doc icons"><a href="#" title>Biểu mẫu áp dụng trong kiểm tra, đánh giá kết quả học tập</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
          
      {/* end form-info */}
    </div>
    {/* /.row */}
            </div>
  {/* end container */}
</div>

            
        );
    }
}

export default Nofication;