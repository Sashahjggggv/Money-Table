// приватбанк
let privatExchengeCard = '';
let loadPrivat = function() {
  $.ajax({
    method: "GET",
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11",
    success: function(data) {
      privatExchengeCard = data.find(currency => currency.ccy === "USD").sale;
      const cardElement = document.querySelector('.privatbank .card');
      cardElement.textContent = privatExchengeCard;
    },
    error: function(error) {
      window.alert('Error loading data from PrivatBank:', error);
    }
  });
}; loadPrivat();

console.log(privatExchengeCard)
