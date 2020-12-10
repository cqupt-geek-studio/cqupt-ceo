import {takeEvery, select, throttle, call, put, takeLatest} from 'redux-saga/effects'
import actions from '../actionCreators/creators'
import LoginApi from '../../until/api/LoginApi.js'
import StudentApi from '../../until/api/StudentApi'
import {getMember, setPosition} from "../../until/api/ceo";
import baseurl from '../../until/BaseUrl'
function setLocalStorage(config) {
  Reflect.ownKeys(config).forEach(key => {
    localStorage.setItem(key, config[key])
  })
}

export default function* defSaga() {
  yield throttle(2000, 'login', function* () {

    const action = yield select();

    const res = yield call(LoginApi.Login, action.payload)
    console.log(res)

    if (res.status === 200 && res.data.flag)
    // if (res.status === 200 )
    {      
      
      yield put(actions.Login_Success(res.message, res.data))

      // setLocalStorage({
      //   name: res.data.data.userName,
      //   userId: res.data.data.userId,
      //   type: action.chooseType
      // })

      if(action.payload.studentId!==undefined){

        setLocalStorage({
          userId: action.payload.studentId,
          type: res.data.data.type
        })
      }
      else{
        setLocalStorage({
          userId: action.payload.teacherId,
          type: res.data.data.type
        })
      }
      setLocalStorage({
        userName:res.data.data.userName,
        ceo:res.data.error,
        class:res.data.teachclass,
      })
      if(localStorage.getItem("type")==="student" && localStorage.getItem("ceo") !== '1'){
        window.location="/Student/AllCompanies/ChosenClasses"
      }
      sessionStorage.clear()
      
    }
    else {
      yield put(actions.Login_Fail(res.data));
    }

  })
  yield takeEvery('Login_Check', function* () {

    const action = yield select()

    const res = yield call(LoginApi.KeepLogin, localStorage.getItem("userId"))
    // if (res.status == 200 && res.data.flag)
    if (res.status == 200 && res.data.flag)
    //flag不对，向后端反映
     {
      yield put(actions.Login_Check_OK())
      // yield put(actions.getAllCompanies(localStorage.getItem("userId"),parseInt(sessionStorage.getItem("Page1"))||"1"))
    }
    else {
      yield put(actions.Login_Check_NO())

      console.log('clear localstorage')

      localStorage.clear()
      // //清除本地数据
      // yield put(actions.getAllCompanies(null,null))
    }
  })

  yield takeEvery('Exit', function* () {
    const action = yield select()
    const res = yield call(LoginApi.Exit, localStorage.getItem("userId"))
    // if (res.status === 200 && res.data.flag)
    if (res.status === 200)
    {
      console.log('clear localstorage')
      yield put(actions.Exit_OK())
      localStorage.clear()
      window.location="/Student/AllCompanies/ChosenClasses"
      sessionStorage.clear()
      // location.reload()
      //不再登录后清除本地数据
      // yield put(actions.getAllCompanies(null,null))
      // yield put(actions.ShowCeo(null,null))
    } else {
      alert('退出失败')
      yield put(actions.Exit_NO())
    }
  })

  yield takeEvery('getAllCompanies', function* () {
    const action = yield select()
    const res = yield call(StudentApi.ShowAllCompany, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.getAllCompanies_OK(res.data))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.getAllCompanies_NO())
    }

  })
  yield takeEvery('VoteForCompany', function* () {
    const action = yield select()
    const res = yield call(StudentApi.VoteCompany, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.VoteForCompany_OK(res.data.message))
      yield put(actions.getAllCompanies(localStorage.getItem("userId"),parseInt(sessionStorage.getItem("Page1"))||"1"))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.VoteForCompany_NO(res.data.message))
    }
  })
  yield takeEvery('ShowCeo', function* () {
    const action = yield select()
    const res = yield call(StudentApi.ShowCeo, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.ShowCeo_OK(res.data))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.ShowCeo_NO())
    }
  })
  yield takeEvery('VoteForCeo', function* () {
    const action = yield select()
    const res = yield call(StudentApi.VoteCeo, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.VoteForCeo_OK(res.data.message))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.VoteForCeo_NO(res.data.message))
    }
  })
  yield takeEvery('RunCeo', function* () {
    const action = yield select()
    const res = yield call(StudentApi.RunCeo, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.RunCeo_OK(res.data.message))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.RunCeo_NO(res.data.message))
    }
  })
  yield takeEvery('ShowApplication', function* () {
    const action = yield select()
    const res = yield call(StudentApi.ShowApplication, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.ShowApplication_OK(res.data))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.ShowApplication_NO())
    }
  })
  yield takeEvery('AddApplication', function* () {
    const action = yield select()
    const res = yield call(StudentApi.AddApplication, action.payload)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.AddApplication_OK(res.data.message))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.AddApplication_NO(res.data.message))
    }
  })
  yield takeEvery('ShowFlie', function* () {
    const action = yield select()
    const res = yield call(StudentApi.ShowFile, action.payload)
    console.log(res)
    if (res.status === 200 ) {

      yield put(actions.ShowFile_OK(JSON.parse(res.data)))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.ShowFile_NO())
    }
  })
  yield takeEvery('UploadFile', function* () {
    const action = yield select()
    const res = yield call(StudentApi.UploadFile,action.payload)
    console.log(res)
    if (res.status === 200 && res.data.flag) {
      yield put(actions.UploadFile_OK(res.data))
      //把获取到的数据发送到state，展示在页面上
    }
    else{
      yield put(actions.UploadFile_NO())
    }
  })
  yield takeEvery('DownloadFile', function* () {
    const action = yield select()
    const res = yield call(StudentApi.DownloadFile,action.payload)
    console.log(res)
    if (res.status === 200) {
      yield put(actions.DownloadFile_OK(res.data.message))
      let download = document.createElement('a')
      download.href = "http://120.79.207.60:8089/upload/download?id="+action.payload.id
      download.click()
    }
    else{
      yield put(actions.DownloadFile_NO(res.data.message))
    }
  })
  /* CEO */
  // yield takeLatest('CEO_MEMBER', function* ceoSetMember(action) {
  //   action.cb && action.cb()
  //   const res = yield getMember(action.payload)
  //   action.cb && action.cb()
  //   yield put({
  //     type: 'CEO_SET_MEMBER',
  //     payload: {
  //       member: res.data
  //     }
  //   })
  // })
}
