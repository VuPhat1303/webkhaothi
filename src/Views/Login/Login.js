import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
  <div id="page" className="container-fluid mt-0">
    <div id="page-content" className="row">
      <div id="region-main-box" className="col-12">
        <section id="region-main" className="col-12">
          <span className="notifications" id="user-notifications" />
          <div role="main">
            <span id="maincontent" />
            <div className="my-1 my-sm-5" />
            <div className="row justify-content-center">
              <div className="col-xl-6 col-sm-11 push-sm-1">
                <div className="card">
                  <div className="card-block">
                    <h2 style={{backgroundColor: 'rgb(206 91 91)', color: 'white'}} className="card-header text-center">
                      Khảo Thí - Văn Lang University
                    </h2>
                    <div className="card-body">
                      <div className="row justify-content-md-center">
                        <div className="col-md-5">
                          <form className="mt-3" action method="post" id="login">
                            <input id="anchor" type="hidden" name="anchor" defaultValue />
                            <input type="hidden" name="logintoken" defaultValue="RhpFGEbsqKBAanmBDMo5dTL623fNyWXR" />
                            <div className="form-group">
                              <label htmlFor="username" className="sr-only">
                                Username
                              </label>
                              <input type="text" name="username" id="username" className="form-control" defaultValue placeholder="Username" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password" className="sr-only">Password</label>
                              <input type="password" name="password" id="password" defaultValue className="form-control" placeholder="Password" />
                            </div>
                            <div className="login-btn">
                              <button style={{cursor: 'pointer', width: '80px', height: '33px', backgroundColor: 'rgb(206 91 91)', border: 'none', borderRadius: '0px'}} type="submit" className="  btn btn-primary btn-block mt-3" id="loginbtn">
                                Log in
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-5">
                          <div className="forgetpass mt-3">
                            <p>
                              <a href>Forgotten your username or password?</a>
                            </p>
                          </div>
                          <div className="mt-3">
                            Cookies must be enabled in your browser
                            <a className="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>This site uses one session cookie, usually called MoodleSession. You must allow this cookie in your browser to provide continuity and to remain logged in when browsing the site. When you log out or close the browser, this cookie is destroyed (in your browser and on the server).</p></div> " data-html="true" tabIndex={0} data-trigger="focus">
                              <i className="icon fa fa-question-circle text-info fa-fw" title="Help with Cookies must be enabled in your browser" aria-label="Help with Cookies must be enabled in your browser" />
                            </a>
                          </div>
                          <h6 className="mt-2">
                            Log in using your account on:
                          </h6>
                          <div className="potentialidplist">
                            <div className="potentialidp">
                              <a style={{backgroundColor: 'rgb(206 91 91)', border: 'none'}} href title className="btn btn-secondary btn-block">
                                <img src="https://elearning.vanlanguni.edu.vn/theme/image.php/klass/auth_oidc/1679076240/0/customicon" alt="" width={240} height={60} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">
                      ×
                    </button>
                    <h4 className="modal-title">Thông tin</h4>
                  </div>
                  <div className="modal-body">
                    <p align="center">
                      Từ Học kỳ 1 - Năm học 2020 2021, Sinh viên đăng nhập
                      Elearning (Học trực tuyến) bằng tài khoản email trường
                      cấp.<br />Click vào icon Office365 bên dưới để đăng
                      nhập.<br />
                      <a href>
                        <img src alt="" width={240} height={60} />
                      </a>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-xl-6 col-sm-11 push-sm-1">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h2>Is this your first time here?</h2>
                    </div>
                    <div>
                      Xin vui lòng sinh viên đăng nhập hệ
                      thống Khảo Thí bằng tài khoản email.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div> <br /> </div>
</div>

        );
    }
}

export default Login;