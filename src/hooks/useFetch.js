import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDepositType, loadData, setPeriodFrom } from '../store/actions';

export const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	const fetchData = useCallback(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const deposits = data.deposits;
				dispatch(loadData(deposits));
				dispatch(changeDepositType(deposits[0].code));
				dispatch(setPeriodFrom(deposits[0].param[0]['period_from']));
				setIsLoading(false);
			});
	}, [url, dispatch]);

	useEffect(fetchData, [fetchData]);

	return { isLoading };
};
