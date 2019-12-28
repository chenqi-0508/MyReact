import React, {useState, useEffect} from 'react'
import qs from 'query-string'
import StudentSearchBar from '../../components/StudentSearchBar'
import StudentTable from '../../components/StudentTable'
import {searchStudents} from '../../services/student'
import Pager from '../../components/common/Pager/Pager'

export default function StudentList(props) {
    //获取地址栏参数
    const query = getQuery(props.location.search);
    //自定义HOOK，查询学生数据
    const resp = useResp(query);
    console.log(resp);
    return (
        <div>
            <StudentSearchBar defaultValue={{
                search: query.search,
                sex: query.sex
            }}
                              searchEvent={(parame) => {
                                  const newParame = {
                                      ...parame,
                                      limit: 10,
                                      page: 1
                                  }
                                  getParame(newParame, props.history)
                              }}
            />
            <StudentTable stu={resp.datas}/>
            <Pager total={resp.cont} size={10} panel={5} current={query.page}
                   onPageChange={(cur) => {
                       const newParame = {
                           ...query,
                           page: cur
                       }
                       getParame(newParame, props.history)
                   }}/>
        </div>
    )
}

//根据查询条件渲染地址栏
function getParame(parame, history) {
    history.push("?" + qs.stringify(parame));
}

//获取地址栏参数
function getQuery(search) {
    //默认参数
    const defaultParame = {
        page: 1,
        limit: 10,
        search: "",
        sex: -1
    }
    const parame = qs.parse(search);
    const newParame = Object.assign({}, defaultParame, parame);
    newParame.page = +newParame.page;
    newParame.limit = +newParame.limit;
    newParame.sex = +newParame.sex;
    return newParame;
}

//自定义HOOK
function useResp({page, limit, search, sex}) {
    const [resp, setResp] = useState({});
    useEffect(() => {
        searchStudents({page, limit, search, sex}).then(r => setResp(r));
    }, [page, limit, search, sex])
    return resp;
}
