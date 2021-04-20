import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [deposits, setDeposits] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = useCallback(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setDeposits(data.deposits);
				setIsLoading(false);
			});
	}, [url]);

	useEffect(fetchData, [fetchData]);

	return { deposits, isLoading };
};
