import { useState, useEffect } from 'react';
import { fetchPortfolio } from '../api/investorApi';

export default function usePortfolio() {
  const [investor, setInvestor] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setInvestor)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { investor, loading, error };
}