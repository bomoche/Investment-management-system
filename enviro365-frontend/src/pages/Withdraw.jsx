import React from 'react';
import useWithdraw    from '../hooks/useWithdraw';
import ErrorBanner    from '../components/shared/ErrorBanner';
import { formatZAR } from '../utils/formatter';


export default function Withdraw({ selectedProduct }) {
  const {
    amount, amountError, apiError, success,
    loading, maxAllowed, handleAmountChange, handleSubmit,
  } = useWithdraw(selectedProduct);

  if (!selectedProduct) {
    return (
      <div className="flex items-center justify-center py-stack-lg">
        <div className="text-center text-on-surface-variant">
          <span className="material-symbols-outlined text-[48px] mb-stack-md block">payments</span>
          <p className="font-headline-md text-headline-md text-primary mb-stack-xs">No product selected</p>
          <p className="font-body-sm text-body-sm">Go to Portfolio and click WITHDRAW on a product.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center bg-surface-container-low min-h-screen p-margin-mobile md:p-margin-desktop">
      <div className="w-full max-w-lg">

        {success && (
          <div className="mb-stack-md bg-[#e6f4ea] border border-[#34a853] p-4 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined text-[#1e8e3e]">check_circle</span>
            <p className="font-body-md text-body-md text-[#1e8e3e]">
              Withdrawal of {formatZAR(success.amount)} submitted successfully. New balance: {formatZAR(success.balanceAfterWithdrawal)}.
            </p>
          </div>
        )}

        <ErrorBanner message={apiError} />

        <div className="bg-surface-container-lowest border border-outline-variant p-stack-md md:p-stack-lg shadow-sm">
          <div className="mb-stack-md">
            <h2 className="font-headline-md text-headline-md text-primary">Withdraw Funds</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-stack-xs">
              Provide details to process your institutional withdrawal request.
            </p>
          </div>

          <div className="space-y-stack-md">
            <div className="space-y-stack-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Selected Investment Product
              </label>
              <div className="w-full p-stack-sm bg-surface-container border border-outline-variant rounded-lg flex items-center justify-between">
                <span className="font-body-md text-body-md font-semibold text-primary">{selectedProduct.productName}</span>
                <span className="font-data-mono text-data-mono bg-white px-2 py-1 border border-outline-variant rounded">
                  Balance: {formatZAR(selectedProduct.balance)}
                </span>
              </div>
            </div>

            <div className="space-y-stack-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="amount">
                Withdrawal Amount (R)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-on-surface-variant font-body-md">R</span>
                </div>
                <input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={amount}
                  onChange={e => handleAmountChange(e.target.value)}
                  placeholder="0.00"
                  className={`block w-full pl-8 pr-3 py-stack-sm border rounded-lg font-data-mono text-body-md bg-surface transition-all outline-none
                    ${amountError ? 'border-error' : 'border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary'}`}
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                Maximum: {formatZAR(maxAllowed)} (90% of balance)
              </p>
              {amountError && (
                <div className="flex items-center gap-1 text-error">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span className="font-body-sm text-body-sm">{amountError}</span>
                </div>
              )}
            </div>

            <div className="p-3 bg-surface-container-low border-l-4 border-secondary text-on-surface-variant">
              <p className="font-body-sm text-body-sm">
                Withdrawals are processed within 3–5 business days. Fees may apply depending on your fund tier.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !!amountError}
              className="w-full py-4 bg-secondary-container hover:bg-[#e89d21] text-on-secondary-fixed font-bold rounded-lg transition-all active:scale-[0.98] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? <><div className="w-4 h-4 border-2 border-on-secondary-fixed border-t-transparent rounded-full animate-spin" />Processing…</>
                : <span className="font-label-caps text-label-caps uppercase">Submit Withdrawal</span>
              }
            </button>
          </div>
        </div>

        <div className="mt-stack-md flex justify-center items-center gap-2 text-on-surface-variant opacity-60">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="font-label-caps text-label-caps">Secure Transaction Encryption Enabled</span>
        </div>
      </div>
    </div>
  );
}