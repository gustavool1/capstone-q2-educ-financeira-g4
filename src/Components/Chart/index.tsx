import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Chart, LineAdvance} from 'bizcharts';
import { data } from './mocky';
import { Balance, UserContext } from '../../Providers/Users';

// 数据源
interface SortBalanceTypes {
	month: string;
	date?: string;
	week?: string;
	wallet: string;
	total: number;
}


function Demo() {
	const { userData } = useContext(UserContext);
	const [sortBalance, setSortBalance] = useState<SortBalanceTypes[]>([])

	const getAnnualBalance = () => {
		const { balance } = userData;
        let chartData: { month: string; wallet: string; total: number; }[] = []
		let filterType: string[] = []

		balance.forEach((el: Balance) => {
            !filterType.includes(el.date.slice(3, 10)) && filterType.push(el.date.slice(3, 10))
        }) 

        filterType.forEach((el: string) => chartData.push({
            month: el,
            wallet: 'saldo',
            total: 0
        }))        

        chartData.forEach((el) => {
           el.total = balance.filter((val: Balance) => val.date.includes(el.month))
           .reduce((acc, item) => acc + item.move, 0)
        })

        chartData = chartData.sort((a: SortBalanceTypes, b: SortBalanceTypes) => Number(a.month.slice(0, 2)) - Number(b.month.slice(0, 2)))
        console.log(balance)
        setSortBalance(chartData)
	}

	return (
		<>
        <button onClick={getAnnualBalance}>Aqui</button>
		<Chart padding={[10, 20, 50, 40]} autoFit height={300} data={sortBalance} >
		<LineAdvance
			shape="smooth"
			point
			area
			position="month*total"
			color="wallet"
		/>
	
		</Chart>
		</>
	)
}


export default Demo