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
  document.querySelector('.oschadbank .card').classList.remove("green")
  document.querySelector('.oschadbank .card').classList.remove("red")
  document.querySelector('.oschadbank .cash').classList.remove("green")
  document.querySelector('.oschadbank .cash').classList.remove("red")
  document.querySelector('.raifbank .card').classList.remove("green")
  document.querySelector('.raifbank .card').classList.remove("red")
  document.querySelector('.raifbank .cash').classList.remove("green")
  document.querySelector('.raifbank .cash').classList.remove("red")
  document.querySelector('.otpbank .card').classList.remove("green")
  document.querySelector('.otpbank .card').classList.remove("red")
  document.querySelector('.otpbank .cash').classList.remove("green")
  document.querySelector('.otpbank .cash').classList.remove("red")
  document.querySelector('.izibank .card').classList.remove("green")
  document.querySelector('.izibank .card').classList.remove("red")
  document.querySelector('.izibank .cash').classList.remove("green")
  document.querySelector('.izibank .cash').classList.remove("red")
  document.querySelector('.pumbank .card').classList.remove("green")
  document.querySelector('.pumbank .card').classList.remove("red")
  document.querySelector('.pumbank .cash').classList.remove("green")
  document.querySelector('.pumbank .cash').classList.remove("red")
  document.querySelector('.globusbank .card').classList.remove("green")
  document.querySelector('.globusbank .card').classList.remove("red")
  document.querySelector('.globusbank .cash').classList.remove("green")
  document.querySelector('.globusbank .cash').classList.remove("red")
  document.querySelector('.kominbank .card').classList.remove("green")
  document.querySelector('.kominbank .card').classList.remove("red")
  document.querySelector('.kominbank .cash').classList.remove("green")
  document.querySelector('.kominbank .cash').classList.remove("red")
  document.querySelector('.ukrgasbank .card').classList.remove("green")
  document.querySelector('.ukrgasbank .card').classList.remove("red")
  document.querySelector('.ukrgasbank .cash').classList.remove("green")
  document.querySelector('.ukrgasbank .cash').classList.remove("red")
  document.querySelector('.vostokbank .card').classList.remove("green")
  document.querySelector('.vostokbank .card').classList.remove("red")
  document.querySelector('.vostokbank .cash').classList.remove("green")
  document.querySelector('.vostokbank .cash').classList.remove("red")
  document.querySelector('.taskombank .card').classList.remove("green")
  document.querySelector('.taskombank .card').classList.remove("red")
  document.querySelector('.taskombank .cash').classList.remove("green")
  document.querySelector('.taskombank .cash').classList.remove("red")
  document.querySelector('.pivdenbank .card').classList.remove("green")
  document.querySelector('.pivdenbank .card').classList.remove("red")
  document.querySelector('.pivdenbank .cash').classList.remove("green")
  document.querySelector('.pivdenbank .cash').classList.remove("red")
  document.querySelector('.praveksbank .card').classList.remove("green")
  document.querySelector('.praveksbank .card').classList.remove("red")
  document.querySelector('.praveksbank .cash').classList.remove("green")
  document.querySelector('.praveksbank .cash').classList.remove("red")
  document.querySelector('.unexbank .card').classList.remove("green")
  document.querySelector('.unexbank .card').classList.remove("red")
  document.querySelector('.unexbank .cash').classList.remove("green")
  document.querySelector('.unexbank .cash').classList.remove("red")
  document.querySelector('.kreditdinrobank .card').classList.remove("green")
  document.querySelector('.kreditdinrobank .card').classList.remove("red")
  document.querySelector('.kreditdinrobank .cash').classList.remove("green")
  document.querySelector('.kreditdinrobank .cash').classList.remove("red")
  document.querySelector('.ideabank .card').classList.remove("green")
  document.querySelector('.ideabank .card').classList.remove("red")
  document.querySelector('.ideabank .cash').classList.remove("green")
  document.querySelector('.ideabank .cash').classList.remove("red")
  document.querySelector('.eximbank .card').classList.remove("green")
  document.querySelector('.eximbank .card').classList.remove("red")
  document.querySelector('.eximbank .cash').classList.remove("green")
  document.querySelector('.eximbank .cash').classList.remove("red")
  document.querySelector('.altbank .card').classList.remove("green")
  document.querySelector('.altbank .card').classList.remove("red")
  document.querySelector('.altbank .cash').classList.remove("green")
  document.querySelector('.altbank .cash').classList.remove("red")
  document.querySelector('.kredobank .card').classList.remove("green")
  document.querySelector('.kredobank .card').classList.remove("red")
  document.querySelector('.kredobank .cash').classList.remove("green")
  document.querySelector('.kredobank .cash').classList.remove("red")
  document.querySelector('.mignarinvestbank .card').classList.remove("green")
  document.querySelector('.mignarinvestbank .card').classList.remove("red")
  document.querySelector('.mignarinvestbank .cash').classList.remove("green")
  document.querySelector('.mignarinvestbank .cash').classList.remove("red")
  document.querySelector('.ukrsibbank .card').classList.remove("green")
  document.querySelector('.ukrsibbank .card').classList.remove("red")
  document.querySelector('.ukrsibbank .cash').classList.remove("green")
  document.querySelector('.ukrsibbank .cash').classList.remove("red")
  document.querySelector('.kreditvestbank .card').classList.remove("green")
  document.querySelector('.kreditvestbank .card').classList.remove("red")
  document.querySelector('.kreditvestbank .cash').classList.remove("green")
  document.querySelector('.kreditvestbank .cash').classList.remove("red")
  document.querySelector('.investzaoschbank .card').classList.remove("green")
  document.querySelector('.investzaoschbank .card').classList.remove("red")
  document.querySelector('.investzaoschbank .cash').classList.remove("green")
  document.querySelector('.investzaoschbank .cash').classList.remove("red")
  document.querySelector('.kominvestbank .card').classList.remove("green")
  document.querySelector('.kominvestbank .card').classList.remove("red")
  document.querySelector('.kominvestbank .cash').classList.remove("green")
  document.querySelector('.kominvestbank .cash').classList.remove("red")
  document.querySelector('.piraeusbank .card').classList.remove("green")
  document.querySelector('.piraeusbank .card').classList.remove("red")
  document.querySelector('.piraeusbank .cash').classList.remove("green")
  document.querySelector('.piraeusbank .cash').classList.remove("red")
  document.querySelector('.skybank .card').classList.remove("green")
  document.querySelector('.skybank .card').classList.remove("red")
  document.querySelector('.skybank .cash').classList.remove("green")
  document.querySelector('.skybank .cash').classList.remove("red")
  document.querySelector('.threeforbank .card').classList.remove("green")
  document.querySelector('.threeforbank .card').classList.remove("red")
  document.querySelector('.threeforbank .cash').classList.remove("green")
  document.querySelector('.threeforbank .cash').classList.remove("red")
  document.querySelector('.krediagrikolebank .card').classList.remove("green")
  document.querySelector('.krediagrikolebank .card').classList.remove("red")
  document.querySelector('.krediagrikolebank .cash').classList.remove("green")
  document.querySelector('.krediagrikolebank .cash').classList.remove("red")
  document.querySelector('.sensebank .card').classList.remove("green")
  document.querySelector('.sensebank .card').classList.remove("red")
  document.querySelector('.sensebank .cash').classList.remove("green")
  document.querySelector('.sensebank .cash').classList.remove("red")
  document.querySelector('.prokreditbank .card').classList.remove("green")
  document.querySelector('.prokreditbank .card').classList.remove("red")
  document.querySelector('.prokreditbank .cash').classList.remove("green")
  document.querySelector('.prokreditbank .cash').classList.remove("red")
  document.querySelector('.poltavabank .card').classList.remove("green")
  document.querySelector('.poltavabank .card').classList.remove("red")
  document.querySelector('.poltavabank .cash').classList.remove("green")
  document.querySelector('.poltavabank .cash').classList.remove("red")


  document.querySelector('.but-privat-card').click()
  document.querySelector('.but-privat-cash').click()
  document.querySelector('.but-mono-card').click()
  document.querySelector('.but-abank-card').click()
  document.querySelector('.but-abank-cash').click()
  document.querySelector('.but-oschad-card').click()
  document.querySelector('.but-oschad-cash').click()
  document.querySelector('.but-raif-card').click()
  document.querySelector('.but-raif-cash').click()
  document.querySelector('.but-otp-card').click()
  document.querySelector('.but-otp-cash').click()
  document.querySelector('.but-izi-card').click()
  document.querySelector('.but-izi-cash').click()
  document.querySelector('.but-pumb-card').click()
  document.querySelector('.but-pumb-cash').click()
  document.querySelector('.but-globus-card').click()
  document.querySelector('.but-globus-cash').click()
  document.querySelector('.but-komin-card').click()
  document.querySelector('.but-komin-cash').click()
  document.querySelector('.but-ukrgas-card').click()
  document.querySelector('.but-ukrgas-cash').click()
  document.querySelector('.but-vostok-card').click()
  document.querySelector('.but-vostok-cash').click()
  document.querySelector('.but-taskom-card').click()
  document.querySelector('.but-taskom-cash').click()
  document.querySelector('.but-pivden-card').click()
  document.querySelector('.but-pivden-cash').click()
  document.querySelector('.but-praveks-card').click()
  document.querySelector('.but-praveks-cash').click()
  document.querySelector('.but-unex-card').click()
  document.querySelector('.but-unex-cash').click()
  document.querySelector('.but-kreditdinro-card').click()
  document.querySelector('.but-kreditdinro-cash').click()
  document.querySelector('.but-idea-card').click()
  document.querySelector('.but-idea-cash').click()
  document.querySelector('.but-exim-card').click()
  document.querySelector('.but-exim-cash').click()
  document.querySelector('.but-alt-card').click()
  document.querySelector('.but-alt-cash').click()
  document.querySelector('.but-kredo-card').click()
  document.querySelector('.but-kredo-cash').click()
  document.querySelector('.but-mignarinvest-card').click()
  document.querySelector('.but-mignarinvest-cash').click()
  document.querySelector('.but-ukrsib-card').click()
  document.querySelector('.but-ukrsib-cash').click()
  document.querySelector('.but-kreditvest-card').click()
  document.querySelector('.but-kreditvest-cash').click()
  document.querySelector('.but-investzaosch-card').click()
  document.querySelector('.but-investzaosch-cash').click()
  document.querySelector('.but-kominvest-card').click()
  document.querySelector('.but-kominvest-cash').click()
  document.querySelector('.but-piraeus-card').click()
  document.querySelector('.but-piraeus-cash').click()
  document.querySelector('.but-sky-card').click()
  document.querySelector('.but-sky-cash').click()
  document.querySelector('.but-threefor-card').click()
  document.querySelector('.but-threefor-cash').click()
  document.querySelector('.but-krediagrikole-card').click()
  document.querySelector('.but-krediagrikole-cash').click()
  document.querySelector('.but-sense-card').click()
  document.querySelector('.but-sense-cash').click()
  document.querySelector('.but-prokredit-card').click()
  document.querySelector('.but-prokredit-cash').click()
  document.querySelector('.but-poltava-card').click()
  document.querySelector('.but-poltava-cash').click()
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
      console.error('Error loadPrivatCard:', error);
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
      console.error('Error loadPrivatCash:', error);
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
      console.error('Error loadMonoCard:', error);
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
      console.error('Error loadAbankCard:', error);
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
      console.error('Error loadAbankCash:', error);
    }
  });
}; loadAbankCash();


// ощадбанк !!!
loadOschadCard = function() {
  let exchengeCount = oschadCard
  document.querySelector('.oschadbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-oschad-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.oschadbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.oschadbank .card').classList.add("green")
    } else {
      document.querySelector('.oschadbank .card').classList.add("red")
    }
  }
}; loadOschadCard();
loadOschadCash = function() {
  let exchengeCount = oschadCash
  document.querySelector('.oschadbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-oschad-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.oschadbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.oschadbank .cash').classList.add("green")
    } else {
      document.querySelector('.oschadbank .cash').classList.add("red")
    }
  }
}; loadOschadCash();


// райфайзенбанк !!!
loadRaifCard = function() {
  let exchengeCount = raifCard
  document.querySelector('.raifbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-raif-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.raifbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.raifbank .card').classList.add("green")
    } else {
      document.querySelector('.raifbank .card').classList.add("red")
    }
  }
}; loadRaifCard();
loadRaifCash = function() {
  let exchengeCount = raifCash
  document.querySelector('.raifbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-raif-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.raifbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.raifbank .cash').classList.add("green")
    } else {
      document.querySelector('.raifbank .cash').classList.add("red")
    }
  }
}; loadRaifCash();


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
      console.error('Error loadOtpCard:', error);
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
      console.error('Error loadOtpCash:', error);
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
        const income = (document.querySelector('.CountUAH').value/exchengeCount-0.00758*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value-15;
        document.querySelector('.izibank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.izibank .card').classList.add("green")
        } else {
          document.querySelector('.izibank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadIziCard:', error);
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
      console.error('Error loadIziCash:', error);
    }
  });
}; loadIziCash();


// ПУМБанк !!!
loadPumbCard = function() {
  let exchengeCount = pumbCard
  document.querySelector('.pumbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-pumb-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value-100;
    document.querySelector('.pumbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.pumbank .card').classList.add("green")
    } else {
      document.querySelector('.pumbank .card').classList.add("red")
    }
  }
}; loadPumbCard();
loadPumbCash = function() {
  let exchengeCount = pumbCash
  document.querySelector('.pumbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-pumb-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.pumbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.pumbank .cash').classList.add("green")
    } else {
      document.querySelector('.pumbank .cash').classList.add("red")
    }
  }
}; loadPumbCash();


// ГлобусБанк !!!
loadGlobusCard = function() {
  let exchengeCount = globusCard
  document.querySelector('.globusbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-globus-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.globusbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.globusbank .card').classList.add("green")
    } else {
      document.querySelector('.globusbank .card').classList.add("red")
    }
  }
}; loadGlobusCard();
loadGlobusCash = function() {
  let exchengeCount = globusCash
  document.querySelector('.globusbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-globus-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.globusbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.globusbank .cash').classList.add("green")
    } else {
      document.querySelector('.globusbank .cash').classList.add("red")
    }
  }
}; loadGlobusCash();


// КомінБанк !!!
loadKominCard = function() {
  let exchengeCount = kominCard
  document.querySelector('.kominbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-komin-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kominbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kominbank .card').classList.add("green")
    } else {
      document.querySelector('.kominbank .card').classList.add("red")
    }
  }
}; loadKominCard();
loadKominCash = function() {
  let exchengeCount = kominCash
  document.querySelector('.kominbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-komin-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kominbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kominbank .cash').classList.add("green")
    } else {
      document.querySelector('.kominbank .cash').classList.add("red")
    }
  }
}; loadKominCash();


// УкргазБанк !!!
loadUkrgasCard = function() {
  let exchengeCount = ukrgasCard
  document.querySelector('.ukrgasbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-ukrgas-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ukrgasbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ukrgasbank .card').classList.add("green")
    } else {
      document.querySelector('.ukrgasbank .card').classList.add("red")
    }
  }
}; loadUkrgasCard();
loadUkrgasCash = function() {
  let exchengeCount = ukrgasCash
  document.querySelector('.ukrgasbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-ukrgas-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ukrgasbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ukrgasbank .cash').classList.add("green")
    } else {
      document.querySelector('.ukrgasbank .cash').classList.add("red")
    }
  }
}; loadUkrgasCash();


// ВостокБанк !!!
loadVostokCard = function() {
  let exchengeCount = vostokCard
  document.querySelector('.vostokbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-vostok-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.005*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.vostokbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.vostokbank .card').classList.add("green")
    } else {
      document.querySelector('.vostokbank .card').classList.add("red")
    }
  }
}; loadVostokCard();
loadVostokCash = function() {
  let exchengeCount = vostokCash
  document.querySelector('.vostokbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-vostok-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.vostokbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.vostokbank .cash').classList.add("green")
    } else {
      document.querySelector('.vostokbank .cash').classList.add("red")
    }
  }
}; loadVostokCash();


// ТаскомБанк !!!
loadTaskomCard = function() {
  let exchengeCount = vostokCard
  document.querySelector('.taskombank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-taskom-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.taskombank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.taskombank .card').classList.add("green")
    } else {
      document.querySelector('.taskombank .card').classList.add("red")
    }
  }
}; loadTaskomCard();
loadTaskomCash = function() {
  let exchengeCount = vostokCash
  document.querySelector('.taskombank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-taskom-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.taskombank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.taskombank .cash').classList.add("green")
    } else {
      document.querySelector('.taskombank .cash').classList.add("red")
    }
  }
}; loadTaskomCash();


// ПівденнийБанк
loadPivdenCard = function() {
  $.ajax({
    method: "GET",
    url: "https://bank.com.ua/api/uk/v1/rest-ui/find-mybank-course?date=1705269600",
    success: function(data) {
      let exchengeCount = data[0][3];
      document.querySelector('.pivdenbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-pivden-card').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.pivdenbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.pivdenbank .card').classList.add("green")
        } else {
          document.querySelector('.pivdenbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadPivdenCard:', error);
    }
  });
}; loadPivdenCard();
loadPivdenCash = function() {
  $.ajax({
    method: "GET",
    url: "https://bank.com.ua/api/uk/v1/rest-ui/find-branch-course?date=1705269600",
    success: function(data) {
      let exchengeCount = data[0][3];
      document.querySelector('.pivdenbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-pivden-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.pivdenbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.pivdenbank .cash').classList.add("green")
        } else {
          document.querySelector('.pivdenbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadPivdenCash:', error);
    }
  });
}; loadPivdenCash();


// ПравексБанк !!!
loadPraveksCard = function() {
  let exchengeCount = praveksCard
  document.querySelector('.praveksbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-praveks-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.006*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.praveksbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.praveksbank .card').classList.add("green")
    } else {
      document.querySelector('.praveksbank .card').classList.add("red")
    }
  }
}; loadPraveksCard();
loadPraveksCash = function() {
  let exchengeCount = praveksCash
  document.querySelector('.praveksbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-praveks-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.praveksbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.praveksbank .cash').classList.add("green")
    } else {
      document.querySelector('.praveksbank .cash').classList.add("red")
    }
  }
}; loadPraveksCash();


// ЮнексБанк !!!
loadUnexCard = function() {
  let exchengeCount = unexCard
  document.querySelector('.unexbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-unex-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.unexbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.unexbank .card').classList.add("green")
    } else {
      document.querySelector('.unexbank .card').classList.add("red")
    }
  }
}; loadUnexCard();
loadUnexCash = function() {
  let exchengeCount = unexCash
  document.querySelector('.unexbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-unex-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.unexbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.unexbank .cash').classList.add("green")
    } else {
      document.querySelector('.unexbank .cash').classList.add("red")
    }
  }
}; loadUnexCash();


// КредитДніпроБанк !!!
loadKreddinproCard = function() {
  let exchengeCount = kreditdinroCard
  document.querySelector('.kreditdinrobank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-kreditdinro-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.005*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kreditdinrobank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kreditdinrobank .card').classList.add("green")
    } else {
      document.querySelector('.kreditdinrobank .card').classList.add("red")
    }
  }
}; loadKreddinproCard();
loadKreditdinroCash = function() {
  let exchengeCount = kreditdinroCash
  document.querySelector('.kreditdinrobank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-kreditdinro-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kreditdinrobank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kreditdinrobank .cash').classList.add("green")
    } else {
      document.querySelector('.kreditdinrobank .cash').classList.add("red")
    }
  }
}; loadKreditdinroCash();


// ІдеяБанк !!!
loadIdeaCard = function() {
  let exchengeCount = ideaCard
  document.querySelector('.ideabank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-idea-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ideabank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ideabank .card').classList.add("green")
    } else {
      document.querySelector('.ideabank .card').classList.add("red")
    }
  }
}; loadIdeaCard();
loadIdeaCash = function() {
  let exchengeCount = ideaCash
  document.querySelector('.ideabank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-idea-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ideabank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ideabank .cash').classList.add("green")
    } else {
      document.querySelector('.ideabank .cash').classList.add("red")
    }
  }
}; loadIdeaCash();


// ЕксомБанк
loadEximCard = function() {
  $.ajax({
    method: "GET",
    url: "https://www.eximb.com/services/v1/rates/?day=15&month=1&year=2024&lang=uk",
    success: function(data) {
      let exchengeCount = parseFloat(data.rates.cards.data[0].sell.replace(',', '.'))
      document.querySelector('.eximbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-exim-card').onclick = function valueCard() {
        const income = (document.querySelector('.CountUAH').value/exchengeCount-(0.008*(document.querySelector('.CountUAH').value/exchengeCount)))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.eximbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.eximbank .card').classList.add("green")
        } else {
          document.querySelector('.eximbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadEximCard:', error);
    }
  });
}; loadEximCard();
loadEximCash = function() {
  $.ajax({
    method: "GET",
    url: "https://www.eximb.com/services/v1/rates/?day=15&month=1&year=2024&lang=uk",
    success: function(data) {
      let exchengeCount = parseFloat(data.rates.cash.data[0].sell.replace(',', '.'))
      document.querySelector('.eximbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-exim-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.eximbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.eximbank .cash').classList.add("green")
        } else {
          document.querySelector('.eximbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadEximCash:', error);
    }
  });
}; loadEximCash();


// АльтБанк !!!
loadAltCard = function() {
  let exchengeCount = altCard
  document.querySelector('.altbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-alt-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.altbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.altbank .card').classList.add("green")
    } else {
      document.querySelector('.altbank .card').classList.add("red")
    }
  }
}; loadAltCard();
loadAltCash = function() {
  let exchengeCount = altCash
  document.querySelector('.altbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-alt-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.altbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.altbank .cash').classList.add("green")
    } else {
      document.querySelector('.altbank .cash').classList.add("red")
    }
  }
}; loadAltCash();


// КредоБанк !!!
loadKredoCard = function() {
  let exchengeCount = kredoCard
  document.querySelector('.kredobank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-kredo-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kredobank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kredobank .card').classList.add("green")
    } else {
      document.querySelector('.kredobank .card').classList.add("red")
    }
  }
}; loadKredoCard();
loadKredoCash = function() {
  let exchengeCount = kredoCash
  document.querySelector('.kredobank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-kredo-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kredobank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kredobank .cash').classList.add("green")
    } else {
      document.querySelector('.kredobank .cash').classList.add("red")
    }
  }
}; loadKredoCash();


// МіжнарБанк
loadMignarinvestCard = function() {
  $.ajax({
    method: "GET",
    url: "https://ii-bank.ua/course/currency?n=2&Type.Value=Card&City=1",
    success: function(data) {
      let exchengeCount = data.data.list[0].rates[0].saleRate;
      document.querySelector('.mignarinvestbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-mignarinvest-card').onclick = function valueCard() {
        const income = (document.querySelector('.CountUAH').value/exchengeCount-(0.008*(document.querySelector('.CountUAH').value/exchengeCount)))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.mignarinvestbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.mignarinvestbank .card').classList.add("green")
        } else {
          document.querySelector('.mignarinvestbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadMignarinvestCard:', error);
    }
  });
}; loadMignarinvestCard();
loadMignarinvestCash = function() {
  $.ajax({
    method: "GET",
    url: "https://ii-bank.ua/course/currency?n=2&Type.Value=Valuta&City=1",
    success: function(data) {
      let exchengeCount = data.data.list[0].rates[0].saleRate;
      document.querySelector('.mignarinvestbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-mignarinvest-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.mignarinvestbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.mignarinvestbank .cash').classList.add("green")
        } else {
          document.querySelector('.mignarinvestbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadMignarinvestCash:', error);
    }
  });
}; loadMignarinvestCash();


// УкрсибБанк !!!
loadUkrsibCard = function() {
  let exchengeCount = ukrsibCard
  document.querySelector('.ukrsibbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-ukrsib-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.005*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ukrsibbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ukrsibbank .card').classList.add("green")
    } else {
      document.querySelector('.ukrsibbank .card').classList.add("red")
    }
  }
}; loadUkrsibCard();
loadUkrsibCash = function() {
  let exchengeCount = ukrsibCash
  document.querySelector('.ukrsibbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-ukrsib-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.ukrsibbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.ukrsibbank .cash').classList.add("green")
    } else {
      document.querySelector('.ukrsibbank .cash').classList.add("red")
    }
  }
}; loadUkrsibCash();


// КредитІнвестБанк !!!
loadInvestzaoschCard = function() {
  let exchengeCount = investzaoschCard
  document.querySelector('.investzaoschbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-investzaosch-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.investzaoschbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.investzaoschbank .card').classList.add("green")
    } else {
      document.querySelector('.investzaoschbank .card').classList.add("red")
    }
  }
}; loadInvestzaoschCard();
loadInvestzaoschCash = function() {
  let exchengeCount = investzaoschCash
  document.querySelector('.investzaoschbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-investzaosch-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.investzaoschbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.investzaoschbank .cash').classList.add("green")
    } else {
      document.querySelector('.investzaoschbank .cash').classList.add("red")
    }
  }
}; loadInvestzaoschCash();


// КредитВестБанк !!!
loadKreditvestCard = function() {
  let exchengeCount = kreditvestCard
  document.querySelector('.kreditvestbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-kreditvest-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kreditvestbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kreditvestbank .card').classList.add("green")
    } else {
      document.querySelector('.kreditvestbank .card').classList.add("red")
    }
  }
}; loadKreditvestCard();
loadKreditvestCash = function() {
  let exchengeCount = kreditvestCash
  document.querySelector('.kreditvestbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-kreditvest-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kreditvestbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kreditvestbank .cash').classList.add("green")
    } else {
      document.querySelector('.kreditvestbank .cash').classList.add("red")
    }
  }
}; loadKreditvestCash();


// ІнвестТаЗаощБанк !!!
loadInvestzaoschCard = function() {
  let exchengeCount = investzaoschCard
  document.querySelector('.investzaoschbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-investzaosch-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.investzaoschbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.investzaoschbank .card').classList.add("green")
    } else {
      document.querySelector('.investzaoschbank .card').classList.add("red")
    }
  }
}; loadInvestzaoschCard();
loadInvestzaoschCash = function() {
  let exchengeCount = investzaoschCash
  document.querySelector('.investzaoschbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-investzaosch-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.investzaoschbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.investzaoschbank .cash').classList.add("green")
    } else {
      document.querySelector('.investzaoschbank .cash').classList.add("red")
    }
  }
}; loadInvestzaoschCash();


// КомінвестБанк !!!
loadKominvestCard = function() {
  let exchengeCount = investzaoschCard
  document.querySelector('.kominvestbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-kominvest-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.0085*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value-15;
    document.querySelector('.kominvestbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kominvestbank .card').classList.add("green")
    } else {
      document.querySelector('.kominvestbank .card').classList.add("red")
    }
  }
}; loadKominvestCard();
loadKominvestCash = function() {
  let exchengeCount = kominvestCash
  document.querySelector('.kominvestbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-kominvest-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.kominvestbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.kominvestbank .cash').classList.add("green")
    } else {
      document.querySelector('.kominvestbank .cash').classList.add("red")
    }
  }
}; loadKominvestCash();


// ПіреусБанк
loadPiraeusCard = function() {
  $.ajax({
    method: "GET",
    url: "https://www.piraeusbank.ua/ua/get-exchange",
    success: function(data) {
      let exchengeCount = data.winbankRows[0].columns[2].title;
      document.querySelector('.piraeusbank .cardCount').textContent = exchengeCount;
      document.querySelector('.but-piraeus-card').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.piraeusbank .card').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.piraeusbank .card').classList.add("green")
        } else {
          document.querySelector('.piraeusbank .card').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadPiraeusCard:', error);
    }
  });
}; loadPiraeusCard();
loadPiraeusCash = function() {
  $.ajax({
    method: "GET",
    url: "https://www.piraeusbank.ua/ua/get-exchange",
    success: function(data) {
      let exchengeCount = data.rows[2].columns[1].title;
      document.querySelector('.piraeusbank .cashCount').textContent = exchengeCount;
      document.querySelector('.but-piraeus-cash').onclick = function valueCard() {
        const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
        document.querySelector('.piraeusbank .cash').textContent = income.toFixed(2);
        
        if (income > 0) {
          document.querySelector('.piraeusbank .cash').classList.add("green")
        } else {
          document.querySelector('.piraeusbank .cash').classList.add("red")
        }
      }
    },
    error: function(error) {
      console.error('Error loadPiraeusCash:', error);
    }
  });
}; loadPiraeusCash();


// SkyБанк !!!
loadSkyCard = function() {
  let exchengeCount = skyCard
  document.querySelector('.skybank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-sky-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.skybank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.skybank .card').classList.add("green")
    } else {
      document.querySelector('.skybank .card').classList.add("red")
    }
  }
}; loadSkyCard();
loadSkyCash = function() {
  let exchengeCount = skyCash
  document.querySelector('.skybank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-sky-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.skybank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.skybank .cash').classList.add("green")
    } else {
      document.querySelector('.skybank .cash').classList.add("red")
    }
  }
}; loadSkyCash();


// 3/4-Банк !!!
loadThreeforCard = function() {
  let exchengeCount = threeforCard
  document.querySelector('.threeforbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-threefor-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.threeforbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.threeforbank .card').classList.add("green")
    } else {
      document.querySelector('.threeforbank .card').classList.add("red")
    }
  }
}; loadThreeforCard();
loadThreeforCash = function() {
  let exchengeCount = threeforCash
  document.querySelector('.threeforbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-threefor-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.threeforbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.threeforbank .cash').classList.add("green")
    } else {
      document.querySelector('.threeforbank .cash').classList.add("red")
    }
  }
}; loadThreeforCash();


// КредіАгрікольБанк !!!
loadKrediagrikoleCard = function() {
  let exchengeCount = krediagrikoleCard
  document.querySelector('.krediagrikolebank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-krediagrikole-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.01*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.krediagrikolebank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.krediagrikolebank .card').classList.add("green")
    } else {
      document.querySelector('.krediagrikolebank .card').classList.add("red")
    }
  }
}; loadKrediagrikoleCard();
loadKrediagrikoleCash = function() {
  let exchengeCount = krediagrikoleCash
  document.querySelector('.krediagrikolebank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-krediagrikole-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.krediagrikolebank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.krediagrikolebank .cash').classList.add("green")
    } else {
      document.querySelector('.krediagrikolebank .cash').classList.add("red")
    }
  }
}; loadKrediagrikoleCash();


// SenseБанк !!!
loadSenseCard = function() {
  let exchengeCount = senseCard
  document.querySelector('.sensebank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-sense-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.sensebank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.sensebank .card').classList.add("green")
    } else {
      document.querySelector('.sensebank .card').classList.add("red")
    }
  }
}; loadSenseCard();
loadSenseCash = function() {
  let exchengeCount = senseCash
  document.querySelector('.sensebank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-sense-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.sensebank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.sensebank .cash').classList.add("green")
    } else {
      document.querySelector('.sensebank .cash').classList.add("red")
    }
  }
}; loadSenseCash();


// ПрокредитБанк !!!
loadProkreditCard = function() {
  let exchengeCount = prokreditCard
  document.querySelector('.prokreditbank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-prokredit-card').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.prokreditbank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.prokreditbank .card').classList.add("green")
    } else {
      document.querySelector('.prokreditbank .card').classList.add("red")
    }
  }
}; loadProkreditCard();
loadProkreditCash = function() {
  let exchengeCount = prokreditCash
  document.querySelector('.prokreditbank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-prokredit-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.prokreditbank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.prokreditbank .cash').classList.add("green")
    } else {
      document.querySelector('.prokreditbank .cash').classList.add("red")
    }
  }
}; loadProkreditCash();


// ПолтаваБанк !!!
loadPoltavaCard = function() {
  let exchengeCount = poltavaCard
  document.querySelector('.poltavabank .cardCount').textContent = exchengeCount;
  document.querySelector('.but-poltava-card').onclick = function valueCard() {
    const income = (document.querySelector('.CountUAH').value/exchengeCount-0.005*(document.querySelector('.CountUAH').value/exchengeCount))*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.poltavabank .card').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.poltavabank .card').classList.add("green")
    } else {
      document.querySelector('.poltavabank .card').classList.add("red")
    }
  }
}; loadPoltavaCard();
loadPoltavaCash = function() {
  let exchengeCount = poltavaCash
  document.querySelector('.poltavabank .cashCount').textContent = exchengeCount;
  document.querySelector('.but-poltava-cash').onclick = function valueCard() {
    const income = document.querySelector('.CountUAH').value/exchengeCount*document.querySelector('.exchengeCount').value-document.querySelector('.CountUAH').value;
    document.querySelector('.poltavabank .cash').textContent = income.toFixed(2);
    
    if (income > 0) {
      document.querySelector('.poltavabank .cash').classList.add("green")
    } else {
      document.querySelector('.poltavabank .cash').classList.add("red")
    }
  }
}; loadPoltavaCash();