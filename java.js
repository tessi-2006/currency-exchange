

    const rates = {
      USD: { USD: 1, EUR: 0.92, FRW: 1300, KES: 130, AUD: 1.5 },
      EUR: { USD: 1.08, EUR: 1, FRW: 1400, KES: 140, AUD: 1.6 },
      FRW: { USD: 0.00077, EUR: 0.00071, FRW: 1, KES: 0.1, AUD: 0.0011 },
      KES: { USD: 0.0077, EUR: 0.0071, FRW: 10, KES: 1, AUD: 0.011 },
      AUD: { USD: 0.66, EUR: 0.63, FRW: 1200, KES: 120, AUD: 1 }
    };

    function convertCurrency() {
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;
      const amount = parseFloat(document.getElementById('amount').value);

      if (!from || !to || isNaN(amount)) {
        alert("Please enter valid inputs.");
        return;
      }

      const rate = rates[from][to];
      const result = amount * rate;

      document.getElementById('result').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
      document.getElementById('formula').textContent =
        `Rate: 1 ${from} = ${rate.toFixed(4)} ${to} | Formula: ${amount} × ${rate.toFixed(4)} = ${result.toFixed(2)}`;
    }

  
    const calcDisplay = document.getElementById('calc-display');
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+', 
    ];

    const buttonContainer = document.getElementById('calc-buttons');
    buttons.forEach(b => {
      const btn = document.createElement('input');
      btn.type = 'button';
      btn.value = b;
      btn.onclick = () => {
        if (b === '=') {
          try {
            calcDisplay.value = eval(calcDisplay.value);
          } catch {
            calcDisplay.value = "Error";
          }
        } else {
          calcDisplay.value += b;
        }
      };
      buttonContainer.appendChild(btn);
    });
  