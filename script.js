const form = document.getElementById('ageCalculatorForm');
  const dayValidationError = document.getElementById('dayValidationError');
  const monthValidationError = document.getElementById('monthValidationError');
  const yearValidationError = document.getElementById('yearValidationError');
  const dayResult = document.getElementById('dayResult');
  const monthResult = document.getElementById('monthResult');
  const yearResult = document.getElementById('yearResult');

  form.addEventListener('submit',
  function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    //Clear previous validation errors and result
    dayValidationError.innerHTML = '';
    monthValidationError.innerHTML = '';
    yearValidationError.innerHTML = '';
    dayResult.innerHTML = '--';
    monthResult.innerHTML = '--';
    yearResult.innerHTML = '--';
    document.getElementById('label-day').style.color = "hsl(0, 1%, 44%)";
    document.getElementById('day').style.border = "1px solid hsl(0, 0%, 86%)";
    document.getElementById('label-month').style.color = "hsl(0, 1%, 44%)";
    document.getElementById('month').style.border = "1px solid hsl(0, 0%, 86%)";
    document.getElementById('label-year').style.color = "hsl(0, 1%, 44%)";
    document.getElementById('year').style.border = "1px solid hsl(0, 0%, 86%)";

    //Perform validation
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let isValid = true;
    //let errorMessage = '';

    if(!day || !month || !year) {
      dayValidationError.innerHTML = 'This field is required';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      monthValidationError.innerHTML = 'This field is required';
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      yearValidationError.innerHTML = 'This field is required';
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if (day < 1 || day > 31) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if (month < 1 || month > 12) {
      monthValidationError.innerHTML = 'Must be a valid month';
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if (year > currentYear) {
      yearValidationError.innerHTML = 'Must be in the past';
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if ((month === 2 || month === 02) && day > 29) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if ((month === 4 || month === 04) && day > 30) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if ((month === 6 || month === 06) && day > 30) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if ((month === 9 || month === 09) && day > 30) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }
    else if (month === 11 && day > 30) {
      dayValidationError.innerHTML = 'Must be a valid date';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }

    //if all are invalid
    if ((day < 1 || day > 31) && (month < 1 || month > 12) && (year > currentYear)) {
      dayValidationError.innerHTML = 'Must be a valid day';
      document.getElementById('label-day').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;

      monthValidationError.innerHTML = 'Must be a valid month';
      document.getElementById('label-month').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;

      yearValidationError.innerHTML = 'Must be in the past';
      document.getElementById('label-year').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
      isValid = false;
    }

    //Display validation errors or calculate age
    if (!isValid) {
      validationErrors.innerHTML = errorMessage;
    }
    else {
      const age = calculateAge(day, month, year, currentDay, currentMonth, currentYear);
      yearResult.innerHTML = `${age.years}`;
      monthResult.innerHTML = `${age.months}`;
      dayResult.innerHTML = `${age.days}`;
      //result.innerHTML = `Your age is: ${age.years} years, ${age.months} months, and ${age.days} days.`;
    }
  });

  function isValidDate(day, month, year) {
    const date = new Date (year, month-1, day);
    return date.getDate() === day && date.getMonth() === (month-1) && date.getFullYear() === year;
  }

  function calculateAge(day, month, year, currentDay, currentMonth, currentYear) {
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if(ageDays < 0) {
      const lastMonthDate = new Date (currentYear, currentMonth - 1, 0).getDate();
      ageDays += lastMonthDate;
      ageMonths--;
    }
    return{
      years: ageYears,
      months: ageMonths,
      days: ageDays
    };
  }

  // Animation for result
  function calculateAge2() {
    // Your age calculation logic here

    // Get the result element
    const resultElement1 = document.getElementById('yearResult');
    const resultElement2 = document.getElementById('monthResult');
    const resultElement3 = document.getElementById('dayResult');

    // Add the animate class to trigger the animation
    resultElement1.classList.add('animate');
    resultElement2.classList.add('animate');
    resultElement3.classList.add('animate');

    // Remove the animate class after the animation completes
    resultElement1.addEventListener('animationend', removeAnimateClass);
    resultElement2.addEventListener('animationend', removeAnimateClass);
    resultElement3.addEventListener('animationend', removeAnimateClass);
  }

  // Function to remove the animate class
  function removeAnimateClass(event) {
    event.target.classList.remove('animate');
  }

  // Add event listener to the calculate button
  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', calculateAge2);