import React, { Component } from "react";
import s from "./Paginator.module.css";

type StateType = {
    portionNumber: number;
};

export class Paginator extends Component<PropsType, StateType> {
    state = {
        portionNumber: 1
    }

    render() {
        const {
            totalItemsCount,
            pageSize,
            currentPage,
            onPageChanged,
            portionSize = 10,
        } = this.props

        const {portionNumber} = this.state;

        let pagesCount = Math.ceil(totalItemsCount / pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const portionCount = Math.ceil(pagesCount / portionSize)
        const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
        const rightPortionPageNumber = portionNumber * portionSize

        return (
            <div>
                {portionNumber > 1 &&
                    <button onClick={() => {
                        this.setState(prevState => ({portionNumber: prevState.portionNumber - 1}))
                    }}>prev</button>
                }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, i) => {
                        return <span key={i}
                                     className={
                                         `${s.pages} ${currentPage === p ? s.selectedPage : ''}`
                                     }
                                     onClick={() => onPageChanged(p)}
                        >{p}</span>
                    })}
                {portionCount > portionNumber &&
                    <button onClick={() => {
                        this.setState(prevState => ({portionNumber: prevState.portionNumber + 1}))
                    }}> next</button>
                }
            </div>
        )
    }
}

type  PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number;
};
