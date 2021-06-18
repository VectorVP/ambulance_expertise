import React from 'react'
import classes from './Tabs.module.scss'

const Tabs = ({number, variant}) => {
    if (variant==="quality") {
        return (
            <div className={classes.around_tab}>
                <div className={number === 1 ? classes.tab_one_left_active : classes.tab_one_left}>
                    1. Внесение данных 
                </div>
                <div className={number === 2 ? classes.tab_one_active : classes.tab_one}>
                    2. Вывод критериев
                </div>
                <div className={number === 3 ? classes.tab_one_right_active : classes.tab_one_right}>
                    3. Отчет
                </div>
            </div>
        )
    }
    if (variant==="analytics") {
        return (
            <div>
                можно тыкать и переходить по табам
                {number}
            </div>
        )
    }
}

export default Tabs
