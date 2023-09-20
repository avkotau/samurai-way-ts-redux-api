import React, { Component } from "react";
import s from "./Paginator.module.css";
import { UsersType } from "components/Users/UsersContainer";

export class Paginator extends Component<UsersType> {
    render() {
        const {
            totalUsersCount,
            pageSize,
            currentPage,
            onPageChanged,
        } = this.props

        //pagesCount/100 - for show 24 pages
        let pagesCount = Math.ceil(totalUsersCount / pageSize) / 100

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {pages.map((p, i) => {
                    return <span key={i}
                                 className={
                                     `${s.pages} ${currentPage === p ? s.selectedPage : ''}`
                                 }
                                 onClick={() => onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
        )
    }
}
