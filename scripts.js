var input_long_number = document.querySelector('[name="long_number"]');
input_long_number.addEventListener('keydown', function (e) {
    let value = this.value.replace(/\s+/g, '');
    let isBackspace = e.key === 'Backspace'; 
  
    if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16)) {
        e.preventDefault();
        return false;
    }
    
    this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
  });

var input_date_number = document.querySelector('[name="date_number"]');
input_date_number.addEventListener('keydown', function (e) {
    
})