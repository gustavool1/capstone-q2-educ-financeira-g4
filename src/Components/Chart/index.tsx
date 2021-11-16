import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Chart, LineAdvance} from 'bizcharts';
import { data } from './mocky';
import { Balance, UserContext } from '../../Providers/Users';


// 数据源
interface SortBalanceTypes {
	date: any;
	wallet: string;
	total: number;
}




function Demo() {
	const { userData } = useContext(UserContext);
	const [sortBalance, setSortBalance] = useState<SortBalanceTypes[]>([])
	const { balance } = userData;

	const assembleObject  = (arr: string[], chartData: SortBalanceTypes[]) => {
		
		arr.forEach((el: string) => chartData.push({
            date: el,
            wallet: 'saldo',
            total: 0
        })); 

		return chartData;
	}

	const sumTotalWallet = (chartData: SortBalanceTypes[], balance: Balance[]) => {

		chartData.forEach((el) => {
			el.total = balance.filter((val: Balance) => val.date.includes(el.date))
			.reduce((acc, item) => acc + item.move, 0)
		});

		return chartData;
	}

	const getAnnualBalance = () => {
        let chartData: { date: string; wallet: string; total: number; }[] = []
		let filterType: string[] = []
		

		balance.forEach((el: Balance) => {
            !filterType.includes(el.date.slice(3, 10)) && filterType.push(el.date.slice(3, 10))
        })         

		assembleObject(filterType, chartData)

		sumTotalWallet(chartData, balance)

       chartData = chartData.sort((a: SortBalanceTypes, b: SortBalanceTypes) => Number(a.date.slice(0, 2)) - Number(b.date.slice(0, 2)))
        
        setSortBalance(chartData)
	}

	const getMonthlyBalance = () => {
		let chartData: { date: string; wallet: string; total: number; }[] = []
		let filterType: string[] = []

		balance.forEach((el: Balance) => {
            !filterType.includes(el.date.slice(0, 10)) && filterType.push(el.date.slice(0, 10))
        })         

		assembleObject(filterType, chartData)

		sumTotalWallet(chartData, balance)

 		console.log(chartData)
		//'05/11'
		
		let chartDataTyped = chartData.map((el: SortBalanceTypes) => {
			let ano = Number(el.date.split('/')[2]);
			let mes = Number(el.date.split('/')[1]) - 1;
			let dia = Number(el.date.split('/')[0]);

			return 	el = {
				date: new Date(ano, mes , dia ),
				wallet: el.wallet,
				total: el.total
			}
		})

		chartDataTyped = chartDataTyped.sort((a: any, b: any) => a.date - b.date)

		let chartNew = chartDataTyped.map((el: SortBalanceTypes) => {
			return	el = {
						date: el.date.toLocaleDateString('pt-br').slice(0, 5),
						wallet: el.wallet,
						total: el.total
					}
		})
       
		console.log(chartNew)

        setSortBalance(chartNew)
	}

	return (
		<>
        <button onClick={getAnnualBalance}>Anual</button>
		<button onClick={getMonthlyBalance}>Mensal</button>
		<Chart padding={[10, 20, 50, 40]} autoFit height={300} data={sortBalance} >
		<LineAdvance
			shape="smooth"
			point
			area
			position="date*total"
			color="wallet"
		/>
	
		</Chart>
		</>
	)
}


export default Demo