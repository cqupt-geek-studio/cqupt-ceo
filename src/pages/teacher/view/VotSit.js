import React, { Component } from 'react'
import { Table, Space,Input,Button, Pagination } from 'antd'; 
import { AudioOutlined } from '@ant-design/icons';
// import '../style/VoSit.css';
import {showCeo, runCeo, closeCeo,decideCeo,deleteCeo} from '../../../until/api/teacherApi';

//table的静态内容


class VotSit extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
          btuValue: '开启投票',
          isVote: true,
          startCeo:'任命为CEO',
          isCeo:false,
          teachclass:'',
          pagination:{
            showSizeChanger:false,
            defaultCurrent:1,
            current: 1,
            pageSize: 7,
            total:"",
            hideOnSinglePage: true,
            onChange: (page, pageSize) => {
              this.state.pagination.current = page
            }
          },
          columns:[
            {
              title: '姓名',
              dataIndex: 'userName',
              key: 'userName',
              align:'center'
            },
            {        
              title: '学号',
              dataIndex: 'studentId',
              key: 'studentId',
              align:'center'
            },
            {
              title: '教学班',
              dataIndex: 'teachclass',
              key: 'teachclass',
              align:'center'
            },
            {
              title: '票数',
              dataIndex: 'count',
              key: 'count',
              align:'center'
            },
            {
              title: '操作',
              key: 'action',
              align:'center',
              render: (text, record) => (
                <Space size="middle">
                  <Button type="primary" ghost onClick={() => {this.handleDecideCeo(text,record)}}>{record.action}</Button>
                </Space>
              ),
            },
          ],
          dataSource:[
            // {
            //   key: '1',
            //   studentid: '胡彦斌',
            //   name: 32,
            //   teachclass: '西湖区湖底公园1号',
            //   action:'任命为CEO'
            // },
            // {
            //   key: '2',
            //   studentid: '胡彦祖',
            //   name: 42,
            //   teachclass: '西湖区湖底公园1号',
            //   action:'任命为CEO'
            // },{
            //   key: '3',
            //   studentid: '胡彦斌',
            //   name: 2,
            //   teachclass: '西湖区湖底公园1号',
            //   action:'任命为CEO'
            // },
            // {
            //   key: '4',
            //   studentid: '胡彦祖',
            //   name: 42,
            //   teachclass: '西湖区湖底公园1号',
            //   action:'任命为CEO'
            // },
          ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDecideCeo = this.handleDecideCeo.bind(this);
        this.addAction = this.addAction.bind(this);
    }
 
    render() { 
        return (
            <div>
                <span className="title">投票情况</span>
                <span>
                  <Button 
                    type="primary" 
                    size="middle"
                    style={{marginLeft:"20px"}}
                    onClick={this.handleChange}
                  >{this.state.btuValue}</Button>
                </span>
                
                <Table 
                  dataSource={this.state.dataSource} 
                  columns={this.state.columns} 
                  style={{marginTop:"10px"}}
                  pagination={this.state.pagination}
                />;
            </div>
        );
    }
    componentWillMount(){
      let teachClass = localStorage.getItem('teachclass');
      this.setState({
        teachclass:teachClass
      })
    }
    componentDidMount () {
      
      //展示竞选ceo的同学以及其的票数
      showCeo(this.state.pagination.current,this.state.teachclass).then(
        (res) => {
          this.setState({
            dataSource : res.data.data.object
          })
          this.addAction(this.state.dataSource);
          console.log(this.state.dataSource);
        },
        (err) => {
          console.log(err);
        }
      )

    }

    //开启投票\关闭投票
    handleChange = () => {
      if(this.state.isVote){
        this.setState({
           btuValue:"关闭投票",
           isVote:!this.state.isVote
        })
        runCeo("SJ00201A2031780003").then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )
      }else{
        this.setState({
          btuValue:"开启投票",
          isVote:!this.state.isVote
        })
        closeCeo("SJ00201A2031780003").then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
        )
      }
    }
    
    //任命为CEO
    handleDecideCeo = (text,record) => {
      if(record.action == "任命为CEO"){
        record.action = "取消CEO"
        this.setState({
          dataSource: this.state.dataSource
        })
        decideCeo(record.studentId).then(
          (res) => {
            console.log(res);
          },(err) => {
            console.log(err);
          }
        )
      }else{
        record.action = "任命为CEO";
        this.setState({
          dataSource: this.state.dataSource
        })
        deleteCeo(record.studentId).then(
          (res) => {
            console.log(res);
          },(err) => {
            console.log(err);
          }
        )
      }
      console.log(record);
    }

    //为dataSource增加action
    addAction = (dataSource) => {
      let action;
      for(let i = 0;i<dataSource.length;i++){
        if(dataSource[i].state == 0){
          action = '任命为CEO';
        }
        else if(dataSource[i].state == 1){
          action = '取消为CEO';
        }
        dataSource[i].action = action;
        
      }
      this.setState({
          dataSource:dataSource
        })
    }
}
export default VotSit;