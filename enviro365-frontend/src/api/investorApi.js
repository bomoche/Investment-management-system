const BASE_URL = 'http://localhost:8080/api';
const INVESTOR_ID = 1;

export { INVESTOR_ID };

export async function fetchPortfolio() {
  const res = await fetch(`${BASE_URL}/investors/${INVESTOR_ID}/portfolio`);
  if (!res.ok) throw new Error('Failed to load portfolio. Is the backend running?');
  return res.json();
}

export async function fetchWithdrawalHistory() {
  const res = await fetch(`${BASE_URL}/withdrawals?investorId=${INVESTOR_ID}`);
  if (!res.ok) throw new Error('Failed to load withdrawal history.');
  return res.json();
}

export async function submitWithdrawal(productId, amount) {
  const res = await fetch(`${BASE_URL}/withdrawals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ investorId: INVESTOR_ID, productId, amount }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Withdrawal failed.');
  return data;
}

export async function downloadCsv() {
  const res = await fetch(`${BASE_URL}/withdrawals/export?investorId=${INVESTOR_ID}`);
  if (!res.ok) throw new Error('CSV export failed.');
  const blob = await res.blob();
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'enviro365-statement.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}