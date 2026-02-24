document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("bookingForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const booking = { name, phone, service, date, time };
        localStorage.setItem("lastBooking", JSON.stringify(booking));

        const whatsappNumber = "966558625557";

        const message =
            `طلب حجز جديد:%0A` +
            `الاسم: ${name}%0A` +
            `الجوال: ${phone}%0A` +
            `نوع الجلسة: ${service}%0A` +
            `التاريخ: ${date}%0A` +
            `الوقت: ${time}`;

        const url = `https://wa.me/${whatsappNumber}?text=${message}`;

        successMessage.classList.remove("d-none");

        setTimeout(() => {
            window.open(url, "_blank");
            form.reset();
        }, 1500);
    });

});
