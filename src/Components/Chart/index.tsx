import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Chart, LineAdvance} from 'bizcharts';
import { data } from './mocky';
import { Balance, UserContext } from '../../Providers/Users';

interface SortBalanceTypes {
	date: string ;
	wallet: string;
	total: number;
}

interface BalanceTypeDate {
	date: Date;
	wallet: string;
	total: number;
}

interface BalanceDate {
	date: Date;
	move: number;
}


function Demo() {
	const { userData } = useContext(UserContext);
	const [sortBalance, setSortBalance] = useState<SortBalanceTypes[]>([])
	const { balance } = userData;
	const newBalance = sortBalanceByDate(balance);

	function sortBalanceByDate (balance: Balance[]) {
		
		let balanceTypedDate = balance.map((el: Balance) => {
			let year = Number(el.date.slice(6, 10));
			let month = Number(el.date.slice(3, 5)) - 1;
			let day = Number(el.date.slice(0, 2));

			return 	{
				date: new Date(year, month , day ),
				move: el.move
			}
		})

		balanceTypedDate = balanceTypedDate.sort((a: any, b: any) => {
			return a.date - b.date
		})

		let balanceTypedString = balanceTypedDate.map((el: BalanceDate) => {
			return	 {
				date: el.date.toLocaleDateString('pt-br').slice(0, 10),
				move: el.move
			}
		})
		return balanceTypedString		
	}

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
		let filterType: string[] = [];		

		newBalance.forEach((el: Balance) => {
            !filterType.includes(el.date.slice(3, 10)) && filterType.push(el.date.slice(3, 10))
        })         

		assembleObject(filterType, chartData)

		sumTotalWallet(chartData, balance)

       	chartData = chartData.sort((a: SortBalanceTypes, b: SortBalanceTypes) => Number(a.date.slice(0, 2)) - Number(b.date.slice(0, 2)))
        
        setSortBalance(chartData)
	}

	const getWeeklyBalance = () => {
		let chartData: { date: string; wallet: string; total: number; }[] = []
		let filterType: string[] = []

		newBalance.forEach((el: Balance) => {
            !filterType.includes(el.date.slice(0, 5)) && filterType.push(el.date.slice(0, 5))
        })         

		assembleObject(filterType, chartData)

		sumTotalWallet(chartData, balance)
       
		chartData = chartData.sort((a: any, b: any) => {
			return a.date - b.date
		})

        setSortBalance(chartData)
	}

	return (
		<>
			{balance.length < 2? (
				<h2>Você ainda não tem movimentações o suficiente &#128552;</h2>
			):(
				<>
					<button onClick={() => sortBalanceByDate(balance)} ></button>
					<button onClick={getAnnualBalance}>Anual</button>
					<button onClick={getWeeklyBalance}>Mensal</button>
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
			)}
		</>
	)
}


export default Demo