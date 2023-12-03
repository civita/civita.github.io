---
layout: page
title: Indoor Rapid Wireless Attendance System
description:  An efficient and swift solution for seamlessly managing and recording attendance in indoor settings through wireless technology
importance: 3
category: school
img: assets/img/project_mapforphotographers-preview.gif
---

## Motivation and Problem Definition

### Motivation

In large classrooms with hundreds of students, the process of taking attendance manually can be time-consuming, taking up valuable class time. Moreover, traditional methods, such as passing around a attendance sheet, are prone to issues like unauthorized sign-ins. To address these challenges, our final project aims to develop an indoor, rapid wireless attendance system using facial recognition.

### Scenario of Use

#### Sign-in

Students enter the classroom before the class starts, passing through the camera at the entrance, completing the sign-in process. After signing in, students can check the success of their attendance on the course webpage.

#### Sign-out

At the end of the class, students leave the classroom, passing through the entrance camera again, completing the sign-out process. After signing out, students can check the success of their sign-out on the course webpage.

#### Manual Modification of Attendance Sheet

To handle unexpected situations, such as a malfunctioning camera or someone using another person's photo to deceive the system, teachers have the ability to manually modify the attendance sheet.

#### Downloading Attendance Sheet at the End of the Semester

Teachers may want to download the entire attendance sheet at the end of the semester for grading purposes. Therefore, we provide a link for teachers to download the attendance sheet in CSV format.

## System Architecture

### Network Architecture

![Network Architecture](images/network.png)

- **Camera and Server:** The camera communicates with the server through an API after successfully recognizing faces.
- **User and Server:** Users access the web page using the HTTPS protocol.

### Program Architecture

#### Frontend

- **index.html:** Course list. Students can click on the course name to access the attendance sheet for that course.
- **attendance.html#class:** Attendance sheet for a specific course. Students can see their sign-in and sign-out status on this page.
- **teacher/login.html:** Teacher's login interface.
- **teacher/index.html:** Course list for teachers. Teachers can click on the course name to access the management interface for that course.
- **teacher/management.html#class:** Management interface for a specific course. Teachers can upload student photos, set sign-in and sign-out times, manually modify the attendance sheet, and download the attendance sheet in CSV format.

#### Backend

- **POST /api-1.0/photos.php:**
  - **Function:** Submit student photos in FILE format (supports png, jpg, jpeg, and zip files). The filenames correspond to student IDs (sids). After confirming the format, update facial recognition and the SQL database.
  - **Parameters:**
    - class: String, the name of the course to update.
    - filename: Array, the photos to register.
  - **Response:** 200 OK

- **PUT /api-1.0/class.php:**
  - **Function:** Update course information, including the start date and weekly class times. This information is used to determine if facial recognition should occur during class hours.
  - **Parameters:**
    - class: String, the name of the course to update.
    - start_date (MM/DD/YYYY): String, the start date of the course.
    - start_time (HH:MM): String, class start time.
    - end_time (HH:MM): String, class end time.
  - **Response:** 200 OK

- **POST /api-1.0/signup.php:**
  - **Function:** Sign-in. Compare the system time and class time, update the SQL fields for the given student ID.
  - **Parameters:**
    - sid: String, student ID to sign in.
    - secret: String, to ensure only legitimate cameras can use this API.
  - **Response:** 200 OK

- **GET /api-1.0/attendance-csv.php:**
  - **Function:** Generate a CSV file based on the current SQL data for teachers to download and review offline.
  - **Query:**
    - class: String, the name of the course to inquire about.
  - **Response:** 200 OK, CSV

- **GET /api-1.0/attendance.php:**
  - **Function:** Return the attendance sheet for a course.
  - **Query:**
    - class: String, the name of the course to inquire about.
  - **Response:** 200 OK, JSON
    ```json
    [{"sid": "student id",
      "attendance": [0, 0, ..., 1]
     },
     ...
    ]
    ```

- **POST /api-1.0/login.php:**
  - **Function:** Allow users (teachers) to log in and record the session on the server.
  - **Query:**
    - user: String, teacher's username.
    - pass: String, teacher's password.
  - **Response:** 200 OK, JSON
    ```json
    {"message": "success",
     "key": "random key string"
    }
    ```
  
#### Database

- **Table: student_data**
  - Columns: sid (student ID), face (face data for recognition), photo (photo URL).

- **Table: class_data**
  - Columns: class (course name), start_date (MM/DD/YYYY), start_time (HH:MM), end_time (HH:MM).

- **Table: class_time**
  - Columns: sid (student ID), class (course name), time (class time), sign_in (sign-in status), sign_out (sign-out status).

## User Manual

1. **Student**
   - Sign in and out by passing through the camera at the entrance.
   - View attendance status on the course webpage.

2. **Teacher**
   - Log in to the system.
   - Manage courses, including updating course information and uploading student photos.
   - View and download attendance sheets.

## Conclusion

The developed indoor, rapid wireless attendance system aims to provide an efficient and secure method for handling attendance in large classrooms. By utilizing facial recognition technology, we aim to streamline the process while minimizing manual efforts. The system offers both automatic sign-in and sign-out processes, as well as a user-friendly management interface for teachers. Additionally, teachers have the flexibility to manually modify attendance sheets and download them in CSV format for offline review.

## Future Work

- Implement additional security measures to prevent photo-based spoofing.
- Explore the integration of the system with university databases for automatic student information updates.
- Conduct further testing and optimization to enhance the accuracy and speed of facial recognition.
- Develop a mobile application for convenient student and teacher interactions with the system.

---

*This project report was prepared by [Your Name] and [Co-author's Name], Computer Network Lab, [Your University], [Date].*
