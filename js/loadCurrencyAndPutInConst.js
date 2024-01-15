var currentDate = new Date();

document.querySelector('.submit-btn').onclick = function clickAllButtons() {
  document.querySelector('.privatbank .card').classList.remove("green")
  document.querySelector('.privatbank .card').classList.remove("red")
  document.querySelector('.privatbank .cash').classList.remove("green")
  document.querySelector('.privatbank .cash').classList.remove("red")
  document.querySelector('.monobank .card').classList.remove("green")
  document.querySelector('.monobank .card').classList.remove("red")
  document.querySelector('.abank .card').classList.remove("green")
  document.querySelector('.abank .card').classList.remove("red")
  document.querySelector('.abank .cash').classList.remove("green")
  document.querySelector('.abank .cash').classList.remove("red")
  document.querySelector('.otpbank .card').classList.remove("green")
  document.querySelector('.otpbank .card').classList.remove("red")
  document.querySelector('.otpbank .cash').classList.remove("green")
  document.querySelector('.otpbank .cash').classList.remove("red")
  document.querySelector('.izibank .card').classList.remove("green")
  document.querySelector('.izibank .card').classList.remove("red")
  document.querySelector('.izibank .cash').classList.remove("green")
  document.querySelector('.izibank .cash').classList.remove("red")


  document.querySelector('.but-privat-card').click()
  document.querySelector('.but-privat-cash').click()
  document.querySelector('.but-mono-card').click()
  document.querySelector('.but-abank-card').click()
  document.querySelector('.but-abank-cash').click()
  document.querySelector('.but-otp-card').click()
  document.querySelector('.but-otp-cash').click()
  document.querySelector('.but-izi-card').click()
  document.querySelector('.but-izi-cash').click()
}

// приватбанк
loadPrivatCard = function() {
  $.ajax({
    method: "GET",
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.ccy === "USD").sale;
      document.querySelector('.privatbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-privat-card').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value-100;
        document.querySelector('.privatbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.privatbank .card').classList.add("green")
        } else {
          document.querySelector('.privatbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadPrivatCard:', error);
    }
  });
}; loadPrivatCard();
loadPrivatCash = function() {
  $.ajax({
    method: "GET",
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.ccy === "USD").sale;
      document.querySelector('.privatbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-privat-cash').onclick = function valueCard1() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.privatbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.privatbank .cash').classList.add("green")
        } else {
          document.querySelector('.privatbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadPrivatCash:', error);
    }
  });
}; loadPrivatCash();

// монобанк
loadMonoCard = function() {
  $.ajax({
    method: "GET",
    url: "https://api.monobank.ua/bank/currency",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.currencyCodeA === 840).rateSell;
      document.querySelector('.monobank .cardCount').textContent = exchengeCount;
      
      document.querySelector('.but-mono-card').onclick = function valueCard() {
        const income = (document.querySelector('.CountUAH').value/exchengeCount-0.009*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.monobank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.monobank .card').classList.add("green")
        } else {
          document.querySelector('.monobank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadMonoCard:', error);
    }
  });
}; loadMonoCard();


// а-банк
loadAbankCard = function() {
  $.ajax({
    method: "GET",
    url: "https://a-bank.com.ua/backend/api/v1/rates",
    success: function(data) {
      let data1 = data.processing
      let exchengeCount = data1.find(currency => currency.ccyA === "UAH" && currency.ccyB === "USD").rateA;
      document.querySelector('.abank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-abank-card').onclick = function valueCard() {
        const income = (document.querySelector('.CountUAH').value/exchengeCount-0.009*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.abank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.abank .card').classList.add("green")
        } else {
          document.querySelector('.abank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadAbankCard:', error);
    }
  });
}; loadAbankCard();
loadAbankCash = function() {
  $.ajax({
    method: "GET",
    url: "https://a-bank.com.ua/backend/api/v1/rates",
    success: function(data) {
      let data1 = data.data
      let exchengeCount = data1.find(currency => currency.ccyA === "UAH" && currency.ccyB === "USD").rateA;
      document.querySelector('.abank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-abank-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.abank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.abank .cash').classList.add("green")
        } else {
          document.querySelector('.abank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadAbankCash:', error);
    }
  });
}; loadAbankCash();


// отпбанк
loadOtpCard = function() {
  $.ajax({
    method: "GET",
    url: "https://www.otpbank.com.ua/local/components/otp/utils.kross_curr_rate/get_kross_curr_rate.php?curr_date="+currentDate.getDate()+".0"+currentDate.getMonth() + 1+".2024&ib_code=totpb_card_currency_rates",
    success: function(data) {
      let exchengeCount = JSON.parse(data).UAHUSD;
      document.querySelector('.otpbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-otp-card').onclick = function valueCard() {
        const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.otpbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.otpbank .card').classList.add("green")
        } else {
          document.querySelector('.otpbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadOtpCard:', error);
    }
  });
}; loadOtpCard();
loadOtpCash = function() {
  $.ajax({
    method: "GET",
    url: "https://www.otpbank.com.ua/local/components/otp/utils.exchange_rate_smart/exchange_rate_by_date.php?curr_date="+currentDate.getDate()+".0"+currentDate.getMonth() + 1+".2024&ib_code=otpb_banking_exchange_rates&cache_time=0&settings_xml=%2Fvar%2Fwww%2Fsettings%2Flocal%2Fmodules%2Fotpb.soap_client_requests%2Fclasses%2Fgeneral%2FSoapClientList.xml&juridical=N&show_buy=Y&show_sale=Y&show_instead=-",
    success: function(data) {
      let data1 = JSON.parse(data).items;
      let exchengeCount = data1.find(currency => currency.CODE === "USD \/ UAH").SELL;
      document.querySelector('.otpbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-otp-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.otpbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.otpbank .cash').classList.add("green")
        } else {
          document.querySelector('.otpbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadOtpCash:', error);
    }
  });
}; loadOtpCash();


// IZIбанк
loadIziCard = function() {
  $.ajax({
    method: "GET",
    url: "https://izibank.com.ua/api/exchange/rates?type=card_kurs_info",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.curr_short_name === "USD").sale;
      document.querySelector('.izibank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-izi-card').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.izibank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.izibank .card').classList.add("green")
        } else {
          document.querySelector('.izibank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadIziCard:', error);
    }
  });
}; loadIziCard();
loadIziCash = function() {
  $.ajax({
    method: "GET",
    url: "https://izibank.com.ua/api/exchange/rates?type=card_kurs",
    success: function(data) {
      let exchengeCount = data.find(currency => currency.curr_short_name === "USD").sale;
      document.querySelector('.izibank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-izi-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.izibank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.izibank .cash').classList.add("green")
        } else {
          document.querySelector('.izibank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      document.querySelector('countsLoadErrors').textContent = ('Error loadIziCash:', error);
    }
  });
}; loadIziCash();