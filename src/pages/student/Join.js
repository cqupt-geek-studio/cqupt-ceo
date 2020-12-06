import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table, Tag, Space,pagination, message, Button } from 'antd';
import actions from '../../redux/actionCreators/creators'
import changePage from '../../until/changePage'
import '../../static/style/style.scss'
// const columns = [
//     {
//       title: 'count',
//       dataIndex: 'count',
//       key: 'count',
//     },
//     {
//       title: 'type',
//       dataIndex: 'type',
//       key: 'type',
//     },
//     {
//       title: 'companyName',
//       dataIndex: 'companyName',
//       key: 'companyName',
//     },
//     {
//       title: 'ceoName',
//       key: 'ceoName',
//       dataIndex: 'ceoName',

//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];

class Join extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalNum:0,
            currentPage:parseInt(sessionStorage.getItem("Page3"))||"1",
            data : [
              ],
         }
         this.onPageChange=this.onPageChange.bind(this)
    }

    UNSAFE_componentWillUpdate(newProps,newState){
      if(newProps!==this.props){
        try{
          const {data} = newProps
          let newdata = data.object
          for (let item in newdata){
            newdata[item].key = item
          }
          this.setState({
            currentPage: parseInt(sessionStorage.getItem("Page3"))||'1',
            data:newdata,
            totalNum:data.totalNumber
          })
        }
        catch{
          console.log("error")
        }
      }
    }
    componentDidMount() {
      //如果要获取数据，最好在这里进行，组件在render之前不会返回数据
      if(localStorage.getItem("userId")){
        this.props.ShowApplication(parseInt(sessionStorage.getItem("Page3"))||'1',localStorage.getItem("userId"))
      }
      
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props || nextState!== this.state) {
        return true
      }
      else {
        return false
      }
    }
    
    onPageChange (page,pageSize) {
        this.props.ShowApplication(page,localStorage.getItem("userId"))
        // let newdata = this.state.data.object
        this.setState({
            currentPage: page,
            // data:newdata
        })
        changePage(3,page)
    }
    render() { 

      const columns = [
        {
            title: 'level',
            dataIndex: 'level',
            key: 'level',
        },
          {
            title: 'userName',
            dataIndex: 'userName',
            key: 'userName',
          },
        {
            title: 'studentId',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'academy',
            dataIndex: 'academy',
            key: 'academy',
        },
        {
            title: 'companyName',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'state',
            key: 'state',
            dataIndex: 'state',
            render: (text) => {
                return(<p>{text}</p>)
            },
        },
      ]
      const pagination = {
        pageSize: 8,
        total:this.state.totalNum,
        onChange:this.onPageChange,
        current:this.state.currentPage,
    }
        return ( 
            <div className="table_div">
            <Table columns={columns} dataSource={this.state.data} pagination={pagination}/>
            </div>
             );
    } 
}
 
const mapDispatchToProps = (dispatch) => {
  //把发送action的方法绑定到当前组件的props
  return {
    ShowApplication: (page,studentId) => {
        dispatch(actions.ShowApplication(page,studentId))
    },

  }
}
const mapStateToProps = state => {
  //把store里的state绑定到当前组件的props
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)