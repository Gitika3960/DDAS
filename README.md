# DDAS
# 📁 Data Duplicate Alert System

A full-stack web application designed to improve file management by preventing duplicate downloads and maintaining data integrity. Inspired by a Smart India Hackathon 2024 problem statement, this system supports secure role-based access, upload/download features, and real-time duplicate file detection.

## 🚀 Project Overview

The system is built for organizations handling large file repositories, ensuring users don’t unintentionally download the same file multiple times. Admins can upload files, while users can download and get notified if they've accessed a file before.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript Templates)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Session-based (role-based access: Admin/User)

## 🎯 Features

- ✅ Role-based login system (Admin/User)
- 📁 File upload (admin-only) and download (user)
- 🔁 Duplicate-download alert system (tracks user history)
- 📄 File metadata tracking (name, upload date, access count)
- 🔒 Session management using Express sessions
- 📊 Dashboard for user activity overview
- ⚙️ Clean UI using EJS templating
