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