---
layout: page
title: Indoor Rapid Wireless Attendance System
description:  An efficient and swift solution for seamlessly managing and recording attendance in indoor settings through wireless technology
importance: 3
category: school
img: assets/img/project_irwas-recognition.png
---

## Motivation and Problem Definition

### Motivation

In large classrooms with hundreds of students, the process of taking attendance manually can be time-consuming, taking up valuable class time. Moreover, traditional methods, such as passing around a attendance sheet, are prone to issues like unauthorized sign-ins. To address these challenges, our project aims to develop an indoor, rapid wireless attendance system using facial recognition.

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

{% include figure.html path="assets/img/project_irwas-network.png" width="700" class="img-fluid rounded z-depth-1" %}

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

### Camera Side

- **Image Capture:**
  - We use the universal interface `cv2.VideoCapture` from OpenCV to interface with the computer's webcam. Upon generating `WebcamVideoStream`, a `RingBuffer` object is allocated as the backend using Python's `collections.deque`. A new thread is also created to push newly captured frames into the circular buffer. This addresses potential frame rate loss issues due to system busyness when polling for frames. The circular buffer is currently set with a capacity of 16 frames, allowing approximately 300ms of buffering time at a capture rate of 30FPS.
  
- **Face Detection:**
  - The main thread, after obtaining frames through `WebcamVideoStream`, utilizes `FaceIdentifier` from `identifier.py` to identify potential faces in the frames. The localized face region is cropped and sent to the server. This approach is chosen to avoid excessive bandwidth consumption when sending full images for facial recognition. The `FaceIdentifier` converts the input image to a 16-bit grayscale image and utilizes the Haar cascade classifier from `cv2.CascadeClassifier` to identify potential face regions.

- **Filtering Duplicate Detections:**
  - Due to the continuous nature of the main thread's frame detection, there is a high likelihood of detecting faces repeatedly. To avoid unnecessary queries to the facial recognition API, we pre-filter the frames using cross-correlation scores based on the color histogram. The reference is the existing objects in the second circular buffer. If the buffer is empty, the frame is directly added to the buffer. If not, all objects are extracted, and a linear comparison is performed to eliminate duplicates.

- **Face Recognition and Student ID Extraction:**
  - As the Kairos API introduces approximately 100ms of latency, the main thread generates a `NameIdentifier` object. It automatically creates a second circular buffer and continually pops new objects from it to query Kairos. The buffer accepts up to 32 potential faces, maintaining a maximum of 5 faces per frame. The JSON decision results from Kairos are parsed in the third thread generated by `NameIdentifier`. If a `subject_id` (corresponding to a student ID) is identified, the content is extracted and POSTed to the backend (`http://cnlab.csie.org/signup.php`).

### Server Environment

- **LEMP Stack:**
  - **L: CentOS**
    - Set up firewalld to allow only SSH, HTTP, and HTTPS connections, enhancing system security.
  - **E: Nginx**
    - Redirects all non-existent (404) URL paths to `index.html` to prevent users from seeing error pages in case of mistyped URLs.
    - Utilizes HTTPS connections with a certificate issued by LetsEncrypt, ensuring data security and user privacy.
  - **M: MariaDB**
    - Restricts local user connections and enforces account/password login requirements to protect user data.
  - **P: PHP 5.4.16**

### Challenges Encountered and Solutions

#### Frontend

- **Dynamic Update of Attendance Sheet:**
  - Initially, we aimed for automatic updates of the attendance sheet using AJAX technology. However, frequent updates caused subtle flickering in the table. The solution was to update the table only when there were content changes to minimize user perception of flickering.

- **Wide Attendance Sheet on Mobile Browsers:**
  - To prevent the attendance sheet from overflowing the screen when viewed on mobile browsers, we initially attempted to solve the issue using pure CSS. After unsuccessful attempts, we discovered that Bootstrap's CSS provided a solution. The final approach involved referencing Bootstrap's solution and adapting it to our webpage.

- **Single Static Webpage for Multiple Courses:**
  - To support each course having its own attendance sheet display, we used hash tags in the URL. JavaScript reads the hash tag to determine which course's data to query using the API.

#### Backend

- **Creating Corresponding APIs Based on Frontend Requirements:**
  - Ensured smooth integration between frontend and backend by creating APIs that fulfill frontend needs, such as querying SQL data for rendering or allowing teachers to register/cancel attendance records for students.

- **Decompression and Upload of Photos:**
  - Initially faced issues with the backend unable to handle photos sent from the frontend. Discovered that there were permission issues with the temporary storage space. Implemented size restrictions for uploaded compressed files to avoid overuse of server disk space.

- **Matching System Time with Database to Identify Current Course:**
  - Separated the responsibilities of the camera and backend. The camera sends student data (SID) to the backend, which determines the current course based on SQL data and records attendance. This approach ensures that the camera only captures faces, and the backend handles the attendance process.

#### Camera Side

- **Buffer Size:**
  - Due to the significant latency of Kairos API, a circular buffer is introduced to assist in processing. This mitigates the impact of API latency, allowing for real-time processing.

- **Excluding Repeatedly Detected Objects:**
  - Initially, there was no consideration for excluding duplicate detections. However, continuous requests led to the majority of objects being duplicates, significantly reducing the number of faces (student IDs) recognized per unit time. Implemented histogram matching for filtering, opting for a simpler solution compared to feature point recognition methods like HOG, considering the real-time recognition nature.

- **API Requires Base64-Encoded Files:**
  - Originally, we continuously created and deleted files in the system's temporary area before encoding and sending them as base64. Recognizing the I/O overhead, we opted to use `cStringIO` to treat memory regions as file objects, significantly improving processing speed from 2FPS to over 20FPS.

### Server

- **firewalld Configuration Allowing HTTP but Still No Connection:**
  - After using `sudo firewall-cmd --add-service=https --permanent`, there was still no connection. Discovered that the `permanent` parameter for permanent allowance doesn't update the current settings simultaneously, requiring a reload.

- **PHP Session Not Working with Default Installation:**
  - Initially, PHP sessions didn't respond even when calling `session()`. Discovered that the session files were stored in a folder with incorrect ownership for the `php-fpm` user. Adjusted permissions to allow proper writing, resolving the session issue.


## User Manual

1. **Student**
   - Sign in and out by passing through the camera at the entrance.
   - View attendance status on the course webpage.

{% include figure.html path="assets/img/project_irwas-recognition.png" width="700" class="img-fluid rounded z-depth-1" %}


2. **Teacher**
   - Log in to the system.
   - Manage courses, including updating course information and uploading student photos.
   - View and download attendance sheets.

{% include figure.html path="assets/img/project_irwas-manage.png" width="700" class="img-fluid rounded z-depth-1" %}

{% include figure.html path="assets/img/project_irwas-attendence.png" width="700" class="img-fluid rounded z-depth-1" %}


## Conclusion

The developed indoor, rapid wireless attendance system aims to provide an efficient and secure method for handling attendance in large classrooms. By utilizing facial recognition technology, we aim to streamline the process while minimizing manual efforts. The system offers both automatic sign-in and sign-out processes, as well as a user-friendly management interface for teachers. Additionally, teachers have the flexibility to manually modify attendance sheets and download them in CSV format for offline review.

## Future Work

- Implement additional security measures to prevent photo-based spoofing.
- Explore the integration of the system with university databases for automatic student information updates.
- Conduct further testing and optimization to enhance the accuracy and speed of facial recognition.
- Develop a mobile application for convenient student and teacher interactions with the system.
