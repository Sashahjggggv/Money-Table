document.querySelector('.submit-btn').onclick = function clickAllButtons() {
  document.querySelector('.but-privat-card').click()
  document.querySelector('.but-privat-cash').click()
}

// приватбанк
loadPrivatCard = function() {
  $.ajax({
    method: "GET",
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.ccy === "USD").sale;
      document.querySelector('.privatCardCount').textContent = exchengeCount;
      
      document.querySelector('.but-privat-card').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-50100;
        document.querySelector('.privatbank .card').textContent = income.toFixed(2) + "UAH";
      }
    },
    error: function(error) {
      window.alert('Error loadPrivatCard:', error);
    }
  });
}; loadPrivatCard();


loadPrivatCash = function() {
  $.ajax({
    method: "GET",
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.ccy === "USD").sale;
      document.querySelector('.privatCashCount').textContent = exchengeCount;
      document.querySelector('.but-privat-cash').onclick = function valueCard1() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-50000;
        document.querySelector('.privatbank .cash').textContent = income.toFixed(2) + " UAH";
      }
    },
    error: function(error) {
      window.alert('Error loadPrivatCash:', error);
    }
  });
}; loadPrivatCash();