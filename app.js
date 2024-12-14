let count = 0; // เอาไว้นับคะแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    const question2Div = document.getElementsByTagName('div')[1];
    const scorep = document.getElementsByTagName('p')[4]
    if (answer === 'c') {
        result.textContent = "ถูกต้อง นี้ปี 2024 คุนเก่งมาก.";
        result.style.color = 'green';
        question2Div.classList.remove("hide"); // แสดงคำถามที่สอง
        scorep.classList.remove("hide"); // ซ่อนคะแนน
        count = 1;
    } else {
        result.textContent = "คุนหลงปีแล้วละ.";
        result.style.color = 'red';
        question2Div.classList.add("hide"); // ซ่อนคำถามที่สอง
        scorep.classList.add("hide"); // ซ่อนคะแนน
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'b') {
        result.textContent = "ถูกต้องนี้คือ เดือนธันวาคม เพราะฉันทำมันเดือนนี้";
        result.style.color = 'green';
        count++; // บวกคะแนนเพิ่ม 1 คะแนน ถ้ากดถูก
    } else {
        result.textContent = "เลือกใหม่อีกรอบละกันนะ.";
        result.style.color = 'red';
        count-count;
    }

    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"
    count = 1;
}
