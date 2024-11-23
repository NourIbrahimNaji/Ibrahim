function calculatePercentage() {
    // الحصول على القيم المدخلة
    const attendees = parseFloat(document.getElementById("attendees").value);
    const aValue = parseFloat(document.getElementById("aValue").value);
    const total = parseFloat(document.getElementById("total").value);

    // التحقق من صحة المدخلات
    if (isNaN(attendees) || isNaN(aValue) || isNaN(total) || total === 0) {
        document.getElementById("result").textContent = "يرجى إدخال قيم صحيحة.";
        return;
    }

    // إجراء العمليات الحسابية
    const result1 = attendees + aValue;
    const result2 = result1 / 7;
    const percentage = (result2 / total)*100 ;

    // عرض النتيجة
    document.getElementById("result").textContent = `النسبة المئوية: ${percentage.toFixed(2)}%`;
}
