import React from 'react'
import './Pager.css'

export default function Pager(props) {
    const pageNum = getPageNum(props.total, props.size);
    const minPanelNum = getMinPanelNum(props.current,props.panel);
    const maxPanelMum = (minPanelNum + props.panel) > pageNum ? pageNum : minPanelNum + props.panel;
    let numPageArr = [];
    for(let i = minPanelNum; i <= maxPanelMum; i ++) {
        numPageArr.push(
            <span key={i} className={i === props.current ? "item active" : "item"}
                    onClick={handleClick(i,props)}
            >{i}</span>
        );
    }
    return (
        <>
            <span className={props.current === 1 ? "item disabled" : "item"} 
                    onClick={handleClick('first',props)}
            >首页</span>
            <span className={props.current === 1 ? "item disabled" : "item"} 
                    onClick={handleClick('prev',props)}
            >上一页</span>
            {/**数字页码 */}
            {numPageArr.map((item) => {
              return item;  
            })}
            <span className={props.current === pageNum ? "item disabled" : "item"} 
                    onClick={handleClick('next',props)}
            >下一页</span>
            <span className={props.current === pageNum ? "item disabled" : "item"} 
                    onClick={handleClick('end',props)}
            >尾页</span>
            <span>{props.current} / {pageNum}</span>
        </>
    )
}

/**
 * 获取总页数
 * @param {*} total 
 * @param {*} size 
 */
function getPageNum(total,size) {
    const pageNum = Math.ceil(total / size);
    return pageNum;
}

/**
 * 动态获取数字页码最小值
 * @param {*} current 
 * @param {*} panel 
 */
function getMinPanelNum(current,panel) {
    let minPanelNum = current - Math.floor(panel / 2);
    if(minPanelNum < 1) {
        minPanelNum = 1;
    }
    return minPanelNum;
}

/**
 * 点击翻页事件
 * @param {*} num 
 * @param {*} props 
 */
function handleClick(num,props) {
    return () => {
        if(num === 'first') {//首页
            props.onPageChange(1);
        }else if(num === 'prev') {
            props.onPageChange(props.current - 1);
        }else if(num === 'next') {
            props.onPageChange(props.current + 1);
        }else if(num === 'end') {
            props.onPageChange(getPageNum(props.total, props.size));
        }else {
            props.onPageChange(num);
        }
    }
}
