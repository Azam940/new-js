        function checkName() {
            const nameInput = document.getElementById('nameInput');

            try {
                const name = nameInput.value.trim();

                if (!name) {
                    throw new Error("Ismni kiriting!");
                }

                if (name.length < 3) {
                    throw new Error("Foydalanuvchi 3 harfdan ko'proq ism kiritishi kerak!");
                }

                alert("Email kiriting");

            } catch (err) {
                alert("Xatolik: " + err.message);
            }
        }

        function checkEmail() {
            const emailInput = document.getElementById('emailInput');
            const email = emailInput.value.trim();
            console.log(emailInput.value);


            try {

                if (!email) {
                    throw new Error("Email manzilini kiriting!");
                }

                if (!email.includes("@") || !email.includes(".")) {
                    throw new Error("Email manzilida '@' va '.' belgisi bo'lishi shart!");
                }

                alert("Yoshingizni kiriting!");

            } catch (err) {
                alert("Xatolik: " + err.message);
            }
        }

        function checkAge() {
            const age = document.getElementById('ageInput').value;

            try {
                const ageNumber = parseInt(age);

                if (isNaN(ageNumber)) {
                    throw new Error("Iltimos, yoshni to'g'ri raqam sifatida kiriting.");
                }

                if (ageNumber < 7) {
                    throw new Error("Kechirasiz, siz 13 yoshdan kichik ekansiz.");
                }

                alert("Xush kelibsiz!");
            } catch (err) {
                alert("Xatolik: " + err.message);
            }
        }
        //Royhatdan otish formasi\

            function calculate() {
      const num1 = document.getElementById("number1").value.trim();
      const operator = document.getElementById("operator").value.trim();
      const num2 = document.getElementById("number2").value.trim();

      try {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
          throw new Error("Iltimos, faqat son kiriting!");
        }

        if (!['+', '-', '*', '/'].includes(operator)) {
          throw new Error("Faqat '+', '-', '*', yoki '/' amallarini kiriting!");
        }

        if (operator === '/' && b === 0) {
          throw new Error("0 ga bo'lish mumkin emas!");
        }

        let result;
        switch (operator) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            result = a / b;
            break;
        }

        alert("Natija: " + result);

      } catch (err) {
        alert("Xatolik: " + err.message);
      }
    }
    // konkulyator