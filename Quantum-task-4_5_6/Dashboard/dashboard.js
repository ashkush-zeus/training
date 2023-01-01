
const card_data = [
    {
        "title": "Acceleration",
        "image": "../images/imageMask.png",
        "subject": "Physics | Grade 7 ",
        "addition_grade": 2,
        "units": 4,
        "lessons": 18,
        "topics": 24,
        "classes": "Mr.Frank's Class B",
        "record": "50 students | 21-Jan-2022 - 21-Aug-2022",
        "expired": false,
        "manage_course": false,
        "grade_submissions": false

    },
    {
        "title": "Displacement, Velocity and Speed",
        "image": "../images/imageMask-1.png",
        "subject": "Physics 2 | Grade 6 ",
        "addition_grade": 3,
        "units": 2,
        "lessons": 15,
        "topics": 20,
        "classes": "No Classes",
        "record": "",
        "expired": false,
        "manage_course": true,
        "grade_submissions": true
    },
    {
        "title": "Introduction to Biology: Micro orgnisms and how they affect the other Life Systems in En...",
        "image": "../images/imageMask-3.png",
        "subject": "Biology | Grade 4 ",
        "addition_grade": 1,
        "units": 5,
        "lessons": 16,
        "topics": 22,
        "classes": "All Classes",
        "record": "300 students",
        "expired": false,
        "manage_course": true,
        "grade_submissions": true
    },
    {
        "title": "Introduction to Hight School Mathematics",
        "image": "../images/imageMask-2.png",
        "subject": "Mathematics | Grade 8 ",
        "addition_grade": 4,
        "units": "",
        "lessons": "",
        "topics": "",
        "classes": "Mr. Frank's Class A",
        "record": "300 students",
        "expired": true,
        "manage_course": false,
        "grade_submissions": false
    }
]

const content = document.querySelector(".content")

card_data.map((data) => {
    const card = document.createElement("div")
    card.setAttribute("class", "card")
    card.innerHTML = `
                    ${ data.expired ? `<span class="Expired">EXPIRED</span>` : "" }
                    <div class="card_content">
                        <img class="card_img" src=${data.image} alt="item photo">
                        <div class="card_details">
                            <h1>${data.title}</h1>
                            <img class="fav" src="../images/favourite.svg" alt="favourite icon">
                            <p>${data.subject}<span> +${data.addition_grade}</span></p>
                            <p>${data.units ? `<strong>${data.units}</strong> Units ` : ""} ${data.lessons ? `<strong>${data.lessons}</strong> Lessons ` : ""} ${data.topics ? `<strong>${data.topics}</strong> Topics ` : ""}</p>
                            <select>
                                <option>${data.classes}</option>
                            </select>
                            <p>${data.record}</p>
                        </div>
                    </div>
                    <div class="icons">
                        <img src="../images/preview.svg" alt="preview icon">
                        <img ${data.manage_course ? `class="disabled"` : ""} src="../images/manage-course.svg" alt="manage course icon">
                        <img ${data.grade_submissions ? `class="disabled"` : ""} src="../images/grade-submissions.svg" alt="grade icon">
                        <img src="../images/reports.svg" alt="reports icon">
                    </div>
                    
                `
    content.appendChild(card)
})