document.querySelectorAll('.question').forEach(question => {
  const checkboxes = question.querySelectorAll('input[type="checkbox"]');
  const select = question.querySelector('select');
  const confirmButton = question.querySelector('.next-button'); //Modifica l'ID in una classe univoca

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });

      const anyCheckboxChecked = Array.from(checkboxes).some((cb) => cb.checked);
      const isSelectValid = select && select.value !== '' && select.value !== 'd2o1';

      confirmButton.disabled = !(anyCheckboxChecked || isSelectValid);
    });
  });

  const anyCheckboxChecked = Array.from(checkboxes).some((cb) => cb.checked);
  const isSelectValid = select && select.value !== '' && select.value !== 'd2o1';

  if ((anyCheckboxChecked || isSelectValid) && confirmButton.disabled) {
    confirmButton.disabled = false;
  }
});

  