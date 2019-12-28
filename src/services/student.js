const appkey = 'demo13_1545210570249';

/**
 * 按页查询学生信息
 * @param {*} page
 * @param {*} limit
 */
export async function getStudentInfo(page, limit) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data)
}

/**
 * 获取所有学生信息
 */
export async function getAllStudents() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data)
}

/**
 * 按关键字查询学生信息
 * @param {*} param0
 */
export async function searchStudents(
    {page = 1, limit = 10, search = "", sex = -1}) {
    if (search) {//有关键字，按关键字查询学生信息
        let respData = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&sex=${sex}&search=${search}`)
            .then(resp => resp.json()).then(resp => resp.data);
        respData.datas = respData.searchList;
        delete respData.searchList;
        return respData;
    } else {//没有关键字，按页查询学生信息
        let respData = await getStudentInfo(page, limit);
        respData.datas = respData.findByPage;
        delete respData.findByPage;
        return respData;
    }
}
